
"use client";



import CategoryItem from "@/components/layout/CategorySlider/CategoryItem";
import Link from "next/link";


export default function Home() {  

  return(
    <div className="p-4">
      <Link href="/ui">
        Open UI Showcase
      </Link>
      <CategoryItem title="Hello" image="/img/car.jpg" active/>
       {/* сюда делаем как в visam разные боксы с определенной информацией */}
    </div>
  );


}