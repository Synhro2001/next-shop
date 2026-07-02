"use client"

import { SpinnerProps, spinnerSizes } from "./spinner.types";

export default function Spinner({
    size = "sm",
    className
}: SpinnerProps) {
    return (
        <span className={`rounded-full border-2 border-gray-300 border-t-blue-500 animate-spin
            ${spinnerSizes[size]}
            ${className ?? ""}`}/>
    )
}