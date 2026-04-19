# HR Colchões — Site Institucional

Site institucional da **HR Colchões**, distribuidora oficial Eko'7 em Porto Alegre/RS. Modelo de venda consultiva via WhatsApp, sem carrinho de compras.

Produção: [hrcolchoes.steintechnology.com.br](https://hrcolchoes.steintechnology.com.br)

## Stack

- **Framework**: React 18 + TypeScript, Vite (SWC)
- **Rotas**: React Router v6
- **Dados**: TanStack React Query + arrays estáticos em `src/data/products.ts`
- **UI**: shadcn/ui + Tailwind CSS + Framer Motion
- **SEO**: `react-helmet-async` via componente `SEOHead`
- **Testes**: Vitest (jsdom)
- **Hospedagem**: Vercel

## Desenvolvimento

Requer Node 18+ e npm.

```bash
npm install
npm run dev          # localhost:8080
npm run build        # build de produção (gera sitemap.xml via prebuild)
npm run lint         # ESLint
npm run test         # Vitest single-run
npm run test:watch   # Vitest modo watch
```

## Arquitetura

### Rotas

| Rota | Componente | Descrição |
|---|---|---|
| `/` | `pages/Index.tsx` | Home (hero, catálogo, sobre, contato) |
| `/produtos/:slug` | `pages/CategoryPage.tsx` | Categoria com produtos filtrados |
| `/produtos/:categoria/:produto` | `pages/ProductPage.tsx` | Detalhe do produto |
| `/privacidade` | `pages/PrivacyPage.tsx` | Política de privacidade (LGPD) |
| `*` | `pages/NotFound.tsx` | 404 com `noindex` |

### Dados

Todos os produtos ficam em **`src/data/products.ts`** — fonte única de verdade. Nunca hardcode produtos em componentes. Use helpers:

```ts
getCategoryBySlug(slug)
getProductsByCategory(categorySlug)
getProductBySlug(categorySlug, productSlug)
```

### Componentes

- `src/components/` — componentes de feature (Header, Footer, HeroSection, CatalogSection, ContactForm, SEOHead, CookieConsent, WhatsAppButton).
- `src/components/ui/` — primitivos shadcn/ui. **Não editar manualmente.**
- `src/hooks/` — hooks customizados (`use-mobile`, `use-toast`).
- `src/lib/utils.ts` — util `cn()` para merge de classes Tailwind.

### SEO

O componente `SEOHead` (`src/components/SEOHead.tsx`) injeta título, descrição, canonical, Open Graph, Twitter Card e JSON-LD por rota. O script `scripts/generate-sitemap.mjs` roda em `prebuild` e gera `public/sitemap.xml` a partir de `products.ts`.

### CTA

Todos os CTAs direcionam para WhatsApp: `https://wa.me/5551984910838`.

## Segurança

- Cabeçalhos HTTP (CSP, HSTS, X-Frame-Options, Referrer-Policy, Permissions-Policy) configurados em `vercel.json`.
- Política de privacidade em `/privacidade` e banner de consentimento de cookies (LGPD).
- Relato de vulnerabilidades: ver [`SECURITY.md`](./SECURITY.md).

## Contribuição

Ver [`CONTRIBUTING.md`](./CONTRIBUTING.md) para fluxo de branches, padrões de commit e checklist de PR.

## Identidade de marca

- Cores: azul escuro `#1a2744`, azul elétrico `#3b82f6`, branco.
- Tom: autoridade médica + conforto premium + linguagem acessível.
- Certificações: ISO 9001, ISO 14001, SBRTO, ICV Premium, INMETRO.

## Licença

Código proprietário. Ver [`LICENSE`](./LICENSE).
