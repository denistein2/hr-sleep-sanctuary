// convert-cabeceiras.mjs — converte imagens de cabeceiras para WebP
import sharp from 'sharp';
import { readdirSync, mkdirSync, existsSync } from 'fs';
import { join, extname, basename } from 'path';

const SOURCE_BASE = 'D:/PRODUTOS EKO7/CABECEIRAS';
const DEST_BASE = 'public/produtos';
const MAX_DIM = 1200;
const QUALITY = 82;

const MAPPINGS = [
  { folder: 'Cabeceira Origem', slug: 'cabeceira-origem' },
  { folder: 'Cabeceira Infinity', slug: 'cabeceira-infinity' },
];

// Cabeceira modular Olímpia — nome com caracter especial
const oligFolder = readdirSync(SOURCE_BASE).find(f => f.toLowerCase().includes('ol') && f.toLowerCase().includes('mpia'));
if (oligFolder) MAPPINGS.push({ folder: oligFolder, slug: 'cabeceira-olimpia' });

const EXT = ['.jpg', '.jpeg', '.png', '.tif', '.tiff', '.webp'];

async function convertFolder({ folder, slug }) {
  const srcDir = join(SOURCE_BASE, folder);
  const dstDir = join(DEST_BASE, slug);
  
  if (!existsSync(srcDir)) { console.log(`[SKIP] ${srcDir} not found`); return []; }
  mkdirSync(dstDir, { recursive: true });
  
  const files = readdirSync(srcDir)
    .filter(f => EXT.includes(extname(f).toLowerCase()) && !f.includes('(Tratar)'));
  
  const results = [];
  let i = 1;
  for (const file of files) {
    const src = join(srcDir, file);
    const dest = join(dstDir, `${slug}-${String(i).padStart(2, '0')}.webp`);
    try {
      await sharp(src)
        .resize({ width: MAX_DIM, height: MAX_DIM, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: QUALITY })
        .toFile(dest);
      results.push(`/produtos/${slug}/${slug}-${String(i).padStart(2, '0')}.webp`);
      console.log(`  ✓ ${file} → ${slug}-${String(i).padStart(2, '0')}.webp`);
      i++;
    } catch (e) {
      console.error(`  ✗ ${file}: ${e.message}`);
    }
  }
  return results;
}

(async () => {
  for (const m of MAPPINGS) {
    console.log(`\nProcessando: ${m.folder} → ${m.slug}`);
    const imgs = await convertFolder(m);
    console.log(`  Total: ${imgs.length} imagens`);
    if (imgs.length) console.log(`  Imagens: ${JSON.stringify(imgs)}`);
  }
  console.log('\nDone!');
})();
