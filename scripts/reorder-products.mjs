#!/usr/bin/env node
/**
 * Reordena blocos de produtos em src/data/products.ts seguindo
 * a ordem oficial do catálogo Eko'7 rev. 17 (Opção A: só reordena
 * o que já existe; não adiciona/remove produtos).
 */
import { readFileSync, writeFileSync } from "node:fs";

const FILE = "src/data/products.ts";
const src = readFileSync(FILE, "utf8");

// Ordem desejada por slug, por categorySlug.
// Slugs não listados aqui ficam depois, na ordem atual.
const ORDER = {
  colchoes: ["serie-ouro", "pangeia", "comfort", "unico", "lunar", "news"],
  "camas-articuladas": ["flexibed-roma", "flexibed-lisboa", "flexibed-gran-jaguar"],
  boxes: ["box-slim", "box-bau", "box-classico"],
  "acessorios-magneticos": [
    "palmilha-magnetica",
    "sandalia-couro-magnetica",
    "sandalias-magneticas",
    "emplasto-magnetico",
  ],
  mobiliario: [
    "cabeceira-olimpia",
    "cabeceira-cincinnati",
    "cabeceira-maceio",
    "puff",
    "poltrona",
    "poltrona-columbia",
    "cadeira-presidente",
  ],
};

// Extrai array de products como string interna + limites.
const m = src.match(/(export const products:[^=]+=\s*\[)([\s\S]*?)(\n\];)/);
if (!m) throw new Error("Não consegui isolar o array 'products'");
const [, head, body, tail] = m;

// Parse blocos de objeto. Cada produto começa com "  {" e termina com "  },".
// Usamos balanceamento de chaves.
const blocks = [];
let depth = 0;
let start = -1;
for (let i = 0; i < body.length; i++) {
  const ch = body[i];
  if (ch === "{") {
    if (depth === 0) start = i;
    depth++;
  } else if (ch === "}") {
    depth--;
    if (depth === 0) {
      // inclui vírgula final se houver
      let end = i + 1;
      while (body[end] === "," || body[end] === " " || body[end] === "\t") end++;
      // incluir o \n logo após a vírgula
      if (body[end] === "\n") end++;
      blocks.push({ raw: body.slice(start, end), start, end });
      start = -1;
    }
  }
}

console.log(`Encontrados ${blocks.length} blocos de produto.`);

// Anota cada bloco com seu slug + categorySlug.
const meta = blocks.map((b) => {
  const slug = (b.raw.match(/\n\s+slug:\s*"([^"]+)"/) || [])[1];
  const categorySlug = (b.raw.match(/categorySlug:\s*"([^"]+)"/) || [])[1];
  const comment = (b.raw.match(/^\s*\/\/[^\n]*\n/) || [])[0] || "";
  return { ...b, slug, categorySlug, comment };
});

// Preserva comentários de seção (que ficam ENTRE blocos) como separadores.
// Captura tudo entre fim de bloco anterior e início do próximo.
const separators = [];
for (let i = 0; i < blocks.length; i++) {
  const prevEnd = i === 0 ? 0 : blocks[i - 1].end;
  const thisStart = blocks[i].start;
  separators.push(body.slice(prevEnd, thisStart));
}
// separador após último bloco
separators.push(body.slice(blocks[blocks.length - 1].end));

// Agrupa por categoria mantendo ordem de aparição de categorias.
const categoriesSeen = [];
const grouped = new Map();
for (const item of meta) {
  if (!grouped.has(item.categorySlug)) {
    grouped.set(item.categorySlug, []);
    categoriesSeen.push(item.categorySlug);
  }
  grouped.get(item.categorySlug).push(item);
}

// Reordena dentro de cada categoria conforme ORDER.
function reorderGroup(cat, items) {
  const desired = ORDER[cat];
  if (!desired) return items; // sem spec para esta categoria
  const bySlug = new Map(items.map((it) => [it.slug, it]));
  const ordered = [];
  const used = new Set();
  for (const slug of desired) {
    if (bySlug.has(slug)) {
      ordered.push(bySlug.get(slug));
      used.add(slug);
    }
  }
  for (const it of items) {
    if (!used.has(it.slug)) ordered.push(it);
  }
  return ordered;
}

const newCategorized = new Map();
for (const cat of categoriesSeen) {
  newCategorized.set(cat, reorderGroup(cat, grouped.get(cat)));
}

// Reconstrói o body na ordem: primeiro separador + blocos por categoria
// (usando o primeiro separador de cada categoria como header, preservando comentários).
// Para simplificar, mantemos o separador ORIGINAL da primeira aparição de cada categoria,
// e depois os blocos já reordenados, intercalados sem separadores intermediários.
let out = "\n";
for (const cat of categoriesSeen) {
  const items = newCategorized.get(cat);
  // Pega o separador original que antecede o PRIMEIRO bloco dessa categoria na fonte.
  const firstIdx = meta.findIndex((x) => x.categorySlug === cat);
  const headerSep = separators[firstIdx] || "\n";
  out += headerSep;
  for (let i = 0; i < items.length; i++) {
    let raw = items[i].raw;
    // garante indent de 2 espaços antes do `{` de abertura (preservado pelo headerSep
    // apenas no primeiro bloco; demais perderam o indent ao reordenar)
    if (i > 0 && raw.startsWith("{")) raw = "  " + raw;
    out += raw;
  }
}
// mantem separador final (linha vazia antes do ];)
out += "\n";

const newSection = head + out + tail;
const rebuilt = src.replace(m[0], newSection);
writeFileSync(FILE, rebuilt);
console.log(`✓ ${FILE} reordenado`);
