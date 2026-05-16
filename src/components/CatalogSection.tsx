import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { CATEGORIES, CATEGORY_ORDER, Category } from "@/data/categories";
import { PRODUCTS } from "@/data/products";

// Imagem de capa de cada categoria (produto principal)
const CATEGORY_COVER: Record<string, string> = {
  colchoes: "/produtos/diamante/diamante-1.webp",
  "camas-articuladas": "/produtos/flexibed-gran-jaguar/flexibed-gran-jaguar-01.webp",
  "camas-e-box": "/produtos/box-bau/box-bau-01.webp",
};

const FALLBACK_IMG = "/images/Logo Novo.png";

function getCover(slug: string): string {
  return CATEGORY_COVER[slug] ?? FALLBACK_IMG;
}

// Descrições curtas por categoria
const CATEGORY_DESC: Record<string, string> = {
  colchoes: "Tecnologia de ponta para um sono restaurador",
  "camas-articuladas": "Articulação motorizada para conforto total",
  "camas-e-box": "Bases e conjuntos para elevar seu colchão",
  poltronas: "Conforto e ergonomia para o seu dia a dia",
  travesseiros: "Suporte ideal para noites perfeitas",
  acessorios: "Complementos de qualidade Eko'7",
};

const CatalogSection = () => {
  // Produtos visíveis por categoria
  const countByCategory = (slug: string) =>
    PRODUCTS.filter((p) => !p.hidden && p.categoryId === slug).length;

  // Ordem oficial: CATEGORY_ORDER, apenas categorias não ocultas
  const sorted = CATEGORY_ORDER
    .map(slug => CATEGORIES.find(c => c.slug === slug))
    .filter((c): c is Category => !!c && !c.hidden);

  return (
    <section
      id="catalogo"
      className="py-20 md:py-28"
      style={{ background: "linear-gradient(180deg, #111827 0%, #0f1724 100%)" }}
    >
      <div className="container px-4">
        {/* Header da seção */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-400 mb-3">
            Catálogo Completo
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Nossos Produtos
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Conheça a linha completa Eko'7
          </p>
        </motion.div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {sorted.map((cat, i) => {
            const count = countByCategory(cat.slug);
            const cover = getCover(cat.slug);
            const desc = CATEGORY_DESC[cat.slug] ?? `Explore a linha de ${cat.name.toLowerCase()}`;
            return (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
              >
                <Link
                  to={`/${cat.slug}`}
                  className="group block relative rounded-2xl overflow-hidden min-h-[280px] shadow-xl border border-white/5 hover:border-amber-400/50 transition-all duration-400"
                  style={{ minHeight: "280px" }}
                >
                  {/* Background image */}
                  <img
                    src={cover}
                    alt={cat.name}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = FALLBACK_IMG;
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-6" style={{ minHeight: "280px" }}>
                    {/* Badge contagem */}
                    {count > 0 && (
                      <div className="self-end">
                        <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/80 border border-white/20">
                          {count} {count === 1 ? "produto" : "produtos"}
                        </span>
                      </div>
                    )}

                    {/* Category info — bottom */}
                    <div className="mt-auto">
                      <h3 className="font-display text-2xl font-bold text-white mb-1.5 group-hover:text-amber-300 transition-colors duration-300">
                        {cat.name}
                      </h3>
                      <p className="text-sm text-gray-300/80 mb-4 leading-relaxed">
                        {desc}
                      </p>
                      <span className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 group-hover:gap-3 transition-all duration-300 uppercase tracking-wider">
                        Ver catálogo <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
