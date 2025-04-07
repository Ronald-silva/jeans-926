/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Adicione esta configuração se você estiver usando imagens remotas
  // remotePatterns: [
  //   {
  //     protocol: 'https',
  //     hostname: '**',
  //   },
  // ],
}

module.exports = nextConfig
