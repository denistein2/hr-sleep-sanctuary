import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";

import iso9001 from "@/assets/img/iso-9001.png";
import iso14001 from "@/assets/img/iso-14001.png";
import sbrto from "@/assets/img/sbrto.png";
import icvPremium from "@/assets/img/inst.png";

const SobrePage = () => {
  return (
    <>
      <SEOHead
        title="Sobre a HR Colchões — Distribuidor Eko'7 em Porto Alegre"
        description="Conheça a HR Colchões, distribuidor autorizado do Grupo Eko'7. Saiba mais sobre nossas tecnologias de padrão mundial para um sono verdadeiramente reparador."
      />
      <Header />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24 text-center">
          <div className="container px-4">
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Quem Somos</h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto">
              Sua saúde e longevidade através do poder do sono reparador.
            </p>
          </div>
        </section>

        {/* Institucional Section */}
        <section className="py-16 md:py-24">
          <div className="container px-4">
            <div className="max-w-3xl mx-auto space-y-6 text-foreground/80 leading-relaxed text-lg">
              <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center">Hr colchões,</h2>
              <p>
                <strong>Distribuidor Autorizado do Grupo Eko'7 com sede em Porto Alegre.</strong>
              </p>
              <p>
                A Eko'7 utiliza tecnologias de padrão mundial para garantir aos nossos clientes um sono verdadeiramente reparador. Através de nossa exclusiva espuma tecnológica patenteada, entregamos o equilíbrio perfeito entre ortopedia e ergonomia, proporcionando o conforto das articulações e o alinhamento ideal da coluna.
              </p>
              <p>
                Nossos sistemas de dormir são uma plataforma completa de restauração para o organismo, integrando o que há de mais avançado em saúde e relaxamento:
              </p>
              <ul className="list-disc list-inside ml-4 space-y-2 font-medium text-foreground">
                <li>Magnetoterapia e Infravermelho Longo</li>
                <li>Terapia Quântica e Cromoterapia</li>
                <li>Sistemas de Massagem Relaxante</li>
              </ul>
              <p className="pt-4">
                Mais do que um colchão, oferecemos uma solução que restaura sua vitalidade e promove a longevidade através do poder do sono. Além da garantia de fabricação, você tem a tranquilidade de contar com nossa assistência técnica vitalícia.
              </p>
            </div>
          </div>
        </section>

        {/* Certificações Eko'7 */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container px-4">
            <h2 className="font-display text-3xl font-bold text-center mb-6">Certificações Eko'7</h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Certificados pela SBRTO e Instituto Coluna Vertebral (ICV), os produtos Eko'7 seguem rigorosos padrões de qualidade, assegurando ergonomia e conforto em nível de excelência.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center w-32 h-32 md:w-40 md:h-40">
                <img src={iso9001} alt="ISO 9001" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center w-32 h-32 md:w-40 md:h-40">
                <img src={iso14001} alt="ISO 14001" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center w-32 h-32 md:w-40 md:h-40">
                <img src={sbrto} alt="SBRTO" className="max-h-full max-w-full object-contain" />
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm flex items-center justify-center w-32 h-32 md:w-40 md:h-40">
                <img src={icvPremium} alt="ICV Premium" className="max-h-full max-w-full object-contain" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 text-center">
          <div className="container px-4">
            <h2 className="font-display text-3xl font-bold mb-6">Pronto para transformar seu sono?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Fale diretamente com nosso especialista pelo WhatsApp e descubra qual sistema Eko'7 é o ideal para você e sua família.
            </p>
            <Button asChild size="lg" className="bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full">
              <a href="https://wa.me/5551984910838" target="_blank" rel="noopener noreferrer">
                Falar com Especialista
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default SobrePage;
