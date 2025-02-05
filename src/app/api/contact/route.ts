import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
        return NextResponse.json(
            { error: "Missing required fields" },
            { status: 400 }
        );
    }

    //TODO: implement sending email
    console.log(`New Message from ${name} (${email}): ${message}`);

    return NextResponse.json({ message: "Message received successfully!" });
}
