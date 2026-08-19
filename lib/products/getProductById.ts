import { prisma } from "../prisma";
import { mapProduct } from "./mapProduct";

export async function getProductById(id:string) {
    const product = await prisma.product.findUnique({
        where: {
            id,
        }, 
        include: {
            seller: true,
            category: true
        }
    })

    if (!product) {
        return null
    }

    return mapProduct(product)
}