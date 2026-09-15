import crypto from "crypto";
import { prisma } from "../prisma";

export async function createSession(userId:string): Promise<string> {
    const token = crypto.randomBytes(32).toString("hex");

    const expiresAt = new Date(
        Date.now() + 1000 * 60 * 60 * 24 * 3
    );

    await prisma.session.create({
        data: {
            token,
            userId,
            expiresAt
        }
    })

    return token
}

export async function deleteSession(token:string) {
    await prisma.session.delete({
        where: {
            token
        }
    })
}