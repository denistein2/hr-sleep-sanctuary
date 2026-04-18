import { Link } from "react-router-dom";
import iso9001 from "@/assets/img/Entenda-a-ISO-9001.png";
import iso14001 from "@/assets/img/Gemini_Generated_Image_xxw1ltxxw1ltxxw1.png";
import icvPremium from "@/assets/img/inst.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-14">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="font-display text-lg font-bold mb-3">HR Colchões</h3>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Distribuidor oficial Eko'7 em Porto Alegre. Nossos produtos utilizam tecnologia magnética e infravermelho longo para promover o sono reparador, aliviar dores e melhorar a qualidade de vida.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-3">Produtos</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><Link to="/produtos/colchoes-terapeuticos" className="hover:text-primary-foreground transition-colors">Colchões Terapêuticos</Link></li>
              <li><Link to="/produtos/camas-articuladas" className="hover:text-primary-foreground transition-colors">Camas Articuladas & Box</Link></li>
              <li><Link to="/produtos/cabeceiras" className="hover:text-primary-foreground transition-colors">Cabeceiras</Link></li>
              <li><Link to="/produtos/poltronas-puffs" className="hover:text-primary-foreground transition-colors">Poltronas & Puffs</Link></li>
              <li><Link to="/produtos/vestuario-acessorios" className="hover:text-primary-foreground transition-colors">Vestuário & Acessórios</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-3">Contato</h4>
            <address className="not-italic text-sm text-primary-foreground/60 space-y-2">
              <p>Rua Terezinha Turcato, 591</p>
              <p>Porto Alegre — RS</p>
              <p>
                <a href="https://wa.me/5551984910838" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground transition-colors">
                  (51) 98491-0838
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Certificações Eko'7 */}
        <div className="border-t border-primary-foreground/10 mt-10 pt-8">
          <h4 className="font-display text-sm font-bold uppercase tracking-wider text-center mb-2">Certificações Eko'7</h4>
          <p className="text-primary-foreground/50 text-xs text-center max-w-2xl mx-auto mb-6">
            Certificados pela SBRTO e Instituto Coluna Vertebral (ICV), os produtos Eko'7 seguem rigorosos padrões de qualidade, assegurando ergonomia e conforto em nível de excelência.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            <div className="bg-white rounded-lg p-2 shadow-sm flex items-center justify-center w-24 h-24 md:w-32 md:h-32">
              <img src={iso9001} alt="ISO 9001 — Sistema de Gestão da Qualidade" className="max-h-full max-w-full object-contain mix-blend-multiply" />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-sm flex items-center justify-center w-24 h-24 md:w-32 md:h-32">
              <img src={iso14001} alt="ISO 14001 — Sistema de Gestão Ambiental" className="max-h-full max-w-full object-contain mix-blend-multiply" />
            </div>
            <div className="bg-white rounded-lg p-2 shadow-sm flex items-center justify-center w-24 h-24 md:w-32 md:h-32">
              <img src={icvPremium} alt="Instituto Coluna Vertebral — Qualidade ICV Premium" className="max-h-full max-w-full object-contain mix-blend-multiply" />
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 text-center text-xs text-primary-foreground/40">
          © {new Date().getFullYear()} HR Colchões — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
