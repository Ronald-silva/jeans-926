export interface Product {
  id: string
  image: string
  title: string
  price: number
  sizes: string[]
  featured?: boolean
  category: 'feminino' | 'masculino'
}

export const products: Product[] = [
  // Moda Feminina
  {
    id: 'saia-jeans-azul',
    image: '/produto-1.png',
    title: 'Saia Jeans azul',
    price: 25.00,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'feminino'
  },
  {
    id: 'saia-jeans-destroyed',
    image: '/produto-2.png',
    title: 'Saia Jeans Destroyed',
    price: 35.00,
    sizes: ['36', '38', '40', '42', '44'],
    featured: true,
    category: 'feminino'
  },
  {
    id: 'saia-jeans-midi',
    image: '/produto-3.png',
    title: 'Saia Jeans Midi',
    price: 25.00,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'feminino'
  },
  {
    id: 'short-jeans-mya',
    image: '/produto-4.png',
    title: 'Short jeans Mya',
    price: 35.00,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'feminino'
  },
  {
    id: 'short-jeans-lage',
    image: '/produto-5.png',
    title: 'Short jeans lage',
    price: 35.00,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'feminino'
  },
  {
    id: 'cropped-jeans',
    image: '/produto-6.png',
    title: 'Cropped jeans',
    price: 59.99,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'feminino'
  },
  {
    id: 'calca-jeans-moly',
    image: '/produto-7.png',
    title: 'Calca jeans moly',
    price: 49.99,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'feminino'
  },
  {
    id: 'saia-jeans-plus-size',
    image: '/produto-8.png',
    title: 'Saia jeans plus size',
    price: 29.99,
    sizes: ['44', '46', '48', '50'],
    category: 'feminino'
  },
  {
    id: 'calca-jeans-plus-size',
    image: '/produto-9.png',
    title: 'Calca jeans plus size',
    price: 49.99,
    sizes: ['44', '46', '48', '50'],
    category: 'feminino'
  },
  
  // Moda Masculina
  {
    id: 'bermuda-jeans-1',
    image: '/produto-10.png',
    title: 'Bermuda jeans',
    price: 39.99,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'masculino'
  },
  {
    id: 'bermuda-jeans-2',
    image: '/produto-11.png',
    title: 'Bermuda jeans',
    price: 39.99,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'masculino'
  },
  {
    id: 'bermuda-jeans-3',
    image: '/produto-12.png',
    title: 'Bermuda jeans',
    price: 39.99,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'masculino'
  },
  {
    id: 'bermuda-jeans-4',
    image: '/produto-13.png',
    title: 'Bermuda jeans',
    price: 39.99,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'masculino'
  },
  {
    id: 'bermuda-jeans-5',
    image: '/produto-14.png',
    title: 'Bermuda jeans',
    price: 39.99,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'masculino'
  },
  {
    id: 'bermuda-jeans-6',
    image: '/produto-15.png',
    title: 'Bermuda jeans',
    price: 39.99,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'masculino'
  },
  {
    id: 'bermuda-jeans-7',
    image: '/produto-16.png',
    title: 'Bermuda jeans',
    price: 39.99,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'masculino'
  },
  {
    id: 'bermuda-jeans-8',
    image: '/produto-17.png',
    title: 'Bermuda jeans',
    price: 39.99,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'masculino'
  },
  {
    id: 'bermuda-jeans-9',
    image: '/produto-18.png',
    title: 'Bermuda jeans',
    price: 39.99,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'masculino'
  },
  {
    id: 'calca-jeans-masculina-1',
    image: '/produto-19.png',
    title: 'Calca jeans',
    price: 59.99,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'masculino'
  },
  {
    id: 'calca-jeans-masculina-2',
    image: '/produto-20.png',
    title: 'Calca jeans',
    price: 59.99,
    sizes: ['36', '38', '40', '42', '44'],
    category: 'masculino'
  }
]

export const getProductsByCategory = (category: 'feminino' | 'masculino') => {
  return products.filter(product => product.category === category)
}

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured)
}