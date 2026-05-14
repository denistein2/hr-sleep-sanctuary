import fs from 'fs';
import { products, categories, Category, Product } from './src/data/products.ts';

// 1. Definição das Novas Categorias
const newCategories: Category[] = [
  {
    id: "colchoes",
    name: "Colchões",
    slug: "colchoes",
    emoji: "✨",
    description: "Colchões Eko'7 com infravermelho longo e magnetoterapia para sono reparador.",
    seoTitle: "Colchões Terapêuticos e Tecnológicos Eko'7 | HR Colchões",
    seoDescription: "Linha completa de colchões Eko'7. Distribuidor oficial em Porto Alegre/RS.",
    display_order: 1
  },
  {
    id: "camas-articuladas",
    name: "Camas Articuladas",
    slug: "camas-articuladas",
    emoji: "🛏️",
    description: "Camas articuladas elétricas FlexiBed com tecnologia Eko'7 — controle elétrico de encosto, peseira e altura.",
    seoTitle: "Camas Articuladas FlexiBed Eko'7 | HR Colchões",
    seoDescription: "Camas articuladas elétricas FlexiBed Roma, Lisboa e Gran Jaguar com tecnologia Eko'7 em Porto Alegre/RS.",
    display_order: 2
  },
  {
    id: "camas-e-box",
    name: "Camas e Box",
    slug: "camas-e-box",
    emoji: "📦",
    description: "Camas flutuantes e bases box clássico, box slim e box baú — estrutura reforçada e acabamento premium para complementar seu colchão.",
    seoTitle: "Camas, Box Base, Box Baú e Box Slim Eko'7 | HR Colchões",
    seoDescription: "Camas Flutuantes, bases box tradicional, baú e slim com acabamento premium Eko'7 em Porto Alegre/RS.",
    display_order: 3
  },
  {
    id: "cadeiras-e-poltronas",
    name: "Cadeiras e Poltronas",
    slug: "cadeiras-e-poltronas",
    emoji: "🪑",
    description: "Cadeiras executivas e poltronas ergonômicas com tecnologia Eko'7.",
    seoTitle: "Cadeiras e Poltronas Tecnológicas Eko'7 | HR Colchões",
    seoDescription: "Cadeiras e poltronas com infravermelho longo e magnetos para conforto no trabalho e descanso.",
    display_order: 4
  },
  {
    id: "cabeceiras",
    name: "Cabeceiras",
    slug: "cabeceiras",
    emoji: "🪟",
    description: "Cabeceiras com design moderno e elegante para quartos contemporâneos.",
    seoTitle: "Cabeceiras Eko'7 | HR Colchões",
    seoDescription: "Cabeceiras estofadas premium para camas e boxes.",
    display_order: 5
  },
  {
    id: "travesseiros",
    name: "Travesseiros",
    slug: "travesseiros",
    emoji: "😴",
    description: "Travesseiros anatômicos com suporte cervical e tecnologia Eko'7 para bem-estar diário.",
    seoTitle: "Travesseiros Tecnológicos Eko'7 | HR Colchões",
    seoDescription: "Travesseiros com infravermelho longo e magnetos para um sono de qualidade.",
    display_order: 6
  },
  {
    id: "acessorios",
    name: "Acessórios",
    slug: "acessorios",
    emoji: "⌚",
    description: "Acessórios com tecnologia Eko'7, pulseiras, palmilhas e mais.",
    seoTitle: "Acessórios Tecnológicos Eko'7 | HR Colchões",
    seoDescription: "Acessórios magnéticos e tecnologias para saúde Eko'7.",
    display_order: 7
  }
];

