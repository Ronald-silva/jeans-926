"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const images = [
  {
    src: "/hero-1.png",
    alt: "Coleção Jeans Feminino"
  },
  {
    src: "/hero-2.png",
    alt: "Moda Casual Feminina"
  },
  {
    src: "/hero-3.png",
    alt: "Looks Modernos"
  }
]

function CarouselImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={85}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
    </div>
  )
}

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((current + 1) % images.length)
  const prev = () => setCurrent((current - 1 + images.length) % images.length)

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[600px]">
      <div className="absolute inset-0">
        <CarouselImage {...images[current]} />
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 h-8 w-8 md:h-10 md:w-10"
        onClick={prev}
      >
        <ChevronLeft className="h-4 w-4 md:h-6 md:w-6" />
        <span className="sr-only">Anterior</span>
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 h-8 w-8 md:h-10 md:w-10"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
        <span className="sr-only">Próximo</span>
      </Button>
    </div>
  )
}

