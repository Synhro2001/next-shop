"use client"

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
                <p>Product not Found</p>
            )}
        </div>
    )
}