// Mapeamentos de display_order e slugs para os produtos existentes/novos
const productUpdates = [
  // Colchões
  { id: "colchao-diamante", display_order: 1, categorySlug: "colchoes" },
  { id: "serie-ouro-piloto", slug: "serie-ouro-piloto", name: "Série Ouro com Piloto", categorySlug: "colchoes", display_order: 2, isNew: true, cloneFrom: "colchao-serie-ouro" },
  { id: "serie-ouro-sem-piloto", slug: "serie-ouro-sem-piloto", name: "Série Ouro sem Piloto", categorySlug: "colchoes", display_order: 3, isNew: true, cloneFrom: "colchao-serie-ouro" },
  { id: "colchao-pangeia", display_order: 4, categorySlug: "colchoes" },
  { id: "colchao-news", display_order: 5, categorySlug: "colchoes" },
  { id: "colchao-unico", display_order: 6, categorySlug: "colchoes" },
  { id: "colchao-lunar", display_order: 7, categorySlug: "colchoes" },
  { id: "colchao-seven", slug: "seven", name: "Seven", categorySlug: "colchoes", display_order: 8, isNew: true, cloneFrom: "colchao-lunar" },

  // Camas Articuladas
  { id: "flexibed-gran-jaguar", display_order: 1, categorySlug: "camas-articuladas" },
  { id: "flexibed-roma", display_order: 2, categorySlug: "camas-articuladas" },
  { id: "flexibed-lisboa", display_order: 3, categorySlug: "camas-articuladas" },

  // Camas e Box
  { id: "box-classico", name: "Box Tradicional", display_order: 1, categorySlug: "camas-e-box" }, // confirmBox
  { id: "box-bau", display_order: 2, categorySlug: "camas-e-box" },
  { id: "box-slim", display_order: 3, categorySlug: "camas-e-box" },
  // Subseção Camas
  { id: "cama-flutuante", slug: "flutuante", name: "Cama Flutuante", categorySlug: "camas-e-box", display_order: 4, isNew: true, cloneFrom: "box-classico" },
  { id: "cama-gran-jaguar", slug: "cama-gran-jaguar", name: "Cama Gran Jaguar", categorySlug: "camas-e-box", display_order: 5, isNew: true, cloneFrom: "box-classico" },
  { id: "cama-roma", slug: "cama-roma", name: "Cama Roma", categorySlug: "camas-e-box", display_order: 6, isNew: true, cloneFrom: "box-classico" },
  { id: "cama-lisboa", slug: "cama-lisboa", name: "Cama Lisboa", categorySlug: "camas-e-box", display_order: 7, isNew: true, cloneFrom: "box-classico" },

  // Cadeiras e Poltronas
  { id: "poltrona-reclinavel", slug: "poltrona-reclinavel", name: "Poltrona Reclinável", categorySlug: "cadeiras-e-poltronas", display_order: 1, isNew: true, cloneFrom: "poltrona-columbia" },
  { id: "cadeira-presidente", display_order: 2, categorySlug: "cadeiras-e-poltronas" },
  { id: "cadeira-diretor", display_order: 3, categorySlug: "cadeiras-e-poltronas" },
  { id: "cadeira-secretaria", display_order: 4, categorySlug: "cadeiras-e-poltronas" },

  // Cabeceiras
  { id: "cabeceira-infinit", slug: "cabeceira-infinit", name: "Cabeceira Infinit", categorySlug: "cabeceiras", display_order: 1, isNew: true, cloneFrom: "cabeceira-cincinnati" },
  { id: "cabeceira-modular", slug: "cabeceira-modular", name: "Cabeceira Modular", categorySlug: "cabeceiras", display_order: 2, isNew: true, cloneFrom: "cabeceira-cincinnati" },
  { id: "cabeceira-gran-jaguar-new", slug: "cabeceira-gran-jaguar", name: "Cabeceira Gran Jaguar", categorySlug: "cabeceiras", display_order: 3, isNew: true, cloneFrom: "cabeceira-cincinnati" },
  { id: "cabeceira-roma-new", slug: "cabeceira-roma", name: "Cabeceira Roma", categorySlug: "cabeceiras", display_order: 4, isNew: true, cloneFrom: "cabeceira-cincinnati" },
  { id: "cabeceira-lisboa-new", slug: "cabeceira-lisboa", name: "Cabeceira Lisboa", categorySlug: "cabeceiras", display_order: 5, isNew: true, cloneFrom: "cabeceira-cincinnati" },
  { id: "cabeceira-olimpia", display_order: 6, categorySlug: "cabeceiras" },
  { id: "cabeceira-cincinnati", display_order: 7, categorySlug: "cabeceiras" },
  { id: "cabeceira-maceio", display_order: 8, categorySlug: "cabeceiras" },
  { id: "cabeceira-rio", slug: "cabeceira-rio", name: "Cabeceira Rio", categorySlug: "cabeceiras", display_order: 9, isNew: true, cloneFrom: "cabeceira-cincinnati" },
  { id: "cabeceira-himalaia", slug: "cabeceira-himalaia", name: "Cabeceira Himalaia", categorySlug: "cabeceiras", display_order: 10, isNew: true, cloneFrom: "cabeceira-cincinnati" },

  // Travesseiros
  { id: "travesseiro-visco-elastico", name: "Travesseiro Visco Elástico Adulto Magnético", display_order: 1, categorySlug: "travesseiros" },
  { id: "travesseiro-hangg-de-corpo", slug: "travesseiro-hangg-de-corpo", name: "Travesseiro Hangg de Corpo Visco Elástico Magnético", categorySlug: "travesseiros", display_order: 2, isNew: true, cloneFrom: "travesseiro-visco-elastico" },
  { id: "suporte-multiconforto", display_order: 3, categorySlug: "travesseiros" },

  // Acessórios
  { id: "tenis-fn7", display_order: 1, categorySlug: "acessorios" },
  { id: "palmilha-magnetica", display_order: 2, categorySlug: "acessorios" },
  { id: "linha-fitness-legge", slug: "linha-fitness-legge", name: "Linha Fitness Legge", categorySlug: "acessorios", display_order: 3, isNew: true, cloneFrom: "tenis-fn7" }
];

