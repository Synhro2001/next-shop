"use client"

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ProductSwiperProps } from "@/types/products/product-page.types";

export default function ProductSwiper({
    images,
    title
}: ProductSwiperProps) {
    const hasMultipleImages = images.length > 1;

    return (
        <Swiper
            className="w-full h-full"
            modules={[Pagination]}
            pagination={hasMultipleImages ? { clickable: true } : false}
            loop={hasMultipleImages}
        >
            {images.map((image, index) => (
               
                <SwiperSlide key={index}>
               
                      <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                        priority={index === 0}
                    />

                </SwiperSlide>

            ))}
        </Swiper>
    )
}



