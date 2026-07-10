"use client"

import Card from "@/components/ui/Card";
import { ProductProps } from "./product.types";
import Image from 'next/image'
import Badge from "@/components/ui/Badge";
import { Star } from "lucide-react";


export default function ProductCard({
    title,
    description,
    image,
    price,
    ...props
}: ProductProps) {
    return (
        <Card className="flex p-2 gap-4">
            <div className="relative w-28 h-28 rounded-xl overflow-hidden shrink-0">
                <Image
                    src={image}
                    fill
                    alt={title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <Badge variant="default" size="sm" className="absolute">Popular</Badge>
            </div>
            <div className="flex flex-1 flex-col justify-between">
                <div>
                    <h3 className="text-left font-semibold text-lg">
                        {title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                        {description}
                    </p>
                    {/* добавить маленькие теги и дату когда запостили */}
                </div>
                <div className="flex item-center justify-between">
                    <div className="flex items-center gap-1">
                        <Star size={14} fill="yellow"/>
                        <span className="text-sm">{props.rating}</span>
                        <span className="text-sm">({props.reviews})</span>
                    </div>
                    <span className="font-bold">
                        ${price}
                    </span>
                </div>
                

            </div>
          
        </Card>
    )
}