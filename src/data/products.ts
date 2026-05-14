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
  shortDescription?: string;
  description: string;
  officialUrl: string;
  videoId: string | null;
  badge?: "TopOfLine" | "Launch" | "BestSeller" | null;
  // Campos estendidos (opcionais — retrocompatíveis)
  hidden?: boolean;
  certifications?: string[];
  sizes?: string;
  contraindication?: string;
  structure?: string[];
  versions?: string;
  motor?: string;
  categorySlug?: string;
};

const WARRANTY_STANDARD = "Altíssima durabilidade e assistência técnica vitalícia";
const CERTS_STANDARD = ["ICV", "SBRT", "ISO 9001"];
const SIZES_STANDARD =
  "Solteiro 0,88x1,88 | Meio Casal 1,19x1,88 | Casal 1,38x1,88 | Queen 1,58x1,98 | King 1,93x2,03";

export const PRODUCTS: Product[] = [
  // ─── Premium ────────────────────────────────────────────────────────────────
  {
    slug: "diamante",
    name: "Diamante",
    line: "Premium",
    type: "Molas Ensacadas Individualmente + Espumas EKO'7 + NanoEx",
    height: "41 cm",
    technologies: [
      "Magnetos",
      "Infravermelho Longo",
      "NanoEx",
      "Spring",
      "Sistema de Densidade Progressiva",
      "UMORFIL® Beauty Fiber®",
      "Vibromassagem (opcional)",
      "Cromo (opcional)",
      "Quântica (opcional)",
    ],
    fabric:
      "UMORFIL® Beauty Fiber® superior | Linho Chumbo lateral | Alças em couro legítimo",
    warranty: WARRANTY_STANDARD,
    durability: null,
    shortDescription:
      "Elegância nos detalhes com molas ensacadas individualmente e tecnologia UMORFIL® Beauty Fiber® — o único colchão Eko'7 com sistema de molas.",
    description:
      "Sistema ergonômico cooperado aliando molas ensacadas individualmente produzidas em fios de aço de alta qualidade com tecnologia de múltiplas espumas EKO'7. Revestimento superior em UMORFIL® Beauty Fiber®, fibra revolucionária e biodegradável com peptídeos de colágeno e toque sedoso. NanoEx®, espuma perfilada com nanotecnologia e características hidrofóbicas e infravermelho longo. Acabamentos em Linho Chumbo nas laterais e alças em couro legítimo.",
    officialUrl: "https://eko7.com.br/produto/colchao/colchao-diamante/",
    videoId: "-PGqJ0fU7zU",
    badge: "TopOfLine",
    certifications: CERTS_STANDARD,
    sizes: SIZES_STANDARD,
    contraindication:
      "Contraindicado para portadores de marcapasso (solicite versão sem magnetos)",
    categorySlug: "colchoes",
  },
  {
    slug: "serie-ouro-pillow",
    name: "Série Ouro Premium Pillow",
    line: "Premium",
    type: "100% Espuma com Pillow",
    height: "36 cm",
    technologies: [
      "Perfilado NanoEx",
      "Magnetos",
      "Infravermelho Longo",
      "Vibromassagem",
      "Quântica",
      "Cromo",
    ],
    fabric:
      "Bouclé Off White lateral | Malha com fio Lurex dourado superior",
    warranty: WARRANTY_STANDARD,
    durability: null,
    shortDescription:
      "Seu sono vale Ouro! Pillow Top em NanoEx com revestimento Bouclé e fio Lurex dourado — sofisticação que você sente no primeiro toque.",
    description:
      "A linha Série Ouro by Eko'7 reúne o que há de mais moderno em tecnologias e materiais. O conceito Pillow agrega camadas de perfilado NanoEx, espuma D40 hipermacia e espuma D60 alta resiliência. Revestimento lateral em Bouclé Off White texturizado e felpudo — tendência de decoração que traz aconchego e sofisticação ao quarto. Revestimento superior exclusivo em malha com detalhes de fio Lurex dourado. 100% espuma, sem molas.",
    officialUrl:
      "https://eko7.com.br/produto/colchao/colchao-serie-ouro-premium-pillow/",
    videoId: "or3nAmuS6PA",
    badge: null,
    certifications: CERTS_STANDARD,
    sizes: SIZES_STANDARD,
    structure: [
      "Perfilado NanoEx",
      "Espuma D40 hipermacia — 3 cm",
      "Espuma D60 alta resiliência — 3 cm",
      "Espuma D35 macia — 4 cm",
      "Espuma D28 convencional — 6 cm",
      "Espuma D33 convencional — 10 cm",
      "Espuma D28 convencional — 6 cm",
    ],
    categorySlug: "colchoes",
  },
  {
    slug: "serie-ouro",
    name: "Série Ouro Premium",
    line: "Premium",
    type: "100% Espuma",
    height: "36 cm",
    technologies: [
      "Perfilado NanoEx",
      "Magnetos",
      "Infravermelho Longo",
      "Vibromassagem",
      "Quântica",
      "Cromo",
    ],
    fabric:
      "Bouclé Off White lateral | Malha com fio Lurex dourado superior",
    warranty: WARRANTY_STANDARD,
    durability: null,
    shortDescription:
      "Seu sono vale Ouro! Tecnologia de ponta com revestimento Bouclé e fio Lurex dourado em um colchão 100% espuma de altíssimo padrão.",
    description:
      "A linha Série Ouro by Eko'7 reúne o que há de mais moderno em tecnologias e materiais. Revestimento lateral em Bouclé Off White — texturizado, felpudo, de toque agradável e tendência de decoração. Revestimento superior exclusivo em malha com detalhes de fio Lurex dourado, acrescentando luxo e requinte ao produto. 100% espuma de produção própria Eko'7, sem molas.",
    officialUrl:
      "https://eko7.com.br/produto/colchao/colchao-serie-ouro-premium/",
    videoId: "or3nAmuS6PA",
    badge: null,
    certifications: CERTS_STANDARD,
    sizes: SIZES_STANDARD,
    categorySlug: "colchoes",
  },
  {
    slug: "seven",
    name: "Seven",
    line: "Premium",
    type: "100% Espuma — Dupla Face Soft/Firm",
    height: "30 cm",
    technologies: [
      "Magnetos",
      "Infravermelho Longo",
      "Sistema de Densidade Progressiva",
    ],
    fabric: "Malha",
    warranty: WARRANTY_STANDARD,
    durability: null,
    shortDescription:
      "Duas versões em um só produto: Soft e Firm. Tecnologia, conforto e ergonomia para transformar suas noites.",
    description:
      "O Colchão Seven by Eko'7 combina tecnologia, conforto e desempenho em cada detalhe. Desenvolvido em duas versões — Soft e Firm — traz uma experiência única adaptada ao seu estilo de dormir. Mais que um colchão, é uma inovação criada para transformar suas noites de sono com ergonomia e qualidade Eko'7.",
    officialUrl: "https://eko7.com.br/orcamentocolchao/colchao-seven",
    videoId: null,
    badge: "Launch",
    certifications: CERTS_STANDARD,
    sizes: SIZES_STANDARD,
    categorySlug: "colchoes",
  },

  // ─── Conforto ────────────────────────────────────────────────────────────────
  {
    slug: "pangeia",
    name: "Pangeia",
    line: "Conforto",
    type: "Espuma com Densidade Progressiva + NanoEx",
    height: "30 cm",
    technologies: [
      "Magnetos",
      "Infravermelho Longo",
      "Sistema de Densidade Progressiva",
      "NanoEx",
      "Vibromassagem (opcional)",
      "Cromo (opcional)",
      "Quântica (opcional)",
    ],
    fabric: "Malha Fio PET superior | Linho Areia lateral",
    warranty: WARRANTY_STANDARD,
    durability: null,
    shortDescription:
      "Ergonomicamente correto e sustentável. Matéria-prima natural e reciclável para quem respeita a natureza e prioriza a qualidade de vida.",
    description:
      "O Pangeia é um colchão ergonomicamente correto que melhora a qualidade de vida do usuário. Sua matéria-prima tem origem natural e de materiais recicláveis: tecido em linho, etiquetas em algodão e tampo produzido com fio PET reciclado. O linho é uma fibra natural reconhecida por sua durabilidade e elegância — respirável, ajuda na regulação da temperatura corporal, resistente e sofisticado. Espumas de produção própria Eko'7 de altíssimo padrão.",
    officialUrl: "https://eko7.com.br",
    videoId: null,
    badge: null,
    certifications: CERTS_STANDARD,
    sizes: SIZES_STANDARD,
    categorySlug: "colchoes",
  },
  {
    slug: "news",
    name: "News",
    line: "Conforto",
    type: "Espuma com Densidade Progressiva",
    height: "26 cm",
    technologies: [
      "NanoEx",
      "Magnetos",
      "Infravermelho Longo",
      "Vibromassagem (opcional)",
      "Quântica (opcional)",
    ],
    fabric: "Malha superior | Linho lateral",
    warranty: WARRANTY_STANDARD,
    durability: null,
    shortDescription:
      "A experiência começa no toque. Maciez, aconchego e estrutura ergonômica para uma noite de sono envolvente.",
    description:
      "Sua experiência com o colchão News inicia no toque, no aconchego e na maciez proporcionados pela malha, além da estrutura ergonomicamente correta e pensada para que você alcance uma experiência de sono verdadeiramente aconchegante.",
    officialUrl: "https://eko7.com.br/produto/colchao/colchao-news/",
    videoId: null,
    badge: null,
    certifications: CERTS_STANDARD,
    sizes: SIZES_STANDARD,
    categorySlug: "colchoes",
  },
  {
    slug: "unico",
    name: "Único",
    line: "Conforto",
    type: "Espuma com Densidade Progressiva",
    height: "27 cm",
    technologies: [
      "Magnetos",
      "Infravermelho Longo",
      "Sistema de Densidade Progressiva",
      "Perfilado NanoEx",
      "Vibromassagem (opcional)",
      "Quântica (opcional)",
    ],
    fabric:
      "Malha superior | Linho (rosê, prata) ou Suede (branco) ou Veludo (grafite, cinza) lateral",
    warranty: WARRANTY_STANDARD,
    durability: null,
    shortDescription:
      "Único, como você! 5 opções de revestimento lateral, tecnologia Eko'7 e preço competitivo para o seu descanso perfeito.",
    description:
      "Selecionável em cinco opções de revestimento lateral — Linho (rosê ou prata), Suede (branco) ou Veludo (grafite ou cinza) — o Único eleva o seu conceito de conforto com design moderno e as melhores tecnologias. Revestimento superior em malha: resistente, durável, leve e respirável, ajudando a controlar a temperatura corporal. Espumas de produção própria Eko'7 de altíssimo padrão.",
    officialUrl: "https://eko7.com.br/produto/colchao/colchao-unico/",
    videoId: null,
    badge: null,
    certifications: CERTS_STANDARD,
    sizes: SIZES_STANDARD,
    categorySlug: "colchoes",
  },
  {
    slug: "lunar",
    name: "Lunar",
    line: "Conforto",
    type: "Espuma 3 Densidades",
    height: "24 cm",
    technologies: [
      "Infravermelho Longo",
      "Magnetos",
      "Vibromassagem (opcional)",
      "Quântica (opcional)",
    ],
    fabric: "Malha superior | Linho Azul lateral",
    warranty: WARRANTY_STANDARD,
    durability: null,
    shortDescription:
      "Conforto e resiliência unidos. Sistema de Densidade Progressiva para suporte ideal da coluna — chega na sua casa enrolado.",
    description:
      "O Lunar foi projetado para consumidores modernos que buscam a união entre conforto e resiliência. Estrutura de espumas em Sistema de Densidade Progressiva com altíssima capacidade de se moldar aos pontos de pressão, ajusta-se ao corpo e entrega equilíbrio perfeito para o alinhamento e sustentação da coluna. Chega até você enrolado — é só desenrolar e assistir o colchão se expandir.",
    officialUrl: "https://eko7.com.br/produto/colchao-lunar/",
    videoId: "zFwdQ3v8hIg",
    badge: null,
    certifications: CERTS_STANDARD,
    sizes: SIZES_STANDARD,
    categorySlug: "colchoes",
  },
  {
    slug: "baby",
    name: "Baby",
    line: "Conforto",
    type: "Espuma",
    height: null,
    technologies: ["Infravermelho Longo", "Magnetos"],
    fabric: null,
    warranty: WARRANTY_STANDARD,
    durability: null,
    description:
      "Desenvolvido especialmente para bebês, com materiais seguros e tecnologias terapêuticas suaves para um sono saudável desde os primeiros dias.",
    officialUrl: "https://eko7.com.br",
    videoId: null,
    badge: null,
    certifications: CERTS_STANDARD,
    categorySlug: "colchoes",
  },
  {
    slug: "renova",
    name: "Renova",
    line: "Conforto",
    type: "Espuma com Densidade Progressiva",
    height: null,
    technologies: [
      "Infravermelho Longo",
      "Magnetos",
      "Sistema de Densidade Progressiva",
    ],
    fabric: null,
    warranty: WARRANTY_STANDARD,
    durability: null,
    description:
      "Renovação para seu descanso. Estrutura ergonômica com espumas de alta qualidade para suporte ideal da coluna.",
    officialUrl: "https://eko7.com.br",
    videoId: null,
    badge: null,
    certifications: CERTS_STANDARD,
    categorySlug: "colchoes",
  },

  // ─── Camas Articuladas ───────────────────────────────────────────────────────
  {
    slug: "flexibed-roma",
    name: "FlexiBed Roma",
    line: "Cama",
    type: "Cama Articulada Motorizada",
    height: "26 cm (colchão) | 39 cm lateral | 1,30 m cabeceira",
    technologies: [
      "Magnetos",
      "Infravermelho Longo",
      "Sistema de Densidade Progressiva",
      "Vibromassagem (opcional)",
      "Cromo (opcional)",
      "Quântica (opcional)",
    ],
    fabric:
      "Linho (areia, chumbo ou off white) | Laterais MDF estofadas | Pés alumínio",
    warranty: WARRANTY_STANDARD,
    durability: null,
    shortDescription:
      "Ajuste a posição do colchão ao toque de um botão. Ergonomia, conforto e independência com o exclusivo sistema articulado FlexiBed.",
    description:
      "A linha FlexiBed Roma entrega uma experiência de sono única com salto em ergonomia, conforto, segurança e design. Permite o ajuste individual dos colchões em diferentes posições por controle remoto sem fio, sem precisar sair da cama. Sistema individual de motores elétricos bivolt. Revestimento em Linho (areia, chumbo ou off white), laterais em MDF estofadas com espuma e pés revestidos em alumínio. Disponível nas versões Tradicional e Joelho.",
    officialUrl:
      "https://eko7.com.br/produto/colchao/conjunto-cama-articulada-flexibed-roma/",
    videoId: "TrjFWDcLV90",
    badge: null,
    certifications: CERTS_STANDARD,
    versions: "Tradicional e Joelho",
    motor: "Bivolt",
    categorySlug: "camas",
  },
  {
    slug: "flexibed-gran-jaguar",
    name: "FlexiBed Gran Jaguar",
    line: "Cama",
    type: "Cama Articulada Motorizada",
    height: "26 cm (colchão) | 39 cm lateral | 1,25 m cabeceira",
    technologies: [
      "Magnetos",
      "Infravermelho Longo",
      "Sistema de Densidade Progressiva",
      "Vibromassagem (opcional)",
      "Cromo (opcional)",
      "Quântica (opcional)",
    ],
    fabric:
      "Linho (areia, chumbo ou off white) | Laterais MDF estofadas | Pés alumínio fumê",
    warranty: WARRANTY_STANDARD,
    durability: null,
    shortDescription:
      "Design imponente com cabeceira ampla de 0,63m. Articulação inteligente e ergonomia de alto nível para o sono perfeito.",
    description:
      "O Gran Jaguar combina presença visual marcante com a tecnologia FlexiBed de articulação individual por controle remoto sem fio. Cabeceira com 1,25m de altura e largura total 0,63m maior que a cama. Revestimento em Linho (areia, chumbo ou off white), laterais em MDF estofadas com espuma e pés revestidos em alumínio fumê. Motor bivolt. Disponível nas versões Tradicional e Joelho.",
    officialUrl: "https://eko7.com.br",
    videoId: "TrjFWDcLV90",
    badge: null,
    certifications: CERTS_STANDARD,
    versions: "Tradicional e Joelho",
    motor: "Bivolt",
    categorySlug: "camas",
  },
  {
    slug: "flexibed-lisboa",
    name: "FlexiBed Lisboa",
    line: "Cama",
    type: "Cama Articulada Motorizada",
    height: "26 cm (colchão) | 39 cm lateral | 1,20 m cabeceira",
    technologies: [
      "Magnetos",
      "Infravermelho Longo",
      "Sistema de Densidade Progressiva",
      "Vibromassagem (opcional)",
      "Cromo (opcional)",
      "Quântica (opcional)",
    ],
    fabric: "MDF (canovas, ônix ou cobre) | Pés fumê",
    warranty: WARRANTY_STANDARD,
    durability: null,
    shortDescription:
      "Sofisticação em MDF com nichos integrados. Articulação FlexiBed para quem une design contemporâneo e conforto tecnológico.",
    description:
      "O FlexiBed Lisboa traz design moderno em MDF nas cores canovas, ônix e cobre, com nichos integrados na cabeceira para praticidade e elegância. Cabeceira de 1,20m de altura com largura total 0,84m maior que a cama. Motor bivolt com articulação individual por controle remoto sem fio. Pés revestidos na cor fumê. Disponível nas versões Tradicional e Joelho.",
    officialUrl:
      "https://eko7.com.br/produto/colchao/conjunto-cama-articulada-flexibed-lisboa/",
    videoId: "TrjFWDcLV90",
    badge: null,
    certifications: CERTS_STANDARD,
    versions: "Tradicional e Joelho",
    motor: "Bivolt",
    categorySlug: "camas",
  },

  // ─── Acessórios (hidden — sem imagens) ──────────────────────────────────────
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
    description:
      "Manta com tecnologia quântica ativada por controle remoto. Tecido Jacquard luxuoso. Disponível em Solteiro, Casal, Queen e King.",
    officialUrl: "https://eko7.com.br/produto/colchao/manta-quantica/",
    videoId: null,
    badge: null,
    hidden: true,
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
    description:
      "Protetor impermeável que evita umidade e dificulta proliferação de ácaros. Lateral flexível para fixação e respirabilidade do colchão.",
    officialUrl: "https://eko7.com.br/produto/protetor-de-colchao/",
    videoId: null,
    badge: null,
    hidden: true,
  },
];

// ID YouTube institucional — fallback quando produto não tem vídeo próprio
export const INSTITUTIONAL_VIDEO_ID = "pCQomlIDWKk";

/** Lista apenas produtos visíveis (sem hidden: true) */
export const VISIBLE_PRODUCTS = PRODUCTS.filter((p) => !p.hidden);
