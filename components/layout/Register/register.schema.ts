import { z } from "zod";

export const registerSchema = z
    .object({
        username: z
            .string()
            .min(4, "Username must contain at least 4 characters")
            .max(20, "Username must contain less that 20 characters"),

        email: z
            .email("Please enter a valid email address"),
        password: z
            .string()
            .min(8, "Password must contain at least 8 characters"),
        confirmPassword: z
            .string()
            .min(1, "Please confirm your password"),
    })
    .refine(
        (data) => data.password === data.confirmPassword,
        {
            error: "Passwords do not match",
            path: ["confirmPassword"]
        }
    )