export interface NavItem {
  id: string;
  name: string;
  shortName?: string;
  slug?: string;
  active: boolean;
  subItems?: NavItem[];
}

export const navigationData: NavItem[] = [
  {
    id: "colchoes",
    name: "Colchões Terapêuticos e Tecnológicos",
    shortName: "Colchões",
    slug: "colchoes",
    active: true,
  },
  {
    id: "camas-articuladas",
    name: "Camas Articuladas FlexiBed",
    shortName: "Camas Articuladas",
    slug: "camas-articuladas",
    active: true,
  },
  {
    id: "boxes",
    name: "Box e Bases",
    shortName: "Box e Bases",
    slug: "boxes",
    active: true,
  },
  {
    id: "cabeceiras",
    name: "Cabeceiras",
    shortName: "Cabeceiras",
    slug: "cabeceiras",
    active: false,
  },
  {
    id: "mobiliario",
    name: "Mobiliário Ergonômico",
    shortName: "Mobiliário",
    active: false,
    subItems: [
      { id: "poltronas", name: "Poltronas", active: false },
      { id: "cadeiras", name: "Cadeiras de Escritório", active: false },
    ],
  },
  {
    id: "textil-conforto",
    name: "Linha Têxtil e Conforto",
    shortName: "Têxtil e Conforto",
    slug: "textil-conforto",
    active: false,
    subItems: [
      { id: "travesseiros", name: "Travesseiros", shortName: "Travesseiros", slug: "travesseiros", active: true },
      { id: "lencois", name: "Lençóis", active: false },
      { id: "toalhas", name: "Toalhas de Banho", active: false },
    ],
  },
  {
    id: "fitness",
    name: "Linha Fitness e Calçados",
    shortName: "Fitness e Vestuário",
    slug: "fitness",
    active: false,
    subItems: [
      { id: "colchonetes", name: "Colchonetes", shortName: "Colchonetes", slug: "fitness", active: true },
      { id: "leggings", name: "Leggings e Tops (Infravermelho)", shortName: "Vestuário Fitness", slug: "vestuario-acessorios", active: true },
      { id: "tenis", name: "Tênis Magnéticos e Ortopédicos", shortName: "Tênis Ortopédicos", slug: "vestuario-acessorios", active: true },
    ],
  },
  {
    id: "acessorios-magneticos",
    name: "Acessórios Magnéticos",
    shortName: "Acessórios Magnéticos",
    slug: "acessorios-magneticos",
    active: false,
    subItems: [
      { id: "palmilhas", name: "Palmilhas Magnéticas", active: false },
      { id: "pulseiras", name: "Pulseiras Magnéticas", active: false },
    ],
  },
];

export const getActiveHeaderLinks = () => {
  const links: { id: string; name: string; slug: string }[] = [];
  
  const traverse = (items: NavItem[]) => {
    for (const item of items) {
      // Avoid duplicate slugs in the header menu to keep it clean, but prefer top level
      if (item.active && item.slug) {
        // If we want all active entries as requested, we don't dedupe by slug
        // In the user's view, we want "APENAS as entradas com active: true"
        links.push({
          id: item.id,
          name: item.shortName || item.name,
          slug: item.slug,
        });
      }
      
      // se a categoria principal for 'active: true', a gente não precisa colocar seus itens
      // filhos como links no header para não fazer menu dropdown sujo. 
      // Então só entra nos subItems se o pai for INATIVO para extrair sub-itens ATIVOS.
      if (!item.active && item.subItems) {
        traverse(item.subItems);
      }
    }
  };

  traverse(navigationData);
  return links;
};
