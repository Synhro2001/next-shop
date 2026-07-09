"use client"

import { Filter, Search, X } from "lucide-react";
import { SearchBarProps } from "./searchbar.types";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";


export default function SearchBar({
    value,
    onChange,
    placeholder = "Search...",
    showFilter = true,
    onFilterClick, // create a setting component for filter !!!
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
                    size="md"
                    value={value}
                    onChange={(e) => onChange?.(e.target.value)}
                    placeholder={placeholder}
                    className="pl-10 pr-10"
                />
                { value &&
                    <X 
                        size={18}
                        color="black"
                        onClick={() => onChange?.("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-black" />
                }
            </div>
            {showFilter && (
                <Button
                    variant="primaryOutline"
                    onClick={onFilterClick}
                    size="md"
                    className="transition-all duration-200 active:scale-105 md:hidden"
                >
                    <Filter size={18} color="black"/>
                </Button>
            )}
            
        </div>
    )
}


// import debounce from 'lodash.debounce';

// const search = debounce((query) => {
//   // fetch data from API with the query
// }, 500); // delay function call for 500ms