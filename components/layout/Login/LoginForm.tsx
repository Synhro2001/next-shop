"use client"

import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import { useForm } from "react-hook-form"
import { loginSchema } from "./login.schema"

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react"
import { useRouter } from "next/navigation"

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginForm() { 

    const [serverError, setServerError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema)
    })

    async function onSubmit(data:LoginFormData) {
        setServerError("")
        setIsLoading(true)

        try {
            const response = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            })

            const result = await response.json();

            if(!response.ok) {
                setServerError(result.error)
                return
            }

            router.push("/");
        } catch (error) {
            setServerError("Something went wrong")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="relative z-10 space-y-4 flex flex-col gap-3"
        >

            <Input
                {...register("email")}
                error={errors.email?.message}
                size="sm"
                label="Email address"
                className="h-12 rounded-xl border-neutral-200 bg-white/70
                    text-sm transition-all placeholder:text-neutral-400 hover:border-neutral-300
                    focus:border-neutral-950 focus:bg-white focus:outline-none focus:ring-neutral-950/5
                "
            />
            <Input
                {...register("password")}
                error={errors.password?.message}
                type="password"
                size="sm"
                label="Password"
                className="h-12 rounded-xl border-neutral-200 bg-white/70
                    text-sm transition-all placeholder:text-neutral-400 hover:border-neutral-300
                    focus:border-neutral-950 focus:bg-white focus:outline-none focus:ring-neutral-950/5
                "
            />

            <div className="flex justify-end pt-1">
                <button
                    type="button"
                    className="text-sm font-medium text-neutral-500 transition-colors hover:text-black"
                >
                    Forgot password?
                </button>
            </div>
            {serverError && (
                <p className="text-sm text-red-500">
                    {serverError}
                </p>
            )}
            <Button
                type="submit"
                disabled={isLoading}
                className="mt-2 h-12 w-full rounded-xl shadow-[0_5px_12px_rgba(0,0,0,0.12)] transition-all hover:bg-black hover:shadow-[0_8px_20px_rgba(0,0,0,0.16)]
                    active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-black/10
                "
            >
                {isLoading ? "Signing in..." : "Sign in"}
            </Button>
        </form>
    )
}