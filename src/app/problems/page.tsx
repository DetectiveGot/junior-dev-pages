"use client";

import { Container } from "@/src/ui/Container";
import Header from "@/src/components/header";
import { useEffect, useState } from "react";
import { Problem } from "@/src/types/types";
// import { problems } from "@/src/data/problems";

export default function Problems() {
    const [problemList, setProblemList] = useState<Problem[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchProb, setSearchProb] = useState<string>("");
    const showProblem = searchProb.trim().length===0?problemList:problemList.filter((problem) => {
        const search = searchProb.trim().toLocaleLowerCase();
        return search===problem.name.trim().toLowerCase().slice(0, search.length);
    });

    useEffect(() => {
        const fetchProblems = async () => {
            setLoading(true);
            try{
                console.log("Start Fetching");
                const res = await fetch("/api/problems");
                console.log("Done Fetching");
                if(!res.ok){
                    return;
                }
                const problems = await res.json();
                setProblemList(problems);
            }catch(err){
                console.error(`Error : ${err}`);
            }finally{
                setLoading(false);
            }
        }

        fetchProblems();
    }, []);

    return (
        <div>
            <Header curPage={"problems"}/>
            <Container className="space-y-4">
                <h1 className="font-bold text-xl sm:text-3xl">Problems</h1>
                <input type="text" className="bg-white rounded-md text-stone-600 px-4 py-1 h-8 text-sm" placeholder="Search Problems" value={searchProb}
                    onChange={(e) => {
                        setSearchProb(e.target.value);
                    }}
                />
                {loading && (
                    <div className="py-4 text-center text-stone-500">
                        Loading...
                    </div>
                )}

                {!loading && (
                    <main className="border border-stone-300 rounded-md">
                        <table className="w-full border-collapse table-fixed [&_th]:px-3 [&_th]:py-2 [&_td]:px-3 [&_td]:py-2 
                            [&_th]:text-sm sm:[&_th]:text-base
                        ">
                            <thead className="text-left">
                                <tr>
                                    <th className="w-16 sm:w-28 text-center">No.</th>
                                    <th>Name</th>
                                    <th>Contest</th>
                                </tr>
                            </thead>
                            <tbody>
                                {showProblem.map((problem) => (
                                    <tr key={problem.id} className="border-t border-stone-300 min-w-0">
                                        <td className="text-center truncate">{problem.id}</td>
                                        <td>
                                            <a href={problem.linkTo}>
                                                <div className="min-w-0 transition-opacity duration-200 hover:opacity-75">
                                                    <p className="font-bold truncate text-sm sm:text-base">{problem.name}</p>
                                                    <p className="truncate text-xs sm:text-sm">{problem.author}</p>
                                                </div>
                                            </a>
                                        </td>
                                        <td className="min-w-0 truncate text-sm sm:text-base">{problem.contest}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </main>
                )}
            </Container>
        </div>
    );
}
