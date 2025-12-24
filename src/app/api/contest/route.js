import { NextResponse } from "next/server";
import crypto from "crypto";

export async function GET(){
    const API_KEY = process.env.API_KEY;
    const API_SECRET = process.env.API_SECRET_KEY;
    const GROUP_CODE = "eScIVDG1u2";
    
    if(!API_KEY || !API_SECRET){
        return NextResponse.json(
            {error: "Missing API_KEY or API_SECRET_KEY"},
            {status: 500},
        );
    }

    const method = "contest.list";

    const params = {
        groupCode: GROUP_CODE,
        apiKey: API_KEY,
        time: Math.floor(Date.now() / 1000),
    };

    // Step 1: create parameter string (sorted)
    const paramStr = Object.keys(params)
        .sort()
        .map(k => `${k}=${params[k]}`)
        .join("&");
        
        
    // Step 2: create signature
    const rand = Math.floor(100000 + Math.random() * 900000).toString();
    const sigBase = `${rand}/${method}?${paramStr}#${API_SECRET}`;
    
    const hash = crypto
    .createHash("sha512")
    .update(sigBase)
    .digest("hex");
    
    const apiSig = rand + hash;
    
    // Step 3: send request
    const url = new URL(`https://codeforces.com/api/${method}`);
    url.search = new URLSearchParams({
        ...params,
        apiSig,
    }).toString();
    
    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();
    
    return NextResponse.json(data);
}
        
        
        
        
        
        