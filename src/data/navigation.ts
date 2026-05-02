import { CATEGORIES, getCategorySlug } from './categories';

export interface NavItem {
  id: string;
  name: string;
  shortName?: string;
  slug?: string;
  active: boolean;
  subItems?: NavItem[];
}

export const navigationData: NavItem[] = CATEGORIES.map(category => ({
  id: getCategorySlug(category),
  name: category,
  shortName: category,
  slug: category === "Colchão" ? "colchoes" : getCategorySlug(category),
  active: true,
}));

export const getActiveHeaderLinks = () => {
  const links: { id: string; name: string; slug: string }[] = [];
  
  const traverse = (items: NavItem[]) => {
    for (const item of items) {
      if (item.active && item.slug) {
        links.push({
          id: item.id,
          name: item.shortName || item.name,
          slug: item.slug,
        });
      }
      
      if (!item.active && item.subItems) {
        traverse(item.subItems);
      }
    }
  };

  traverse(navigationData);
  return links;
};
