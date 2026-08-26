import { getProducts } from "@/lib/products/getProducts";
import HomeClient from "@/components/layout/Home/HomeClient";
import { getCategories } from "@/lib/category/getCategories";

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);
  return (
    <HomeClient 
      products={products}
      categories={categories}
    />
  );
}