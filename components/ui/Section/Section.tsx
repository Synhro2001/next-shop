"use client"

import { SectionProps } from "./section.types";

export default function Section ({
    title,
    children
}: SectionProps) {
    return (
        <section className="space-y-3">
            <h2 className="text-lg font-semibold">{title}</h2>
            {children}
        </section>
    )
}