import { NextResponse } from "next/server";

export async function GET(req) {
    const url = new URL(req.url);
    const target = url.searchParams.get("url");

    if (!target) {
        return new NextResponse("Missing url", { status: 400 });
    }

    const res = await fetch(target);

    return new NextResponse(res.body, {
        headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": "inline",
        },
    });
}
