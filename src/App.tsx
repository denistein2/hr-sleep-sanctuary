import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import ProductPage from "./pages/ProductPage";
import PrivacyPage from "./pages/PrivacyPage";
import SobrePage from "./pages/SobrePage";
import NotFound from "./pages/NotFound";
import PlaceholderPage from "./pages/PlaceholderPage";
import CookieConsent from "@/components/CookieConsent";
import ScrollToTop from "@/components/ScrollToTop";
import { PLACEHOLDER_CATEGORIES } from "@/data/categories";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/colchoes" element={<CategoryPage />} />
            <Route path="/colchoes/:slug" element={<ProductPage />} />
            <Route path="/privacidade" element={<PrivacyPage />} />
            <Route path="/sobre" element={<SobrePage />} />

            {/* Categorias placeholder: rotas explícitas para SEO */}
            {PLACEHOLDER_CATEGORIES.map((category) => (
              <Route
                key={category.slug}
                path={`/${category.slug}`}
                element={<PlaceholderPage />}
              />
            ))}

            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
