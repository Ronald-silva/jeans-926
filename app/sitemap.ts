import { MetadataRoute } from 'next'
import { products } from '@/lib/products-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://jeans926.com.br'
  
  // Páginas principais
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/#produtos`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#sobre`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/#contato`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  // Adicionar produtos individuais (se houver páginas específicas no futuro)
  const productRoutes = products.map((product) => ({
    url: `${baseUrl}/produto/${product.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [...routes, ...productRoutes]
}