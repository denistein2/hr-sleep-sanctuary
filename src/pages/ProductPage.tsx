import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, MessageCircle, Zap, ShieldCheck, Info } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { PRODUCTS, INSTITUTIONAL_VIDEO_ID } from "@/data/products";
import { YouTubeFacade } from "@/components/YouTubeFacade";
import { SITE_URL } from "@/config/site";
import ProductGallery from "@/components/ProductGallery";

const WA_NUMBER = "5551984910838";

function buildWhatsAppMessage(productName: string, categorySlug?: string): string {
  const categoryMap: Record<string, string> = {
    colchoes: "Colchão",
    camas: "Cama Articulada",
    acessorios: "Acessório"
  };
  const article = categorySlug === "camas" ? "na" : "no";
  const categoryStr = categorySlug && categoryMap[categorySlug] ? categoryMap[categorySlug] : "produto";
  
  return encodeURIComponent(
    `Olá, tenho interesse ${article} ${categoryStr} ${productName}, gostaria de marcar uma consultoria.`
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

  const waLink = `https://wa.me/${WA_NUMBER}?text=${buildWhatsAppMessage(productData.name, productData.categorySlug)}`;

  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": productData.name,
    "description": productData.description,
    "brand": {
      "@type": "Brand",
      "name": "Eko'7"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Eko'7",
      "url": "https://eko7.com.br"
    },
    "category": productData.line,
    "url": `${SITE_URL}/colchoes/${productData.slug}`,
    ...(productData.warranty && {
      "additionalProperty": [
        {
          "@type": "PropertyValue",
          "name": "Garantia",
          "value": productData.warranty
        },
        ...(productData.durability ? [{
          "@type": "PropertyValue",
          "name": "Durabilidade média",
          "value": productData.durability
        }] : []),
        ...(productData.height ? [{
          "@type": "PropertyValue",
          "name": "Altura",
          "value": productData.height
        }] : [])
      ]
    })
  };

  return (
    <>
      <Helmet>
        <link rel="canonical" href={`${SITE_URL}/colchoes/${productData.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>
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
            </div>

            {/* 2. Grid Imagens + Descrição/Tecnologias */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
              <div className="md:col-span-3">
                <ProductGallery productSlug={productData.slug} />
              </div>
              
              <div className="md:col-span-2 flex flex-col gap-8">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {productData.description}
                </p>

                {productData.technologies.length > 0 && (
                  <div className="glass-card rounded-xl p-5 md:p-6 border-accent/20">
                    <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-accent" />
                      Tecnologias Integradas
                    </h2>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {productData.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {productData.certifications && productData.certifications.length > 0 && (
                  <div className="glass-card rounded-xl p-5 md:p-6">
                    <h2 className="font-display text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                      Certificações
                    </h2>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {productData.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full bg-green-500/10 text-green-700 dark:text-green-400 border border-green-500/20 font-semibold"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 3. Especificações */}
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
                {productData.sizes && (
                  <div className="flex flex-col border-b border-border pb-3 md:col-span-2">
                    <span className="text-sm text-muted-foreground">Medidas disponíveis</span>
                    <span className="font-medium">{productData.sizes}</span>
                  </div>
                )}
                {productData.versions && (
                  <div className="flex flex-col border-b border-border pb-3">
                    <span className="text-sm text-muted-foreground">Versões</span>
                    <span className="font-medium">{productData.versions}</span>
                  </div>
                )}
                {productData.motor && (
                  <div className="flex flex-col border-b border-border pb-3">
                    <span className="text-sm text-muted-foreground">Motor</span>
                    <span className="font-medium">{productData.motor}</span>
                  </div>
                )}
              </div>

              {productData.structure && productData.structure.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                    Estrutura (camadas)
                  </h3>
                  <ol className="space-y-1">
                    {productData.structure.map((layer, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-5 h-5 rounded-full bg-accent/10 text-accent text-xs flex items-center justify-center font-bold shrink-0">
                          {i + 1}
                        </span>
                        {layer}
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {productData.contraindication && (
                <p className="mt-5 text-sm text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-lg px-4 py-3 border border-amber-200 dark:border-amber-800">
                  ⚠ {productData.contraindication}
                </p>
              )}
            </div>

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
