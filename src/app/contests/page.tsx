"use client";
import Header from "@/src/components/header";
import { Container } from "@/src/ui/Container";
import { useState } from "react";
import { Contest } from "../../types/types";
import { contests } from "../../data/contest";
import Image from "next/image";
  
export default function Contests() {
    const [contestList, setContestList] = useState<Contest[]>(contests);
    return (
        <div>
            <Header curPage={"contests"}/>
            <Container className="text-white">
                <h1 className="text-4xl font-bold">Contests</h1>
                <p>Time is displayed as UTC+7 timezone</p>
                <main className="grid grid-cols-2 gap-4 mt-4">
                    {contestList.map((contest) => (
                        <a href={contest.linkTo} key={contest.id}>
                            <div className="p-4 rounded-md bg-cyan-600 h-28 flex gap-x-6">
                                <div className="relative h-full aspect-square">
                                    <Image
                                        src={"/images/codeforces.webp"}
                                        alt={"codeforces"}
                                        fill
                                        sizes="112px"
                                    />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-lg font-bold truncate">{contest.name}</p>
                                    <p className="text-sm truncate">{contest.date}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </main>
            </Container>
        </div>
    );
}
