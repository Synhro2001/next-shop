import bcrypt from "bcrypt"
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { prisma } from "../prisma";
import { Role, User } from "@/types/user/user";

const secret = process.env.JWT_SECRET;

if (!secret) {
  throw new Error("JWT_SECRET is not defined");
}

const secretKey = new TextEncoder().encode(secret);

export const hashPassword = async(password: string): Promise<string> => {
    return bcrypt.hash(password, 12);
}

export const verifyPassword = async (
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
}

export async function generateToken(payload: {
    userId: string
    // email: string;
}): Promise<string> {
    return new SignJWT(payload)
        .setProtectedHeader({alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime("3d")
        .sign(secretKey)
}

export async function verifyToken(
    token:string
): Promise<{ userId: string; email: string } | null> {
    try {
        const {payload} = await jwtVerify(token, secretKey)
        if (
            typeof payload.userId !== "string" ||
            typeof payload.email !== "string"
        ) {
            return null
        }
        return {
            userId: payload.userId,
            email: payload.email
        }
    } catch {
        return null;
    }
}

export const getCurrentUser = async (): Promise<User | null> => {
    try {
        const cookieStore = await cookies()

        const token = cookieStore.get("token")?.value

        if(!token) return null;

        const decode = await verifyToken(token);

        if (!decode) return null;
        
        const userFromDb = await prisma.user.findUnique({
            where: {
                id: decode.userId
            }
        })

        if (!userFromDb) return null;

        const { password, ...user} = userFromDb;

        return user as User;

    } catch (error) {
        console.error("Error:", error)
        return null
    }
}

export const checkUserPermission = (
    user: User,
    requiredRole: Role
): boolean => {
    const roleHierarchy = {
        [Role.USER]: 0,
        [Role.ADMIN]: 1
    };
    return roleHierarchy[user.role] >= roleHierarchy[requiredRole]
}