# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Dev server on localhost:8080
npm run build        # Production build
npm run build:dev    # Dev-mode build
npm run lint         # ESLint
npm run test         # Vitest (single run)
npm run test:watch   # Vitest (watch mode)
```

## Architecture

React 18 + TypeScript SPA built with Vite (SWC). React Router v6 for routing, TanStack React Query for data fetching, Framer Motion for animations, shadcn/ui + Tailwind for UI.

**Routes:**
- `/` → `Index.tsx` — homepage (hero, catalog, about, contact sections)
- `/produtos/:slug` → `CategoryPage.tsx` — category detail with filtered products
- `*` → `NotFound.tsx`

**Data layer** lives entirely in `src/data/products.ts` — static arrays of categories and products with helper functions `getCategoryBySlug(slug)` and `getProductsByCategory(categorySlug)`. No backend; all data is imported directly.

**Component organization:**
- `src/components/` — feature components (HeroSection, CatalogSection, Header, Footer, ContactForm, etc.)
- `src/components/ui/` — shadcn/ui primitives (don't edit these manually)
- `src/hooks/` — custom hooks (`use-mobile`, `use-toast`)
- `src/lib/utils.ts` — `cn()` utility for Tailwind class merging

## Key Patterns

**Styling:** Tailwind utility classes + CSS variable theming (HSL vars like `--primary`, `--border`). Use `cn()` from `@/lib/utils` for conditional classes. Path alias `@/` maps to `src/`.

**Animations:** Framer Motion `motion.div` with `whileInView` for scroll triggers, staggered with `delay: i * 0.1`.

**SEO:** Each page uses `react-helmet-async` via the `SEOHead` component for per-route metadata.

**CTA:** WhatsApp links use `wa.me/5551984910838`.

**TypeScript config** has loose settings — no `strict`, no `noUnusedLocals`. Vitest uses jsdom environment with globals enabled; test files match `src/**/*.{test,spec}.{ts,tsx}`.

## Business Context

Distribuidor oficial Eko'7 em Porto Alegre/RS. Modelo de venda consultiva —
cliente não compra sem conversa. Todo CTA direciona para WhatsApp.
Nunca implementar carrinho de compras sem instrução explícita.

## Brand & Visual Identity

- Cores: azul escuro #1a2744 + azul elétrico #3b82f6 + branco
- Tom: autoridade médica + conforto premium + linguagem acessível
- Certificações a exibir: ISO 9001, ISO 14001, SBRTO, ICV Premium, INMETRO

## Products

Dados em `src/data/products.ts` — fonte única de verdade.
Nunca hardcodar produtos nos componentes.
Categorias: Camas Articuladas FlexiBed, Colchões, Colchonetes,
Travesseiros, Vestuário & Acessórios.

## Deployment

- Dev: Firebase Hosting (legado)
- Target: Vercel em hrcolchoes.steintechnology.com.br
- Sem backend ainda — fase Supabase é futura
