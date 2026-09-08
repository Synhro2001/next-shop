import { User } from "../user/user";

export interface Session {
    id: string;
    token: string;
    userId: string;
    user: User;
    expiresAt: Date;
    createdAt: Date;
    updatedAt: Date;
}