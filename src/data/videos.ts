export type VideoCategory =
  | "Institucional"
  | "Apresentacao"
  | "Lancamento"
  | "Distribuidor"
  | "MidiaTV";

export type Video = {
  id: string;       // YouTube ID
  title: string;
  category: VideoCategory;
  year: string;
};

export const INSTITUTIONAL_VIDEOS: Video[] = [
  { id: "pCQomlIDWKk", title: "Eko'7: Transformando Vidas com Tecnologia e Sustentabilidade", category: "Institucional", year: "2023" },
  { id: "Md6RzB_bKHY", title: "Institucional Grupo Eko'7 Brasil",                              category: "Institucional", year: "2019" },
  { id: "6QcLBfzyE1E", title: "Por que escolher um Colchão Eko'7?",                            category: "Apresentacao",  year: "2019" }
];
