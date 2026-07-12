"use client"

import { ProductSwiperProps } from "../product-page.types";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

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
                        className="object-cover"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={index === 0}
                    />

                </SwiperSlide>

            ))}
        </Swiper>
    )
}



