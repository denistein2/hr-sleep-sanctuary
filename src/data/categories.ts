export type Category = {
  name: string;
  slug: string;
  hasProducts: boolean;
  hidden?: boolean;
  description?: string;
  icon?: string;
};

// Ordem oficial aprovada pelo cliente em 16/05/2026. Não alterar sem autorização.
export const CATEGORY_ORDER = [
  'colchoes',
  'camas-articuladas',
  'camas-e-box',
  'cabeceira',
  'poltronas',
  'travesseiros',
  'acessorios',
] as const;

export const CATEGORIES: Category[] = [
  { name: "Colchões",             slug: "colchoes",          hasProducts: true },
  { name: "Camas Articuladas",    slug: "camas-articuladas", hasProducts: true },
  { name: "Camas e Box",          slug: "camas-e-box",       hasProducts: true },
  { name: "Cabeceiras",           slug: "cabeceira",         hasProducts: true },
  { name: "Poltronas e Cadeiras", slug: "poltronas",         hasProducts: false, hidden: true },
  { name: "Travesseiros",         slug: "travesseiros",      hasProducts: false, hidden: true },
  { name: "Acessórios",           slug: "acessorios",        hasProducts: false, hidden: true },
];

export function getCategoryPath(slug: string): string {
  return `/${slug}`;
}

export const PLACEHOLDER_CATEGORIES = CATEGORIES.filter(c => c.hidden === true);
