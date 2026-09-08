export enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
}

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    name: string | null;
    avatar: string | null;
    role: Role;
    emailVerifiedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
}