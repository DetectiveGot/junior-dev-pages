import Header from "@/src/components/header";
import { Contest } from "../../types/types";
import ContestClient from "./ContestsClient";

async function getContests(): Promise<Contest[]>{
    const res = await fetch(`${process.env.SITE_URL}/api/contests`, {
        cache: "no-store",
    });
    if(!res.ok) throw new Error("Fail to fetch contest datas");
    return res.json();
}
  
export default async function Contests() {
    const contestList = await getContests();
    return (
        <div>
            <Header curPage={"contests"}/>
            <ContestClient contestList={contestList}/>
        </div>
    );
}
