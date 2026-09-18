import { getProducts } from "@/lib/products/getProducts";
import HomeClient from "@/components/layout/Home/HomeClient";
import { getCategories } from "@/lib/category/getCategories";

import { getCurrentUser } from "@/lib/auth/auth";
import { redirect } from "next/navigation";

export default async function HomePage() {

  const user = await getCurrentUser();

  if(!user) {
    redirect("/login")
  }

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