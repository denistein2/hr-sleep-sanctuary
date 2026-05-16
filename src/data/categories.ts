export type Category = {
  name: string;
  slug: string;       // usado na URL
  hasProducts: boolean;
  description?: string;
  icon?: string;
};

// Ordem do menu oficial Eko'7. Slugs em kebab-case sem acento.
export const CATEGORIES: Category[] = [
  { name: "Acessórios",           slug: "acessorios",         hasProducts: true },
  { name: "Box",                  slug: "box",                hasProducts: true, description: "Box e bases para colchão Eko'7 — Slim, Clássico, Baú e Bicama", icon: "Package" },
  { name: "Camas Articuladas",    slug: "camas",              hasProducts: true },
  { name: "Cabeceiras",           slug: "cabeceira",          hasProducts: true },
  { name: "Poltronas e Cadeiras", slug: "cadeira-e-poltrona", hasProducts: true },
  { name: "Calçados",             slug: "calcados",           hasProducts: false },
  { name: "Colchões",             slug: "colchoes",           hasProducts: true  },
  { name: "Colchonetes",          slug: "colchonetes",        hasProducts: false },
  { name: "Linha Fitness",        slug: "linha-fitness",      hasProducts: true },
  { name: "Linha Íntima",         slug: "linha-intima",       hasProducts: false },
  { name: "Linha Pet",            slug: "linha-pet",          hasProducts: false },
  { name: "Linha Têxtil",         slug: "linha-textil",       hasProducts: false },
  { name: "Puffs",                slug: "puff",               hasProducts: false },
  { name: "Tapetes",              slug: "tapetes",            hasProducts: false },
  { name: "Travesseiros",         slug: "travesseiros",       hasProducts: true },
];

/**
 * Helper para usar em links do Header/Footer/CatalogSection.
 * Retorna a rota correta para qualquer categoria.
 */
export function getCategoryPath(slug: string): string {
  return `/${slug}`;
}

// Categorias placeholder = todas exceto a que tem produtos.
export const PLACEHOLDER_CATEGORIES = CATEGORIES.filter(c => !c.hasProducts);
