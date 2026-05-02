import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const WA_NUMBER = "5551984910838";
const WA_MESSAGE = encodeURIComponent(
  "Olá! Gostaria de saber mais sobre os produtos que estarão disponíveis nesta categoria. Podem me passar informações?"
);

const PlaceholderPage = () => {
  return (
    <>
      <SEOHead
        title="Em Breve | HR Colchões"
        description="Esta categoria estará disponível em breve no nosso site."
        path="/"
      />
      <Header />
      <main className="pt-24 pb-20 flex-grow flex items-center justify-center min-h-[70vh]">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center glass-card p-10 rounded-3xl">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Em Breve
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Estamos atualizando nosso catálogo para trazer a linha oficial completa da Eko'7. 
              Enquanto isso, fale com um consultor para receber o catálogo em PDF ou tirar dúvidas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#25D366] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-5 h-5" />
                Falar com Consultor
              </a>
              <Link 
                to="/colchoes" 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Ver Colchões
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default PlaceholderPage;
