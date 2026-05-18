## 🚨 HISTÓRICO DE VIOLAÇÕES (LEIA)

Você já violou as regras múltiplas vezes mexendo em coisas que não foram pedidas.
Cada violação custa horas para reverter e frustra o cliente.

EXEMPLOS DE VIOLAÇÕES RECENTES:
- Trocou o vídeo da home sem pedido
- Alterou a frase inicial do hero sem pedido
- Trocou imagens do Série Ouro sem pedido
- Marcou Seven como isLaunch sem pedido
- Quebrou ProductGallery na "auditoria" sem necessidade

ANTES DE QUALQUER MUDANÇA:
1. Pergunte: "Isso foi explicitamente pedido?"
2. Se não → NÃO FAÇA
3. Em qualquer dúvida → PERGUNTE AO DENIS PRIMEIRO

Não há orçamento para refatoração espontânea. Apenas pedidos explícitos.

---

# ⚠️ REGRAS DO PROJETO — HR COLCHÕES
# Última atualização: 16/05/2026
# Responsável: Denis Stein (Stein Technology)
# LEIA ESTE ARQUIVO COMPLETO ANTES DE QUALQUER AÇÃO

---

## ⛔ LEI MÁXIMA

ANTES de modificar QUALQUER arquivo, responda:
1. O Denis pediu EXPLICITAMENTE para alterar este arquivo? NÃO → NÃO TOQUE.
2. Este arquivo está na lista de PROTEGIDOS abaixo? SIM → NÃO TOQUE.
3. Está em dúvida? SIM → PERGUNTE AO DENIS ANTES DE AGIR.

Uma pergunta custa 10 segundos. Refazer o que quebrou custa horas.

---

## 🔒 ARQUIVOS PROTEGIDOS — NUNCA ALTERAR SEM PEDIDO EXPLÍCITO

