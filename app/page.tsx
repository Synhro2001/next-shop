"use client";

import CategorySlider, { categories } from "@/components/layout/CategorySlider";
import ProductCard from "@/components/layout/Product/ProductCard";
import SearchBar from "@/components/layout/SearchBar";
import Link from "next/link";
import { useState } from "react";


export default function Home() {  
  const [search, setSearch] = useState("")
  // const debouncedSearch = useDebounce(search, 500)

  // useEffect(() => {}, [debouncedSearch])


  return(
    <div className="p-4">
      <div className="flex flex-col gap-3">
        <Link href="/ui">
          Open UI Showcase
        </Link>
        <SearchBar value={search} onChange={setSearch}/>
        <CategorySlider categories={categories} />
        <ProductCard
          id="1"
          title="330$"
          image="/img/home.jpg"
          description="Komunala"
        />
      </div>
   
       {/* сюда делаем как в visam разные боксы с определенной информацией */}
    </div>
  );


}