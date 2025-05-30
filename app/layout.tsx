import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Jeans_926 - Moda Feminina com Estilo e Qualidade",
  description:
    "Loja de roupas feminina e masculino com variedade de peças e tamanhos. Calças jeans, shorts, saias e blusas para todos os estilos.",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      }
    ],
    shortcut: ["/favicon.svg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

