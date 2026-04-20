export interface Category {
  id: string;
  name: string;
  slug: string;
  emoji: string;
  description: string;
  seoTitle: string;
  seoDescription: string;
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
}

export const categories: Category[] = [
  {
    id: "colchoes",
    name: "Colchões",
    slug: "colchoes",
    emoji: "✨",
    description: "Colchões Eko'7 com infravermelho longo e magnetoterapia para sono reparador.",
    seoTitle: "Colchões Terapêuticos e Tecnológicos Eko'7 | HR Colchões",
    seoDescription: "Linha completa de colchões Eko'7. Distribuidor oficial em Porto Alegre/RS.",
  },
  {
    id: "camas-e-bases",
    name: "Camas e Bases",
    slug: "camas-e-bases",
    emoji: "🛏️",
    description: "Camas articuladas elétricas FlexiBed, conjuntos box tradicional e box baú.",
    seoTitle: "Camas Articuladas e Bases Eko'7 | HR Colchões",
    seoDescription: "Camas articuladas elétricas e bases box com tecnologia Eko'7 em Porto Alegre/RS.",
  },
  {
    id: "travesseiros",
    name: "Travesseiros",
    slug: "travesseiros",
    emoji: "😴",
    description: "Travesseiros anatômicos com suporte cervical e tecnologia Eko'7 para bem-estar diário.",
    seoTitle: "Travesseiros Tecnológicos Eko'7 | HR Colchões",
    seoDescription: "Travesseiros com infravermelho longo e magnetos para um sono de qualidade.",
  },
  {
    id: "fitness",
    name: "Fitness",
    slug: "fitness",
    emoji: "💪",
    description: "Linha fitness e colchonetes para otimizar seus exercícios físicos.",
    seoTitle: "Linha Fitness e Colchonetes Eko'7 | HR Colchões",
    seoDescription: "Acessórios fitness e colchonetes terapêuticos com tecnologia Eko'7.",
  },
  {
    id: "vestuario-acessorios",
    name: "Vestuário e Acessórios",
    slug: "vestuario-acessorios",
    emoji: "👕",
    description: "Roupas com tecnologia Eko'7 incorporada, calçados ortopédicos e acessórios magnéticos diários.",
    seoTitle: "Vestuário e Acessórios Tecnológicos | HR Colchões",
    seoDescription: "Tênis FN7, leggings, tops e acessórios magnéticos para conforto no dia a dia.",
  },
  /*
    Categorias Planejadas (sem produtos/páginas ativas no momento, apenas no footer)
    - mobiliario (poltronas, cadeiras)
    - acessorios-magneticos (pulseiras, palmilhas)
    - linha-textil (lençóis, toalhas)
  */
];

