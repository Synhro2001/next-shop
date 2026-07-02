"use client"

import { BadgeProps, badgeSize, badgeVariants } from "./badge.types";

export default function Badge({
    children,
    variant = "default",
    size = "sm",
    className
}: BadgeProps) {
    return (
        <span className={`rounded font-bold inline-flex items-center justify-center
            ${badgeVariants[variant]}
            ${badgeSize[size]}
            ${className ?? ""}
        `}>
            {children}
        </span>
    )
}