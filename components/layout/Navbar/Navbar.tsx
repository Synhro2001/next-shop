"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavbarProps } from "./navbar.types";
import Link from "next/link";

export default function Navbar({
  title,
  links = [],
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4 bg-primary">
      <nav className="flex justify-between items-center">
    
        <Link
          href="/"
          className="text-xl text-white font-bold z-50"
        >
          {title}
        </Link>

        <button
          className="relative z-50 md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? (
            <X size={28} color="black" />
          ) : (
            <Menu size={28} />
          )}
        </button>
      </nav>

      <div
        className={`
          fixed inset-0 bg-surface z-40
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <nav className="mt-20 flex flex-col gap-3 px-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                p-4
                bg-primary
                text-white
                font-semibold
                rounded-2xl
                transition-opacity
                hover:opacity-90
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}