"use client";
import { Container } from "@/src/ui/Container";
import { Contest } from "../../types/types";
import { useMemo } from "react";
import Image from "next/image";
  
export default function ContestClient({contestList}:{contestList:Contest[]}) {
    const { ongoing, upcoming, past } = useMemo(() => {
        return contestList.reduce((acc, contest) => {
            switch(contest.phase) {
                case "CODING":
                    acc.ongoing.push(contest);
                    break;
                case "BEFORE":
                    acc.upcoming.push(contest);
                    break;
                case "FINISHED":
                    acc.past.push(contest);
                    break;
            }
            return acc;
        }, {
            ongoing: [] as Contest[],
            upcoming: [] as Contest[],
            past: [] as Contest[],
        })
    }, [contestList]);
    return (
        <>
            <Container className="text-white">
                <h1 className="text-xl sm:text-3xl font-bold">Contests</h1>
                <p className="text-sm sm:text-base">Time is displayed as UTC+7 timezone</p>
            </Container>
            <Container>
                <h1 className="text-xl sm:text-3xl font-bold">Ongoing Contests</h1>
                <main className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {(() => {
                        if(ongoing.length===0) return <p className="text-sm sm:text-base">No on-going contests..</p>
                        return (
                            ongoing.map((contest) => (
                                <a href={contest.linkTo} key={contest.id}>
                                    <div className="overflow-hidden rounded-md bg-cyan-600 h-20 sm:h-28 flex gap-x-2 sm:gap-x-6 transition-opacity duration-200 hover:opacity-70">
                                        <div className="relative h-full aspect-square">
                                            <Image
                                                src={"/images/codeforces.jpg"}
                                                alt={"codeforces"}
                                                fill
                                                sizes="(min-width: 640px) 112px, 120px"
                                            />
                                        </div>
                                        <div className="min-w-0 p-2">
                                            <p className="text-base sm:text-lg font-bold truncate">{contest.name}</p>
                                            <p className="text-xs sm:text-sm truncate">{contest.date}</p>
                                        </div>
                                    </div>
                                </a>
                            ))
                        )
                    })()}
                </main>
            </Container>
            <Container>
                <h1 className="text-xl sm:text-3xl font-bold">Upcoming Contests</h1>
                <main className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {(() => {
                        if(upcoming.length===0) return <p className="text-sm sm:text-base">No up-coming contests..</p>
                        return (
                            upcoming.map((contest) => (
                                <a href={contest.linkTo} key={contest.id}>
                                    <div className="overflow-hidden rounded-md bg-cyan-600 h-20 sm:h-28 flex gap-x-2 sm:gap-x-6 transition-opacity duration-200 hover:opacity-70">
                                        <div className="relative h-full aspect-square">
                                            <Image
                                                src={"/images/codeforces.jpg"}
                                                alt={"codeforces"}
                                                fill
                                                sizes="(min-width: 640px) 112px, 120px"
                                            />
                                        </div>
                                        <div className="min-w-0 p-2">
                                            <p className="text-base sm:text-lg font-bold truncate">{contest.name}</p>
                                            <p className="text-xs sm:text-sm truncate">{contest.date}</p>
                                        </div>
                                    </div>
                                </a>
                            ))
                        )
                    })()}
                </main>
            </Container>
            <Container>
                <h1 className="text-xl sm:text-3xl font-bold">Past Contests</h1>
                <main className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    {(() => {
                        if(past.length===0) return <p className="text-sm sm:text-base">No past contests..</p>
                        return (
                            past.map((contest) => (
                                <a href={contest.linkTo} key={contest.id}>
                                    <div className="overflow-hidden rounded-md bg-cyan-600 h-20 sm:h-28 flex gap-x-2 sm:gap-x-6 transition-opacity duration-200 hover:opacity-70">
                                        <div className="relative h-full aspect-square">
                                            <Image
                                                src={"/images/codeforces.jpg"}
                                                alt={"codeforces"}
                                                fill
                                                sizes="(min-width: 640px) 112px, 120px"
                                            />
                                        </div>
                                        <div className="min-w-0 p-2">
                                            <p className="text-base sm:text-lg font-bold truncate">{contest.name}</p>
                                            <p className="text-xs sm:text-sm truncate">{contest.date}</p>
                                        </div>
                                    </div>
                                </a>
                            ))
                        )
                    })()}
                </main>
            </Container>
        </>
    );
}
