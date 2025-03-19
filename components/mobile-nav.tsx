"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-4">
          <div className="flex items-center">
            <span className="text-lg font-bold">Menu</span>
          </div>
          <nav className="flex flex-col gap-2">
            <Link
              href="#produtos"
              className="text-sm font-medium transition-colors hover:text-primary p-2 hover:bg-muted rounded-md"
              onClick={() => setOpen(false)}
            >
              Produtos
            </Link>
            <Link
              href="#tamanhos"
              className="text-sm font-medium transition-colors hover:text-primary p-2 hover:bg-muted rounded-md"
              onClick={() => setOpen(false)}
            >
              Tamanhos
            </Link>
            <Link
              href="#sobre"
              className="text-sm font-medium transition-colors hover:text-primary p-2 hover:bg-muted rounded-md"
              onClick={() => setOpen(false)}
            >
              Sobre nós
            </Link>
            <Link
              href="#contato"
              className="text-sm font-medium transition-colors hover:text-primary p-2 hover:bg-muted rounded-md"
              onClick={() => setOpen(false)}
            >
              Contato
            </Link>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
} 