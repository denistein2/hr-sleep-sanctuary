import fs from 'fs';
import path from 'path';

// Mocking the data environment to audit the file
const productsFile = fs.readFileSync('d:\\hrcolchoes\\hr-sleep-sanctuary\\src\\data\\products.ts', 'utf8');

// Simple extraction of products using regex or just reading the file.
// Since it's a TS file, I'll extract the PRODUCTS array.
const productsMatch = productsFile.match(/export const PRODUCTS: Product\[\] = (\[[\s\S]*?\]);/);
if (!productsMatch) {
  console.error("Could not find PRODUCTS array in products.ts");
  process.exit(1);
}

// I'll use a safer way to parse the products by cleaning up some TS-specific stuff 
// OR I can just iterate over the file lines.
// Actually, I'll just write a JS script that imports the data if I can? 
// No, I'll use regex for speed.

const productsStr = productsMatch[1]
  .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '') // remove comments
  .replace(/WARRANTY_PREMIUM/g, '"WARRANTY_PREMIUM"')
  .replace(/WARRANTY_RELAX/g, '"WARRANTY_RELAX"')
  .replace(/CERTS_STANDARD/g, '[]')
  .replace(/SIZES_STANDARD/g, '""');

// This is still risky. I'll just use a line-by-line approach for specific fields.

const lines = productsFile.split('\n');
let currentProduct = null;
const products = [];

for (let line of lines) {
  line = line.trim();
  if (line.startsWith('slug:')) {
    if (currentProduct) products.push(currentProduct);
    currentProduct = { slug: line.split('"')[1], images: [], hidden: false, videoId: null, shortDescription: '', warranty: '', line: '' };
  }
  if (currentProduct) {
    if (line.includes('hidden: true')) currentProduct.hidden = true;
    if (line.includes('videoId:')) {
        const v = line.match(/"(.*?)"/);
        currentProduct.videoId = v ? v[1] : null;
    }
    if (line.includes('shortDescription:')) {
        const d = line.match(/"(.*?)"/);
        currentProduct.shortDescription = d ? d[1] : '';
    }
    if (line.includes('warranty:')) {
        currentProduct.warranty = line.split(':')[1].replace(/,/g, '').trim();
    }
    if (line.includes('line:')) {
        currentProduct.line = line.split('"')[1];
    }
    if (line.startsWith('"/produtos/')) {
        const img = line.match(/"(.*?)"/);
        if (img) currentProduct.images.push(img[1]);
    }
  }
}
if (currentProduct) products.push(currentProduct);

console.log('| slug | imagens | imagem existe | videoId | descrição | linha | status |');
console.log('| :--- | :--- | :--- | :--- | :--- | :--- | :--- |');

for (const p of products) {
  if (p.hidden) continue;

  const hasImages = p.images.length > 0;
  let allExist = true;
  const missing = [];

  for (const img of p.images) {
    const fullPath = path.join('d:\\hrcolchoes\\hr-sleep-sanctuary\\public', img);
    if (!fs.existsSync(fullPath)) {
      allExist = false;
      missing.push(img);
    }
  }

  const descOk = p.shortDescription.length > 60;
  const status = (hasImages && allExist && descOk && p.warranty && p.line) ? '✅' : '❌';

  console.log(`| ${p.slug} | ${p.images.length} | ${allExist ? 'Sim' : 'Não (' + missing.length + ')'} | ${p.videoId || '-'} | ${descOk ? 'Ok' : 'Curta'} | ${p.line} | ${status} |`);
}
