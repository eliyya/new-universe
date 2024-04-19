import { NextResponse } from "next/server"

export async function POST(request: Request) {
    console.log(await request.json())
    return new Response('Hello, world!')
}

export async function GET(request: Request) {
    return NextResponse.next()
}