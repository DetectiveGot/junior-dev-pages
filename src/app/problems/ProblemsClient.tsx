"use client"

import { useState, useMemo } from "react";
import { Problem } from "@/src/types/types";

export default function ProblemsPage({problemList}:{problemList: Problem[]}) {
    const [searchProb, setSearchProb] = useState<string>("");
    const showProblem = useMemo(() => {
        return searchProb.trim().length===0?problemList:problemList.filter((problem) => {
            const search = searchProb.trim().toLocaleLowerCase();
            return search===problem.name.trim().toLowerCase().slice(0, search.length);
        });
    }, [searchProb, problemList]);

    return (
        <>
            <input type="text" className="bg-white rounded-md text-stone-600 px-4 py-1 h-8 text-sm" placeholder="Search Problems" value={searchProb}
                onChange={(e) => {
                    setSearchProb(e.target.value);
                }}
            />
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
        </>
    );
}
