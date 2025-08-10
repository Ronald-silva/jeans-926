import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { StructuredData } from "@/components/structured-data"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Jeans_926 - Moda Feminina com Estilo e Qualidade",
  description:
    "Loja de roupas feminina e masculino com variedade de peças e tamanhos. Calças jeans, shorts, saias e blusas para todos os estilos.",
  keywords: [
    "jeans feminino",
    "moda feminina",
    "roupas masculinas", 
    "calças jeans",
    "shorts jeans",
    "saias jeans",
    "loja de roupas",
    "moda casual",
    "roupas tamanho grande",
    "jeans_926"
  ],
  authors: [{ name: "Ronald Dev" }],
  creator: "Ronald Dev",
  publisher: "Jeans_926",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://jeans926.com.br",
    siteName: "Jeans_926",
    title: "Jeans_926 - Moda Feminina com Estilo e Qualidade",
    description: "Loja de roupas feminina e masculino com variedade de peças e tamanhos. Calças jeans, shorts, saias e blusas para todos os estilos.",
    images: [
      {
        url: "/hero-1.png",
        width: 1200,
        height: 630,
        alt: "Jeans_926 - Moda Feminina com Estilo e Qualidade",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jeans_926 - Moda Feminina com Estilo e Qualidade",
    description: "Loja de roupas feminina e masculino com variedade de peças e tamanhos.",
    images: ["/hero-1.png"],
  },
  verification: {
    google: "google-site-verification-code", // Substitua pelo código real
  },
  icons: {
    icon: [
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      }
    ],
    shortcut: ["/favicon.svg"],
    apple: [
      { url: "/apple-icon-180x180.png" },
    ],
  },
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

