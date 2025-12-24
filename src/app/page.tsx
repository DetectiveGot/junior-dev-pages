"use client"
import React, {useState, useEffect} from "react";
import Link from "next/link";
import Header from "../components/header";
// import {Footer} from "../components/footer";
import Image from "next/image";
import { Container } from "../ui/Container";
import { Button } from "../ui/Button";

const NAME = "JUNIOR DEV"
 
export default function Home() {
    const [showName, setShowName] = useState<string>("");
    useEffect(() => {
        if(showName.length===NAME.length) return;
        const id = setTimeout(() => {
            setShowName(pv => pv+NAME[pv.length]);
        }, 100)
        return () => {
            clearTimeout(id);
        }
    }, [showName]);
    return (
        <div className="h-dvh w-dvw flex flex-col"> 
            <Header curPage={"home"} />
            <div className="flex-1 text-white flex flex-col justify-center items-center gap-y-4 sm:gap-y-8">
                <Container className="flex justify-center items-center">
                    <div>
                        <h1 className="text-xl md:text-3xl lg:text-7xl font-bold text-shadow-lg">{showName}</h1>
                        <ul className="list-disc p-4 sm:p-6">
                            <li>Think</li>
                            <li>Solve</li>
                            <li>Have fun!</li>
                        </ul>
                    </div>
                    <div className="relative h-40 w-40 sm:h-60 sm:w-60">
                        <Image
                            src={"/images/logo.svg"}
                            alt={"logo-JDev"}
                            fill
                            sizes="(min-width: 640px) 240px, 160px"
                        />
                    </div>
                </Container>
                <Container className="space-x-4 sm:space-x-8">
                    <a href='https://juniordev.contest.codeforces.com' target="_blank">
                        <Button variant={"primary"} size={"lg"} className="bg-stone-900 font-bold">Join Group</Button>
                    </a>
                    <Link href='/contests'>
                        <Button variant={"primary"} size={"lg"} className="bg-cyan-500 font-bold">View Contests</Button>
                    </Link>
                </Container>
            </div>
        </div>
    );
}