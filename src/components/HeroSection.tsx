import { motion } from "framer-motion";
import heroBed from "@/assets/hero-bed.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBed} alt="Cama articulada HR Colchões com tecnologia Eko7" width={1920} height={1080} className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-bg opacity-70" />
      </div>

      <div className="container relative z-10 px-4 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 bg-accent/10 rounded-full px-4 py-1.5">
            Tecnologia Eko'7 — Porto Alegre
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6">
            Tecnologia Integrativa: <br className="hidden sm:block" />
            <span className="text-accent">Transforme seus Dias</span> através do Sono
          </h1>
          <p className="text-primary-foreground/70 text-lg max-w-lg mb-8">
            Colchões e camas articuladas com infravermelho longo e tecnologia magnética para um sono verdadeiramente reparador.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#catalogo"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Ver Catálogo
            </a>
            <a
              href="https://wa.me/5551984910838"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
            >
              Fale com Especialista
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
