import fs from 'fs';
import { products, categories } from './src/data/products.ts';

const SITE_URL = 'https://hrcolchoes.steintechnology.com.br';
const TODAY = new Date().toISOString().split('T')[0];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Core Pages -->
  <url>
    <loc>${SITE_URL}/</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/sobre</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${SITE_URL}/privacidade</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>

  <!-- Categories -->
`;

categories.forEach(cat => {
  sitemap += `  <url>
    <loc>${SITE_URL}/produtos/${cat.slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
});

sitemap += `\n  <!-- Products -->\n`;

products.forEach(prod => {
  sitemap += `  <url>
    <loc>${SITE_URL}/produtos/${prod.categorySlug}/${prod.slug}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>\n`;
});

sitemap += `</urlset>`;

console.log(sitemap);
