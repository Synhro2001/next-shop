"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavbarProps } from "./navbar.types";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar({
  title,
  links = [],
}: NavbarProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
      });

      if (!response.ok) {
        console.error("Logout failed");
        return;
      }

      setOpen(false);
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

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

          <button
            type="button"
            onClick={handleLogout}
            className="
              p-4
              bg-red-500
              text-white
              font-semibold
              rounded-2xl
              transition-opacity
              hover:opacity-90
              text-left
            "
          >
            Logout
          </button>
        </nav>
      </div>
    </div>
  );
}