import { deleteSession } from "@/lib/auth/session";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
    console.log("🔥 LOGOUT ROUTE CALLED");
    const cookieStore = await cookies();
    const sessionToken = cookieStore.get("session")?.value;

    console.log("🔥 SESSION TOKEN:", sessionToken);
    if(sessionToken) {
        await deleteSession(sessionToken)
    }

    const response = NextResponse.json(
        {
            message: "User logged out"
        },
        { status: 200 }
    );
    response.cookies.set("session", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 0
    })

    return response;
}