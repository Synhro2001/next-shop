"use client"

import EmptyState from "@/components/ui/EmptyState";
import { ProductGridProps } from "./product.types";
import ProductCard from "./ProductCard";

export default function ProductGrid ({
    products
}: ProductGridProps) {

    return (
        <div className="flex flex-col">

            { products.length > 0 ? (
                products.map((product) => (    
                    <ProductCard 
                        key={product.id}
                        {...product}
                        
                    />
                ))
            ) : (
                <EmptyState
                    title="Nothing found"
                    description="Try another category or change your search query."
                />
            )}
        </div>
    )
}