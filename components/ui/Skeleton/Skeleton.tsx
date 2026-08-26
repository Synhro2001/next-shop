"use client"

import { SkeletonProps } from "./skeleton.types"

export default function Skeleton ({
    className
}: SkeletonProps) {
    return (
        <div className={`animate-pulse bg-gray-200 rounded-md ${className ?? ""}`}/>
    )
}