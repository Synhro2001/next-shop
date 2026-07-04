import { CategoryItemProps } from "./category-slider.types";
import Image from 'next/image'

export default function CategoryItem ({
    title,
    image,
    active,
    onClick
}: CategoryItemProps) {
    return (
        <div className="flex flex-col items-center gap-2 shrink-0 cursor-pointer">
            <div className="relative w-20 h-16 overflow-hidden rounded-xl">
                <Image
                    src={image}
                    fill
                    className="object-cover"
                    alt={title}
                />
            </div>
            <span>{title}</span>
       </div> 
    )
}