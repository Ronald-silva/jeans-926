import { ProductCard } from "@/components/product-card"
import { Product } from "@/lib/products-data"

interface ProductsSectionProps {
  title: string
  products: Product[]
  className?: string
}

export function ProductsSection({ title, products, className }: ProductsSectionProps) {
  return (
    <div className={className}>
      <h4 className="text-3xl font-bold mb-4">{title}</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            sizes={product.sizes}
            featured={product.featured}
          />
        ))}
      </div>
    </div>
  )
}