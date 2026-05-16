# ⚠️ REGRAS DO PROJETO — HR COLCHÕES
# Leia ANTES de qualquer alteração. Estas regras são LEI.

## ⛔ LEI MÁXIMA — ANTES DE QUALQUER AÇÃO

ANTES de modificar QUALQUER arquivo, responda:
1. O Denis pediu EXPLICITAMENTE para alterar este arquivo? NÃO → NÃO TOQUE.
2. Este arquivo está na lista de PROTEGIDOS? SIM → NÃO TOQUE.
3. Está em dúvida? SIM → PERGUNTE AO DENIS ANTES DE AGIR.

### ARQUIVOS PROTEGIDOS — NUNCA ALTERAR SEM PEDIDO EXPLÍCITO:
- src/components/ProductGallery.tsx   ← quebrar = vídeos e imagens somem
- src/components/YouTubeFacade.tsx    ← quebrar = embed YouTube para
- src/pages/ProductPage.tsx           ← quebrar = layout produto quebra
- src/components/ProductCard.tsx      ← quebrar = catálogo quebra
- public/produtos/**                  ← nunca deletar imagens

### COMPROMETIMENTO ASSUMIDO:
Toda sessão nova: leia REGRAS.md PRIMEIRO.
Na dúvida sobre tocar em arquivo → PERGUNTE.
Uma pergunta custa 10 segundos.
Refazer o que quebrou custa horas e frustra o cliente.

---

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
- /camas-articuladas → camas-articuladas
- /camas-e-box → camas-e-box
- /poltronas → poltronas (hidden — sem produtos ainda)
- /travesseiros → travesseiros (hidden — sem produtos ainda)
- /acessorios → acessorios (hidden — sem produtos ainda)
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
- Implementado via CATEGORY_ORDER em categories.ts — não alterar sem autorização
- Apenas categorias com hidden !== true são exibidas no catálogo e menu

### IMAGEM DE CAPA DAS CATEGORIAS
- Cada categoria usa imagem real do seu produto principal como capa
- Colchões → diamante-1.webp | Camas Articuladas → flexibed-gran-jaguar-01.webp | Camas e Box → box-bau-01.webp
- Fallback: /images/Logo Novo.png
- Não usar imagens genéricas ou placeholders

---

## ORDEM OFICIAL DAS CATEGORIAS (DEFINITIVA — 16/05/2026)
Aprovada pelo cliente. Não alterar sem autorização explícita.

### CATEGORIAS VISÍVEIS (em ordem):
1. Colchões (slug: colchoes)
2. Camas Articuladas (slug: camas-articuladas)
3. Camas e Box (slug: camas-e-box)
4. Poltronas e Cadeiras (slug: poltronas) — oculto até ter produtos
5. Travesseiros (slug: travesseiros) — oculto até ter produtos
6. Acessórios (slug: acessorios) — oculto até ter produtos

### REGRA: Categoria sem produto com hidden: false → hidden: true automático.
### REGRA: Produtos não listados na ordem oficial → hidden: true.

### ORDEM DOS PRODUTOS POR CATEGORIA:
**[Colchões]** Diamante → Série Ouro Pillow → Série Ouro → Pangeia → News → Único → Lunar → Seven

**[Camas Articuladas]** Gran Jaguar → Roma → Lisboa

**[Camas e Box]** Box Clássico → Box Baú → Box Slim → Floating Bed

---

## SISTEMA DE LANÇAMENTOS

### Flag isLaunch
- Campo `isLaunch: true` em products.ts marca produto como lançamento ativo
- Apenas UM produto deve ter isLaunch: true por vez (o mais recente)
- Para trocar o lançamento: setar false no anterior, true no novo
- Produto com isLaunch: true aparece:
  1. Na seção LaunchSpotlight na Home (destaque total)
  2. Com badge "🔥 LANÇAMENTO" no card do catálogo
  3. Com order: 0 em sua categoria (primeiro da lista)

### Componente LaunchSpotlight
- Arquivo: src/components/LaunchSpotlight.tsx
- NÃO alterar sem solicitação explícita do cliente
- Design aprovado em 16/05/2026

---
Última atualização: 16/05/2026
Responsável: Denis (Stein Technology)
