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

function buildWhatsAppMessage(productName: string, categoryId?: string): string {
  const categoryMap: Record<string, string> = {
    colchoes: "Colchão",
    camas: "Cama Articulada",
    box: "Box e Bases",
    acessorios: "Acessório"
  };
  const categoryStr = categoryId && categoryMap[categoryId] ? categoryMap[categoryId] : "produto";
  
  return encodeURIComponent(
    `Olá, tenho interesse no ${categoryStr} ${productName}, gostaria de agendar uma consultoria gratuita.`
  );
}

const ProductPage = () => {
  const { categorySlug, slug } = useParams();
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
            <Link to={categorySlug ? `/${categorySlug}` : "/produtos"} className="text-accent hover:underline">
              Voltar ao catálogo
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const waLink = `https://wa.me/${WA_NUMBER}?text=${buildWhatsAppMessage(productData.name, productData.categoryId)}`;

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
    "url": `${SITE_URL}/${productData.categoryId || 'produtos'}/${productData.slug}`,
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
        <link rel="canonical" href={`${SITE_URL}/${productData.categoryId || 'produtos'}/${productData.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      </Helmet>
      <SEOHead
        title={`${productData.name} | Linha Eko'7 | HR Colchões`}
        description={productData.description}
        path={`/${productData.categoryId || 'produtos'}/${productData.slug}`}
        type="product"
      />
      <Header />
      <main className="pt-24 pb-20">
        <div className="container px-4 max-w-5xl">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link
              to={`/${productData.categoryId || 'produtos'}`}
              className="hover:text-foreground transition-colors"
            >
              {productData.categoryId ? (productData.categoryId.charAt(0).toUpperCase() + productData.categoryId.slice(1).replace(/-/g, ' ')) : 'Produtos'}
            </Link>
            <span>/</span>
            <span className="text-foreground font-medium">{productData.name}</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-12"
          >
            {/* 1. Título e Descrição (Topo) */}
            <div className="space-y-6">
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

                {/* Badge de linha Premium / Relax */}
                {productData.line === "premium" && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 mb-6">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-sm font-semibold text-amber-600 dark:text-amber-400">
                      Linha Premium · 5 anos de garantia
                    </span>
                  </div>
                )}
                {productData.line === "relax" && (
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 mb-6">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      Linha Relax · 2 anos de garantia
                    </span>
                  </div>
                )}

                <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                  {productData.description}
                </p>
              </div>
            </div>

            {/* 2. Galeria em Destaque */}
            <div className="w-full">
              <ProductGallery productSlug={productData.slug} />
            </div>

            {/* 3. Benefícios e Detalhes */}
            <div className="space-y-12">
              {/* Grid de Benefícios e Certificações */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {productData.technologies.length > 0 && (
                  <div className="glass-card rounded-2xl p-6 md:p-8 border-accent/20">
                    <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-accent" />
                      Tecnologias Integradas
                    </h2>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {productData.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs md:text-sm px-3 md:px-4 py-2 rounded-full bg-accent/5 text-accent border border-accent/10 font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {productData.certifications && productData.certifications.length > 0 && (
                  <div className="glass-card rounded-2xl p-6 md:p-8">
                    <h2 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5 text-accent" />
                      Certificações
                    </h2>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {productData.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="text-xs md:text-sm px-3 md:px-4 py-2 rounded-full bg-green-500/5 text-green-700 dark:text-green-400 border border-green-500/10 font-semibold"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Especificações Técnicas (Largura Total) */}
              <div className="glass-card rounded-2xl p-6 md:p-10">
                <h2 className="font-display text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
                  <Info className="w-6 h-6 text-accent" />
                  Especificações Técnicas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                  <div className="flex flex-col border-b border-border/50 pb-3">
                    <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Tipo de Estrutura</span>
                    <span className="font-medium text-lg">{productData.type}</span>
                  </div>
                  {productData.height && (
                    <div className="flex flex-col border-b border-border/50 pb-3">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Altura</span>
                      <span className="font-medium text-lg">{productData.height}</span>
                    </div>
                  )}
                  {productData.fabric && (
                    <div className="flex flex-col border-b border-border/50 pb-3">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Tecido e Acabamento</span>
                      <span className="font-medium text-lg">{productData.fabric}</span>
                    </div>
                  )}
                  {productData.warranty && (
                    <div className="flex flex-col border-b border-border/50 pb-3">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Garantia Eko'7</span>
                      <span className="font-medium text-lg">{productData.warranty}</span>
                    </div>
                  )}
                  {productData.durability && (
                    <div className="flex flex-col border-b border-border/50 pb-3">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Durabilidade Estimada</span>
                      <span className="font-medium text-lg">{productData.durability}</span>
                    </div>
                  )}
                  {productData.sizes && (
                    <div className="flex flex-col border-b border-border/50 pb-3 sm:col-span-2">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Medidas Disponíveis</span>
                      <span className="font-medium text-lg">{productData.sizes}</span>
                    </div>
                  )}
                  {productData.versions && (
                    <div className="flex flex-col border-b border-border/50 pb-3">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Versões</span>
                      <span className="font-medium text-lg">{productData.versions}</span>
                    </div>
                  )}
                  {productData.motor && (
                    <div className="flex flex-col border-b border-border/50 pb-3">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Motorização</span>
                      <span className="font-medium text-lg">{productData.motor}</span>
                    </div>
                  )}
                  {productData.foamType && (
                    <div className="flex flex-col border-b border-border/50 pb-3 sm:col-span-2">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Composição</span>
                      <span className="font-medium text-lg">{productData.foamType}</span>
                    </div>
                  )}
                </div>

                {productData.structure && productData.structure.length > 0 && (
                  <div className="mt-10 pt-8 border-t border-border/50">
                    <h3 className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-6">
                      Composição de Camadas (Estrutura)
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {productData.structure.map((layer, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-border/30">
                          <span className="w-8 h-8 rounded-full bg-accent/10 text-accent text-sm flex items-center justify-center font-bold shrink-0">
                            {i + 1}
                          </span>
                          <p className="text-sm pt-1.5">{layer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {productData.contraindication && (
                  <div className="mt-8 p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20 flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0">
                      <span className="text-amber-500 font-bold text-xl">!</span>
                    </div>
                    <div>
                      <h4 className="text-amber-500 font-bold text-sm uppercase tracking-wider mb-1">Informação Importante</h4>
                      <p className="text-sm text-amber-700/80 dark:text-amber-400/80 leading-relaxed">
                        {productData.contraindication}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Vídeo Institucional ou do Produto */}
              {productData.videoId && (
                <div className="mt-4 rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                  <YouTubeFacade
                    videoId={productData.videoId}
                    title={`Apresentação: ${productData.name}`}
                  />
                </div>
              )}

              {/* 5. CTA WhatsApp */}
              <div className="mt-12 flex flex-col items-center text-center space-y-6">
                <div className="max-w-md">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Gostaria de uma Consultoria?</h3>
                  <p className="text-muted-foreground">Tire todas as suas dúvidas sobre o {productData.name} agora mesmo pelo WhatsApp.</p>
                </div>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-[#25D366] text-white font-bold text-xl hover:opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 duration-200"
                >
                  <MessageCircle className="w-7 h-7" />
                  Falar sobre este produto
                </a>
                <a
                  href={productData.officialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-muted-foreground hover:text-accent hover:underline transition-colors flex items-center gap-1.5"
                >
                  Ver ficha técnica oficial na Eko'7 <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
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

export default ProductPage;
