"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, MessageCircle, ArrowRight, ShoppingBag, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ProductCard } from "@/components/product-card"
import { SizeGuide } from "@/components/size-guide"
import { WhatsappButton } from "@/components/whatsapp-button"
import { HeroCarousel } from "@/components/hero-carousel"
import { MobileNav } from "@/components/mobile-nav"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 md:h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <MobileNav />
           
            <span className="text-lg md:text-xl font-bold">Jeans_926</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#produtos" className="relative text-sm font-medium transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-purple-600 group">
              Produtos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#tamanhos" className="relative text-sm font-medium transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-purple-600 group">
              Tamanhos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#sobre" className="relative text-sm font-medium transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-purple-600 group">
              Sobre nós
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="#contato" className="relative text-sm font-medium transition-all duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-pink-500 to-purple-600 group">
              Contato
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <div className="flex items-center gap-2 md:gap-4">
            <Link href="https://instagram.com/jeans_926" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="h-8 w-8 md:h-10 md:w-10">
                <Instagram className="h-4 w-4 md:h-5 md:w-5" />
                <span className="sr-only">Instagram</span>
              </Button>
            </Link>
            <WhatsappButton variant="ghost" size="icon" className="h-8 w-8" iconOnly />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <HeroCarousel />
          <div className="absolute inset-0 flex items-start justify-center flex-col bg-gradient-to-b from-black/60 via-black/30 to-transparent text-white p-4 pt-16 md:pt-0 md:items-center md:justify-center">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-4">
                Moda com Estilo e Qualidade
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-4 md:mb-8">
                Jeans, shorts, saias e blusas para todos os estilos e ocasiões
              </p>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-8 md:py-12 bg-muted/50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
              <Card className="bg-background border-none shadow-sm">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <ShoppingBag className="h-12 w-12 text-pink-500 mb-4" />
                  <h3 className="text-xl font-medium mb-2">Loja Física e Virtual</h3>
                  <p className="text-muted-foreground">Compre pelo Instagram ou WhatsApp com facilidade e segurança</p>
                </CardContent>
              </Card>
              <Card className="bg-background border-none shadow-sm">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <Truck className="h-12 w-12 text-pink-500 mb-4" />
                  <h3 className="text-xl font-medium mb-2">Entrega Garantida</h3>
                  <p className="text-muted-foreground">Fazemos entrega para toda a região com rapidez e segurança</p>
                </CardContent>
              </Card>
              <Card className="bg-background border-none shadow-sm">
                <CardContent className="flex flex-col items-center text-center p-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-12 w-12 text-pink-500 mb-4"
                  >
                    <path d="M6 14h8"></path>
                    <path d="M6 18h8"></path>
                    <path d="M10 3v10"></path>
                    <rect width="16" height="16" x="4" y="3" rx="2"></rect>
                  </svg>
                  <h3 className="text-xl font-medium mb-2">Diversos Tamanhos</h3>
                  <p className="text-muted-foreground">Variedade de peças nos tamanhos 36 ao 44 para todos os corpos</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="produtos" className="py-16 container">
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nossos Produtos</h2>
            <p className="text-muted-foreground text-center max-w-2xl">
              Conheça nossa coleção de peças exclusivas com qualidade e preço justo
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard
              image="/produto-1.png"
              title="Saia Jeans azul"
              price={25.00}
              sizes={["36", "38", "40", "42", "44"]}
            />
            <ProductCard
              image="/produto-2.png"
              title="Saia Jeans Destroyed"
              price={35.00}
              sizes={["36", "38", "40", "42", "44"]}
              featured
            />
            <ProductCard
              image="/produto-3.png"
              title="Saia Jeans Midi"
              price={25.00}
              sizes={["36", "38", "40", "42", "44"]}
            />
            <ProductCard
              image="/produto-4.png"
              title="Short jeans Mya"
              price={35.00}
              sizes={["36","38","40","42","44"]}
            />
            <ProductCard
              image="/produto-5.png"
              title="Short jeans lage"
              price={35.00}
              sizes={["36","38","40","42","44"]}
            />
            <ProductCard
              image="/produto-6.png"
              title="Cropped jeans"
              price={59.99}
              sizes={["36","38","40","42","44"]}
            />
            <ProductCard
              image="/produto-7.png"
              title="Calca jeans moly"
              price={49.99}
              sizes={["36", "38", "40", "42", "44"]}
            />
            <ProductCard
              image="/produto-8.png"
              title="Saia jeans plus size"
              price={29.99}
              sizes={["44", "46", "48","50"]}
            />
            <ProductCard
              image="/produto-9.png"
              title="Calca jeans plus size"
              price={49.99}
              sizes={["44", "46", "48","50"]}
            />
            <ProductCard
              image="/produto-10.png"
              title="Bermuda jeans"
              price={39.99}
              sizes={["36", "38", "40", "42", "44"]}
            />
            <ProductCard
              image="/produto-11.png"
              title="Bermuda jeans"
              price={39.99}
              sizes={["36", "38", "40", "42", "44"]}
            />
            <ProductCard
              image="/produto-12.png"
              title="Bermuda jeans"
              price={39.99}
              sizes={["36", "38", "40", "42", "44"]}
            />
            <ProductCard
              image="/produto-13.png"
              title="Bermuda jeans"
              price={39.99}
              sizes={["36", "38", "40", "42", "44"]}
            />
            <ProductCard
              image="/produto-14.png"
              title="Bermuda jeans"
              price={39.99}
              sizes={["36", "38", "40", "42", "44"]}
            />
            <ProductCard
              image="/produto-15.png"
              title="Bermuda jeans"
              price={39.99}
              sizes={["36", "38", "40", "42", "44"]}
            />
            <ProductCard
              image="/produto-16.png"
              title="Bermuda jeans"
              price={39.99}
              sizes={["36", "38", "40", "42", "44"]}
            />
             <ProductCard
              image="/produto-17.png"
              title="Bermuda jeans"
              price={39.99}
              sizes={["36", "38", "40", "42", "44"]}
            />
             <ProductCard
              image="/produto-18.png"
              title="Bermuda jeans"
              price={39.99}
              sizes={["36", "38", "40", "42", "44"]}
            />
             <ProductCard
              image="/produto-19.png"
              title="calca jeans"
              price={59.99}
              sizes={["36", "38", "40", "42", "44"]}
            />
             <ProductCard
              image="/produto-20.png"
              title="Calca jeans"
              price={59.99}
              sizes={["36", "38", "40", "42", "44"]}
            />
            
          </div>

          <div className="flex justify-center mt-12">
            <Button size="lg" className="bg-pink-600 hover:bg-pink-700 text-white">
              Ver Todos os Produtos <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Size Guide */}
        <section id="tamanhos" className="py-16 bg-muted/30">
          <div className="container">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Guia de Tamanhos</h2>
              <p className="text-muted-foreground text-center max-w-2xl">
                Encontre o tamanho perfeito para você com nosso guia de medidas
              </p>
            </div>

            <SizeGuide />

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">
                Não tem certeza do seu tamanho? Entre em contato conosco para ajuda personalizada!
              </p>
              <WhatsappButton variant="outline">
                Tirar Dúvidas <MessageCircle className="ml-2 h-4 w-4" />
              </WhatsappButton>
            </div>
          </div>
        </section>

        {/* About */}
        <section id="sobre" className="py-16 container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl font-bold mb-6">Sobre a Jeans_926</h2>
              <div className="space-y-4">
                <p>
                  Somos uma loja especializada em moda feminina e masculina com foco em jeans e peças casuais de alta qualidade.
                </p>
                <p>
                  Nossa missão é oferecer roupas que combinam estilo, conforto e durabilidade, atendendo homens e mulheres de
                  diversos tamanhos e estilos.
                </p>
                <p>
                  Trabalhamos com atendimento personalizado, entrega rápida e segura, e estamos sempre atualizando nosso
                  catálogo com as últimas tendências da moda.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button variant="outline">Conheça Nossa História</Button>
                <Link href="https://instagram.com/jeans_926" target="_blank" rel="noopener noreferrer">
                  <Button>
                    <Instagram className="mr-2 h-4 w-4" /> Siga no Instagram
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-lg overflow-hidden">
              <Image 
                src="/about.png" 
                alt="Sobre Jeans 926" 
                fill 
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={85}
              />
            </div>
          </div>
        </section>

        {/* Diferenciais */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="flex flex-col items-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Por que escolher a Jeans_926?</h2>
              <p className="text-muted-foreground text-center max-w-2xl">
                Conheça os diferenciais que fazem nossa loja especial
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-background border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-500"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Qualidade Garantida</h3>
                  <p className="text-muted-foreground">
                    Trabalhamos com as melhores marcas e tecidos, garantindo durabilidade e conforto em todas as peças.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-500"
                    >
                      <path d="M12 2v20M2 12h20" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Variedade de Tamanhos</h3>
                  <p className="text-muted-foreground">
                    Oferecemos peças do 36 ao 48, garantindo que voce encontre seu  tamanho ideal.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-none shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-pink-500"
                    >
                      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium mb-2">Atendimento Personalizado</h3>
                  <p className="text-muted-foreground">
                    Nossa equipe está sempre pronta para ajudar com dicas de tamanho, estilo e tendências.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contato" className="py-16 bg-gradient-to-r from-pink-500 to-purple-600 text-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Pronta para renovar seu guarda-roupa?</h2>
              <p className="text-lg mb-8 text-white/90">
                Entre em contato conosco pelo Instagram ou WhatsApp e faça seu pedido agora mesmo!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="https://instagram.com/jeans_926" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-pink-600 hover:bg-white/90 w-full sm:w-auto">
                    <Instagram className="mr-2 h-5 w-5" /> Pedir pelo Instagram
                  </Button>
                </Link>
                <WhatsappButton size="lg" className="w-full sm:w-auto" />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container py-6 md:py-8 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image 
                  src="/logo.svg" 
                  alt="Jeans 926 Logo" 
                  width={80} 
                  height={80} 
                  className="w-14 h-14 md:w-16 md:h-16" 
                />
                <span className="text-lg font-bold">Jeans_926</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Loja de roupas femininas e masculinas, variedade para todos os estilos e tamanhos.
              </p>
              <div className="flex items-center gap-4">
                <Link href="https://instagram.com/jeans_926" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <WhatsappButton variant="ghost" size="icon" className="h-8 w-8" iconOnly />
              </div>
            </div>
            <div>
              <h3 className="font-medium mb-4">Links Rápidos</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#produtos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Produtos
                </Link>
                <Link href="#tamanhos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Guia de Tamanhos
                </Link>
                <Link href="#sobre" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nós
                </Link>
                <Link href="#contato" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contato
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="font-medium mb-4">Informações</h3>
              <div className="space-y-2 text-muted-foreground">
                <p>Horário de atendimento: Seg-Sex 9h às 18h</p>
                <p>Entrega para toda a região</p>
                <p>Pagamento via Pix, cartão e dinheiro</p>
                <p ><a href="https://www.google.com/maps/@-3.7767944,-38.5830426,3a,75y,25.57h,90.23t/data=!3m7!1e1!3m5!1sqJXnH_RK7RLYPhgkk4JOog!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D-0.22731996752557393%26panoid%3DqJXnH_RK7RLYPhgkk4JOog%26yaw%3D25.571031895606716!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D">Endereço: Seixas Correa, 926 - Bom Sucesso</a></p>
              </div>
            </div>
          </div>
          <div className="border-t mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-muted-foreground">
            <p> 2024 Jeans_926. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
