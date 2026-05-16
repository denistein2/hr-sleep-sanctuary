import fs from 'fs';
import path from 'path';

// Manual data import due to environment
const productsFile = fs.readFileSync('d:\\hrcolchoes\\hr-sleep-sanctuary\\src\\data\\products.ts', 'utf8');
const categoriesFile = fs.readFileSync('d:\\hrcolchoes\\hr-sleep-sanctuary\\src\\data\\categories.ts', 'utf8');

// Extraction
const productsMatch = productsFile.match(/export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);/);
const categoriesMatch = categoriesFile.match(/export const CATEGORIES: Category\[\] = (\[[\s\S]*?\]);/);

// Parsing products (basic)
const products = [];
const lines = productsFile.split('\n');
let currentProduct = null;
for (let line of lines) {
  line = line.trim();
  if (line.startsWith('slug:')) {
    if (currentProduct) products.push(currentProduct);
    currentProduct = { slug: line.split('"')[1], categoryId: '' };
  }
  if (currentProduct && line.startsWith('categoryId:')) {
    currentProduct.categoryId = line.split('"')[1];
  }
  if (currentProduct && line.includes('hidden: true')) {
    currentProduct.hidden = true;
  }
}
if (currentProduct) products.push(currentProduct);

// Categories
const categories = [];
const catLines = categoriesFile.split('\n');
for (let line of catLines) {
  line = line.trim();
  if (line.includes('slug:')) {
    const slug = line.match(/slug:\s*"(.*?)"/);
    if (slug) categories.push(slug[1]);
  }
}

const SITE_URL = "https://hrcolchoes.steintechnology.com.br";
const today = "2026-05-15";

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/sobre</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${SITE_URL}/privacidade</loc>
    <lastmod>${today}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>${SITE_URL}/produtos</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;

// Add categories
for (const cat of categories) {
  sitemap += `
  <url>
    <loc>${SITE_URL}/${cat}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
}

// Add products
for (const p of products) {
  if (p.hidden) continue;
  const category = p.categoryId || 'produtos';
  sitemap += `
  <url>
    <loc>${SITE_URL}/${category}/${p.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
}

sitemap += `\n</urlset>`;

fs.writeFileSync('d:\\hrcolchoes\\hr-sleep-sanctuary\\public\\sitemap.xml', sitemap);
console.log("Sitemap regenerated successfully.");
