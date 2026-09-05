"use client"

import { z } from "zod";

export const loginSchema = z
    .object({
        email: z
            .email("Invalid email"),
        password: z
            .string()
            .min(8, "Password must contain at least 8 characters")
    })