export const products: Product[] = [
  // ─── Camas & Box ────────────────────────────────────────────────────────────

  {
    id: "flexibed-roma",
    name: "FlexiBed Roma",
    slug: "flexibed-roma",
    categorySlug: "camas-e-bases",
    shortDescription:
      "Cama articulada elétrica com motor silencioso e tecnologia Eko'7. Design clássico que se adapta a qualquer quarto, com regulagem elétrica de encosto e apoio para os pés.",
    technologies: ["Infravermelho Longo", "Magnetos", "Motor Silencioso", "Regulagem Elétrica"],
    certifications: ["ISO 9001", "ISO 14001", "INMETRO"],
    images: [
      "/produtos/camas-e-box/cama-roma.avif",
      "/produtos/colchoes/linha-flexbed-roma.avif",
    ],
  },
  {
    id: "flexibed-lisboa",
    name: "FlexiBed Lisboa",
    slug: "flexibed-lisboa",
    categorySlug: "camas-e-bases",
    shortDescription:
      "Cama articulada elétrica com suporte lombar ajustável e tecnologia integrativa NanoEx. Regulagem precisa do encosto, peseira e altura para máximo conforto personalizado.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx", "Motor Silencioso", "Regulagem Elétrica"],
    certifications: ["ISO 9001", "ISO 14001", "INMETRO"],
    images: [
      "/produtos/camas-e-box/cama-lisboa.avif",
      "/produtos/colchoes/linha-flexbed-lisboa.avif",
    ],
  },
  {
    id: "flexibed-gran-jaguar",
    name: "FlexiBed Gran Jaguar",
    slug: "flexibed-gran-jaguar",
    categorySlug: "camas-e-bases",
    shortDescription:
      "Modelo topo de linha com massagem integrada, motor duplo silencioso e a combinação completa da tecnologia Eko'7. Experiência terapêutica premium do encosto aos pés.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx", "Turmalina Negra", "Motor Silencioso", "Massagem Integrada"],
    certifications: ["ISO 9001", "ISO 14001", "INMETRO", "SBRTO", "ICV Premium"],
    images: [
      "/produtos/camas-e-box/cama-gran-jaguar.avif",
      "/produtos/colchoes/linha-flexbed-gran-jaguar.avif",
    ],
  },
  {
    id: "box-classico",
    name: "Box Clássico",
    slug: "box-classico",
    categorySlug: "camas-e-bases",
    shortDescription:
      "Base box com estrutura reforçada e acabamento premium. Ideal para complementar colchões de alta densidade com estabilidade e durabilidade.",
    technologies: [],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/camas-e-box/box-classico.avif"],
  },
  {
    id: "box-slim",
    name: "Box Slim",
    slug: "box-slim",
    categorySlug: "camas-e-bases",
    shortDescription:
      "Base box de perfil baixo, ideal para quartos com pé-direito mais baixo ou quem prefere cama mais próxima ao chão sem abrir mão da resistência estrutural.",
    technologies: [],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/camas-e-box/box-slim.avif"],
  },
  {
    id: "box-bau",
    name: "Box Baú",
    slug: "box-bau",
    categorySlug: "camas-e-bases",
    shortDescription:
      "Base box com espaço interno de armazenamento. Otimiza o quarto guardando roupas de cama, travesseiros extras e acessórios com facilidade.",
    technologies: [],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/camas-e-box/box-bau.avif"],
  },
  {
    id: "box-bau-lunar",
    name: "Box Baú Lunar",
    slug: "box-bau-lunar",
    categorySlug: "camas-e-bases",
    shortDescription:
      "Box baú premium com tecido especial e mecanismo de abertura assistida. Alta capacidade de armazenamento com acabamento sofisticado.",
    technologies: [],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/camas-e-box/box-bau-lunar.avif"],
  },
  {
    id: "conjunto-bicama-bau",
    name: "Conjunto Bicama Baú",
    slug: "conjunto-bicama-bau",
    categorySlug: "camas-e-bases",
    shortDescription:
      "Conjunto bicama com base baú deslizante. Ideal para quartos de hóspedes e crianças, maximizando o aproveitamento do espaço.",
    technologies: [],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/camas-e-box/conjunto-bicama-bau.avif"],
  },
  {
    id: "bau-de-peseira",
    name: "Baú de Peseira",
    slug: "bau-de-peseira",
    categorySlug: "camas-e-bases",
    shortDescription:
      "Complemento elegante posicionado aos pés da cama com espaço interno para guardar mantas, travesseiros e acessórios de cama.",
    technologies: [],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/camas-e-box/bau-de-peseira.avif"],
  },

  // ─── Colchões ───────────────────────────────────────────────────────────────

  {
    id: "colchao-comfort",
    name: "Comfort Eko'7",
    slug: "comfort",
    categorySlug: "colchoes",
    shortDescription:
      "Colchão com tecnologia Eko'7 e duas versões de densidade — soft e firm — para adaptar o conforto ao seu estilo de sono com infravermelho longo e magnetos.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx"],
    certifications: ["ISO 9001", "ISO 14001", "INMETRO", "ICV Premium"],
    images: [
      "/produtos/colchoes/comfort.avif",
      "/produtos/colchoes/comfort-eko7.avif",
    ],
  },
  {
    id: "colchao-diamante",
    name: "Diamante Eko'7",
    slug: "diamante",
    categorySlug: "colchoes",
    shortDescription:
      "Colchão premium com turmalina negra e cristal de quartzo para benefícios terapêuticos máximos. Ideal para quem busca alívio de dores crônicas e sono profundo.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx", "Turmalina Negra", "Cristal de Quartzo"],
    certifications: ["ISO 9001", "ISO 14001", "INMETRO", "ICV Premium", "SBRTO"],
    images: ["/produtos/colchoes/diamante-eko7.avif"],
  },
  {
    id: "colchao-lunar",
    name: "Lunar",
    slug: "lunar",
    categorySlug: "colchoes",
    shortDescription:
      "Colchão com espuma lunar de alta adaptabilidade que se molda ao contorno do corpo, distribuindo o peso de forma uniforme para reduzir pontos de pressão.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/colchoes/lunar.avif"],
  },
  {
    id: "colchao-news",
    name: "News",
    slug: "news",
    categorySlug: "colchoes",
    shortDescription:
      "Colchão com estrutura renovada e tecnologia Eko'7 para suporte postural eficiente. Ótima relação custo-benefício com todos os benefícios integrativos.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/colchoes/news.avif"],
  },
  {
    id: "colchao-softnews",
    name: "Soft News",
    slug: "softnews",
    categorySlug: "colchoes",
    shortDescription:
      "Versão soft do News com camada adicional de conforto para quem prefere superfície mais macia, mantendo toda a tecnologia integrativa Eko'7.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/colchoes/softnews.avif"],
  },
  {
    id: "colchao-pangeia",
    name: "Pangeia",
    slug: "pangeia",
    categorySlug: "colchoes",
    shortDescription:
      "Colchão com múltiplas camadas de espuma diferenciada e turmalina negra para recuperação muscular acelerada e sono profundo e reparador.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx", "Turmalina Negra"],
    certifications: ["ISO 9001", "ISO 14001", "INMETRO"],
    images: ["/produtos/colchoes/pangeia.avif"],
  },
  {
    id: "colchao-serie-ouro",
    name: "Série Ouro",
    slug: "serie-ouro",
    categorySlug: "colchoes",
    shortDescription:
      "Linha topo de gama com pillow top e cristal de quartzo. O ápice do conforto Eko'7, indicado para quem não abre mão do melhor em qualidade de sono.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx", "Cristal de Quartzo"],
    certifications: ["ISO 9001", "ISO 14001", "INMETRO", "ICV Premium", "SBRTO"],
    images: [
      "/produtos/colchoes/serie-ouro-com-pillow.avif",
      "/produtos/colchoes/serieouro.avif",
    ],
  },
  {
    id: "colchao-unico",
    name: "Único",
    slug: "unico",
    categorySlug: "colchoes",
    shortDescription:
      "Colchão versátil com design exclusivo e tecnologia Eko'7. Uma solução completa para quem busca conforto duradouro com benefícios à saúde.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/colchoes/unico.avif"],
  },

  // ─── Acessórios ─────────────────────────────────────────────────────────────

  {
    id: "travesseiro-cervical",
    name: "Travesseiro Cervical",
    slug: "travesseiro-cervical",
    categorySlug: "travesseiros",
    shortDescription:
      "Travesseiro com suporte cervical anatômico e tecnologia Eko'7. Infravermelho longo e magnetos atuam durante o sono para aliviar tensões no pescoço.",
    technologies: ["Infravermelho Longo", "Magnetos", "Turmalina Negra"],
    certifications: ["ISO 9001", "INMETRO", "ICV Premium"],
    images: ["/produtos/acessorios/travesseiro-cervical.avif"],
  },
  {
    id: "travesseiro-soft",
    name: "Travesseiro Soft",
    slug: "travesseiro-soft",
    categorySlug: "travesseiros",
    shortDescription:
      "Travesseiro de espuma macia com tecnologia Eko'7 para conforto suave. Infravermelho longo integrado para bem-estar durante toda a noite.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/travesseiro-soft.avif"],
  },
  {
    id: "travesseiro-visco-elastico",
    name: "Travesseiro Viscoelástico",
    slug: "travesseiro-visco-elastico",
    categorySlug: "travesseiros",
    shortDescription:
      "Travesseiro de espuma viscoelástica com memória de forma e tecnologia Eko'7. Adapta-se perfeitamente ao contorno da cabeça e pescoço.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/travesseiro-visco-elastico.avif"],
  },
  {
    id: "suporte-cervical",
    name: "Suporte Cervical",
    slug: "suporte-cervical",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Suporte cervical com tecnologia Eko'7 para uso durante o dia. Alivia tensões no pescoço e ombros com infravermelho longo e magnetos.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/suporte-cervical.avif"],
  },
  {
    id: "colar-cervical",
    name: "Colar Cervical",
    slug: "colar-cervical",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Colar cervical terapêutico com tecnologia Eko'7 integrada. Indicado para recuperação de tensões cervicais e prevenção de dores no pescoço.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/colar-cervical.avif"],
  },
  {
    id: "cinta-suporte-lombar",
    name: "Cinta Suporte Lombar",
    slug: "cinta-suporte-lombar",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Cinta lombar com tecnologia Eko'7 para suporte e alívio de dores na região lombar. Indicada para uso diário e durante atividades físicas.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/cinta-suporte-lombar.avif"],
  },
  {
    id: "suporte-multiconforto",
    name: "Suporte Multiconforto",
    slug: "suporte-multiconforto",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Suporte versátil com tecnologia Eko'7 para uso em diferentes regiões do corpo. Proporciona conforto e alívio durante atividades do dia a dia.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/suporte-multiconforto.avif"],
  },
  {
    id: "office-protect",
    name: "Office Protect — Almofada Lombar",
    slug: "office-protect",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Almofada lombar ergonômica com tecnologia Eko'7 para uso em cadeiras de escritório. Melhora a postura e reduz o desconforto em longas jornadas.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/office-protect-almofada-lombar.avif"],
  },
  {
    id: "palmilha-magnetica",
    name: "Palmilha Magnética",
    slug: "palmilha-magnetica",
    categorySlug: "acessorios-magneticos",
    shortDescription:
      "Palmilha com magnetos e infravermelho longo Eko'7. Melhora a circulação nos pés e pernas durante o uso diário em qualquer calçado.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/palmilha-magnetica.avif"],
  },
  {
    id: "sandalia-couro-magnetica",
    name: "Sandália de Couro Magnética",
    slug: "sandalia-couro-magnetica",
    categorySlug: "acessorios-magneticos",
    shortDescription:
      "Sandália de couro legítimo com palmilha magnética Eko'7 integrada. Conforto e elegância com benefícios terapêuticos a cada passo.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/sandalia-couro-magnetica.avif"],
  },
  {
    id: "sandalias-magneticas",
    name: "Sandálias Magnéticas",
    slug: "sandalias-magneticas",
    categorySlug: "acessorios-magneticos",
    shortDescription:
      "Sandálias com tecnologia magnética Eko'7 para estimulação dos pontos reflexos dos pés. Ideal para uso diário com benefícios à circulação.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/sandalias-magneticas.avif"],
  },
  {
    id: "pulseiras-magneticas",
    name: "Pulseiras Magnéticas",
    slug: "pulseiras-magneticas",
    categorySlug: "acessorios-magneticos",
    shortDescription:
      "Pulseiras com magnetos Eko'7 para uso contínuo no pulso. Estimulam pontos de acupressão e podem auxiliar no equilíbrio energético do organismo.",
    technologies: ["Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/pulseiras-magneticas.avif"],
  },
  {
    id: "emplasto-magnetico",
    name: "Emplasto Magnético",
    slug: "emplasto-magnetico",
    categorySlug: "acessorios-magneticos",
    shortDescription:
      "Emplasto adesivo com magnetos Eko'7 de aplicação localizada. Indicado para alívio pontual de dores musculares e articulares.",
    technologies: ["Magnetos", "Infravermelho Longo"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/emplasto-magnetico.avif"],
  },
  {
    id: "tapete-magnetico",
    name: "Tapete Magnético",
    slug: "tapete-magnetico",
    categorySlug: "acessorios-magneticos",
    shortDescription:
      "Tapete com tecnologia Eko'7 para estimulação reflexológica dos pés. Uso diário ao levantar da cama ou em áreas de circulação frequente.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/tapete.avif"],
  },
  {
    id: "mascara-terapeutica",
    name: "Máscara Terapêutica",
    slug: "mascara-terapeutica",
    categorySlug: "acessorios-magneticos",
    shortDescription:
      "Máscara de repouso com tecnologia Eko'7 que bloqueia a luz e emite infravermelho longo para relaxamento profundo dos olhos e região orbital.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/mascara.avif"],
  },
  {
    id: "protetor-de-seios",
    name: "Protetor de Seios",
    slug: "protetor-de-seios",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Protetor com tecnologia Eko'7 desenvolvido especialmente para a saúde feminina, com infravermelho longo para bem-estar contínuo.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/protetor-de-seios.avif"],
  },
  {
    id: "imantador-de-liquidos",
    name: "Imantador de Líquidos",
    slug: "imantador-de-liquidos",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Imantador que altera a estrutura molecular da água e outros líquidos por meio de campo magnético, potencializando a hidratação celular.",
    technologies: ["Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/imantador-de-liquidos.avif"],
  },
  {
    id: "drive-eko7",
    name: "Drive Eko'7",
    slug: "drive",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Dispositivo Eko'7 de uso versátil com campo magnético e infravermelho longo para aplicação terapêutica em diferentes regiões do corpo.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/drive.avif"],
  },
  {
    id: "hugging",
    name: "Hugging",
    slug: "hugging",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Acessório de conforto com tecnologia Eko'7 para abraço terapêutico. Emite infravermelho longo e magnetos para relaxamento e bem-estar.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/hugging.avif"],
  },
  {
    id: "colchonete-fitness",
    name: "Colchonete Fitness",
    slug: "colchonete-fitness",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Colchonete para atividades físicas e meditação com tecnologia Eko'7 integrada. Infravermelho longo e magnetos para recuperação muscular durante o treino.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/acessorios/colchonete-fitness.avif"],
  },

  // ─── Cabeceiras ─────────────────────────────────────────────────────────────

  {
    id: "cabeceira-cincinnati",
    name: "Cabeceira Cincinnati",
    slug: "cabeceira-cincinnati",
    categorySlug: "mobiliario",
    shortDescription:
      "Cabeceira com design moderno e elegante para quartos contemporâneos. Tecido de alta qualidade e acabamento impecável para valorizar o ambiente.",
    technologies: [],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/cabeceiras/cabeceira-cincinnati.avif"],
  },
  {
    id: "cabeceira-cronos",
    name: "Cabeceira Cronos",
    slug: "cabeceira-cronos",
    categorySlug: "mobiliario",
    shortDescription:
      "Cabeceira de linhas retas e design clean com estofo premium. Versatilidade para combinar com diferentes estilos de decoração.",
    technologies: [],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/cabeceiras/cabeceira-cronos.avif"],
  },
  {
    id: "cabeceira-diamante",
    name: "Cabeceira Diamante",
    slug: "cabeceira-diamante",
    categorySlug: "mobiliario",
    shortDescription:
      "Cabeceira com capitonê em formato diamante e tecido premium. Design sofisticado que confere elegância e charme ao quarto.",
    technologies: [],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/cabeceiras/cabeceira-diamante.avif"],
  },
  {
    id: "cabeceira-havai",
    name: "Cabeceira Havai",
    slug: "cabeceira-havai",
    categorySlug: "mobiliario",
    shortDescription:
      "Cabeceira com estofamento generoso e design descontraído. Perfeita para quartos que buscam conforto visual e sensação de aconchego.",
    technologies: [],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/cabeceiras/cabeceira-havai.avif"],
  },
  {
    id: "cabeceira-infinity",
    name: "Cabeceira Infinity",
    slug: "cabeceira-infinity",
    categorySlug: "mobiliario",
    shortDescription:
      "Cabeceira de dimensões amplas com estofo em tecido de alta durabilidade. Design atemporal para quartos de alto padrão.",
    technologies: [],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/cabeceiras/cabeceira-infinity.avif"],
  },
  {
    id: "cabeceira-maceio",
    name: "Cabeceira Maceió",
    slug: "cabeceira-maceio",
    categorySlug: "mobiliario",
    shortDescription:
      "Cabeceira com capitonê suave e curvas delicadas. Combina romantismo e modernidade para criar um quarto acolhedor e sofisticado.",
    technologies: [],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/cabeceiras/cabeceira-maceio.avif"],
  },
  {
    id: "cabeceira-olimpia",
    name: "Cabeceira Olímpia",
    slug: "cabeceira-olimpia",
    categorySlug: "mobiliario",
    shortDescription:
      "Cabeceira com design imponente e acabamento premium. Transforma o quarto em um ambiente de hotel cinco estrelas com toque de exclusividade.",
    technologies: [],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/cabeceiras/cabeceira-olimpia.avif"],
  },

  // ─── Cadeiras & Poltronas ────────────────────────────────────────────────────

  {
    id: "cadeira-diretor",
    name: "Cadeira Diretor",
    slug: "cadeira-diretor",
    categorySlug: "mobiliario",
    shortDescription:
      "Cadeira executiva com encosto alto, apoio de braços e tecnologia Eko'7. Proporciona postura correta e conforto em longas jornadas de trabalho.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/cadeiras/cadeira-diretor.avif"],
  },
  {
    id: "cadeira-presidente",
    name: "Cadeira Presidente",
    slug: "cadeira-presidente",
    categorySlug: "mobiliario",
    shortDescription:
      "Cadeira presidente com design imponente, couro premium e tecnologia Eko'7. Para quem exige o máximo em conforto e ergonomia no trabalho.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/cadeiras/cadeira-presidente.avif"],
  },
  {
    id: "cadeira-secretaria",
    name: "Cadeira Secretária",
    slug: "cadeira-secretaria",
    categorySlug: "mobiliario",
    shortDescription:
      "Cadeira secretária ergonômica com tecnologia Eko'7 para uso em escritórios. Assento confortável e regulagem de altura para diferentes usuários.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/cadeiras/cadeira-secretaria.avif"],
  },
  {
    id: "poltrona-columbia",
    name: "Poltrona Columbia",
    slug: "poltrona-columbia",
    categorySlug: "mobiliario",
    shortDescription:
      "Poltrona de relaxamento com design clássico e tecnologia Eko'7. Estofado generoso com infravermelho longo para sessões de descanso terapêutico.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/cadeiras/poltrona-columbia.avif"],
  },
  {
    id: "poltrona-eko7",
    name: "Poltrona Eko'7",
    slug: "poltrona",
    categorySlug: "mobiliario",
    shortDescription:
      "Poltrona com tecnologia Eko'7 e estofado confortável para leitura, descanso ou meditação. Infravermelho longo e magnetos para bem-estar contínuo.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/cadeiras/poltrona.avif"],
  },
  {
    id: "puff-eko7",
    name: "Puff Eko'7",
    slug: "puff",
    categorySlug: "mobiliario",
    shortDescription:
      "Puff versátil com tecnologia Eko'7 para descanso dos pés ou assento adicional. Estofado resistente com infravermelho longo integrado.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/cadeiras/puff.avif"],
  },

  // ─── Fitness & Vestuário ─────────────────────────────────────────────────────

  {
    id: "tenis-fn7",
    name: "Tênis FN7",
    slug: "tenis-fn7",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Tênis com palmilha de tecnologia Eko'7 — infravermelho longo e magnetos para estimulação dos pontos reflexos dos pés durante toda a caminhada. Disponível em 6 cores.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx"],
    certifications: ["ISO 9001", "INMETRO"],
    images: [
      "/produtos/fitness/tenis-preto.avif",
      "/produtos/fitness/tenis-marinho.avif",
      "/produtos/fitness/tenis-lime.avif",
      "/produtos/fitness/tenis-mescla.avif",
      "/produtos/fitness/tenis-preto-e-branco.avif",
      "/produtos/fitness/tenis-rose.avif",
    ],
  },
  {
    id: "camiseta-masculina",
    name: "Camiseta Masculina",
    slug: "camiseta-masculina",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Camiseta fitness masculina com tecnologia Eko'7 incorporada ao tecido. Infravermelho longo e magnetos para bem-estar durante treinos e atividades diárias.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx"],
    certifications: ["ISO 9001", "INMETRO"],
    images: [
      "/produtos/fitness/fitness-camiseta-masc.avif",
      "/produtos/fitness/fitness-camiseta-masc-ml.avif",
    ],
  },
  {
    id: "regata-masculina",
    name: "Regata Masculina",
    slug: "regata-masculina",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Regata fitness masculina com tecnologia Eko'7 para máxima liberdade de movimento. Tecido funcional com infravermelho longo e magnetos.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/fitness/fitness-regata-masc.avif"],
  },
  {
    id: "bermuda-masculina",
    name: "Bermuda Masculina",
    slug: "bermuda-masculina",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Bermuda fitness masculina com tecnologia Eko'7 integrada. Conforto e performance com benefícios terapêuticos durante os treinos.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/fitness/fitness-bermuda-masc.avif"],
  },
  {
    id: "macacao-feminino",
    name: "Macacão Feminino",
    slug: "macacao-feminino",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Macacão fitness feminino com tecnologia Eko'7 em manga curta e manga longa. Tecido funcional com infravermelho longo e magnetos para bem-estar completo.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx"],
    certifications: ["ISO 9001", "INMETRO"],
    images: [
      "/produtos/fitness/fitness-macacao-fem.avif",
      "/produtos/fitness/fitness-macacao-fem-ml.avif",
    ],
  },
  {
    id: "macaquinho-feminino",
    name: "Macaquinho Feminino",
    slug: "macaquinho-feminino",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Macaquinho fitness feminino com tecnologia Eko'7 em duas versões. Combinação perfeita de estilo e benefícios terapêuticos para os treinos.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: [
      "/produtos/fitness/fitness-macaquinho-fem.avif",
      "/produtos/fitness/fitness-macaquinho-fem-ml.avif",
    ],
  },
  {
    id: "regata-feminina",
    name: "Regata Feminina",
    slug: "regata-feminina",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Regata fitness feminina com tecnologia Eko'7 para treinos com mais leveza. Tecido respirável com infravermelho longo integrado.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/fitness/fitness-regata-fem.avif"],
  },
  {
    id: "legging-feminina",
    name: "Legging Feminina",
    slug: "legging-feminina",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Legging fitness feminina com tecnologia Eko'7 incorporada. Compressão moderada com infravermelho longo e magnetos para recuperação muscular ativa.",
    technologies: ["Infravermelho Longo", "Magnetos", "NanoEx"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/fitness/fitness-legg-fem.avif"],
  },
  {
    id: "top-feminino",
    name: "Top Feminino",
    slug: "top-feminino",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Top esportivo feminino com tecnologia Eko'7. Suporte adequado e tecido com infravermelho longo para bem-estar durante atividades físicas.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/fitness/fitness-top-fem.avif"],
  },
  {
    id: "shorts-feminino",
    name: "Shorts Feminino",
    slug: "shorts-feminino",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Shorts fitness feminino com tecnologia Eko'7 em duas versões — modelo shorts e saia-shorts. Conforto e estilo com benefícios terapêuticos.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: [
      "/produtos/fitness/fitness-shorts-fem.avif",
      "/produtos/fitness/fitness-shorts-saia-fem.avif",
    ],
  },
  {
    id: "sutia-feminino",
    name: "Sutiã Esportivo",
    slug: "sutia-feminino",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Sutiã esportivo com tecnologia Eko'7 para suporte e bem-estar feminino. Tecido com infravermelho longo e magnetos para uso em treinos e no dia a dia.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/fitness/sutia-fem.avif"],
  },
  {
    id: "calcinha-feminina",
    name: "Calcinha Feminina",
    slug: "calcinha-feminina",
    categorySlug: "vestuario-acessorios",
    shortDescription:
      "Calcinha com tecnologia Eko'7 para bem-estar feminino contínuo. Tecido com infravermelho longo e magnetos integrados para uso diário.",
    technologies: ["Infravermelho Longo", "Magnetos"],
    certifications: ["ISO 9001", "INMETRO"],
    images: ["/produtos/fitness/calcinha-fem.avif"],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductBySlug(categorySlug: string, productSlug: string): Product | undefined {
  return products.find((p) => p.categorySlug === categorySlug && p.slug === productSlug);
}
