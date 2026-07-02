"use client"

import { CardProps } from "./card.types";

export default function Card({
    children,
    className
}: CardProps) {
    return (
        <div
            className={`rounded-xl border p-4 shadow-sm ${className ?? ""}`}
        >
            {children}
        </div>
    )
}