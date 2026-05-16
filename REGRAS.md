# ⚠️ REGRAS DO PROJETO — HR COLCHÕES
# Leia ANTES de qualquer alteração. Estas regras são LEI.

## FUNCIONALIDADES PROTEGIDAS — NÃO TOCAR
Os itens abaixo foram testados e aprovados pelo cliente.
Qualquer alteração nesses componentes DEVE ser explicitamente solicitada.

### ✅ VÍDEOS YOUTUBE
- Embed via YouTubeFacade ou iframe em ProductPage.tsx
- Se videoId !== null → renderiza embed
- Se videoId === null → não renderiza nada (nenhum elemento vazio)
- O componente de vídeo fica em ProductPage, FORA do ProductGallery

### ✅ LAYOUT PRODUTO (ProductPage.tsx)
- H1 no topo
- Grid 2 colunas desktop: esquerda 60% galeria | direita 40% descrição + badges
- Mobile: coluna única (imagens → descrição → specs)
- Badge Premium (dourado) / Relax (azul) abaixo do H1
- Seção de especificações em largura total abaixo do grid

### ✅ WHATSAPP
- Mensagem dinâmica: "Olá, tenho interesse no [Categoria] [Nome], gostaria de marcar uma consultoria."
- Função buildWhatsAppMessage em ProductPage.tsx
- encodeURIComponent aplicado na mensagem completa

### ✅ IMAGENS
- Todas em WebP em public/produtos/[slug]/
- Atributo loading="lazy" em todas as imagens de produto
- Nomenclatura: [slug]-01.webp, [slug]-02.webp, etc.

### ✅ CATEGORIAS E ROTAS
- /colchoes → colchoes
- /camas → camas (NÃO camas-articuladas)
- /box → box
- /cabeceira → cabeceira
- /travesseiros → travesseiros
- Produtos ocultos: hidden: true filtra em CategoryPage e Header

### ✅ FOOTER
- Links auditados e funcionais em 15/05/2026
- WhatsApp: 51 98491-0838
- Instagram: @Hr_Colchoes

### ✅ PERFORMANCE
- vite-plugin-compression configurado (gzip)
- Code splitting: vendor / ui / router
- Sitemap dinâmico: gerado via generate-sitemap.mjs a cada build

---

## REGRAS DE TRABALHO

1. **NUNCA altere um componente que não foi explicitamente pedido.**
2. **Antes de qualquer refactor, leia o git log e entenda o que foi feito.**
3. **Se precisar corrigir um bug, crie um arquivo novo ou altere o mínimo possível.**
4. **Sempre rode `npm run build` antes de commitar.**
5. **Nunca commite arquivos .mp4 ou imagens brutas (>1MB) — somente WebP.**
6. **Ao adicionar produto novo: apenas products.ts e imagens WebP em public/.**
7. **Qualquer dúvida sobre o que pode ou não tocar: consulte este arquivo.**

---

## REGRAS DE CONTEÚDO

### LINKS EXTERNOS
- NUNCA adicionar link externo que não leve à página exata do produto
- Link genérico para homepage de terceiro = NÃO colocar
- Se não há URL específica disponível = omitir completamente o link

### ORDEM DO CATÁLOGO (LEI)
- Carros-chefe SEMPRE primeiros: 1. Colchões 2. Camas Articuladas 3. Box
- Demais categorias em ordem alfabética após os carros-chefe
- Implementado via PRIORITY_CATEGORIES array em CatalogSection.tsx — não alterar a ordem

### IMAGEM DE CAPA DAS CATEGORIAS
- Cada categoria usa imagem real do seu produto principal como capa
- Colchões → diamante-1.webp | Camas → flexibed-roma-01.webp | Box → box-bau-01.webp
- Fallback: /images/Logo Novo.png
- Não usar imagens genéricas ou placeholders

---
Última atualização: 16/05/2026
Responsável: Denis (Stein Technology)
