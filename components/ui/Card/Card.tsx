"use client"

import { CardProps } from "./card.types";

export default function Card({
    children,
    className,
    ...props
}: CardProps) {
    return (
        <div
            className={`rounded-xl shadow-lg ${className ?? ""}`}
            {...props}
        >
            {children}
        </div>
    )
}