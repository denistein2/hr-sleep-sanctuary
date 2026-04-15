import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const productCategories = [
  { name: "Colchões Terapêuticos", slug: "/produtos/colchoes-terapeuticos" },
  { name: "Camas Articuladas & Box", slug: "/produtos/camas-articuladas" },
  { name: "Cabeceiras", slug: "/produtos/cabeceiras" },
  { name: "Poltronas & Puffs", slug: "/produtos/poltronas-puffs" },
  { name: "Vestuário & Acessórios", slug: "/produtos/vestuario-acessorios" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-3">
          <span className="font-display text-xl font-bold text-primary tracking-tight">HR Colchões</span>
          <span className="hidden sm:inline-block text-[10px] font-medium text-muted-foreground border border-border rounded-full px-2 py-0.5">
            Distribuidor Eko'7
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">Início</Link>
          <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
            <button className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors">
              Produtos <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full left-0 mt-1 w-56 bg-card border border-border rounded-lg shadow-lg py-2 animate-fade-in">
                {productCategories.map((cat) => (
                  <Link key={cat.slug} to={cat.slug} className="block px-4 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground transition-colors">
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <a href="#sobre" className="text-foreground/80 hover:text-foreground transition-colors">Sobre</a>
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
            {productCategories.map((cat) => (
              <Link key={cat.slug} to={cat.slug} onClick={() => setMobileOpen(false)} className="py-1.5 pl-3 text-foreground/80">
                {cat.name}
              </Link>
            ))}
            <a href="#sobre" onClick={() => setMobileOpen(false)} className="py-2 text-foreground/80">Sobre</a>
            <a href="#contato" onClick={() => setMobileOpen(false)} className="py-2 text-foreground/80">Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
