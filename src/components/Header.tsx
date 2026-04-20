import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";
import logoImg from "@/assets/img/Logo Novo.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-white rounded-lg p-1.5 shadow-sm border border-border/50 transition-transform group-hover:scale-105">
            <img 
              src={logoImg} 
              alt="HR Colchões" 
              className="h-10 w-auto mix-blend-multiply" 
            />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-sm font-bold text-primary tracking-tight leading-tight">HR Colchões</span>
            <span className="text-[9px] font-medium text-muted-foreground uppercase tracking-widest">
              Distribuidor Eko'7
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">Início</Link>
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors">
              Produtos <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 w-56 pt-2 animate-fade-in shadow-xl">
                <div className="bg-card border border-border rounded-lg py-2">
                {categories.map((cat) => (
                  <Link key={cat.slug} to={`/produtos/${cat.slug}`} className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors">
                    {cat.name}
                  </Link>
                ))}
                </div>
              </div>
            )}
          </div>
          <Link to="/sobre" className="text-foreground/80 hover:text-foreground transition-colors">Sobre</Link>
          <a href="#contato" className="text-foreground/80 hover:text-foreground transition-colors">Contato</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden md:inline-flex bg-[hsl(142,70%,40%)] hover:bg-[hsl(142,70%,35%)] text-primary-foreground font-semibold">
            <a href="https://wa.me/5551984910838" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
          <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-t border-border animate-fade-in">
          <nav className="container px-4 py-4 flex flex-col gap-3 text-sm font-medium">
            <Link to="/" onClick={() => setMobileOpen(false)} className="py-2 text-foreground/80">Início</Link>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mt-2">Produtos</p>
            {categories.map((cat) => (
              <Link key={cat.slug} to={`/produtos/${cat.slug}`} onClick={() => setMobileOpen(false)} className="py-1.5 pl-3 text-foreground/80">
                {cat.name}
              </Link>
            ))}
            <Link to="/sobre" onClick={() => setMobileOpen(false)} className="py-2 text-foreground/80">Sobre</Link>
            <a href="#contato" onClick={() => setMobileOpen(false)} className="py-2 text-foreground/80">Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