| Arquivo | O que quebra se mexer |
|---------|----------------------|
| src/components/ProductGallery.tsx | Imagens e vídeos somem |
| src/components/YouTubeFacade.tsx | Embed YouTube para de funcionar |
| src/pages/ProductPage.tsx | Layout do produto quebra |
| src/components/ProductCard.tsx | Cards do catálogo quebram |
| src/components/LaunchSpotlight.tsx | Componente de lançamento (guardado para uso futuro) |
| src/components/CatalogSection.tsx | Capas do catálogo quebram |
| src/components/Header.tsx | Menu de navegação quebra — APROVADO em 17/05/2026. Mega menu 3 colunas com ícones está correto e aprovado. Qualquer refactor não solicitado = violação da lei. |
| src/components/Footer.tsx | Rodapé quebra |
| public/produtos/** | NUNCA deletar imagens WebP |

---

## ✅ FUNCIONALIDADES APROVADAS — NÃO REFATORAR

### Layout Produto (ProductPage.tsx)
- H1 no topo
- Grid 2 colunas desktop: esquerda 60% galeria | direita 40% descrição + badges
- Mobile: coluna única (imagens → descrição → specs)
- Badge Premium (dourado) / Relax (azul) abaixo do H1
- Campo "Composição" (foamType) nas especificações
- Seção "Gostaria de uma Consultoria?" com botão WhatsApp verde
- Specs em largura total abaixo do grid

### Vídeos YouTube (ProductGallery + YouTubeFacade)
- Se videoId !== null → renderiza embed via YouTubeFacade
- Se videoId === null → NÃO renderiza nada (sem iframe vazio)
- URL embed: https://www.youtube.com/embed/{videoId}
- Embed fica em ProductPage, FORA do ProductGallery

### WhatsApp
- Mensagem: "Olá, tenho interesse no [Categoria] [Nome], gostaria de marcar uma consultoria."
- Função buildWhatsAppMessage em ProductPage.tsx
- encodeURIComponent aplicado na mensagem completa
- Número: 51 98491-0838

### Imagens
- Todas em WebP em public/produtos/[slug]/
- Mapeamento de slug → pasta em src/data/productImages.ts ← CRÍTICO
- Ao adicionar produto novo: SEMPRE adicionar entrada em productImages.ts
- Nomenclatura: [slug]-01.webp, [slug]-02.webp, etc.
- Atributo loading="lazy" em todas as imagens

### Catálogo (CatalogSection)
- Capas reais por categoria:
  colchoes:          /produtos/diamante/diamante-01.webp
  camas-articuladas: /produtos/flexibed-gran-jaguar/flexibed-gran-jaguar-01.webp
  camas-e-box:       /produtos/cama-gran-jaguar/cama-gran-jaguar-01.webp
  poltronas:         /produtos/poltrona/poltrona-01.webp
  travesseiros:      /produtos/travesseiro-visco/travesseiro-visco-01.webp
  acessorios:        /produtos/tenis-magnetico-fn1/tenis-magnetico-fn1-01.webp
  cabeceiras:        /produtos/cabeceira-infinity/cabeceira-infinity-01.webp
- Fallback: /images/Logo Novo.png

### LaunchSpotlight
- Componente existe em src/components/LaunchSpotlight.tsx
- Está OCULTO na home (linha comentada em Index.tsx)
- Para ativar: descomentar a linha e setar isLaunch: true no produto
- Para desativar: comentar a linha (não deletar o componente)

---

## 📋 ORDEM OFICIAL DAS CATEGORIAS (DEFINITIVA)

### Menu dropdown "Produtos" e catálogo da Home:
1. Colchões (slug: colchoes)
2. Camas Articuladas (slug: camas-articuladas)
3. Camas e Box (slug: camas-e-box)
4. Poltronas e Cadeiras (slug: poltronas)
5. Travesseiros (slug: travesseiros)
6. Acessórios (slug: acessorios)

Cabeceiras: visível no menu mas não no catálogo principal

REGRA: Categoria sem produto com hidden: false → hidden: true automático.

---

## 📦 ORDEM DOS PRODUTOS POR CATEGORIA

### Colchões (categorySlug: "colchoes")
| order | Produto | slug | visible |
|-------|---------|------|---------|
| 1 | Diamante | diamante | ✅ |
| 2 | Série Ouro c/ Pillow | serie-ouro-pillow | ✅ |
| 3 | Série Ouro s/ Pillow | serie-ouro | ✅ |
| 4 | Renova | renova | ✅ |
| 5 | News | news | ✅ |
| 6 | Único | unico | ✅ |
| 7 | Lunar | lunar | ✅ |
| 8 | Seven | seven | ✅ |
| 99 | Baby | baby | 🔴 oculto |
| 99 | Montreal | montreal | 🔴 oculto |

### Camas Articuladas (categorySlug: "camas-articuladas")
| order | Produto | slug |
|-------|---------|------|
| 1 | FlexiBed Gran Jaguar | flexibed-gran-jaguar |
| 2 | FlexiBed Roma | flexibed-roma |
| 3 | FlexiBed Lisboa | flexibed-lisboa |

### Camas e Box (categorySlug: "camas-e-box")
| order | Produto | slug |
|-------|---------|------|
| 1 | Box Clássico | box-classico |
| 2 | Box Baú | box-bau |
| 3 | Box Slim | box-slim |
| 4 | Floating Bed | floating-bed |
| 5 | Cama Gran Jaguar | cama-gran-jaguar |
| 6 | Cama Roma | cama-roma |
| 7 | Cama Lisboa | cama-lisboa |

### Poltronas e Cadeiras (categorySlug: "poltronas")
| order | Produto | slug |
|-------|---------|------|
| 1 | Poltrona | poltrona |
| 2 | Cadeira Presidente | cadeira-presidente |
| 3 | Cadeira Diretor | cadeira-diretor |
| 4 | Cadeira Secretária | cadeira-secretaria |

### Travesseiros (categorySlug: "travesseiros")
| order | Produto | slug |
|-------|---------|------|
| 1 | Travesseiro Visco Elástico Adulto Magnético | travesseiro-visco |
| 2 | Travesseiro Hugging Corpo Visco Elástico Magnético | travesseiro-hugging |
| 3 | Suporte Multi Conforto | suporte-multi-conforto |

### Acessórios (categorySlug: "acessorios")
| order | Produto | slug |
|-------|---------|------|
| 1 | Tênis Magnético FN1 | tenis-magnetico-fn1 |
| 2 | Palmilha Magnética | palmilha-magnetica |
| 3 | Linha Fitness LEGGE | linha-fitness-legge |

### Cabeceiras (categorySlug: "cabeceiras")
| order | Produto | slug | visible |
|-------|---------|------|---------|
| 1 | Cabeceira Infinity | cabeceira-infinity | ✅ |
| 2 | Cabeceira Modular Olímpia | cabeceira-olimpia | ✅ |
| 3 | Cabeceira Gran Jaguar | cabeceira-gran-jaguar | 🔴 sem imagens |
| 4 | Cabeceira Roma | cabeceira-roma | 🔴 sem imagens |
| 5 | Cabeceira Lisboa | cabeceira-lisboa | 🔴 sem imagens |
| 6 | Cabeceira Origem | cabeceira-origem | ✅ |
| 7 | Cabeceira Cincinnati | cabeceira-cincinnati | ✅ |
| 8 | Cabeceira Maceió | cabeceira-maceio | ✅ |
| 9 | Cabeceira Rio | cabeceira-rio | ✅ |
| 10 | Cabeceira Himalaia | cabeceira-himalaia | ✅ |

---

## 🔑 REGRA CRÍTICA: productImages.ts

Todo produto novo DEVE ter entrada em src/data/productImages.ts:
  "slug-do-produto": "slug-do-produto"

SEM ESSA ENTRADA → ProductGallery não renderiza imagem, mesmo que o arquivo exista.
Esta foi a causa raiz de vários bugs durante o desenvolvimento.

---

## 🚫 LINKS EXTERNOS

NUNCA adicionar link externo que não leve à página exata do produto.
Link genérico para homepage de terceiro = NÃO colocar.
Se não há URL específica disponível = omitir completamente.
"Ver ficha técnica oficial na Eko'7" foi REMOVIDO por este motivo.

---

## 🚀 SISTEMA DE LANÇAMENTOS

- Campo `isLaunch?: boolean` em products.ts
- Apenas UM produto com isLaunch: true por vez
- Para ativar destaque: isLaunch: true + descomentar LaunchSpotlight em Index.tsx
- Para desativar: isLaunch: false + comentar linha do LaunchSpotlight
- NÃO deletar o componente LaunchSpotlight.tsx

---

## ⚙️ PERFORMANCE E BUILD

- vite-plugin-compression: gzip em todos os assets
- Code splitting: vendor / ui / router
- Sitemap: gerado dinamicamente via generate-sitemap.mjs a cada build
- Imagens: lazy loading em todas via loading="lazy"
- Vídeos: YouTube embed apenas, NUNCA MP4 local no repositório
- .gitignore: public/produtos/**/*.mp4 (MP4s bloqueados)
- Build: sempre rodar `npm run build` antes de commitar

---

## 📱 INFORMAÇÕES DA DISTRIBUIDORA

- Nome: HR Colchões
- WhatsApp: 51 98491-0838
- Instagram: @Hr_Colchoes
- YouTube: https://www.youtube.com/@GrupoEko7
- Site: hrcolchoes.steintechnology.com.br
- Deploy: Vercel (auto-deploy em push para main)
- Repositório: github.com/denistein2/hr-sleep-sanctuary

---

## 🗓️ ROADMAP BACKOFFICE (próximas fases)

FASE 2 — Backoffice Admin (Junho semana 1-2):
  □ Supabase schema (SQL já planejado)
  □ Admin login do primo
  □ CRUD Produtos sem tocar código
  □ Upload imagens → Supabase Storage
  □ Site passa a ler Supabase em vez de products.ts

FASE 3 — CRM (Junho semana 3-4):
  □ Captura de lead via WhatsApp
  □ Cadastro de clientes
  □ Funil de conversão (novo/contato/proposta/fechado)

FASE 4 — Campanhas (Julho):
  □ Meta Business Pixel
  □ Google Ads conversion tracking
  □ UTM tracking automático
  □ Dashboard de ROI

---
FIM DO DOCUMENTO DE REGRAS
---
