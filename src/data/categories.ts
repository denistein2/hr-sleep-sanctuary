export type Category = {
  name: string;
  slug: string;       // usado na URL
  hasProducts: boolean; // true só para "Colchão" no MVP
};

// Ordem do menu oficial Eko'7. Slugs em kebab-case sem acento.
export const CATEGORIES: Category[] = [
  { name: "Acessório",          slug: "acessorios",         hasProducts: false },
  { name: "Box e Cama",         slug: "box-e-cama",         hasProducts: false },
  { name: "Cabeceira",          slug: "cabeceira",          hasProducts: false },
  { name: "Cadeira e Poltrona", slug: "cadeira-e-poltrona", hasProducts: false },
  { name: "Calçados",           slug: "calcados",           hasProducts: false },
  { name: "Colchão",            slug: "colchoes",           hasProducts: true  },
  { name: "Colchonete",         slug: "colchonetes",        hasProducts: false },
  { name: "Linha Fitness",      slug: "linha-fitness",      hasProducts: false },
  { name: "Linha Íntima",       slug: "linha-intima",       hasProducts: false },
  { name: "Linha Pet",          slug: "linha-pet",          hasProducts: false },
  { name: "Linha Têxtil",       slug: "linha-textil",       hasProducts: false },
  { name: "Puff",               slug: "puff",               hasProducts: false },
  { name: "Tapete",             slug: "tapetes",            hasProducts: false },
  { name: "Travesseiro",        slug: "travesseiros",       hasProducts: false },
];

/**
 * Helper para usar em links do Header/Footer/CatalogSection.
 * Retorna a rota correta para qualquer categoria.
 */
export function getCategoryPath(slug: string): string {
  return `/${slug}`;
}

// Categorias placeholder = todas exceto a que tem produtos.
// Útil para gerar rotas no App.tsx e entradas no sitemap.
export const PLACEHOLDER_CATEGORIES = CATEGORIES.filter(c => !c.hasProducts);
