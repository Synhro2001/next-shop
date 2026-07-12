"use client"

import { ProductGalleryProps } from "../product-page.types";
import ProductSwiper from "./ProductSwiper";

export default function ProductGallery({
    product
}: ProductGalleryProps) {

    return(
        <div className="relative w-full h-72 overflow-hidden">
            <ProductSwiper images={product.images} title={product.title}/>
        </div>
    )
}
