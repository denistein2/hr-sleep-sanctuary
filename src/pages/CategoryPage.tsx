import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

interface CategoryData {
  title: string;
  seoTitle: string;
  seoDescription: string;
  description: string;
  benefits: string[];
}

const categoriesData: Record<string, CategoryData> = {
  "colchoes-terapeuticos": {
    title: "Colchões Terapêuticos",
    seoTitle: "Colchões Terapêuticos Eko'7 — Sono Reparador | HR Colchões",
    seoDescription: "Colchões terapêuticos com infravermelho longo e tecnologia magnética Eko'7 para sono reparador profundo. Alívio de dores e melhora na qualidade de vida em Porto Alegre.",
    description: "Nossos colchões terapêuticos combinam infravermelho longo e tecnologia magnética para um sono verdadeiramente reparador, aliviando dores e promovendo o bem-estar.",
    benefits: ["Infravermelho longo", "Tecnologia magnética", "Alívio de dores crônicas", "Melhora na circulação", "Sono profundo e reparador"],
  },
  "camas-articuladas": {
    title: "Camas Articuladas & Box",
    seoTitle: "Camas Articuladas Eko'7 — Conforto Premium | HR Colchões",
    seoDescription: "Camas articuladas elétricas com tecnologia Eko'7. Regulagem personalizada para máximo conforto e saúde. Distribuidor em Porto Alegre.",
    description: "Camas articuladas com regulagem elétrica e tecnologia integrativa Eko'7 para o máximo conforto e bem-estar no seu descanso diário.",
    benefits: ["Regulagem elétrica", "Posições personalizáveis", "Motor silencioso", "Controle remoto", "Compatível com colchões Eko'7"],
  },
  "cabeceiras": {
    title: "Cabeceiras",
    seoTitle: "Cabeceiras Premium — Design Sofisticado | HR Colchões",
    seoDescription: "Cabeceiras premium com design sofisticado para transformar seu quarto. Diversas opções de estilo em Porto Alegre.",
    description: "Cabeceiras com design sofisticado que complementam perfeitamente seu quarto, oferecendo estilo e funcionalidade.",
    benefits: ["Design exclusivo", "Materiais premium", "Fácil instalação", "Diversas cores", "Estofamento de alta qualidade"],
  },
  "poltronas-puffs": {
    title: "Poltronas & Puffs",
    seoTitle: "Poltronas e Puffs Premium — Conforto | HR Colchões",
    seoDescription: "Poltronas e puffs com conforto premium para todos os ambientes. Descubra nossa linha em Porto Alegre.",
    description: "Poltronas e puffs projetados para oferecer conforto premium em todos os ambientes da sua casa.",
    benefits: ["Conforto ergonômico", "Design moderno", "Materiais duráveis", "Variedade de modelos", "Para todos os ambientes"],
  },
  "vestuario-acessorios": {
    title: "Vestuário & Acessórios",
    seoTitle: "Vestuário e Acessórios Eko'7 — Tecnologia no Dia a Dia | HR Colchões",
    seoDescription: "Travesseiros, mantas e acessórios com tecnologia magnética e infravermelho longo Eko'7. Bem-estar 24 horas em Porto Alegre.",
    description: "Travesseiros, mantas e vestuário com tecnologia Eko'7 para levar os benefícios do infravermelho longo e tecnologia magnética para o seu dia a dia.",
    benefits: ["Travesseiros terapêuticos", "Mantas com infravermelho", "Vestuário funcional", "Tecnologia Eko'7", "Bem-estar contínuo"],
  },
};

const CategoryPage = () => {
  const { slug } = useParams();
  const data = slug ? categoriesData[slug] : undefined;

  if (!data) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">Categoria não encontrada</h1>
            <Link to="/" className="text-accent hover:underline">Voltar ao início</Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <SEOHead title={data.seoTitle} description={data.seoDescription} />
      <Header />
      <main className="pt-24 pb-20">
        <div className="container px-4">
          <Link to="/#catalogo" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Voltar ao catálogo
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{data.title}</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mb-10">{data.description}</p>

            <div className="glass-card rounded-2xl p-8 max-w-2xl">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">Benefícios</h2>
              <ul className="space-y-3">
                {data.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-foreground/80">
                    <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <a
                  href="https://wa.me/5551984910838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Solicitar Orçamento via WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default CategoryPage;
