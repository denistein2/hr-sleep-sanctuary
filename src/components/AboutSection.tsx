import { motion } from "framer-motion";
import consultantImg from "@/assets/img/consultant.jpg";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-12 md:py-16 bg-background">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-4xl mx-auto"
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
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>
                Dormir bem é uma ciência, e Alberto Backes é o seu consultor nesta jornada. Especializado nas tecnologias Eko'7, ele atua em todo o Rio Grande do Sul, com base em Porto Alegre, oferecendo soluções sob medida que vão além do conforto: são ferramentas de saúde preventiva e corretiva.
              </p>
              <p>
                Com foco na anatomia e nas necessidades individuais, sua consultoria abrange desde sistemas de dormir até acessórios tecnológicos para o seu dia a dia. Alberto Backes garante que a tecnologia exclusiva e patenteada pela Eko'7 trabalhe de forma integrada, promovendo máxima qualidade de vida e longevidade.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
