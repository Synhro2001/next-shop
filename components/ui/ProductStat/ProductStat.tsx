"use client"

import { ProductStatProps } from "./productStat.types";

export default function ProductStat({
    icon,
    label,
    value

}: ProductStatProps) {
    return (
        <div className="flex items-center gap-2">
            <div className="flex items-center justify-center">
                {icon}
            </div>
            <div className="flex flex-col text-left">
                <span className="text-sm text-gray-500">
                    {label}
                </span>

                <span className="font-semibold">
                    {value}
                </span>
            </div>
        </div>
    )
}