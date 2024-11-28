"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Heading1 from "@/components/headings/Heading1"
import Heading2 from "@/components/headings/Heading2"
import Paragraph from "@/components/headings/Paragraph"

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from "next/image"


const carouselImages = [
    {
        url: "/carousel/galeria/carousel_img1.png",
        name: ""
    },
    {
        url: "/carousel/galeria/carousel_img2.png",
        name: ""
    },
    {
        url: "/carousel/galeria/carousel_img3.png",
        name: ""
    },
    {
        url: "/carousel/galeria/carousel_img1.png",
        name: ""
    },
    {
        url: "/carousel/galeria/carousel_img2.png",
        name: ""
    },
    {
        url: "/carousel/galeria/carousel_img3.png",
        name: ""
    }
]



export default function PanoramicaCarousel() {
    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className="grid grid-rows-[auto,auto,1fr,auto] gap-4 w-full py-8"
        >
            <div className="grid grid-cols-3 items-center gap-x-2">
                <div className="col-span-2">
                    <Heading1 className="text-[#087E8A] md:h-10 xl:h-16 text-start">Galería</Heading1>  
                </div>
                <div className="w-full col-span-1 h-full justify-center items-center flex gap-4">
                    <div className="">
                        <CarouselPrevious
                            className="relative size-12 left-0 top-0 transform-none justify-center items-center flex"
                            icon={<ChevronLeft className="size-9" />}
                        />
                    </div>
                    <div className="">
                        <CarouselNext
                            className="relative size-12 left-0 top-0 transform-none justify-center items-center flex"
                            icon={<ChevronRight className="size-9" />}
                        />
                    </div>
                </div>
            </div>
            <CarouselContent className="flex">
                {carouselImages.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 border-none">
                        <Card className="rounded-[30px] overflow-hidden border-none flex items-center justify-center">
                            <CardContent className="w-[490px] h-[345px] p-0 relative">
                                <Image
                                    src={item.url}
                                    width={490}
                                    height={345}
                                    className="object-cover w-full h-full"
                                    alt="item_img"
                                />
                                <Heading2 className="absolute bottom-0 left-0 p-6 text-start font-bold">
                                    {item.name}
                                </Heading2>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselDots className="justify-self-center mt-4" />
        </Carousel>
    )
}
