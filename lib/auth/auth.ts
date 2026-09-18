import bcrypt from "bcrypt"
import { cookies } from "next/headers";
import { prisma } from "../prisma";
import { Role, User } from "@/types/user/user";

export const hashPassword = async(password: string): Promise<string> => {
    return bcrypt.hash(password, 12);
}

export const verifyPassword = async (
    password: string,
    hashedPassword: string
): Promise<boolean> => {
    return bcrypt.compare(password, hashedPassword);
}


export const getCurrentUser = async (): Promise<User | null> => {
    try {
        const cookieStore = await cookies()

        const sessionToken = cookieStore.get("session")?.value

        if(!sessionToken) return null;

        const session = await prisma.session.findUnique({
            where: {
                token: sessionToken
            },
            include: {
                user: true
            }
        })
        
        if (!session) return null;

        if (session.expiresAt < new Date()) {
            return null
        }

        const { password, ...user} = session.user;

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
