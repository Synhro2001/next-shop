import { Product, ProductBadge } from "@/types/products/product.types";

type PrismaProduct = {
    id: string;
    title: string;
    description: string | null;
    price: number;
    rating: number | null;
    reviews: number | null;
    location: string | null;

    latitude: number | null;
    longitude: number | null;

    badge: "popular" | "new" | null;
    categoryId: string;
    createdAt: Date;
    images: string[];

    seller: {
        id: string;
        name: string;
        avatar: string;
    };
};

export function mapProduct(product: PrismaProduct): Product {
    return {
        id: product.id,
        title: product.title,

        images: product.images,

        description: product.description ?? undefined,

        price: product.price,

        rating: product.rating ?? undefined,
        reviews: product.reviews ?? undefined,

        categoryId: product.categoryId,

        location: product.location ?? undefined,

        latitude: product.latitude ?? undefined,
        longitude: product.longitude ?? undefined,

        createdAt: product.createdAt.toISOString(),

        seller: {
            id: product.seller.id,
            name: product.seller.name,
            avatar: product.seller.avatar,
        },

        badge:
            product.badge === "popular"
                ? ProductBadge.Popular
                : product.badge === "new"
                    ? ProductBadge.New
                    : undefined,
    };
}