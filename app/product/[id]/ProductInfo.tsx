import { ProductInfoProps } from "./product-page.types";

export default function ProductInfo({
    product
}: ProductInfoProps) {
    return (
        <div className="flex flex-col">
            <p className="text-lg ">{product.title}</p>
            <p className="text-xl font-bold">{product.price}$</p>
        </div>
    )
}