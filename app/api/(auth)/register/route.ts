import { hashPassword } from "@/lib/auth/auth";
import { createSession } from "@/lib/auth/session";
import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(request: NextRequest) {
    try {
        const {username, email, password} = await request.json();
        //Validation required fields
        if(!username || !email || !password) {
            return NextResponse.json(
                {
                    error: "Name, email and password are required or not valid"
                },
                {status: 400}
            )
        }

        //Find existing user
        const existingUser = await prisma.user.findFirst({
            where: {
                OR: [
                    {email},
                    {username}
                ]
            },
        })

        if(existingUser) {
            return NextResponse.json(
                {
                    error: "User with this email exists"
                },
                {status: 409}
            )
        }

        const hashedPassword = await hashPassword(password);

        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashedPassword,
            }
        })

        const sessionToken = await createSession(user.id);
        
        //Create response
        const response = NextResponse.json({
            user: {
                id: user.id,
                username: user.username,
                email: user.email,

            }
        })


        //Set cookie
        response.cookies.set("session", sessionToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 60 * 60 * 24 * 3
        })

        return response;

    } catch(error) {
        console.error("Registraion failed")
        return NextResponse.json({
            error: "Internal server error"
        },{ status: 500})
    }
}