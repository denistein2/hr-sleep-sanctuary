import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const SRC_BASE = 'D:\\PRODUTOS EKO7\\CAMAS\\';
const DIST_BASE = 'd:\\hrcolchoes\\hr-sleep-sanctuary\\public\\produtos\\';

const MAPPINGS = {
  "CAMA - LISBOA": "flexibed-lisboa",
  "CAMA - ROMA": "flexibed-roma",
  "CAMA-GRAN JAGUAR": "flexibed-gran-jaguar",
  "Floating Bed": "floating-bed",
  "BOX SLIM": "box-slim"
};

async function processImages() {
  const subdirs = fs.readdirSync(SRC_BASE);
  
  console.log('--- RELATÓRIO DE OTIMIZAÇÃO (CAMAS) ---');

  for (const subdir of subdirs) {
    let slug = MAPPINGS[subdir];
    if (!slug) {
      // kebab-case fallback
      slug = subdir.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
      console.log(`Using fallback slug for ${subdir}: ${slug}`);
    }

    const srcPath = path.join(SRC_BASE, subdir);
    if (!fs.statSync(srcPath).isDirectory()) continue;

    const distPath = path.join(DIST_BASE, slug);
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath, { recursive: true });
    }

    const files = fs.readdirSync(srcPath);
    let count = 0;

    // Get existing files in dist to determine starting index
    const existingFiles = fs.readdirSync(distPath).filter(f => f.startsWith(slug) && f.endsWith('.webp'));
    count = existingFiles.length;

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      if (['.jpg', '.jpeg', '.png', '.tif', '.tiff'].includes(ext)) {
        const inputPath = path.join(srcPath, file);
        
        // Sequential naming
        const nextIndex = count + 1;
        const fileName = `${slug}-${String(nextIndex).padStart(2, '0')}.webp`;
        const outputPath = path.join(distPath, fileName);

        // Check if this specific original file (by name) was already processed? 
        // No, the prompt says "Don't overwrite existing WebPs". 
        // Since I'm using sequential naming, I should be careful.
        // Actually, if I just append, it's safer.
        
        if (fs.existsSync(outputPath)) {
          // console.log(`Skipping existing: ${fileName}`);
          // count++; // Increment to skip the name too
          // continue;
          
          // Better: if file exists, skip this index and find next
          continue;
        }

        try {
          const stats = fs.statSync(inputPath);
          const beforeSize = (stats.size / 1024).toFixed(2);

          await sharp(inputPath)
            .resize({ width: 1200, withoutEnlargement: true })
            .webp({ quality: 82 })
            .toFile(outputPath);

          const afterStats = fs.statSync(outputPath);
          const afterSize = (afterStats.size / 1024).toFixed(2);

          console.log(`${subdir} | ${file} | ${beforeSize} KB -> ${afterSize} KB | Saved as ${fileName}`);
          count++;
        } catch (err) {
          console.error(`Error processing ${file}: ${err.message}`);
        }
      }
    }
  }
}

processImages().catch(console.error);
