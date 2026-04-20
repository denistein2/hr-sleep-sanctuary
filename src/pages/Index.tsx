import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CatalogSection from "@/components/CatalogSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => (
  <>
    <SEOHead
      title="HR Colchões — Sono Reparador com Tecnologia Eko'7 | Porto Alegre"
      description="Colchões terapêuticos, camas articuladas e acessórios com infravermelho longo e tecnologia magnética Eko'7. Distribuidor em Porto Alegre. Fale com nosso especialista."
      path="/"
      jsonLd={{
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://hrcolchoes.steintechnology.com.br/#business",
        name: "HR Colchões",
        description:
          "Distribuidor oficial Eko'7 em Porto Alegre/RS. Camas articuladas, colchões com infravermelho longo e magnetoterapia, travesseiros e vestuário.",
        url: "https://hrcolchoes.steintechnology.com.br/",
        telephone: "+55-51-98491-0838",
        image: "https://hrcolchoes.steintechnology.com.br/img/og-image.jpg",
        priceRange: "$$",
        areaServed: { "@type": "City", name: "Porto Alegre" },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Porto Alegre",
          addressRegion: "RS",
          addressCountry: "BR",
        },
        sameAs: ["https://wa.me/5551984910838"],
      }}
    />
    <Header />
    <main>
      <HeroSection />
      <AboutSection />
      <CatalogSection />
      <ContactForm />
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default Index;
