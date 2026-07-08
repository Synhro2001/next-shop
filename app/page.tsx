"use client";


import CategorySlider, { categories } from "@/components/layout/CategorySlider";
import SearchBar from "@/components/layout/SearchBar/SearchBar";
import Link from "next/link";


export default function Home() {  

  return(
    <div className="p-4">
      <div className="flex flex-col gap-3">
        <Link href="/ui">
          Open UI Showcase
        </Link>
        <SearchBar/>
        <CategorySlider categories={categories} />
      </div>
   
       {/* сюда делаем как в visam разные боксы с определенной информацией */}
    </div>
  );


}