import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import logoImg from "@/assets/img/Logo Novo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-14">
      <div className="container px-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="inline-block bg-white rounded-lg p-1.5 shadow-sm border border-border/50">
              <img 
                src={logoImg} 
                alt="HR Colchões" 
                className="h-10 w-auto mix-blend-multiply" 
              />
            </Link>
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold">Hr colchões</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                Distribuidor Autorizado do Grupo Eko'7. Oferecemos soluções completas para saúde e sono profundo em Porto Alegre.
              </p>
              <Link to="/sobre" className="text-accent hover:text-accent/80 text-sm font-semibold flex items-center gap-1 transition-colors">
                Saiba mais sobre nós →
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-6">Produtos</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6">
              <div>
                <ul className="space-y-4">
                  <li>
                    <Link to="/produtos/colchoes" className="text-sm font-semibold hover:text-primary-foreground transition-colors block">
                      Colchões Terapêuticos e Tecnológicos
                    </Link>
                  </li>
                  <li>
                    <Link to="/produtos/camas-e-bases" className="text-sm font-semibold hover:text-primary-foreground transition-colors block mb-1">
                      Camas Articuladas
                    </Link>
                    <ul className="space-y-1.5 pl-3 text-sm text-primary-foreground/60 border-l-2 border-primary-foreground/10">
                      <li>Box Tradicional e Box Baú</li>
                    </ul>
                  </li>
                  <li>
                    <span className="text-sm font-semibold text-primary-foreground/80 block mb-1">Mobiliário Ergonômico</span>
                    <ul className="space-y-1.5 pl-3 text-sm text-primary-foreground/60 border-l-2 border-primary-foreground/10">
                      <li>Poltronas</li>
                      <li>Cadeiras de Escritório</li>
                    </ul>
                  </li>
                  <li>
                    <span className="text-sm font-semibold text-primary-foreground/80 block mb-1">Linha Têxtil e Conforto</span>
                    <ul className="space-y-1.5 pl-3 text-sm border-l-2 border-primary-foreground/10">
                      <li><Link to="/produtos/travesseiros" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Travesseiros</Link></li>
                      <li className="text-primary-foreground/60">Lençóis</li>
                      <li className="text-primary-foreground/60">Toalhas de Banho</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li>
                    <span className="text-sm font-semibold text-primary-foreground/80 block mb-1">Linha Fitness e Calçados</span>
                    <ul className="space-y-1.5 pl-3 text-sm border-l-2 border-primary-foreground/10">
                      <li><Link to="/produtos/fitness" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Colchonetes</Link></li>
                      <li><Link to="/produtos/vestuario-acessorios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Leggings e Tops (Infravermelho)</Link></li>
                      <li><Link to="/produtos/vestuario-acessorios" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Tênis Magnéticos e Ortopédicos</Link></li>
                    </ul>
                  </li>
                  <li>
                    <span className="text-sm font-semibold text-primary-foreground/80 block mb-1">Acessórios Magnéticos</span>
                    <ul className="space-y-1.5 pl-3 text-sm text-primary-foreground/60 border-l-2 border-primary-foreground/10">
                      <li>Palmilhas Magnéticas</li>
                      <li>Pulseiras Magnéticas</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-6">Contato</h4>
            <address className="not-italic text-sm text-primary-foreground/80 space-y-3">
              <div>
                <p>Rua Alameda 3 de outubro, 251</p>
                <p>Sarandi, Porto Alegre — RS</p>
              </div>
              <p>
                <a href="https://wa.me/5551984910838" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors font-medium">
                  (51) 98491-0838
                </a>
              </p>
              <div className="flex items-center gap-3 pt-2">
                <a 
                  href="https://www.instagram.com/Hr_Colchoes" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 hover:text-primary-foreground transition-colors group"
                >
                  <div className="bg-primary-foreground/10 p-1.5 rounded-lg group-hover:bg-primary-foreground/20 transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-semibold">@Hr_Colchoes</span>
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/40 space-y-1">
          <p>© {new Date().getFullYear()} HR Colchões — Todos os direitos reservados.</p>
          <p>CNPJ: 37.637.457/0001-11</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
