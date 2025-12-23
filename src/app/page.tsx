"use client"
import React, {useState, useEffect, useRef} from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
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
        <div className="h-dvh w-dvw py-6 flex flex-col"> 
            <Header curPage={"home"} />
            <div className="flex-1 text-white flex flex-col justify-center items-center gap-y-8">
                <Container className="flex justify-center items-center">
                    <div>
                        <h1 className="text-7xl font-bold">{showName}</h1>
                        <ul className="list-disc p-6">
                            <li>Think</li>
                            <li>Solve</li>
                            <li>Have fun!</li>
                        </ul>
                        <Footer/>
                    </div>
                    <div className="relative h-60 w-60">
                        <Image
                            src={"/images/logo.svg"}
                            alt={"logo-JDev"}
                            fill
                            sizes="240px"
                        />
                    </div>
                </Container>
                <Container className="py-4 space-x-8">
                    <a href='https://juniordev.contest.codeforces.com' target="_blank">
                        <Button variant={"primary"} size={"lg"} className="bg-stone-900 font-bold">Join Our Codeforces</Button>
                    </a>
                    <Link href='/contests'>
                        <Button variant={"primary"} size={"lg"} className="bg-cyan-500 font-bold">View Contests</Button>
                    </Link>
                </Container>
            </div>
        </div>
    );
}