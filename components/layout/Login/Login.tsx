"use client"

import Background from "@/components/ui/Background/Background"
import Button from "@/components/ui/Button"
import Card from "@/components/ui/Card"
import Input from "@/components/ui/Input"
import Image from "next/image"
import Link from "next/link"

export default function Login() {
    
    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-background flex items-center justify-center px-4 py-10">
            <Background/>
            <div className="relative z-10 w-full max-w-md">
                <Card className="relative overflow-hidden rounded-[28px] border border-neutral-200/80 bg-white/85
                    p-7 shadow-[0_30px_80px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:p-9
                ">
                    <div className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[80%]
                        -translate-x-1/2 rounded-full bg-white opacity-80 blur-3xl
                    "/>
                    <div className="relative z-10 flex justify-center mb-8">
                        <div className="flex h-24 w-24 items-center justify-center
                            rounded-2xl border border-neutral-200 bg-white/90
                            shadow-[0_4px_12px_rgba(0,0,0,0.08)]
                        ">
                            <Image
                                src="/img/logo_without_bg.png"
                                alt="Logo"
                                width={52}
                                height={52}
                                className="h-16 w-16 object-contain"
                            />
                        </div>
                    </div>

                   
                    <div className="relative z-10 mb-8 text-center">
                        <h1 className="text-3xl font-semibold tracking-[-0.04em] text-neutral-950">
                            Welcome back
                        </h1>
                        <p className="mt-2 text-sm text-neutral-500">
                            Sign in to continue to your account
                        </p>
                    </div>

                    {/* Form */}
                    <form className="relative z-10 space-y-4">

                        <Input
                            size="sm"
                            label="Email address"
                            className="h-12 rounded-xl border-neutral-200 bg-white/70
                                text-sm transition-all placeholder:text-neutral-400 hover:border-neutral-300
                                focus:border-neutral-950 focus:bg-white focus:outline-none focus:ring-neutral-950/5
                            "
                        />
                        <Input
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

                        <Button
                            type="submit"
                            className="mt-2 h-12 w-full rounded-xl shadow-[0_5px_12px_rgba(0,0,0,0.12)] transition-all hover:bg-black hover:shadow-[0_8px_20px_rgba(0,0,0,0.16)]
                                active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-black/10
                            "
                        >
                            Sign in
                        </Button>
                    </form>

                    <div className="relative z-10 my-7 flex items-center gap-4">
                        <div className="h-px flex-1 bg-neutral-200" />

                        <span className="text-[11px] font-medium uppercase tracking-wider text-neutral-400">
                            Or continue with
                        </span>

                        <div className="h-px flex-1 bg-neutral-200" />
                    </div>
                   
                    <p className="relative z-10 mt-7 text-center text-sm text-neutral-500">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="font-medium text-black underline-offset-4 hover:underline"
                        >
                            Create account
                        </Link>
                    </p>
                </Card>
                {/* <p className="
                    mt-6
                    text-center
                    text-xs
                    text-neutral-400
                ">
                    Secure login · Your privacy matters
                </p> */}
            </div>
        </main>
    )
}
