import { verifyPassword } from "@/lib/auth/auth";
import { createSession } from "@/lib/auth/session";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
    try {
        const {email, password} = await request.json()

        if(!email || !password) {
            return NextResponse.json(
                {
                    error: "Email and password are required or not valid"
                }, 
                {status: 400}
            )
        }

        //Find existing user
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })

        if(!user) {
            return NextResponse.json(
                {
                    error: "Invalid email or password"
                }, 
                { status: 401}
            )
        }

        const isPasswordValid = await verifyPassword(
            password,
            user.password
        )

        if(!isPasswordValid) {
            return NextResponse.json(
                {
                    error: "Invalid email or password"
                },
                { status: 401}
            )
        }

        const sessionToken = await createSession(user.id)

        const response = NextResponse.json({
            user: {
                id: user.id,
                username: user.username,
                email: user.email
            }
        })

        //Set cookie
        response.cookies.set("session", sessionToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 3
        });

        return response

    } catch(error) {
        console.error("Login failed")
        return NextResponse.json({
            error: "Internal server error"
        }, {status: 500})
    }
}