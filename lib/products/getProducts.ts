import { prisma } from "../prisma";
import { mapProduct } from "./mapProduct";

export async function getProducts() {
  const products = await prisma.product.findMany({
    include: {
      category: true,
      seller: true,
    },
  });

  return products.map(mapProduct);
}