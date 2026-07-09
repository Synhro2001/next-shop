"use client"

import Card from "@/components/ui/Card";
import { ProductProps } from "./product.types";
import Image from 'next/image'


export default function ProductCard({
    id,
    title,
    description,
    image,
    price,
    ...props
}: ProductProps) {
    return (
        <Card className="flex p-2 gap-4">
            <div className="relative w-32 h-24 rounded-xl overflow-hidden">
                <Image
                    src={image}
                    fill
                    alt={title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-left font-semibold">{title}</p>
                <p className="text-left text-sm font-light">{description}</p>
                {/* добавить маленькие теги и дату когда запостили */}
            </div>
        </Card>
    )
}