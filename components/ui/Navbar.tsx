"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Button from "./Button/Button";

type NavbarLink = {
    label: string;
    href: string;
}
type NavbarProps = {
    title?: string;
    bgColor: string;
    textColor: string;
    links: NavbarLink[];

}

export default function Navbar({
    title = "",
    bgColor = "",
    textColor = "",
    links = []
}: NavbarProps) {
    const [open, setOpen] = useState(false);

    return (
    <div className="p-4 ">
        <nav className=" flex justify-between items-center">
            <h1 className="text-xl text-black font-bold z-40">{title}</h1>
            <Button 
                className="relative z-45 md:hidden bg-white"  
                onClick={() => setOpen(!open)}
            >
                {open ? <X size={28} color="black"/> : <Menu size={28} color="black"/>}
            </Button>
        </nav>
        <div className={`
                fixed inset-0 bg-white z-40 
                transform transition-transform duration-300 ease-in-out
                ${open ? "translate-x-0" : "-translate-x-full"}
            `}
        >
            <nav className="mt-20 flex flex-col gap-3 px-4">
                {links.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        className="p-4 bg-gray-100 rounded-2xl"
                    >
                        {link.label}
                    </a>
                ))}
            </nav>
        </div>
    </div>
     
    );
}