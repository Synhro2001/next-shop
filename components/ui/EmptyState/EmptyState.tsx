"use client"

import { SearchX } from "lucide-react";
import { EmptyStateProps } from "./empty-state.types";

export default function EmptyState({
    title,
    description,
    icon
}: EmptyStateProps) {
    return (
        <div className="flex flex-col items-center justify-center py-14 text-center">
            <div className="mb-4 rounded-full bg-gray-100 p-5">
                {icon ?? (
                    <SearchX
                        size={38}
                        className="text-gray-400"
                    />
                )}
            </div>
            <h3 className="text-lg font-semibold text-gray-900">
                {title}
            </h3>
            {description && (
                <p className="mt-2 max-w-xs text-sm text-gray-500">
                    {description}
                </p>
            )}
        </div>
    )
}