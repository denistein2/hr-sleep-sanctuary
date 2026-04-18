import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { getCategoryBySlug, getProductsByCategory } from "@/data/products";

const CategoryPage = () => {
  const { slug } = useParams();
  const category = slug ? getCategoryBySlug(slug) : undefined;
  const products = slug ? getProductsByCategory(slug) : [];

  if (!category) {
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
      <SEOHead title={category.seoTitle} description={category.seoDescription} />
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
            <div className="mb-10">
              <span className="text-4xl mb-3 block">{category.emoji}</span>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">{category.name}</h1>
              <p className="text-muted-foreground text-lg max-w-2xl">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Link
                    to={`/produtos/${product.categorySlug}/${product.slug}`}
                    className="group glass-card rounded-xl overflow-hidden flex flex-col h-full hover:border-accent/30 transition-all duration-300"
                  >
                    {product.images.length > 0 && (
                      <div className="aspect-video bg-muted/20 overflow-hidden">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-5 flex flex-col flex-1">
                      <h2 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                        {product.name}
                      </h2>
                      <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">
                        {product.shortDescription}
                      </p>

                      {product.technologies.length > 0 && (
                        <div className="mb-3">
                          <div className="flex flex-wrap gap-1.5">
                            {product.technologies.slice(0, 3).map((tech) => (
                              <span key={tech} className="text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                                {tech}
                              </span>
                            ))}
                            {product.technologies.length > 3 && (
                              <span className="text-xs px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
                                +{product.technologies.length - 3}
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent group-hover:gap-2 transition-all mt-auto">
                        Ver detalhes <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="glass-card rounded-2xl p-8 max-w-xl">
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
