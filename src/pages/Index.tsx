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
