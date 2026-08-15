import { getProducts } from "@/lib/products/getProducts";
import HomeClient from "@/components/Home/HomeClient";
import { getCategories } from "@/lib/category/getCategories";

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);
  console.log("Products", products)
  return (
    <HomeClient 
      products={products}
      categories={categories}
    />
  );
}