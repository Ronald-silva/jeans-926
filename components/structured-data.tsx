import { CONTACT_INFO, SITE_INFO } from '@/lib/constants'

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ClothingStore",
    "name": SITE_INFO.name,
    "description": SITE_INFO.description,
    "url": "https://jeans926.com.br",
    "logo": "https://jeans926.com.br/logo.svg",
    "image": "https://jeans926.com.br/hero-1.png",
    "telephone": `+55${CONTACT_INFO.whatsapp[0].number}`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": CONTACT_INFO.address,
      "addressLocality": "Fortaleza",
      "addressRegion": "CE",
      "addressCountry": "BR"
    },
    "openingHours": "Mo-Fr 09:00-18:00",
    "sameAs": [
      CONTACT_INFO.instagram,
      `https://wa.me/55${CONTACT_INFO.whatsapp[0].number}`
    ],
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Pix"],
    "currenciesAccepted": "BRL"
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_INFO.name,
    "url": "https://jeans926.com.br",
    "description": SITE_INFO.description,
    "inLanguage": "pt-BR",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://jeans926.com.br/?search={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://jeans926.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Produtos",
        "item": "https://jeans926.com.br/#produtos"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  )
}