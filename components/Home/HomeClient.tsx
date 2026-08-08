"use client";
// I can use -useState -useEffect because it is not Server Component

import CategorySlider, { categories } from "@/components/layout/CategorySlider";
import ProductGrid from "@/components/layout/Product/ProductGrid";
import SearchBar from "@/components/layout/SearchBar";
import useDebounce from "@/components/layout/SearchBar/search.utils";
import Link from "next/link";
import { useEffect, useState } from "react";

import type { Product } from "@/types/products/product.types";

type HomeClientProps = {
  products: Product[];
};

export default function HomeClient({products}: HomeClientProps) {  
  const [search, setSearch] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const debouncedSearch = useDebounce(search, 500)
    useEffect(() => {
    // Here you can trigger your search logic, like an API call
    // For demonstration, let's just console log the debounced search term
    console.log("Search triggered with term:", debouncedSearch);
  }, [debouncedSearch]);

  const categoryProducts = 
    selectedCategory === "all" 
    ? products 
    : products.filter(
      (product) => product.categoryId === selectedCategory
    );

 

  const filteredProducts = categoryProducts.filter(
    (product) => product.title.toLowerCase().includes(debouncedSearch.toLowerCase()) 
    || product?.description?.toLowerCase().includes(debouncedSearch.toLowerCase()),
  )


  return(
    <div className="p-4">
      <div className="flex flex-col gap-3">
        <Link href="/ui">
          Open UI Showcase
        </Link>
        <SearchBar value={search} onChange={setSearch}/> 
        <CategorySlider categories={categories}  selectedCategory={selectedCategory} onChangeCategory={setSelectedCategory}/>
        <ProductGrid products={filteredProducts}/>
      </div>
   
       {/* сюда делаем как в visam разные боксы с определенной информацией */}
    </div>
  );


}

// SearchBar is a controlled component. (Single Source of Truth)