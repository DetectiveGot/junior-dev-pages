import React from "react";
import Link from "next/link";
import { Button } from "../ui/Button";

export default function Header({curPage}:{curPage:string}) {
    return (
        <nav className="flex items-center justify-center font-bold text-white text-md gap-x-4 py-4 sm:text-xl sm:gap-x-8 sm:py-6 md:text-lg md:gap-x-16">
            <Link href="/"><Button variant={curPage==="home"?"underlined":"underline"}>Home</Button></Link>
            <Link href="/problems"><Button variant={curPage==="problems"?"underlined":"underline"}>Problems</Button></Link>
            <Link href="/contests"><Button variant={curPage==="contests"?"underlined":"underline"}>Contests</Button></Link>
            <Link href="/about"><Button variant={curPage==="about"?"underlined":"underline"}>About</Button></Link>
        </nav>
    );
}