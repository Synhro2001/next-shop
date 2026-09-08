import { checkDatabaseConnection } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    const isConnected = await checkDatabaseConnection();
    if (!isConnected) {
        return NextResponse.json(
            {
                status: "error",
                message: "Database connection failed"
            },
            {status: 503}
        );
    }
    return NextResponse.json(
        {
            status: "OK",
            message: "Database connected successfully"
        }, 
        {status: 200}
    )
}