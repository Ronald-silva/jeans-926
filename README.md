# Jeans_926 - E-commerce Website

Site de e-commerce para loja de roupas femininas e masculinas, especializada em jeans e peças casuais.

## 🚀 Tecnologias

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
├── app/                    # App Router do Next.js
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── ui/               # Componentes shadcn/ui
│   ├── breadcrumbs.tsx   # Navegação breadcrumb
│   ├── hero-carousel.tsx # Carrossel do hero
│   ├── mobile-nav.tsx    # Navegação mobile
│   ├── product-card.tsx  # Card de produto
│   ├── products-section.tsx # Seção de produtos
│   ├── structured-data.tsx # Dados estruturados JSON-LD
│   ├── whatsapp-button.tsx # Botão WhatsApp
│   ├── theme-provider.tsx # Provider de tema
│   └── icons.tsx         # Ícones customizados
├── lib/                  # Utilitários e dados
│   ├── constants.ts      # Constantes da aplicação
│   ├── products-data.ts  # Dados dos produtos
│   ├── seo-config.ts     # Configurações de SEO
│   └── utils.ts          # Funções utilitárias
└── public/               # Arquivos estáticos
    ├── hero-*.png        # Imagens do carrossel
    ├── produto-*.png     # Imagens dos produtos
    ├── logo.svg          # Logo da marca
    ├── manifest.json     # Manifest PWA
    └── robots.txt        # Configurações para crawlers
```

## 🛠️ Instalação e Execução

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Execute o servidor de desenvolvimento:

```bash
npm run dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 📝 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera build de produção
- `npm run start` - Inicia servidor de produção
- `npm run lint` - Executa linting
- `npm run export` - Exporta site estático
- `npm run preview` - Preview do build exportado

## 🎨 Funcionalidades

- **Responsivo** - Adaptado para desktop, tablet e mobile
- **Carrossel de Hero** - Imagens rotativas na seção principal
- **Catálogo de Produtos** - Separado por categoria (feminino/masculino)
- **WhatsApp Integration** - Botão para contato direto
- **Instagram Integration** - Links para perfil social
- **Tema Claro/Escuro** - Suporte a temas
- **SEO Otimizado** - Meta tags completas, dados estruturados e sitemap
- **PWA Ready** - Manifest e ícones configurados
- **Acessibilidade** - ARIA labels e estrutura semântica

## 🔧 Configuração

### Produtos

Edite `lib/products-data.ts` para adicionar/remover produtos:

```typescript
export const products: Product[] = [
  {
    id: "produto-id",
    image: "/produto-1.png",
    title: "Nome do Produto",
    price: 29.99,
    sizes: ["36", "38", "40"],
    category: "feminino" | "masculino",
    featured: true, // opcional
  },
];
```

### Informações de Contato

Edite `lib/constants.ts` para atualizar informações:

```typescript
export const CONTACT_INFO = {
  whatsapp: [{ number: "85988497112", label: "WhatsApp 1" }],
  instagram: "https://instagram.com/jeans_926",
  address: "Seu endereço aqui",
};
```

## 📱 Componentes Principais

- **HeroCarousel** - Carrossel de imagens principal
- **ProductCard** - Card individual de produto
- **ProductsSection** - Seção completa de produtos
- **WhatsappButton** - Botão com dropdown de números
- **MobileNav** - Menu mobile responsivo

## 🎯 Melhorias Implementadas

- ✅ Remoção de código duplicado
- ✅ Centralização de dados em arquivos separados
- ✅ Componentes reutilizáveis
- ✅ Ícones customizados organizados
- ✅ Constantes centralizadas
- ✅ Estrutura modular e escalável
- ✅ TypeScript para type safety
- ✅ Remoção de componentes não utilizados

## 📄 Deploy

O projeto está configurado para deploy no Vercel. Para outros provedores, use:

```bash
npm run build
npm run export
```

Os arquivos estáticos estarão na pasta `out/`.

## � SEO e dPerformance

### Otimizações Implementadas

- ✅ **Meta Tags Completas** - Title, description, keywords, Open Graph, Twitter Cards
- ✅ **Dados Estruturados** - JSON-LD para Organization, Website e Breadcrumbs
- ✅ **Sitemap XML** - Gerado automaticamente com todas as páginas
- ✅ **Robots.txt** - Configurado para otimizar crawling
- ✅ **Manifest PWA** - Suporte a Progressive Web App
- ✅ **Estrutura Semântica** - HTML5 semântico com ARIA labels
- ✅ **URLs Amigáveis** - Estrutura de URLs otimizada para SEO
- ✅ **Imagens Otimizadas** - Next.js Image com lazy loading
- ✅ **Performance** - Core Web Vitals otimizados

### Checklist SEO

- [x] Title tags únicos e descritivos
- [x] Meta descriptions otimizadas
- [x] Heading hierarchy (H1, H2, H3)
- [x] Alt text em todas as imagens
- [x] Dados estruturados (Schema.org)
- [x] Sitemap XML
- [x] Robots.txt
- [x] Open Graph tags
- [x] Twitter Cards
- [x] Canonical URLs
- [x] Mobile-friendly
- [x] Page speed otimizado
- [x] HTTPS ready
- [x] Breadcrumbs
- [x] Internal linking

### Ferramentas Recomendadas

- **Google Search Console** - Monitoramento de indexação
- **Google PageSpeed Insights** - Análise de performance
- **GTmetrix** - Análise detalhada de velocidade
- **Screaming Frog** - Auditoria técnica de SEO
- **Google Analytics** - Análise de tráfego

## 👨‍💻 Créditos

**Desenvolvido por:** Ronald Dev  
**GitHub:** [@ronalddev](https://github.com/ronalddev)  
**LinkedIn:** [Ronald Developer](https://linkedin.com/in/ronalddev)

---

_Este projeto foi desenvolvido com dedicação e atenção aos detalhes para oferecer a melhor experiência de usuário possível._
