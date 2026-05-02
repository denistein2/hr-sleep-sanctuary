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

const categoriesBlock = categoriesFile.match(/export const CATEGORIES = \[\s*([\s\S]*?)\n\]/);
const productsBlock = productsFile.match(/export const PRODUCTS: Product\[\] = \[\s*([\s\S]*?)\n\];/);

if (!categoriesBlock || !productsBlock) {
  console.error("Não foi possível extrair categories/products");
  process.exit(1);
}

const categoryNames = [...categoriesBlock[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);

const getCategorySlug = (category) => {
  if (category === "Colchão") return "colchoes";
  return category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

const categorySlugs = categoryNames.map(getCategorySlug);

const productSlugs = [...productsBlock[1].matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

const today = new Date().toISOString().slice(0, 10);

const urls = [
  { loc: `${SITE_URL}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${SITE_URL}/sobre`, changefreq: "monthly", priority: "1.0" },
  { loc: `${SITE_URL}/privacidade`, changefreq: "yearly", priority: "0.3" },
  ...categorySlugs.map((s) => ({
    loc: `${SITE_URL}/${s}`,
    changefreq: "weekly",
    priority: "0.8",
  })),
  ...productSlugs.map((s) => ({
    loc: `${SITE_URL}/colchoes/${s}`,
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
