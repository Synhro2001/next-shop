"use client"
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { registerSchema } from "./register.schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export default function RegisterForm() {

    const { 
        register,
        handleSubmit,
        formState: {
            errors,
            isSubmitting,
            isValid
        },
    } = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        mode: "onChange",
      
    })
    
    return (
        <form onSubmit={handleSubmit((data) => {
            console.log(data)
        })} 
            className="relative z-10 space-y-4 flex flex-col gap-3"
        >
            <Input
                {...register("username")}
                error={errors.username?.message}
                size="sm"
                label="Username"
                className="h-12 rounded-xl border-neutral-200 bg-white/70
                    text-sm transition-all placeholder:text-neutral-400 hover:border-neutral-300
                    focus:border-neutral-950 focus:bg-white focus:outline-none focus:ring-neutral-950/5
                "
            />
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
                type="password"
                size="sm"
                label="Password"
                error={errors.password?.message}
                className="h-12 rounded-xl border-neutral-200 bg-white/70
                    text-sm transition-all placeholder:text-neutral-400 hover:border-neutral-300
                    focus:border-neutral-950 focus:bg-white focus:outline-none focus:ring-neutral-950/5
                "
            />
            <Input
                {...register("confirmPassword")}
                type="password"
                size="sm"
                label="Confirm password"
                error={errors.confirmPassword?.message}
                className="h-12 rounded-xl border-neutral-200 bg-white/70
                    text-sm transition-all placeholder:text-neutral-400 hover:border-neutral-300
                    focus:border-neutral-950 focus:bg-white focus:outline-none focus:ring-neutral-950/5
                "
            />
            <Button
                type="submit"
                disabled={!isValid || isSubmitting}
                className="mt-2 h-12 w-full rounded-xl
                    shadow-[0_5px_12px_rgba(0,0,0,0.12)] transition-all hover:bg-black hover:shadow-[0_8px_20px_rgba(0,0,0,0.16)]
                    active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-black/10
                "
            >
                {isSubmitting ? "Creating..." : "Create account"}
            </Button>
        </form>
    )
}