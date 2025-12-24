"use client";
import { Container } from "@/src/ui/Container";
import Header from "@/src/components/header";
import { Member } from "@/src/types/types";
import { members } from "@/src/data/members";
import { useState } from "react";

export default function About() {
    const [memberList, setMemberList] = useState<Member[]>(members);
    return (
        <div>
            <Header curPage={"about"}/>
            <Container className="space-y-3">
                <h1 className="text-4xl font-bold">About</h1>
                <p className="text-2xl">
                    Junior dev is an organization for hosting contests on various topics 
                    for people to practice doing problems ranging from basic coding to beyond IOI.
                </p>
            </Container>
            <Container className="space-y-3">
                <h1 className="text-4xl font-bold">Contributors</h1>
                <ul className="list-disc grid grid-cols-2 px-8 gap-y-4">
                    {memberList.map((member, idx) => (
                        <li key={idx}>
                            <div className="min-w-0">
                                <h1 className="text-xl font-bold">{member.name}</h1>
                                <p className="truncate">{member.role.join(', ')}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </Container>
        </div>
    );
}