const finalProducts = [];
const usedIds = new Set();

for (const update of productUpdates) {
  if (update.isNew) {
    const cloneSource = products.find(p => p.id === update.cloneFrom);
    finalProducts.push({
      id: update.id,
      name: update.name,
      slug: update.slug,
      categorySlug: update.categorySlug,
      shortDescription: cloneSource?.shortDescription || "// TODO: Aguardando dados completos do cliente",
      technologies: cloneSource?.technologies || [],
      certifications: cloneSource?.certifications || [],
      images: [""],
      display_order: update.display_order,
      isHidden: false
    });
  } else {
    const existing = products.find(p => p.id === update.id);
    if (existing) {
      if (update.name) existing.name = update.name;
      existing.categorySlug = update.categorySlug;
      existing.display_order = update.display_order;
      existing.isHidden = false;
      finalProducts.push(existing);
    }
  }
  usedIds.add(update.id);
}

// Any existing product not in the updates list should be marked as hidden
for (const p of products) {
  if (!usedIds.has(p.id)) {
    p.display_order = 999;
    p.isHidden = true;
    finalProducts.push(p);
  }
}

// Generate TS output
const output = `export interface Category {
  id: string;
  name: string;
  slug: string;
  emoji: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
  display_order?: number;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  categorySlug: string;
  shortDescription: string;
  technologies: string[];
  certifications: string[];
  images: string[];
  display_order?: number;
  isHidden?: boolean;
}

export const categories: Category[] = ${JSON.stringify(newCategories, null, 2)};

export const products: Product[] = ${JSON.stringify(finalProducts, null, 2)};

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug && !p.isHidden).sort((a, b) => (a.display_order || 999) - (b.display_order || 999));
}

export function getProductBySlug(categorySlug: string, productSlug: string): Product | undefined {
  return products.find((p) => p.categorySlug === categorySlug && p.slug === productSlug);
}
`;

fs.writeFileSync('src/data/products.ts', output);
console.log("Updated products.ts");
