"use client"

import { useState } from "react";
import { CategorySliderProps } from "./category-slider.types";
import CategoryItem from "./CategoryItem";

export default function CategorySlider({
    categories
}: CategorySliderProps) {

    const [activeId, setActiveId] = useState(categories[0].id);

    return ( 
        <div className="-mx-4">
            <div className=" overflow-x-auto no-scrollbar snap-x snap-mandatory ">
                <div className="flex gap-4 py-6 px-4">
                    {categories.map((category) => (
                        <div key={category.id} className="shrink-0 snap-start">
                            <CategoryItem id={category.id} title={category.title} image={category.image} active={category.id === activeId} onClick={() => setActiveId(category.id)}/>
                        </div>
                    ))}
        
                </div>
            </div>

        </div>
       
    )
}