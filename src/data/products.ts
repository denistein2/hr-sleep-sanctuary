export type ProductLine = "Premium" | "Conforto" | "Cama" | "Acessorio";

export type Product = {
  slug: string;
  name: string;
  line: ProductLine;
  type: string;
  height: string | null;
  technologies: string[];
  fabric: string | null;
  warranty: string | null;
  durability: string | null;
  description: string;
  officialUrl: string;
  videoId: string | null; // YouTube ID — fallback para institucional se null
  badge?: "TopOfLine" | "Launch" | "BestSeller" | null;
};

export const PRODUCTS: Product[] = [
  {
    slug: "diamante",
    name: "Diamante",
    line: "Premium",
    type: "Espuma + Spring + NanoEx",
    height: "41 cm",
    technologies: [
      "Magnetos", "Infravermelho Longo", "NanoEx", "Spring",
      "UMORFIL® Beauty Fiber", "Massagem (opcional)",
      "Cromoterapia (opcional)", "Quântica (opcional)"
    ],
    fabric: "UMORFIL® + Linho Chumbo, alças em couro legítimo",
    warranty: null,
    durability: null,
    description: "Topo de linha da Eko'7. Combina performance ortopédica máxima com elegância através do tecido UMORFIL® Beauty Fiber e detalhes em couro legítimo nas alças.",
    officialUrl: "https://eko7.com.br/produto/colchao/colchao-diamante/",
    videoId: "-PGqJ0fU7zU",
    badge: "TopOfLine"
  },
  {
    slug: "serie-ouro-premium-pillow",
    name: "Série Ouro Premium Pillow",
    line: "Premium",
    type: "Molas + Espuma + Pillow",
    height: "36 cm",
    technologies: [
      "NanoEX®", "Magnetos", "Infravermelho Longo",
      "Vibromassagem", "Quântica"
    ],
    fabric: "Bouclé Off White + Malha c/ fio Lurex dourado",
    warranty: "5 anos",
    durability: "20 anos",
    description: "Linha Série Ouro com pillow top acolchoado. Camadas: perfilado NanoEX, espuma D40 hipermacia e D60 alta resiliência. Acabamento em bouclé texturizado e malha com fio Lurex.",
    officialUrl: "https://eko7.com.br/produto/colchao/colchao-serie-ouro-premium-pillow/",
    videoId: "or3nAmuS6PA",
    badge: null
  },
  {
    slug: "serie-ouro-premium",
    name: "Série Ouro Premium",
    line: "Premium",
    type: "Molas + Espuma",
    height: "36 cm",
    technologies: [
      "NanoEX®", "Magnetos", "Infravermelho Longo",
      "Vibromassagem", "Quântica"
    ],
    fabric: "Bouclé Off White + Malha c/ fio Lurex dourado",
    warranty: "5 anos",
    durability: "20 anos",
    description: "Mesma estrutura premium do modelo Pillow, com acabamento contínuo no tampo. Para quem prefere o perfil mais firme e visual minimalista clássico.",
    officialUrl: "https://eko7.com.br/produto/colchao/colchao-serie-ouro-premium/",
    videoId: "or3nAmuS6PA",
    badge: null
  },
  {
    slug: "seven",
    name: "Seven",
    line: "Premium",
    type: "Mola Pocket + Espuma (Dupla Face: Soft/Firm)",
    height: "30 cm",
    technologies: [
      "Infravermelho Longo", "Magnetos",
      "Vibromassagem", "Energia Quântica"
    ],
    fabric: "Malha",
    warranty: null,
    durability: null,
    description: "Lançamento Eko'7 com dupla face: lado Soft macio e lado Firm com sustentação reforçada. Tecnologias terapêuticas presentes nos dois lados. Molas ensacadas com independência de movimento.",
    officialUrl: "https://eko7.com.br/orcamentocolchao/colchao-seven",
    videoId: null,
    badge: "Launch"
  },
  {
    slug: "comfort",
    name: "Comfort",
    line: "Conforto",
    type: "Molas Pocket + Espuma",
    height: "29 cm",
    technologies: [
      "Magnetos", "Infravermelho Longo",
      "Vibromassagem", "Quântica"
    ],
    fabric: "Suede + Matelassê / Malha Belga",
    warranty: "2 anos",
    durability: "10–15 anos",
    description: "Equilíbrio ideal entre molejo ensacado e espumas Eko'7. Adaptabilidade para qualquer biotipo, com vibromassagem e terapia quântica inclusas.",
    officialUrl: "https://eko7.com.br/produto/colchao-comfort/",
    videoId: null,
    badge: "BestSeller"
  },
  {
    slug: "news",
    name: "News",
    line: "Conforto",
    type: "Espuma + Molas",
    height: null,
    technologies: [
      "NanoEX®", "Magnetos", "Infravermelho Longo",
      "Vibromassagem (opcional)", "Quântica (opcional)"
    ],
    fabric: "Linho (laterais) + Malha (tampo)",
    warranty: null,
    durability: null,
    description: "Conforto sofisticado com revestimento superior em malha respirável e laterais em linho natural. Combina toque sedoso com regulação térmica.",
    officialUrl: "https://eko7.com.br/produto/colchao/colchao-news/",
    videoId: null,
    badge: null
  },
  {
    slug: "unico",
    name: "Único",
    line: "Conforto",
    type: "Espuma com Densidade Progressiva",
    height: "26 cm",
    technologies: [
      "Magnetos", "Infravermelho Longo",
      "Sistema de densidade progressiva", "Perfilado",
      "Massagem (opcional)", "Quântica (opcional)"
    ],
    fabric: "Malha (tampo) + Linho/Suede/Veludo (laterais — 5 opções)",
    warranty: null,
    durability: null,
    description: "Cinco opções de revestimento lateral: Linho rosê, Linho prata, Suede branco, Veludo grafite ou Veludo cinza. Tampo em malha respirável.",
    officialUrl: "https://eko7.com.br/produto/colchao/colchao-unico/",
    videoId: null,
    badge: null
  },
  {
    slug: "lunar",
    name: "Lunar",
    line: "Conforto",
    type: "Espuma 3 densidades (Bed in the Bag)",
    height: "24 cm",
    technologies: [
      "Magnetos", "Infravermelho Longo",
      "Massagem (opcional)", "Quântica (opcional)"
    ],
    fabric: "Malha (tampo) + Linho azul (laterais)",
    warranty: null,
    durability: null,
    description: "Embalagem compacta tipo bag, ideal para apartamentos e mudanças. Três densidades de espuma com molde anatômico aos pontos de pressão. Inclui faquinha personalizada para abertura.",
    officialUrl: "https://eko7.com.br/produto/colchao-lunar/",
    videoId: "zFwdQ3v8hIg",
    badge: null
  },
  {
    slug: "flexibed-roma",
    name: "FlexiBed Roma",
    line: "Cama",
    type: "Cama articulada motorizada",
    height: "26 cm (colchão)",
    technologies: [
      "Magnetos", "Infravermelho Longo",
      "Massagem (opcional)", "Cromoterapia (opcional)",
      "Quântica (opcional)"
    ],
    fabric: "Linho — areia, chumbo ou off white",
    warranty: null,
    durability: null,
    description: "Cama articulada com motor bivolt e controle remoto sem fio. Disponível em duas versões: Tradicional e Joelho. Cabeceira estofada de 1,30m de altura com braços de 1,20m.",
    officialUrl: "https://eko7.com.br/produto/colchao/conjunto-cama-articulada-flexibed-roma/",
    videoId: "TrjFWDcLV90",
    badge: null
  },
  {
    slug: "flexibed-lisboa",
    name: "FlexiBed Lisboa",
    line: "Cama",
    type: "Cama articulada motorizada",
    height: null,
    technologies: [
      "Magnetos", "Infravermelho Longo",
      "Massagem (opcional)", "Cromoterapia (opcional)",
      "Quântica (opcional)"
    ],
    fabric: null,
    warranty: null,
    durability: null,
    description: "Cama articulada com sistema individual de motores elétricos. Permite ajuste em diferentes posições através de controle remoto sem fio.",
    officialUrl: "https://eko7.com.br/produto/colchao/conjunto-cama-articulada-flexibed-lisboa/",
    videoId: "TrjFWDcLV90",
    badge: null
  },
  {
    slug: "manta-quantica",
    name: "Manta Quântica",
    line: "Acessorio",
    type: "Manta tecnológica",
    height: "2 cm",
    technologies: ["Energia Quântica (controle remoto)"],
    fabric: "Jacquard",
    warranty: null,
    durability: null,
    description: "Manta com tecnologia quântica ativada por controle remoto. Tecido Jacquard luxuoso. Disponível em medidas Solteiro, Casal, Queen e King.",
    officialUrl: "https://eko7.com.br/produto/colchao/manta-quantica/",
    videoId: null,
    badge: null
  },
  {
    slug: "protetor-de-colchao",
    name: "Protetor de Colchão",
    line: "Acessorio",
    type: "Protetor impermeável",
    height: null,
    technologies: ["Impermeabilidade", "Antiácaro"],
    fabric: null,
    warranty: null,
    durability: null,
    description: "Protetor impermeável que evita umidade e dificulta proliferação de ácaros. Lateral flexível para fixação e respirabilidade do colchão.",
    officialUrl: "https://eko7.com.br/produto/protetor-de-colchao/",
    videoId: null,
    badge: null
  }
];

// ID YouTube institucional — fallback quando produto não tem vídeo próprio
export const INSTITUTIONAL_VIDEO_ID = "pCQomlIDWKk";
