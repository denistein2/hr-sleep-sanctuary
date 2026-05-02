import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PRODUCTS, ProductLine } from "@/data/products";

const LINE_ORDER: ProductLine[] = ["Premium", "Conforto", "Cama", "Acessorio"];

const CategoryPage = () => {
  return (
    <>
      <SEOHead
        title="Linha Eko'7 | HR Colchões"
        description="Descubra a linha completa de colchões, camas articuladas e acessórios terapêuticos Eko'7."
        path="/colchoes"
      />
      <Header />
      <main className="pt-24 pb-20">
        <div className="container px-4">
          <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Voltar ao início
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-12">
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Linha Eko'7</h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                Tecnologia de ponta em descanso e saúde. Explore nossas linhas exclusivas com infravermelho longo, magnetoterapia e energia quântica.
              </p>
            </div>

            {LINE_ORDER.map((line) => {
              const lineProducts = PRODUCTS.filter((p) => p.line === line);
              if (lineProducts.length === 0) return null;

              return (
                <div key={line} className="mb-16">
                  <h2 className="font-display text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                    Linha {line}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lineProducts.map((product, i) => (
                      <motion.div
                        key={product.slug}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                      >
                        <Link
                          to={`/colchoes/${product.slug}`}
                          className="group glass-card rounded-xl overflow-hidden flex flex-col h-full hover:border-accent/30 transition-all duration-300 relative"
                        >
                          {product.badge === "Launch" && (
                            <div className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                              Lançamento
                            </div>
                          )}
                          {product.badge === "TopOfLine" && (
                            <div className="absolute top-3 left-3 z-10 bg-amber-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                              Topo de Linha
                            </div>
                          )}
                          {product.badge === "BestSeller" && (
                            <div className="absolute top-3 left-3 z-10 bg-blue-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                              Mais Vendido
                            </div>
                          )}

                          <div className="aspect-video bg-muted/20 overflow-hidden relative">
                            <img
                              src="/placeholder.svg"
                              alt={product.name}
                              className="w-full h-full object-cover p-3 group-hover:scale-105 transition-transform duration-500 opacity-50"
                            />
                          </div>

                          <div className="p-5 flex flex-col flex-1">
                            <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                              {product.description}
                            </p>

                            {product.technologies.length > 0 && (
                              <div className="mb-4 mt-auto">
                                <span className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium">
                                  {product.technologies[0]}
                                </span>
                              </div>
                            )}

                            <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all">
                              Ver detalhes <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                            </span>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="glass-card rounded-2xl p-8 max-w-xl mt-12">
              <h2 className="font-display text-xl font-bold text-foreground mb-2">Ficou interessado?</h2>
              <p className="text-sm text-muted-foreground mb-6">Entre em contato pelo WhatsApp para saber preços, disponibilidade e condições especiais.</p>
              <a
                href="https://wa.me/5551984910838"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Solicitar Orçamento via WhatsApp
              </a>
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
