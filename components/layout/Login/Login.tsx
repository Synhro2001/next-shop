"use client"

import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Image from 'next/image'
import Link from "next/link"


export default function Login() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center px-3">
            <div className="w-full max-w-lg -translate-y-6">
                <div className="flex justify-center mb-2">
                    <Image
                        src="/img/logo_without_bg.png"
                        alt="Logo"
                        width={160}
                        height={160}
                        className="w-28 h-28 md:w-32 md:h-32 object-contain"

                    />
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-3xl font-semibold tracking-tight">
                            Welcome back
                        </h1>
                       <p className="text-sm text-gray-500">
                            Sign in to continue to your account
                        </p>
                    </div>
                    <div className="w-full flex flex-col justify gap-3 px-6">
                        <Input 
                            size="sm" 
                            className="hover:border-gray-300 focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 focus:outline-none"
                            label="Email address"   
                        />
                        <Input 

                            size="sm" 
                            className="hover:border-gray-300 focus:border-black focus:bg-white focus:ring-4 focus:ring-black/5 focus:outline-none"
                            label="Password"
                        />
                        <div className="flex justify-end">
                            <button 
                                className="text-xs text-gray-500 hover:text-black transition-colors"
                                type="button"
                            >
                                Forgot password?
                            </button>
                        </div>
                        <Button className="w-full h-12 rounded-xl bg-black text-white text-sm font-medium transition-all 
                        hover:bg-neutral-800 active:scale-[0.98] focus:outline-none
                        focus:ring-4 focus:ring-black/10">
                            Sign In
                        </Button>
                        
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="h-px flex-1 bg-gray-200" />
                        <span className="text-xs text-gray-400">OR</span>
                        <div className="h-px flex-1 bg-gray-200" />
                    </div>
                    <p className="text-center text-sm text-gray-500">
                        Don&apos;t have an account?{" "}
                        <Link
                            href="/register"
                            className="font-medium text-black hover:underline"
                        >
                            Create account
                        </Link>
                    </p>
                </div>

            </div>

        </div>
     
  
    )
}