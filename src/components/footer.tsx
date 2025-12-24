"use client"

import React, { forwardRef } from "react";
import Link from "next/link";
import { cn } from "../lib/utils";


export const Footer = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({className, ...props}, ref) => {
    return (
        <footer ref={ref} {...props}>
            <Link href='/'>
               <p className={cn(className, "text-xs sm:text-sm text-white")}>© 2025 Junior Dev. All rights reserved.</p>
           </Link>
        </footer>
    )
})

Footer.displayName = "Footer";