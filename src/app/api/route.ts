import { NextResponse } from "next/server"

export async function POST(request: Request) {
    console.log(await request.json())
}

export async function GET(request: Request) {
    return NextResponse.next()
}