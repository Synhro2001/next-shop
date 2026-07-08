"use client"

import { Search } from "lucide-react";
import { SearchBarProps } from "./searchbar.types";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";


export default function SearchBar({
    value,
    onChange,
    placeholder = "Search...",
    showFilter = true,
    className,
    ...props
}: SearchBarProps) {
    return (
        <div className={`flex items-center gap-2 ${className ?? ""}`}>
            <div className="relative flex-1">
                <Search
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-black" 
                />
                <Input 
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    placeholder={placeholder}
                    className="pl-10"
                />
            </div>
            {showFilter && (
                <Button
                    onClick={props.onFilterClick}
                    size="md"
                    className="transition-all duration-200 active:scale-105"
                >
                    Filter
                </Button>
            )}
            
        </div>
    )
}