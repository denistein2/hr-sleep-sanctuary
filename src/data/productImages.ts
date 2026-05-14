const BASE = "/produtos/colchoes";

/** Títulos explícitos para pastas sem prefixo especial */
const FOLDER_TITLES_EXPLICIT: Record<string, string> = {
  "baby":                   "Baby",
  "diamante":               "Diamante",
  "lunar":                  "Lunar",
  "news":                   "News",
  "pangeia":                "Pangeia",
  "renova":                 "Renova",
  "serie-ouro-com-pillow":  "Série Ouro com Pillow",
  "serie-ouro-sem-pillow":  "Série Ouro",
  "seven":                  "Seven",
  "unico":                  "Único",
};

/** Prefixos que representam categorias-pai com subcategorias */
const CATEGORY_PREFIXES: Record<string, string> = {
  "flexibed": "FlexiBed",
};

function toTitleCase(str: string): string {
  return str.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

/**
 * Retorna o título amigável de uma pasta.
 * Pastas com prefixo de categoria (ex: "flexibedroma") são decompostas
 * automaticamente: "flexibedroma" → "FlexiBed Roma".
 */
export function getFolderTitle(folder: string): string {
  if (FOLDER_TITLES_EXPLICIT[folder]) return FOLDER_TITLES_EXPLICIT[folder];

  for (const [prefix, categoryLabel] of Object.entries(CATEGORY_PREFIXES)) {
    if (folder.startsWith(prefix)) {
      const sub = folder.slice(prefix.length);
      return sub ? `${categoryLabel} ${toTitleCase(sub)}` : categoryLabel;
    }
  }

  return toTitleCase(folder);
}

/**
 * Retorna { category, subcategory } para pastas que pertencem a uma
 * categoria-pai (ex: "flexibedroma" → { category: "FlexiBed", subcategory: "Roma" }).
 * Retorna null para pastas simples.
 */
export function getFolderHierarchy(
  folder: string,
): { category: string; subcategory: string } | null {
  for (const [prefix, categoryLabel] of Object.entries(CATEGORY_PREFIXES)) {
    if (folder.startsWith(prefix)) {
      const sub = folder.slice(prefix.length);
      if (sub) return { category: categoryLabel, subcategory: toTitleCase(sub) };
    }
  }
  return null;
}

/** Retorna todas as pastas que pertencem a uma categoria-pai (ex: "flexibed") */
export function getCategoryFolders(categoryPrefix: string): string[] {
  return Object.keys(IMAGE_MANIFEST).filter((f) => f.startsWith(categoryPrefix));
}

/** @deprecated Use getFolderTitle() — mantido para compatibilidade */
export const FOLDER_TITLES: Record<string, string> = new Proxy(
  {} as Record<string, string>,
  { get: (_, folder) => (typeof folder === "string" ? getFolderTitle(folder) : undefined) },
);

/** Product slug (de products.ts) → pasta de imagens */
export const PRODUCT_SLUG_TO_FOLDER: Record<string, string> = {
  "diamante":                   "diamante",
  "serie-ouro-premium-pillow":  "serie-ouro-com-pillow",
  "serie-ouro-premium":         "serie-ouro-sem-pillow",
  "seven":                      "seven",
  "news":                       "news",
  "unico":                      "unico",
  "lunar":                      "lunar",
  "flexibed-roma":              "flexibedroma",
  "flexibed-lisboa":            "flexibedlisboa",
};

/** Manifesto estático completo — gerado a partir dos arquivos em public/ */
const IMAGE_MANIFEST: Record<string, string[]> = {
  "baby": [
    "dzt_eko7_junho2024_0172.webp",
    "dzt_eko7_junho2024_0173.webp",
    "dzt_eko7_junho2024_0174.webp",
    "dzt_eko7_junho2024_0175.webp",
    "eko-ambiente-baby-2021-montreal.webp",
  ],
  "diamante": [
    "eko7-210-sfi-diamante-ind.webp",
    "eko7-211-sfi-diamante-ind.webp",
    "eko7-214-sfi-diamante-det.webp",
    "eko7-215-sfi-diamante-ind.webp",
    "eko7-222-sfi-diamante-ind-tratar.webp",
    "eko7-226-san-diamante.webp",
    "eko7-230-san-diamante.webp",
    "eko7-242-san-diamante.webp",
    "eko7-544-san-diamante.webp",
    "eko7-656-san-lisboa-diamante.webp",
    "eko7-734-san-roma-diamante.webp",
  ],
  "flexibedgran-jaguar": [
    "eko7-527-san-gran-jaguar.webp",
    "eko7-561-san-gran-jaguar.webp",
  ],
  "flexibedlisboa": [
    "eko7-611-san-lisboa-joelho.webp",
    "eko7-642-san-lisboa-joelho.webp",
    "eko7-676-san-lisboa.webp",
  ],
  "flexibedroma": [
    "eko7-584-san-roma-joelho.webp",
    "eko7-591-san-roma.webp",
    "eko7-709-san-roma-joelho.webp",
    "eko7-980-sfi-roma-ind.webp",
    "eko7-981-sfi-roma-ind.webp",
    "eko7-987-san-roma.webp",
    "eko7-988-san-roma.webp",
  ],
  "lunar": [
    "lunar-amb-frontal.webp",
    "lunar-amb-lateral.webp",
    "1av-eko7-459-san-ambientar.webp",
    "1av-eko7-460-san-ambientar.webp",
    "eko7_nov24_0125-copiar.webp",
    "eko7_nov24_0137-2-copiar.webp",
    "eko7_nov24_0150-2-copiar.webp",
    "_mg_0140.webp",
    "_mg_0144.webp",
    "_mg_0167.webp",
    "_mg_0187.webp",
    "_mg_0193.webp",
    "_mg_0210.webp",
    "_mg_0215.webp",
    "_mg_0232.webp",
    "_mg_0245.webp",
    "_mg_0259.webp",
    "_mg_0272.webp",
    "_mg_0315.webp",
    "_mg_0343.webp",
    "_mg_0345.webp",
    "_mg_0362.webp",
    "_mg_0401.webp",
    "_mg_0416.webp",
    "_mg_0436.webp",
    "_mg_0460.webp",
    "_mg_0482.webp",
    "1av-eko7-446-sfi-ind.webp",
    "1av-eko7-449-sfi-ind.webp",
    "img_9667.webp",
    "img_9682.webp",
    "img_9684.webp",
    "img_9686.webp",
    "img_9689.webp",
    "img_9690.webp",
    "img_9904.webp",
    "img_9908.webp",
    "esquematico.webp",
    "pag-26.webp",
    "pag-27_.webp",
  ],
  "news": [
    "eko7-019-rfm-novo-news.webp",
    "eko7-392-sfi-news-ind.webp",
    "eko7-396-sfi-news-ind.webp",
    "eko7-417-sfi-news-ind.webp",
    "eko7-421-sfi-news-ind.webp",
    "eko7-424-san-news.webp",
    "eko7-428-san-news.webp",
    "eko7-605-san-roma-news.webp",
    "4muutxls.webp",
    "eko7-421-sfi-news-ind-1.webp",
  ],
  "pangeia": [
    "eko7-363-san-pangeia-base-e-cabeceira-verde.webp",
    "eko7-365-saa-pangeia-base-e-cabeceira-verde.webp",
    "eko7-368-san-pangeia-base-e-cabeceira-areia.webp",
    "eko7-369-san-pangeia-base-e-cabeceira-areia.webp",
    "dzt_eko7_junho2024_0015.webp",
    "dzt_eko7_junho2024_0016.webp",
    "dzt_eko7_junho2024_0017.webp",
    "eko7-018-rfm-pangeia.webp",
    "eko7-373-sfi-pangeia-ind.webp",
    "eko7-379-sfi-pangeia-areia-ind.webp",
    "eko7-387-sfi-pangeia-verde-ind.webp",
    "_mg_7083.webp",
    "_mg_7113.webp",
    "_mg_7114.webp",
    "_mg_7131.webp",
    "_mg_7153.webp",
    "_mg_7164.webp",
    "_mg_7167.webp",
    "_mg_7180.webp",
    "_mg_7244.webp",
    "_mg_7258.webp",
    "_mg_7309.webp",
    "_mg_7322.webp",
    "_mg_7334.webp",
    "26bde941-70c5-47ca-a075-e6b3671aadda.webp",
    "3510c2d7-e0b3-4936-b723-a91d84f1ce02.webp",
    "pag-18-e-34.webp",
    "pag-19-e-45.webp",
  ],
  "renova": [
    "renova-01-sem-fundo.webp",
    "renova-02-sem-fundo.webp",
    "1.webp",
    "4.webp",
    "13.webp",
    "14.webp",
    "15.webp",
    "16.webp",
    "17.webp",
    "18.webp",
    "19.webp",
    "20.webp",
    "21.webp",
    "22.webp",
    "23.webp",
    "desenho-esquematico.webp",
  ],
  "serie-ouro-com-pillow": [
    "dzt_eko7_junho2024_0010.webp",
    "dzt_eko7_junho2024_0011.webp",
    "dzt_eko7_junho2024_0012.webp",
    "dzt_eko7_junho2024_0013.webp",
    "dzt_eko7_junho2024_0014.webp",
    "dzt_eko7_junho2024_0027.webp",
    "dzt_eko7_junho2024_0028.webp",
    "dzt_eko7_junho2024_0029.webp",
    "dzt_eko7_junho2024_0030.webp",
    "dzt_eko7_junho2024_0032.webp",
    "dzt_eko7_junho2024_0033.webp",
    "dzt_eko7_junho2024_0036.webp",
    "dzt_eko7_junho2024_0122.webp",
    "dzt_eko7_junho2024_0141.webp",
    "dzt_eko7_junho2024_0145.webp",
    "dzt_eko7_junho2024_0148.webp",
  ],
  "serie-ouro-sem-pillow": [
    "serie-ouro-amb-frontal.webp",
    "serie-ouro-amb-lateral.webp",
    "dzt_eko7_junho2024_0001.webp",
    "dzt_eko7_junho2024_0002.webp",
    "dzt_eko7_junho2024_0003.webp",
    "dzt_eko7_junho2024_0004.webp",
    "dzt_eko7_junho2024_0005.webp",
    "dzt_eko7_junho2024_0006.webp",
    "dzt_eko7_junho2024_0007.webp",
    "dzt_eko7_junho2024_0008.webp",
    "dzt_eko7_junho2024_0022.webp",
    "dzt_eko7_junho2024_0023.webp",
    "dzt_eko7_junho2024_0024.webp",
    "dzt_eko7_junho2024_0025.webp",
    "dzt_eko7_junho2024_0026.webp",
    "dzt_eko7_junho2024_0034.webp",
    "dzt_eko7_junho2024_0035.webp",
    "dzt_eko7_junho2024_0121.webp",
    "dzt_eko7_junho2024_0140.webp",
    "dzt_eko7_junho2024_0146.webp",
    "eko7_nov24_0007-copiar.webp",
    "eko7_nov24_0032-copiar.webp",
  ],
  "seven": [
    "eko7-0001_fi_colchao-seven_158_marron_camadas-1.webp",
    "dsc06185.webp",
    "dsc06429.webp",
    "dsc06430.webp",
    "dsc06441.webp",
    "dsc06457.webp",
    "dsc06460.webp",
    "dsc06652.webp",
    "dsc06704.webp",
    "dsc06712.webp",
    "dsc06732.webp",
  ],
  "unico": [
    "eko7-757-san-unico-rose.webp",
    "eko7-758-san-unico-rose.webp",
    "eko7-761-san-unico-rose.webp",
    "eko7-831-san-unico-prata.webp",
    "eko7-832-san-unico-prata.webp",
    "eko7-835-san-unico-prata.webp",
    "eko7-842-san-unico-grafite.webp",
    "eko7-849-san-unico-grafite.webp",
    "eko7-851-san-unico-grafite.webp",
    "eko7-917-san-unico-cinza.webp",
    "eko7-923-san-unico-cinzs.webp",
    "eko7-926-san-unico-cinzs.webp",
    "eko7-1013-san-unico.webp",
    "eko7-1016-san-unico.webp",
    "eko7-769-sfi2-unico-rose-ind.webp",
    "eko7-771-sfi2-unico-rose-ind.webp",
    "eko7-777-sfi2-unico-rose-ind.webp",
    "eko7-815-sfi-unico-prata-ind.webp",
    "eko7-817-sfi-unico-prata-ind.webp",
    "eko7-820-sfi-unico-prata-ind.webp",
    "eko7-822-sfi-unico-prata-ind.webp",
    "eko7-860-sfi-unico-grafite-ind.webp",
    "eko7-866-sfi-unico-grafite-ind.webp",
    "eko7-869-sfi-unico-grafite-ind.webp",
    "eko7-899-sfi-unico-cinza-ind.webp",
    "eko7-902-sfi-unico-cinza-ind.webp",
    "eko7-905-sfi-unico-cinza-ind.webp",
    "eko7-907-sfi-unico-cinza-ind.webp",
    "eko7-1023-sfi-unico-ind.webp",
    "eko7-1025-sfi-unico-ind.webp",
    "eko7-1026-sfi-unico-ind.webp",
    "eko7-1027-sfi-unico-ind.webp",
  ],
};

/** Retorna todos os caminhos absolutos de imagens de uma pasta */
export function getProductImages(folder: string): string[] {
  return (IMAGE_MANIFEST[folder] ?? []).map((f) => `${BASE}/${folder}/${f}`);
}

/** Retorna o caminho da imagem de capa de um produto (pelo slug de products.ts) */
export function getProductCoverImage(slug: string): string | null {
  const folder = PRODUCT_SLUG_TO_FOLDER[slug];
  if (!folder) return null;
  const files = IMAGE_MANIFEST[folder];
  if (!files?.length) return null;
  return `${BASE}/${folder}/${files[0]}`;
}

/** Retorna todos os folders disponíveis, ordenados */
export const ALL_FOLDERS = Object.keys(IMAGE_MANIFEST).sort();
