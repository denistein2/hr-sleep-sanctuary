import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import logoImg from "@/assets/img/Logo Novo.png";
import { navigationData, NavItem } from "@/data/navigation";

const Footer = () => {
  const renderNavSection = (items: NavItem[]) => (
    <ul className="space-y-4">
      {items.map((item) => (
        <li key={item.id}>
          {item.active && item.slug ? (
            <Link
              to={`/produtos/${item.slug}`}
              className={`text-sm font-semibold hover:text-primary-foreground transition-colors block ${item.subItems ? 'mb-1' : ''}`}
            >
              {item.name}
            </Link>
          ) : (
            <span className="text-sm font-semibold text-primary-foreground/80 block mb-1">
              {item.name}
            </span>
          )}
          {item.subItems && item.subItems.length > 0 && (
            <ul className="space-y-1.5 pl-3 text-sm border-l-2 border-primary-foreground/10">
              {item.subItems.map((subItem) => (
                <li key={subItem.id} className={!subItem.active ? "text-primary-foreground/60" : ""}>
                  {subItem.active && subItem.slug ? (
                    <Link
                      to={`/produtos/${subItem.slug}`}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors block"
                    >
                      {subItem.name}
                    </Link>
                  ) : (
                    <span>{subItem.name}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );

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
              <div>{renderNavSection(navigationData.slice(0, 5))}</div>
              <div>{renderNavSection(navigationData.slice(5))}</div>
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

        <div className="border-t border-primary-foreground/10 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-primary-foreground/40 text-center md:text-left">
          <div className="space-y-1">
            <p>© {new Date().getFullYear()} HR Colchões — Todos os direitos reservados.</p>
            <p>CNPJ: 37.637.457/0001-11</p>
          </div>
          <nav aria-label="Links legais" className="flex gap-4">
            <Link to="/privacidade" className="hover:text-primary-foreground transition-colors">
              Política de Privacidade
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
