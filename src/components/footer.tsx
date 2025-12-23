"use client"

import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer>
            <Link href='/'>
                <p className="text-sm">© 2024 Junior Dev. All rights reserved.</p>
            </Link>
        </footer>
    );
}
