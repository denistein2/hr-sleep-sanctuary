#!/usr/bin/env node
/**
 * Gera public/sitemap.xml a partir dos dados.
 * Executado pelo script `prebuild` do package.json.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const SITE_URL = "https://hrcolchoes.steintechnology.com.br";
const productsFile = readFileSync(resolve(root, "src/data/products.ts"), "utf8");
const categoriesFile = readFileSync(resolve(root, "src/data/categories.ts"), "utf8");

const productsMatch = productsFile.split('slug:').slice(1);
const productEntries = productsMatch.map(block => {
  const slug = block.match(/"(.*?)"/)?.[1];
  const cat = block.match(/categoryId:\s*"(.*?)"/)?.[1];
  const hidden = block.includes('hidden: true');
  return { slug, cat, hidden };
}).filter(p => p.slug && !p.hidden);

const categoriesBlock = categoriesFile.match(/export const CATEGORIES: Category\[\] = (\[[\s\S]*?\]);/);
const categorySlugs = [...categoriesFile.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

const today = new Date().toISOString().slice(0, 10);

const urls = [
  { loc: `${SITE_URL}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${SITE_URL}/sobre`, changefreq: "monthly", priority: "0.8" },
  { loc: `${SITE_URL}/privacidade`, changefreq: "yearly", priority: "0.3" },
  { loc: `${SITE_URL}/produtos`, changefreq: "weekly", priority: "0.9" },
  ...categorySlugs.map((s) => ({
    loc: `${SITE_URL}/${s}`,
    changefreq: "weekly",
    priority: "0.8",
  })),
  ...productEntries.map((p) => ({
    loc: `${SITE_URL}/${p.cat || 'produtos'}/${p.slug}`,
    changefreq: "monthly",
    priority: "0.6",
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) =>
      `  <url>\n    <loc>${u.loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${u.changefreq}</changefreq>\n    <priority>${u.priority}</priority>\n  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(resolve(root, "public/sitemap.xml"), xml);
console.log(`✓ sitemap.xml gerado com ${urls.length} URLs`);
