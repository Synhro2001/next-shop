import { Product } from "@/components/layout/Product/product.types";

export type ProductGalleryProps = {
    product: Product;
}

export type ProductSwiperProps = {
    images: string[],
    title: string;
}

export type ProductInfoProps = {
    product: Product
}