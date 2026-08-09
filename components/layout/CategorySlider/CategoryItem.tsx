"use client"

import Card from "@/components/ui/Card";
import { CategoryItemProps } from "./category-slider.types";
import Image from 'next/image'

export default function CategoryItem ({
    name,
    image,
    active,
    onClick
}: CategoryItemProps) {
    
    return (
        <Card className={`flex flex-col p-3 gap-2 cursor-pointer 
            transition-all duration-200 active:scale-95
            md:hover:-translate-y-2 
            md:hover:shadow-xl
            ${active ? "shadow-primary" : ""}
            `}
            onClick={onClick}
            >
            <div className="relative w-20 h-16 rounded-xl overflow-hidden">
                <Image
                    src={image}
                    fill
                    className="object-cover"
                    alt={name}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <p className="text-center font-semibold">{name}</p>
        </Card>
           
        
       
    )
}

// hover-animation for desktop //
// hover:-translate-y-1
// hover:shadow-xl
// transition-all
// active state - border-primary ring-2 ring-primary/20