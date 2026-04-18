import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, MessageCircle, ShieldCheck, Zap } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getCategoryBySlug, getProductBySlug } from "@/data/products";

const WA_NUMBER = "5551984910838";

function buildWhatsAppMessage(productName: string, categoryName: string): string {
  return encodeURIComponent(
    `Olá! Tenho interesse no produto *${productName}* (${categoryName}). Poderia me passar mais informações sobre disponibilidade e condições?`
  );
}

const ProductPage = () => {
  const { categoria, produto } = useParams();
  const category = categoria ? getCategoryBySlug(categoria) : undefined;
  const productData = categoria && produto ? getProductBySlug(categoria, produto) : undefined;

  const [activeImage, setActiveImage] = useState(0);

  if (!category || !productData) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">
              Produto não encontrado
            </h1>
            <Link to="/" className="text-accent hover:underline">
              Voltar ao início
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const images = productData.images.length > 0 ? productData.images : ["/placeholder.svg"];
  const waLink = `https://wa.me/${WA_NUMBER}?text=${buildWhatsAppMessage(productData.name, category.name)}`;

  const prevImage = () => setActiveImage((i) => (i - 1 + images.length) % images.length);
  const nextImage = () => setActiveImage((i) => (i + 1) % images.length);

  return (
    <>
      <SEOHead
        title={`${productData.name} — ${category.name} | HR Colchões`}
        description={productData.shortDescription}
      />
      <Header />
      <main className="pt-24 pb-20">
        <div className="container px-4 max-w-6xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/#catalogo" className="hover:text-foreground transition-colors">
              Catálogo
            </Link>
            <span>/</span>
            <Link
              to={`/produtos/${category.slug}`}
              className="hover:text-foreground transition-colors"
            >
              {category.name}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{productData.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* ─── Gallery ─── */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Main image */}
              <div className="relative glass-card rounded-2xl overflow-hidden aspect-square bg-muted/20 mb-3">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeImage}
                    src={images[activeImage]}
                    alt={`${productData.name} — imagem ${activeImage + 1}`}
                    className="w-full h-full object-contain p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  />
                </AnimatePresence>

                {images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      aria-label="Imagem anterior"
                      className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-background transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextImage}
                      aria-label="Próxima imagem"
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-background transition-colors"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>

              {/* Thumbnails */}
              {images.length > 1 && (
                <div className="flex gap-2 flex-wrap">
                  {images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      aria-label={`Ver imagem ${i + 1}`}
                      className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                        i === activeImage
                          ? "border-accent"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      <img
                        src={src}
                        alt=""
                        className="w-full h-full object-contain p-1 bg-muted/20"
                      />
                    </button>
                  ))}
                </div>
              )}
            </motion.div>

            {/* ─── Info ─── */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <div>
                <Link
                  to={`/produtos/${category.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-accent mb-3 hover:opacity-80 transition-opacity"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  {category.name}
                </Link>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                  {productData.name}
                </h1>
                <p className="text-muted-foreground text-base leading-relaxed">
                  {productData.shortDescription}
                </p>
              </div>

              {/* Technologies */}
              {productData.technologies.length > 0 && (
                <div className="glass-card rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <Zap className="w-4 h-4 text-accent" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      Tecnologias Eko'7
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {productData.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Certifications */}
              {productData.certifications.length > 0 && (
                <div className="glass-card rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-4 h-4 text-muted-foreground" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Certificações
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {productData.certifications.map((cert) => (
                      <span
                        key={cert}
                        className="text-sm px-3 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA */}
              <div className="glass-card rounded-xl p-5 border-accent/20">
                <p className="text-sm text-muted-foreground mb-4">
                  Quer saber preço, medidas disponíveis ou condições especiais? Fale com um
                  consultor agora pelo WhatsApp.
                </p>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 w-full justify-center px-6 py-3.5 rounded-lg bg-[#25D366] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" />
                  Solicitar informações via WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default ProductPage;
