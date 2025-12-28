import { Container } from "@/src/ui/Container";
import Header from "@/src/components/header";
import { Problem } from "@/src/types/types";
import ProblemsPage from "./ProblemsClient";
// import { Loading } from "@/src/components/loading";

// const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function getProblems(): Promise<Problem[]> {
    const res = await fetch(`${process.env.SITE_URL}/api/problems`, {
        cache: "no-store",
    });
    // await sleep(50000);
    if(!res.ok) throw new Error("Fail to fetch problems");
    return res.json();
}

export default async function Problems() {
    const problemList = await getProblems();
    return (
        <div>
            <Header curPage={"problems"}/>
            <Container className="space-y-4">
                <h1 className="font-bold text-xl sm:text-3xl">Problems</h1>
                <ProblemsPage problemList={problemList}/>
            </Container>
        </div>
    );
}
