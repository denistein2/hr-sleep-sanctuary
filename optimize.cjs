const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rawBaseDir = "D:\\PRODUTOS EKO7";
const publicBaseDir = path.join("d:\\hrcolchoes\\hr-sleep-sanctuary", "public", "produtos");

const mappingHints = {
  "diamante": ["Colchões", "DIAMANTE"],
  "serie-ouro-pillow": ["Colchões", "SERIE OURO"], // same raw folder
  "serie-ouro": ["Colchões", "SERIE OURO"], // same raw folder
  "seven": ["Colchões", "SEVEN"],
  "pangeia": ["Colchões", "PANGEIA"],
  "news": ["Colchões", "NEWS"],
  "unico": ["Colchões", "UNICO"],
  "lunar": ["Colchões", "LUNAR"],
  "baby": ["Colchões", "BABY"],
  "renova": ["Colchões", "RENOVA"],
  "flexibed-roma": ["CAMAS", "CAMA - ROMA"],
  "flexibed-gran-jaguar": ["CAMAS", "CAMA-GRAN JAGUAR"],
  "flexibed-lisboa": ["CAMAS", "CAMA - LISBOA"],
  "manta-quantica": ["ACESSÓRIOS", "MANTA"],
  "protetor-de-colchao": ["TÊXTIL", "PROTETOR DE COLCHÃO"]
};

// Function to find folder case-insensitively
function findFolderStrict(base, hintArr) {
  let current = base;
  for (const part of hintArr) {
    if (!fs.existsSync(current)) return null;
    let found = false;
    const items = fs.readdirSync(current, { withFileTypes: true });
    for (const item of items) {
      if (item.isDirectory() && item.name.toLowerCase().includes(part.toLowerCase())) {
        current = path.join(current, item.name);
        found = true;
        break;
      }
    }
    if (!found) return null;
  }
  return current;
}

async function processImages() {
  const report = {};

  for (const [slug, hintArr] of Object.entries(mappingHints)) {
    console.log(`Processing ${slug}...`);
    const rawFolder = findFolderStrict(rawBaseDir, hintArr);
    
    if (!rawFolder) {
      console.log(`  -> RAW folder not found for ${slug}`);
      report[slug] = { status: "missing_raw", images: [] };
      continue;
    }

    const publicFolder = path.join(publicBaseDir, "colchoes", slug); // We will place them in colchoes/[slug] for consistency, or just [slug]. The user said public/produtos/[slug]/ but in ProductGallery it uses `/produtos/colchoes/[slug]`. I will use public/produtos/colchoes/[slug] if it's a mattress. Actually, let's just use public/produtos/[slug] and update the TS to point to it.
    // Wait, the user said "public/produtos/[slug]/". Let's do that.
    const outFolder = path.join(publicBaseDir, slug);
    if (!fs.existsSync(outFolder)) {
      fs.mkdirSync(outFolder, { recursive: true });
    }

    const files = fs.readdirSync(rawFolder).filter(f => /\.(jpg|jpeg|png|tif|tiff)$/i.test(f));
    
    if (files.length === 0) {
      console.log(`  -> No images found in ${rawFolder}`);
      report[slug] = { status: "no_images_in_raw", images: [] };
      continue;
    }

    const generatedImages = [];
    let totalOldSize = 0;
    let totalNewSize = 0;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const rawPath = path.join(rawFolder, file);
      const newFileName = `${slug}-${i + 1}.webp`;
      const outPath = path.join(outFolder, newFileName);

      const oldSize = fs.statSync(rawPath).size;
      totalOldSize += oldSize;

      await sharp(rawPath)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(outPath);

      const newSize = fs.statSync(outPath).size;
      totalNewSize += newSize;

      console.log(`    [${slug}] ${file} -> ${newFileName} | ${(oldSize/1024).toFixed(1)}KB -> ${(newSize/1024).toFixed(1)}KB`);
      generatedImages.push(`/produtos/${slug}/${newFileName}`);
    }

    report[slug] = {
      status: "optimized",
      images: generatedImages,
      oldSizeKB: (totalOldSize / 1024).toFixed(1),
      newSizeKB: (totalNewSize / 1024).toFixed(1),
      count: generatedImages.length
    };
  }

  fs.writeFileSync("d:\\hrcolchoes\\hr-sleep-sanctuary\\image_report.json", JSON.stringify(report, null, 2));
  console.log("Optimization complete. Report saved to image_report.json");
}

processImages().catch(err => console.error(err));
