import ProductCard from "@/components/layout/Product/ProductCard"
import { RelatedProductsProps } from "./relatedProducts.types"

export default function RelatedProducts ({
    relatedProducts
}: RelatedProductsProps) {

    console.log("Related products", relatedProducts)


    return (
        <div className="flex flex-col gap-2">
            <p className="font-semibold ">Related Products</p>
            <div>
                {relatedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}

            </div>
           
        </div>
    )
}