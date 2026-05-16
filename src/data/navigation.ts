import { CATEGORIES, CATEGORY_ORDER } from './categories';

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
  if (!cat || cat.hidden) return null;
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
    id: 'produtos',
    name: 'Produtos',
    active: true,
    subItems: CATEGORY_ORDER
      .map(getCategory)
      .filter(Boolean) as NavItem[],
  },
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
