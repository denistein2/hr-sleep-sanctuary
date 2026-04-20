#!/usr/bin/env node
/**
 * Gera public/sitemap.xml a partir dos dados em src/data/products.ts.
 * Executado pelo script `prebuild` do package.json.
 */
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const SITE_URL = "https://hrcolchoes.steintechnology.com.br";
const productsFile = readFileSync(resolve(root, "src/data/products.ts"), "utf8");

const extractSlugs = (blockRegex) => {
  const block = productsFile.match(blockRegex);
  if (!block) return [];
  return [...block[1].matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
};

// categories é o primeiro array
const categoriesBlock = productsFile.match(/export const categories:[^=]+=\s*\[([\s\S]*?)\n\];/);
const productsBlock = productsFile.match(/export const products:[^=]+=\s*\[([\s\S]*?)\n\];/);

if (!categoriesBlock || !productsBlock) {
  console.error("Não foi possível extrair categories/products de src/data/products.ts");
  process.exit(1);
}

const categorySlugs = [...categoriesBlock[1].matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

const productEntries = [
  ...productsBlock[1].matchAll(
    /categorySlug:\s*"([^"]+)"[\s\S]*?slug:\s*"([^"]+)"|slug:\s*"([^"]+)"[\s\S]*?categorySlug:\s*"([^"]+)"/g
  ),
].map((m) => ({
  categorySlug: m[1] ?? m[4],
  slug: m[2] ?? m[3],
}));

const today = new Date().toISOString().slice(0, 10);

const urls = [
  { loc: `${SITE_URL}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${SITE_URL}/privacidade`, changefreq: "yearly", priority: "0.3" },
  ...categorySlugs.map((s) => ({
    loc: `${SITE_URL}/produtos/${s}`,
    changefreq: "weekly",
    priority: "0.8",
  })),
  ...productEntries.map((p) => ({
    loc: `${SITE_URL}/produtos/${p.categorySlug}/${p.slug}`,
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
