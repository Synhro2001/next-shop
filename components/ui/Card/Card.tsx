"use client"

import { CardProps } from "./card.types";

export default function Card({
    title,
    children
}: CardProps) {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            {children}
        </div>
    )
}