export const SEO_CONFIG = {
  defaultTitle: "Jeans_926 - Moda Feminina com Estilo e Qualidade",
  titleTemplate: "%s | Jeans_926",
  defaultDescription: "Loja de roupas feminina e masculino com variedade de peças e tamanhos. Calças jeans, shorts, saias e blusas para todos os estilos.",
  siteUrl: "https://jeans926.com.br",
  siteName: "Jeans_926",
  locale: "pt_BR",
  type: "website",
  
  // Palavras-chave principais
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
    "jeans_926",
    "fortaleza",
    "ceará",
    "brasil"
  ],

  // Configurações do Open Graph
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Jeans_926",
    images: [
      {
        url: "/hero-1.png",
        width: 1200,
        height: 630,
        alt: "Jeans_926 - Moda Feminina com Estilo e Qualidade",
      },
    ],
  },

  // Configurações do Twitter
  twitter: {
    handle: "@jeans_926",
    site: "@jeans_926",
    cardType: "summary_large_image",
  },

  // Configurações de robots
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
}

// Função para gerar meta tags dinâmicas
export function generateSEOConfig(overrides: Partial<typeof SEO_CONFIG> = {}) {
  return {
    ...SEO_CONFIG,
    ...overrides,
  }
}