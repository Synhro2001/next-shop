"use client"

import EmptyState from "@/components/ui/EmptyState";
import ProductCard from "./ProductCard";
import { ProductGridProps } from "@/types/products/product.types";

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