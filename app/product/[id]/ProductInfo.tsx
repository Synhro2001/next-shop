import { Layers, PersonStanding, Star } from "lucide-react";
import { ProductInfoProps } from "./product-page.types";
import ProductStat from "@/components/ui/ProductStat";

export default function ProductInfo({
    product
}: ProductInfoProps) {
    return (
        <div className="flex flex-col gap-6">
            <div className="text-left">
                <p className="text-xl font-semibold ">{product.title}</p>
                <p className="text-lg">$ {product.price}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <ProductStat
                    icon={<Star size={20} fill="yellow" />}
                    label="Rating"
                    value={product.rating}
                />

                <ProductStat
                    icon={<PersonStanding />}
                    label="Reviews"
                    value={product.reviews}
                />
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <div>
                            <Layers size={20}/>

                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-sm">Category</span>
                            <p className="font-semibold">{product.categoryId}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <p className="font-semibold">Description</p>
                <div>
                    <p className="text-sm font-thin">{product.description}</p>
                </div>
            </div>
         
        </div>
    )
}