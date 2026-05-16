import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Product } from "@/data/products";

interface LaunchSpotlightProps {
  product: Product;
}

const LaunchSpotlight = ({ product }: LaunchSpotlightProps) => {
  const coverImage = product.images?.[0] ?? "/images/Logo Novo.png";
  const productUrl = `/${product.categoryId || "produtos"}/${product.slug}`;
  const whatsappMsg = encodeURIComponent(
    `Olá, tenho interesse no lançamento ${product.name}, gostaria de marcar uma consultoria.`
  );

  return (
    <section
      style={{ background: "#1a2744" }}
      className="w-full py-20 overflow-hidden"
    >
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* ── Texto (esquerda no desktop, baixo no mobile) ── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 lg:order-1 flex flex-col gap-6"
          >
            {/* Linha decorativa + badge */}
            <div className="flex flex-col gap-3">
              <span
                className="inline-flex items-center gap-2 self-start bg-amber-500 text-white
                  text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full
                  animate-pulse shadow-lg shadow-amber-500/30"
              >
                ✦ Novo Lançamento
              </span>
              <div className="w-16 h-1 bg-amber-500 rounded-full" />
            </div>

            {/* Badge linha acima do nome */}
            <span className="text-amber-400 text-xs font-bold uppercase tracking-[0.25em]">
              Linha Premium
            </span>

            {/* Nome do produto */}
            <h2 className="font-display text-5xl md:text-7xl font-bold text-white leading-none">
              {product.name}
            </h2>

            {/* Short description */}
            {product.shortDescription && (
              <p className="text-gray-300 text-lg max-w-lg leading-relaxed">
                {product.shortDescription}
              </p>
            )}

            {/* Tecnologias */}
            {product.technologies.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full
                      border border-amber-500/40 text-amber-400 bg-amber-500/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to={productUrl}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg
                  bg-amber-500 hover:bg-amber-400 text-white font-bold text-sm
                  transition-all duration-300 shadow-lg shadow-amber-500/30
                  hover:shadow-amber-400/40 hover:gap-3"
              >
                Conhecer o {product.name} <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={`https://wa.me/5551984910838?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-lg
                  bg-[#25D366] hover:bg-[#20b858] text-white font-bold text-sm
                  transition-all duration-300 shadow-lg shadow-green-500/20"
              >
                Consultar via WhatsApp
              </a>
            </div>
          </motion.div>

          {/* ── Imagem (direita no desktop, topo no mobile) ── */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl drop-shadow-2xl
              ring-1 ring-white/10 group">
              <img
                src={coverImage}
                alt={product.name}
                loading="eager"
                decoding="async"
                className="w-full h-auto object-cover
                  transition-transform duration-700 group-hover:scale-105"
                style={{ maxHeight: "520px", objectFit: "cover" }}
              />
              {/* Brilho sutil nas bordas */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5 pointer-events-none" />
            </div>

            {/* Reflexo decorativo atrás da imagem */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-20 blur-3xl -z-10"
              style={{ background: "radial-gradient(ellipse, #C9A84C 0%, transparent 70%)" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LaunchSpotlight;
