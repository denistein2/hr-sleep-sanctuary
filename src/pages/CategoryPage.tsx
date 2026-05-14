import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, SearchX } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { SITE_URL } from "@/config/site";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PRODUCTS, Product } from "@/data/products";
import { ProductCover } from "@/components/ProductGallery";

const CATALOG_ORDER = [
  {
    title: "Colchões",
    filter: (p: Product) => p.line === "Premium" || p.line === "Conforto",
  },
  {
    title: "Camas e Box",
    filter: (p: Product) => p.line === "Cama",
  },
  {
    title: "Acessórios",
    filter: (p: Product) => p.line === "Acessorio",
  },
  {
    title: "Outros",
    filter: (p: Product) => p.line !== "Premium" && p.line !== "Conforto" && p.line !== "Cama" && p.line !== "Acessorio",
  }
];

const CategoryPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase().trim() || "";

  const visibleProducts = PRODUCTS.filter((p) => !p.hidden);
  const filteredProducts = query
    ? visibleProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.type.toLowerCase().includes(query) ||
          p.line.toLowerCase().includes(query),
      )
    : visibleProducts;

  return (
    <>
      <Helmet>
        <link rel="canonical" href={`${SITE_URL}/colchoes`} />
      </Helmet>
      <SEOHead
        title="Linha Eko'7 | HR Colchões"
        description="Descubra a linha completa de colchões, camas articuladas e acessórios terapêuticos Eko'7."
        path="/colchoes"
      />
      <Header />
      <main className="pt-24 pb-20 min-h-[80vh]">
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
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
                {query ? `Resultados para "${searchParams.get("q")}"` : "Linha Eko'7"}
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl">
                {query 
                  ? "Explore os produtos que encontramos para sua busca." 
                  : "Tecnologia de ponta em descanso e saúde. Explore nossas linhas exclusivas com infravermelho longo, magnetoterapia e energia quântica."}
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-16 text-center bg-muted/20 rounded-3xl border border-border/50">
                <SearchX className="w-16 h-16 text-muted-foreground/50 mb-4" />
                <h3 className="font-display text-xl font-bold text-foreground mb-2">Nenhum produto encontrado</h3>
                <p className="text-muted-foreground mb-6">Não encontramos resultados para "{searchParams.get("q")}".</p>
                <Link to="/colchoes" className="px-6 py-2 rounded-lg bg-accent text-accent-foreground font-semibold">
                  Ver todos os produtos
                </Link>
              </div>
            ) : (
              CATALOG_ORDER.map((group) => {
                const groupProducts = filteredProducts.filter(group.filter);
                if (groupProducts.length === 0) return null;

                return (
                  <div key={group.title} className="mb-16">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-6 pb-2 border-b border-border">
                      {group.title}
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {groupProducts.map((product, i) => (
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
                              <ProductCover
                                slug={product.slug}
                                alt={product.name}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
              })
            )}

            {!query && (
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
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default CategoryPage;

