import { CATEGORIES } from './categories';

export interface NavItem {
  id: string;
  name: string;
  shortName?: string;
  slug?: string;
  active: boolean;
  subItems?: NavItem[];
}

const getCategory = (slug: string): NavItem | null => {
  const cat = CATEGORIES.find(c => c.slug === slug);
  if (!cat) return null;
  return {
    id: cat.slug,
    name: cat.name,
    shortName: cat.name,
    slug: cat.slug,
    active: true,
  };
};

export const navigationData: NavItem[] = [
  {
    id: 'linha-dormir',
    name: 'Linha Dormir',
    active: true,
    subItems: [
      getCategory('colchoes'),
      getCategory('camas-articuladas'),
      getCategory('camas-e-box'),
      getCategory('cabeceira'),
      getCategory('travesseiros'),
      getCategory('colchonetes'),
    ].filter(Boolean) as NavItem[],
  },
  {
    id: 'moveis',
    name: 'Móveis',
    active: true,
    subItems: [
      getCategory('cadeira-e-poltrona'),
    ].filter(Boolean) as NavItem[],
  },
  {
    id: 'acessorios-familia',
    name: 'Acessórios',
    active: true,
    subItems: [
      getCategory('acessorios'),
      getCategory('linha-textil'),
      getCategory('puff'),
      getCategory('tapetes'),
    ].filter(Boolean) as NavItem[],
  },
  {
    id: 'bem-estar-estilo',
    name: 'Bem-estar & Estilo',
    active: true,
    subItems: [
      getCategory('linha-fitness'),
      getCategory('linha-pet'),
      getCategory('linha-intima'),
      getCategory('calcados'),
    ].filter(Boolean) as NavItem[],
  }
];

export const getActiveHeaderLinks = () => {
  const links: { categoryId: string; name: string; slug: string }[] = [];
  
  const traverse = (items: NavItem[]) => {
    for (const item of items) {
      if (item.active && item.slug) {
        links.push({
          categoryId: item.id,
          name: item.shortName || item.name,
          slug: item.slug,
        });
      }
      if (item.subItems) {
        traverse(item.subItems);
      }
    }
  };

  traverse(navigationData);
  return links;
};
