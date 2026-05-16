import { useState, useRef, useEffect, useMemo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Search, BedDouble, SlidersHorizontal, Package, Armchair, Wind, Sparkles, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navigationData } from "@/data/navigation";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import logoImg from "@/assets/img/LOGO HR COLCHAO E EKO'7.png";

const MEGA_COL1 = [
  { slug: "colchoes",          name: "Colchões",          href: "/colchoes",          Icon: BedDouble,         count: 8 },
  { slug: "camas-articuladas", name: "Camas Articuladas", href: "/camas-articuladas", Icon: SlidersHorizontal, count: 3 },
  { slug: "camas-e-box",       name: "Camas e Box",       href: "/camas-e-box",       Icon: Package,           count: 7 },
  { slug: "cabeceira",         name: "Cabeceiras",        href: "/cabeceira",         Icon: Layers,            count: 7 },
];

const MEGA_COL2 = [
  { slug: "poltronas",    name: "Poltronas",    href: "/poltronas",    Icon: Armchair,  count: 4 },
  { slug: "travesseiros", name: "Travesseiros", href: "/travesseiros", Icon: Wind,      count: 3 },
  { slug: "acessorios",   name: "Acessórios",   href: "/acessorios",   Icon: Sparkles,  count: 3 },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchRef = useRef<HTMLFormElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setShowSuggestions(false);
      navigate(`/produtos?q=${encodeURIComponent(searchQuery.trim())}`);
      setMobileOpen(false);
    }
  };

  const suggestions = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return { products: [], categories: [] };
    const pMatch = PRODUCTS.filter(p => !p.hidden && (p.name.toLowerCase().includes(query) || p.type.toLowerCase().includes(query) || p.line.toLowerCase().includes(query))).slice(0, 4);
    const cMatch = CATEGORIES.filter(c => c.name.toLowerCase().includes(query)).slice(0, 2);
    return { products: pMatch, categories: cMatch };
  }, [searchQuery]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto flex items-center justify-between h-24 px-4">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-border/50 transition-transform group-hover:scale-105 max-w-[80px] md:max-w-none">
            <img
              src={logoImg}
              alt="HR Colchões"
              className="h-12 md:h-20 w-auto mix-blend-multiply object-contain"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">Início</Link>

          {/* Mega menu trigger */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 py-4 text-foreground/80 hover:text-foreground transition-colors">
              Produtos <ChevronDown className="w-3.5 h-3.5" />
            </button>

            {dropdownOpen && (
              <div className="absolute top-[100%] left-0 pt-2 animate-fade-in z-50">
                <div
                  className="bg-card rounded-xl p-5 grid grid-cols-2 gap-0 animate-fade-in"
                  style={{
                    minWidth: "460px",
                    border: "0.5px solid var(--border)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                  }}
                >
                  {/* Coluna 1 */}
                  <div style={{ paddingRight: "20px" }} className="border-r border-border/30">
                    <p
                      className="text-muted-foreground mb-2.5 uppercase"
                      style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.08em" }}
                    >
                      Produtos
                    </p>
                    <div className="flex flex-col gap-1">
                      {MEGA_COL1.map(({ slug, name, href, Icon, count }) => (
                        <Link
                          key={slug}
                          to={href}
                          onClick={() => setDropdownOpen(false)}
                          className={`flex items-center px-2 py-1.5 rounded-md transition-colors group ${
                            location.pathname === href ? "bg-muted" : "hover:bg-muted"
                          }`}
                          style={{ gap: "10px" }}
                        >
                          <Icon
                            className={`w-4 h-4 flex-shrink-0 transition-colors ${
                              location.pathname === href
                                ? "text-[#C9A84C]"
                                : "text-muted-foreground group-hover:text-[#C9A84C]"
                            }`}
                          />
                          <span className="text-[13px] font-medium text-foreground whitespace-nowrap">{name}</span>
                          <span className="text-[11px] text-muted-foreground ml-auto whitespace-nowrap">
                            {count} produtos
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Coluna 2 */}
                  <div style={{ paddingLeft: "20px" }}>
                    <p
                      className="mb-2.5 invisible"
                      style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.08em" }}
                    >
                      .
                    </p>
                    <div className="flex flex-col gap-1">
                      {MEGA_COL2.map(({ slug, name, href, Icon, count }) => (
                        <Link
                          key={slug}
                          to={href}
                          onClick={() => setDropdownOpen(false)}
                          className={`flex items-center px-2 py-1.5 rounded-md transition-colors group ${
                            location.pathname === href ? "bg-muted" : "hover:bg-muted"
                          }`}
                          style={{ gap: "10px" }}
                        >
                          <Icon
                            className={`w-4 h-4 flex-shrink-0 transition-colors ${
                              location.pathname === href
                                ? "text-[#C9A84C]"
                                : "text-muted-foreground group-hover:text-[#C9A84C]"
                            }`}
                          />
                          <span className="text-[13px] font-medium text-foreground whitespace-nowrap">{name}</span>
                          <span className="text-[11px] text-muted-foreground ml-auto whitespace-nowrap">
                            {count} produtos
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>

          <Link to="/sobre" className="text-foreground/80 hover:text-foreground transition-colors">Sobre</Link>
          <a href="#contato" className="text-foreground/80 hover:text-foreground transition-colors">Contato</a>
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop Search Bar */}
          <form ref={searchRef} onSubmit={handleSearchSubmit} className="relative hidden md:block mr-2">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setShowSuggestions(true);
                }}
                onFocus={() => setShowSuggestions(true)}
                className="h-9 w-48 lg:w-64 rounded-full border border-input bg-background/50 px-4 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent pr-10"
              />
              <button type="submit" className="absolute right-3 text-muted-foreground hover:text-foreground">
                <Search className="w-4 h-4" />
              </button>
            </div>

            {/* Search Suggestions */}
            {showSuggestions && searchQuery.trim().length > 0 && (
              <div className="absolute top-full right-0 mt-2 w-[300px] bg-card border border-border rounded-lg shadow-lg overflow-hidden flex flex-col z-50 animate-fade-in">
                {suggestions.categories.length === 0 && suggestions.products.length === 0 ? (
                  <div className="p-4 text-sm text-muted-foreground text-center">Nenhum resultado encontrado.</div>
                ) : (
                  <div className="flex flex-col">
                    {suggestions.categories.length > 0 && (
                      <div className="p-2 border-b border-border/50">
                        <span className="text-xs font-semibold text-muted-foreground uppercase px-2 mb-1 block">Categorias</span>
                        {suggestions.categories.map(c => (
                          <Link key={c.slug} to={`/${c.slug}`} onClick={() => setShowSuggestions(false)} className="block px-2 py-1.5 text-sm hover:bg-muted rounded-md transition-colors">
                            {c.name}
                          </Link>
                        ))}
                      </div>
                    )}
                    {suggestions.products.length > 0 && (
                      <div className="p-2">
                        <span className="text-xs font-semibold text-muted-foreground uppercase px-2 mb-1 block">Produtos</span>
                        {suggestions.products.map(p => (
                          <Link key={p.slug} to={`/${p.categoryId || 'produtos'}/${p.slug}`} onClick={() => setShowSuggestions(false)} className="flex flex-col px-2 py-1.5 hover:bg-muted rounded-md transition-colors">
                            <span className="text-sm font-medium">{p.name}</span>
                            <span className="text-xs text-muted-foreground">{p.type}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                    <button type="submit" className="w-full text-center p-2 text-xs font-semibold text-accent hover:bg-accent/10 border-t border-border/50 transition-colors">
                      Ver todos os resultados
                    </button>
                  </div>
                )}
              </div>
            )}
          </form>

          <Button asChild size="sm" className="hidden md:inline-flex bg-[#25D366] hover:bg-[#20b858] text-white font-semibold">
            <a href="https://wa.me/5551984910838" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Button>
          <button className="lg:hidden text-foreground ml-1" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav — inalterado */}
      {mobileOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
          <nav className="container px-4 py-4 flex flex-col gap-3 text-sm font-medium">
            {/* Mobile Search */}
            <form onSubmit={handleSearchSubmit} className="relative mb-2">
              <input
                type="text"
                placeholder="Buscar..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-10 w-full rounded-md border border-input bg-background px-4 py-2 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent pr-10"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                <Search className="w-5 h-5" />
              </button>
            </form>

            <Link to="/" onClick={() => setMobileOpen(false)} className="py-2 text-foreground/80 font-bold border-b border-border/30">Início</Link>

            <div className="py-2 border-b border-border/30">
              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-bold">Produtos</p>
              <div className="flex flex-col gap-2 pl-2">
                {navigationData.map((family) => (
                  <details key={family.id} className="group">
                    <summary className="flex items-center justify-between cursor-pointer py-2 text-foreground/90 font-semibold list-none">
                      {family.name}
                      <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="flex flex-col gap-2 pl-4 py-2 border-l-2 border-accent/20 ml-1 mt-1">
                      {family.subItems?.map((item) => (
                        <Link key={item.id} to={`/${item.slug}`} onClick={() => setMobileOpen(false)} className="py-1.5 text-muted-foreground hover:text-accent">
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>

            <Link to="/sobre" onClick={() => setMobileOpen(false)} className="py-2 text-foreground/80 font-bold border-b border-border/30">Sobre</Link>
            <a href="#contato" onClick={() => setMobileOpen(false)} className="py-2 text-foreground/80 font-bold">Contato</a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
