"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { ShoppingBag, Heart } from "lucide-react"
import { formatCurrency } from "@/lib/utils"

interface ProductCardProps {
  image?: string
  title: string
  price: number
  sizes: string[]
  featured?: boolean
}

export function ProductCard({ image, title, price, sizes, featured }: ProductCardProps) {
  return (
    <Card className="overflow-hidden group">
      <CardHeader className="p-0">
        <div className="relative aspect-[3/4] w-full bg-muted/10">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
          />
         
        </div>
      </CardHeader>
      <CardContent className="p-3 md:p-4">
        <h3 className="font-medium text-sm md:text-base mb-1 md:mb-2 line-clamp-2">{title}</h3>
        <p className="text-base md:text-lg font-bold text-pink-600">{formatCurrency(price)}</p>
        <div className="mt-2 flex flex-wrap gap-1">
          {sizes.map((size) => (
            <Badge key={size} variant="secondary" className="text-xs md:text-sm">
              {size}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-3 md:p-4 pt-0">
        
      </CardFooter>
    </Card>
  )
}

