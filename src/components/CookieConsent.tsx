import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "hr:cookie-consent";
type ConsentState = "accepted" | "declined";

const readConsent = (): ConsentState | null => {
  if (typeof window === "undefined") return null;
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "accepted" || value === "declined" ? value : null;
  } catch {
    return null;
  }
};

const writeConsent = (value: ConsentState) => {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // storage indisponível — silenciosamente ignora
  }
};

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (readConsent() === null) setVisible(true);
  }, []);

  const handle = (value: ConsentState) => {
    writeConsent(value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-50 p-4 md:p-6"
    >
      <div className="mx-auto max-w-4xl rounded-xl bg-primary text-primary-foreground shadow-2xl border border-primary-foreground/10">
        <div className="p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1 text-sm leading-relaxed">
            <p className="font-display font-bold mb-1">Este site usa cookies</p>
            <p className="text-primary-foreground/80">
              Utilizamos cookies estritamente necessários para o funcionamento do site. Cookies
              opcionais só são ativados com seu consentimento. Leia nossa{" "}
              <Link
                to="/privacidade"
                className="underline hover:text-white"
              >
                Política de Privacidade
              </Link>
              .
            </p>
          </div>
          <div className="flex gap-2 shrink-0">
            <Button
              variant="outline"
              size="sm"
              onClick={() => handle("declined")}
              className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              Recusar
            </Button>
            <Button
              size="sm"
              onClick={() => handle("accepted")}
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Aceitar
            </Button>
          </div>
          <button
            type="button"
            onClick={() => handle("declined")}
            aria-label="Fechar aviso de cookies"
            className="absolute top-2 right-2 md:static md:ml-2 p-1 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
