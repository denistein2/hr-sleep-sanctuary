import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Zap, ShieldCheck, Info } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PRODUCTS, INSTITUTIONAL_VIDEO_ID } from "@/data/products";
import { YouTubeFacade } from "@/components/YouTubeFacade";

const WA_NUMBER = "5551984910838";

function buildWhatsAppMessage(productName: string): string {
  return encodeURIComponent(
    `Olá! Tenho interesse no produto *${productName}*. Poderia me passar mais informações sobre disponibilidade e condições?`
  );
}

const ProductPage = () => {
  const { slug } = useParams();
  const productData = PRODUCTS.find((p) => p.slug === slug);

  if (!productData) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-16">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold text-foreground mb-4">
              Produto não encontrado
            </h1>
            <Link to="/colchoes" className="text-accent hover:underline">
              Voltar ao catálogo
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const waLink = `https://wa.me/${WA_NUMBER}?text=${buildWhatsAppMessage(productData.name)}`;

  return (
    <>
      <SEOHead
        title={`${productData.name} | Linha Eko'7 | HR Colchões`}
        description={productData.description}
        path={`/colchoes/${productData.slug}`}
        type="product"
      />
      <Header />
      <main className="pt-24 pb-20">
        <div className="container px-4 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link
              to="/colchoes"
              className="hover:text-foreground transition-colors"
            >
              Colchões
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{productData.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-10"
          >
            {/* 1. Hero */}
            <div className="text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-4">
                <span className="text-sm font-semibold uppercase tracking-wider text-accent">
                  Linha {productData.line}
                </span>
                {productData.badge === "Launch" && (
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-accent text-accent-foreground">
                    Lançamento
                  </span>
                )}
                {productData.badge === "TopOfLine" && (
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500 text-white">
                    Topo de Linha
                  </span>
                )}
                {productData.badge === "BestSeller" && (
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-blue-500 text-white">
                    Mais Vendido
                  </span>
                )}
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                {productData.name}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
                {productData.description}
              </p>
            </div>

            {/* 2. Especificações */}
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Info className="w-6 h-6 text-accent" />
                Especificações
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex flex-col border-b border-border pb-3">
                  <span className="text-sm text-muted-foreground">Tipo</span>
                  <span className="font-medium">{productData.type}</span>
                </div>
                {productData.height && (
                  <div className="flex flex-col border-b border-border pb-3">
                    <span className="text-sm text-muted-foreground">Altura</span>
                    <span className="font-medium">{productData.height}</span>
                  </div>
                )}
                {productData.fabric && (
                  <div className="flex flex-col border-b border-border pb-3">
                    <span className="text-sm text-muted-foreground">Tecido</span>
                    <span className="font-medium">{productData.fabric}</span>
                  </div>
                )}
                {productData.warranty && (
                  <div className="flex flex-col border-b border-border pb-3">
                    <span className="text-sm text-muted-foreground">Garantia</span>
                    <span className="font-medium">{productData.warranty}</span>
                  </div>
                )}
                {productData.durability && (
                  <div className="flex flex-col border-b border-border pb-3">
                    <span className="text-sm text-muted-foreground">Durabilidade Estimada</span>
                    <span className="font-medium">{productData.durability}</span>
                  </div>
                )}
              </div>
            </div>

            {/* 3. Tecnologias */}
            {productData.technologies.length > 0 && (
              <div className="glass-card rounded-2xl p-6 md:p-8 border-accent/20">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-accent" />
                  Tecnologias Integradas
                </h2>
                <div className="flex flex-wrap gap-3">
                  {productData.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm md:text-base px-4 py-2 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 4. Vídeo */}
            <div className="mt-4">
              <YouTubeFacade
                videoId={productData.videoId ?? INSTITUTIONAL_VIDEO_ID}
                title={`Apresentação: ${productData.name}`}
              />
            </div>

            {/* 5. CTA WhatsApp */}
            <div className="mt-8 flex flex-col items-center">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#25D366] text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200"
              >
                <MessageCircle className="w-6 h-6" />
                Falar sobre o {productData.name}
              </a>
            </div>

            {/* 6. Link discreto */}
            <div className="text-center mt-6">
              <a
                href={productData.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
              >
                Ver na Eko'7 oficial
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

export default ProductPage;
