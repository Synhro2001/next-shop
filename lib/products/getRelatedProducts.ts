import { prisma } from "../prisma";
import { mapProduct } from "./mapProduct";

export async function getRelatedProducts(
    categoryId:string,
    productId: string
) {
    const relatedProducts = await prisma.product.findMany({
        where: {
            categoryId,
            id: {
                not: productId
            }
        },
        take: 3,
        include: {
            seller: true,
            category: true
        }
    })

    return relatedProducts.map(mapProduct)
}