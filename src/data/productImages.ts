import { PRODUCTS } from "./products";

const BASE = "/produtos";

export function getProductImages(slugOrFolder: string): string[] {
  const p = PRODUCTS.find(p => p.slug === slugOrFolder || p.slug.replace(/-/g, "") === slugOrFolder);
  if (p && p.images) return p.images;
  return [];
}

export function getProductCoverImage(slug: string): string | null {
  const images = getProductImages(slug);
  return images.length > 0 ? images[0] : null;
}

export const PRODUCT_SLUG_TO_FOLDER: Record<string, string> = {
  "diamante": "diamante",
  "serie-ouro-pillow": "serie-ouro-pillow",
  "serie-ouro": "serie-ouro",
  "seven": "seven",
  "pangeia": "pangeia",
  "news": "news",
  "unico": "unico",
  "lunar": "lunar",
  "baby": "baby",
  "renova": "renova",
  "flexibed-roma": "flexibed-roma",
  "flexibed-gran-jaguar": "flexibed-gran-jaguar",
  "flexibed-lisboa": "flexibed-lisboa",
  "box-slim": "box-slim",
  "box-bau": "box-bau",
  "box-classico": "box-classico",
  "box-bicama": "box-bicama",
  "floating-bed": "floating-bed",
  "cama-gran-jaguar": "cama-gran-jaguar",
  "cama-roma": "cama-roma",
  "cama-lisboa": "cama-lisboa",
  "cabeceira-olimpia": "cabeceira-olimpia",
  "cabeceira-origem": "cabeceira-origem",
  "cabeceira-infinity": "cabeceira-infinity",
  "cabeceira-cincinnati": "cabeceira-cincinnati",
  "cabeceira-maceio": "cabeceira-maceio",
  "cabeceira-rio": "cabeceira-rio",
  "cabeceira-himalaia": "cabeceira-himalaia",
  "cabeceira-diamante": "cabeceira-diamante",
  "cabeceira-havai": "cabeceira-havai",
  "travesseiro-visco": "travesseiro-visco",
  "travesseiro-hugging": "travesseiro-hugging",
  "suporte-multi-conforto": "suporte-multi-conforto",
  "tenis-magnetico-fn1": "tenis-magnetico-fn1",
  "palmilha-magnetica": "palmilha-magnetica",
  "linha-fitness-legge": "linha-fitness-legge",
};

export function getFolderTitle(folder: string): string {
  return folder;
}

export function getFolderHierarchy(folder: string): { category: string; subcategory: string } | null {
  return null;
}
