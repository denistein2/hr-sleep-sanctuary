import { motion } from "framer-motion";
import consultantImg from "@/assets/consultant.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto"
        >
          <img
            src={consultantImg}
            alt="Alberto Backes — Consultor Especialista HR Colchões"
            width={512}
            height={512}
            loading="lazy"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-accent/20 shrink-0"
          />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-accent mb-2">Consultor Especialista</p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">Alberto Backes</h2>
            <p className="text-muted-foreground leading-relaxed">
              Com mais de 3 anos de experiência em Porto Alegre, Alberto é referência na consultoria de sono reparador com tecnologia Eko'7. Ele guia cada cliente na escolha ideal entre colchões terapêuticos, camas articuladas e acessórios com infravermelho longo e tecnologia magnética.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
