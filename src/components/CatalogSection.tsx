import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const categories = [
  { name: "Colchões Terapêuticos", slug: "/produtos/colchoes-terapeuticos", description: "Infravermelho longo e tecnologia magnética para sono reparador.", emoji: "🛏️" },
  { name: "Camas Articuladas & Box", slug: "/produtos/camas-articuladas", description: "Regulagem elétrica para o máximo conforto e bem-estar.", emoji: "⚙️" },
  { name: "Cabeceiras", slug: "/produtos/cabeceiras", description: "Design sofisticado para completar o seu quarto.", emoji: "🎨" },
  { name: "Poltronas & Puffs", slug: "/produtos/poltronas-puffs", description: "Conforto premium para todos os ambientes.", emoji: "🪑" },
  { name: "Vestuário & Acessórios", slug: "/produtos/vestuario-acessorios", description: "Travesseiros, mantas e acessórios com tecnologia Eko'7.", emoji: "✨" },
];

const CatalogSection = () => {
  return (
    <section id="catalogo" className="py-20 md:py-28 bg-muted/40">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-2">Catálogo</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Nossos Produtos</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={cat.slug}
                className="group glass-card rounded-xl p-6 flex flex-col h-full hover:border-accent/30 transition-all duration-300"
              >
                <span className="text-3xl mb-4">{cat.emoji}</span>
                <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">{cat.name}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-1">{cat.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
                  Ver mais <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
