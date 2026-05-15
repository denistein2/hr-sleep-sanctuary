import sharp from 'sharp';
import { readdir, mkdir, stat, copyFile, rm } from 'fs/promises';
import { join, extname, basename } from 'path';

const SRC_SERIE_OURO = 'D:/PRODUTOS EKO7/Colchões/SERIE OURO (SEM PILLOW)';
const OUT_SERIE_OURO = 'd:/hrcolchoes/hr-sleep-sanctuary/public/produtos/serie-ouro';

async function processSerieOuro() {
  console.log("Limpando diretório serie-ouro...");
  await rm(OUT_SERIE_OURO, { recursive: true, force: true });
  await mkdir(OUT_SERIE_OURO, { recursive: true });

  const entries = await readdir(SRC_SERIE_OURO, { withFileTypes: true });
  let count = 1;
  for (const entry of entries) {
    if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.tif', '.tiff', '.webp'].includes(ext)) {
        const outPath = join(OUT_SERIE_OURO, `serie-ouro-${count}.webp`);
        await sharp(join(SRC_SERIE_OURO, entry.name))
          .resize({ width: 1200, withoutEnlargement: true })
          .webp({ quality: 82 })
          .toFile(outPath);
        console.log(`[OK] serie-ouro-${count}.webp gerado`);
        count++;
      } else if (ext === '.mp4') {
        const outPath = join(OUT_SERIE_OURO, `serie-ouro-video.mp4`);
        await copyFile(join(SRC_SERIE_OURO, entry.name), outPath);
        console.log(`[OK] serie-ouro-video.mp4 copiado`);
      }
    }
  }
}

// Map for videos found in the Get-ChildItem earlier:
const VIDEOS = [
  { src: "D:/PRODUTOS EKO7/Colchões/FLEXIBED/MONTAGEM-FLEXIBED.mp4", out: "flexibed-roma/flexibed-roma-video.mp4" },
  { src: "D:/PRODUTOS EKO7/Colchões/FLEXIBED/GRAN JAGUAR/Eko7 537 Granjaguar 158 Articulado.mp4", out: "flexibed-gran-jaguar/flexibed-gran-jaguar-video.mp4" },
  { src: "D:/PRODUTOS EKO7/Colchões/FLEXIBED/LISBOA/Eko7 613 Lisboa 158 Joelho.mp4", out: "flexibed-lisboa/flexibed-lisboa-video.mp4" },
  { src: "D:/PRODUTOS EKO7/Colchões/LUNAR/1av Eko7 461 Video (1).mp4", out: "lunar/lunar-video.mp4" },
  { src: "D:/PRODUTOS EKO7/Colchões/NEWS/News Novo.mp4", out: "news/news-video.mp4" },
  { src: "D:/PRODUTOS EKO7/Colchões/PANGEIA/Eko7 212 (VAP) Pangeia.mp4", out: "pangeia/pangeia-video.mp4" },
  { src: "D:/PRODUTOS EKO7/Colchões/SERIE OURO (COM PILLOW)/SERIE OURO 2_1.mp4", out: "serie-ouro-pillow/serie-ouro-pillow-video.mp4" },
  { src: "D:/PRODUTOS EKO7/Colchões/SEVEN/Eko7 Seven_.mp4", out: "seven/seven-video.mp4" },
  { src: "D:/PRODUTOS EKO7/Colchões/ÚNICO/ÚNICO - EKO7.MP4", out: "unico/unico-video.mp4" },
  // the video for serie ouro sem pillow is already handled above!
];

async function copyVideos() {
  const BASE_OUT = 'd:/hrcolchoes/hr-sleep-sanctuary/public/produtos';
  for (const v of VIDEOS) {
    const outPath = join(BASE_OUT, v.out);
    await mkdir(join(BASE_OUT, dirname(v.out)), { recursive: true });
    try {
      await copyFile(v.src, outPath);
      console.log(`[OK] Vídeo copiado para: ${v.out}`);
    } catch (e) {
      console.error(`Erro ao copiar ${v.src}:`, e.message);
    }
  }
}

function dirname(path) {
  return path.split('/').slice(0, -1).join('/');
}

async function main() {
  await processSerieOuro();
  await copyVideos();
}

main().catch(console.error);
