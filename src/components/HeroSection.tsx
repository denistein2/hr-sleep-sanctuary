import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(rgba(26,39,68,0.75), rgba(26,39,68,0.85)), url('/produtos/diamante/diamante-1.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 hero-bg opacity-70" />
      </div>

      <div className="container relative z-10 px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-4 bg-accent/10 rounded-full px-4 py-1.5">
            Tecnologia Eko'7 — Porto Alegre
          </span>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground leading-[1.1] mb-6">
            <span className="md:hidden">
              Transforme seu Sono com{" "}
              <span className="text-[#C9A84C]">Tecnologia</span>
            </span>
            <span className="hidden md:inline">
              Tecnologia Integrativa:{" "}
              <br />
              <span className="text-[#C9A84C]">Transforme seus Dias</span>{" "}
              através do Sono
            </span>
          </h1>

          <p className="text-primary-foreground/70 text-lg max-w-lg mx-auto mb-8">
            <span className="md:hidden">
              Colchões e camas com tecnologia Eko'7 para um sono reparador.
            </span>
            <span className="hidden md:inline">
              Colchões e camas articuladas com infravermelho longo e tecnologia
              magnética para um sono verdadeiramente reparador.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#C9A84C", color: "#1a2744" }}
            >
              Ver Catálogo
            </a>
            <a
              href="https://wa.me/5551984910838"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary-foreground/30 text-primary-foreground font-semibold text-sm hover:bg-primary-foreground/10 transition-colors"
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
