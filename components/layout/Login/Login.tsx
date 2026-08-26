"use client"

import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import Image from 'next/image'


export default function Login() {
    return (
        <div className="min-h-screen w-full flex items-center justify-center px-3">
            <div className="w-full max-w-lg">
                <div className="flex justify-center">
                    <Image
                        src="/img/logo_without_bg.png"
                        alt="Logo"
                        width={192}
                        height={192}
                        className="w-36 h-36 md:w-32 md:h-32 object-contain"

                    />
                </div>

                <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-2xl font-bold text-center">
                            Welcome to my web
                        </p>
                        <p className="text-center">
                            Login to continue to your account
                        </p>
                    </div>
                    <div className="w-full flex flex-col justify gap-3 px-6">
                        <Input 
                            size="sm" 
                            className=""
                            label="Email address"   
                        />
                        <Input 

                            size="sm" 
                            className=""
                            label="Password"
                        />
                        <span className="text-xs text-right"> Forget Password ? </span>
                        <Button className="pt-2">
                            Submit
                        </Button>
                    </div>

                  
                </div>

            </div>

        </div>
     
  
    )
}