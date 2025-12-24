import { NextResponse } from "next/server";
import crypto from "crypto";

const GROUP_CODE = "eScIVDG1u2";

function sign(method, params, API_KEY, API_SECRET_KEY){
    const time = Math.floor(Date.now() / 1000);
    const rand = Math.floor(100000 + Math.random() * 900000).toString();
    
    const fullParams = {
        ...params,
        apiKey: API_KEY,
        time,
    };
    
    const paramStr = Object.keys(fullParams)
        .sort()
        .map(k => `${k}=${fullParams[k]}`)
        .join("&");

    const sigBase = `${rand}/${method}?${paramStr}#${API_SECRET_KEY}`;
    const hash = crypto.createHash("sha512").update(sigBase).digest("hex");

    return {
        ...fullParams,
        apiSig: rand+hash,
    }
}

async function callCF(method, params, API_KEY, API_SECRET_KEY) {
    const signedParams = sign(method, params, API_KEY, API_SECRET_KEY);

    const url = new URL(`https://codeforces.com/api/${method}`);
    url.search = new URLSearchParams(signedParams).toString();

    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();

    return data.result;
}

export async function GET(){
    const API_KEY = process.env.API_KEY;
    const API_SECRET_KEY = process.env.API_SECRET_KEY;
    
    if(!API_KEY || !API_SECRET_KEY){
        return NextResponse.json(
            {error: "Missing API_KEY or API_SECRET_KEY"},
            {status: 500},
        );
    }

    try{
        const contests = await callCF("contest.list",{groupCode: GROUP_CODE}, API_KEY, API_SECRET_KEY);

        const problems = [];

        for(const contest of contests){
            const standings = await callCF(
                "contest.standings",
                {
                    contestId: contest.id,
                    groupCode: GROUP_CODE,
                    from: 1,
                    count: 1,
                },
                API_KEY,
                API_SECRET_KEY
            );

            if (!standings?.problems) continue;

            for (const p of standings.problems) {
                problems.push({
                    id: `${contest.id}${p.index}`,
                    // contestId: contest.id,
                    contest: contest.name,
                    // problemIndex: p.index,
                    // problemId: `${contest.id}${p.index}`,
                    name: p.name,
                    // rating: p.rating ?? null,
                    // tags: p.tags,
                    linkTo: `https://codeforces.com/group/${GROUP_CODE}/contest/${contest.id}/problem/${p.index}`,
                });
            }
        }

        return NextResponse.json(problems);
    }catch(err){
        return NextResponse.json(
            {error: err.message},
            {status: 500},
        );
    }
}