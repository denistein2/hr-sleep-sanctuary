export const CATEGORIES = [
  "Acessório", "Box e Cama", "Cabeceira", "Cadeira e Poltrona",
  "Calçados", "Colchão", "Colchonete", "Linha Fitness",
  "Linha Íntima", "Linha Pet", "Linha Têxtil", "Puff",
  "Tapete", "Travesseiro"
] as const;

export type Category = typeof CATEGORIES[number];

export const getCategorySlug = (category: string) => {
  return category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};
