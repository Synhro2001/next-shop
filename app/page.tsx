import { getProducts } from "@/lib/products/getProducts";
import HomeClient from "@/components/Home/HomeClient";

export default async function HomePage() {
  const products = await getProducts();

  console.log(products)
  return (
    <HomeClient products={products} />
  );
}