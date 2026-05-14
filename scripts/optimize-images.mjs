import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, relative, dirname, basename, extname } from 'path';
import { fileURLToPath } from 'url';

const SOURCE_DIR = 'D:/PRODUTOS EKO7/Colchões';
const OUTPUT_DIR = 'D:/hrcolchoes/hr-sleep-sanctuary/public/produtos/colchoes';
const QUALITY = 82;
const MAX_WIDTH = 1200;
const SUPPORTED = new Set(['.jpg', '.jpeg', '.png', '.tif', '.tiff', '.webp']);

async function collectImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectImages(full));
    } else if (SUPPORTED.has(extname(entry.name).toLowerCase())) {
      files.push(full);
    }
  }
  return files;
}

function slugify(str) {
  return str
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\w\s.-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .toLowerCase();
}

async function processImage(srcPath) {
  const relPath = relative(SOURCE_DIR, srcPath);
  const relDir = dirname(relPath);
  const name = basename(relPath, extname(relPath));

  const outDir = join(OUTPUT_DIR, slugify(relDir));
  const outPath = join(outDir, slugify(name) + '.webp');

  await mkdir(outDir, { recursive: true });

  const srcStat = await stat(srcPath);
  const srcKB = (srcStat.size / 1024).toFixed(1);

  await sharp(srcPath)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outPath);

  const outStat = await stat(outPath);
  const outKB = (outStat.size / 1024).toFixed(1);
  const reduction = (((srcStat.size - outStat.size) / srcStat.size) * 100).toFixed(0);

  console.log(`[OK] ${relPath}`);
  console.log(`     ${srcKB} KB → ${outKB} KB  (−${reduction}%)`);

  return { srcKB: srcStat.size, outKB: outStat.size };
}

async function main() {
  console.log(`Fonte:  ${SOURCE_DIR}`);
  console.log(`Saída:  ${OUTPUT_DIR}`);
  console.log(`Config: WebP q${QUALITY}, max ${MAX_WIDTH}px\n`);

  const images = await collectImages(SOURCE_DIR);
  console.log(`Encontradas ${images.length} imagens\n`);

  let totalSrc = 0;
  let totalOut = 0;
  let errors = 0;

  for (const img of images) {
    try {
      const { srcKB, outKB } = await processImage(img);
      totalSrc += srcKB;
      totalOut += outKB;
    } catch (err) {
      console.error(`[ERRO] ${img}: ${err.message}`);
      errors++;
    }
  }

  const totalSrcMB = (totalSrc / 1024 / 1024).toFixed(1);
  const totalOutMB = (totalOut / 1024 / 1024).toFixed(1);
  const totalReduction = (((totalSrc - totalOut) / totalSrc) * 100).toFixed(0);

  console.log('\n─────────────────────────────────────────');
  console.log(`Concluído: ${images.length - errors} ok, ${errors} erros`);
  console.log(`Total:     ${totalSrcMB} MB → ${totalOutMB} MB  (−${totalReduction}%)`);
}

main().catch(err => { console.error(err); process.exit(1); });
