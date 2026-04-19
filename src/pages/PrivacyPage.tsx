import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const UPDATED_AT = "19 de abril de 2026";

const PrivacyPage = () => (
  <>
    <SEOHead
      title="Política de Privacidade | HR Colchões"
      description="Política de privacidade e tratamento de dados pessoais da HR Colchões em conformidade com a LGPD (Lei nº 13.709/2018)."
      path="/privacidade"
    />
    <Header />
    <main className="pt-24 pb-20">
      <div className="container px-4 max-w-3xl">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" /> Voltar ao início
        </Link>

        <article className="prose prose-slate max-w-none">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Política de Privacidade
          </h1>
          <p className="text-sm text-muted-foreground mb-8">Última atualização: {UPDATED_AT}</p>

          <section className="space-y-4 text-foreground/80 leading-relaxed">
            <h2 className="font-display text-xl font-bold text-foreground mt-8">1. Quem somos</h2>
            <p>
              A <strong>HR Colchões</strong> é distribuidora oficial Eko'7 com atuação em Porto
              Alegre/RS. Esta política descreve como coletamos, usamos e protegemos dados pessoais
              nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
            </p>

            <h2 className="font-display text-xl font-bold text-foreground mt-8">
              2. Dados que coletamos
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Dados de contato</strong> fornecidos voluntariamente pelo usuário via
                formulário (nome, e-mail, telefone) e conversas via WhatsApp.
              </li>
              <li>
                <strong>Dados de navegação</strong> técnicos: endereço IP, tipo de navegador,
                páginas visitadas, data/hora de acesso, cookies estritamente necessários.
              </li>
              <li>
                <strong>Não coletamos</strong> dados financeiros, CPF ou documentos de identidade
                pelo site.
              </li>
            </ul>

            <h2 className="font-display text-xl font-bold text-foreground mt-8">
              3. Finalidade do tratamento
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Responder a solicitações de orçamento e atendimento consultivo.</li>
              <li>Enviar informações sobre produtos quando autorizado.</li>
              <li>Melhorar a experiência de navegação e corrigir falhas técnicas.</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2 className="font-display text-xl font-bold text-foreground mt-8">
              4. Base legal (art. 7º da LGPD)
            </h2>
            <p>
              Tratamos dados com base em: (i) consentimento do titular, (ii) execução de contrato
              ou procedimentos preliminares, e (iii) legítimo interesse para fins de segurança e
              melhoria do serviço.
            </p>

            <h2 className="font-display text-xl font-bold text-foreground mt-8">
              5. Compartilhamento
            </h2>
            <p>
              Não vendemos dados. Podemos compartilhar informações com: (a) prestadores de
              hospedagem e analytics sob contrato de confidencialidade, (b) autoridades públicas
              quando exigido por lei.
            </p>

            <h2 className="font-display text-xl font-bold text-foreground mt-8">6. Cookies</h2>
            <p>
              Utilizamos cookies estritamente necessários para funcionamento do site (ex.:
              preferências de interface). Cookies de analytics ou marketing somente são ativados
              mediante consentimento explícito do usuário no banner de cookies.
            </p>

            <h2 className="font-display text-xl font-bold text-foreground mt-8">
              7. Direitos do titular
            </h2>
            <p>O usuário pode, a qualquer momento, solicitar:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Confirmação e acesso aos dados tratados;</li>
              <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
              <li>Anonimização, bloqueio ou eliminação;</li>
              <li>Portabilidade;</li>
              <li>Revogação do consentimento.</li>
            </ul>
            <p>
              Para exercer esses direitos, entre em contato pelo WhatsApp (51) 98491-0838 ou pelo
              formulário do site.
            </p>

            <h2 className="font-display text-xl font-bold text-foreground mt-8">
              8. Segurança e retenção
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais razoáveis para proteger os dados
              (criptografia HTTPS, cabeçalhos de segurança, controle de acesso). Dados de contato
              são retidos apenas enquanto necessários ao atendimento ou por obrigação legal.
            </p>

            <h2 className="font-display text-xl font-bold text-foreground mt-8">
              9. Encarregado (DPO)
            </h2>
            <p>
              Contato para assuntos de privacidade:{" "}
              <a
                href="https://wa.me/5551984910838"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                (51) 98491-0838
              </a>
              .
            </p>

            <h2 className="font-display text-xl font-bold text-foreground mt-8">
              10. Alterações
            </h2>
            <p>
              Esta política pode ser atualizada periodicamente. A data da última revisão aparece no
              início do documento.
            </p>
          </section>
        </article>
      </div>
    </main>
    <Footer />
    <WhatsAppButton />
  </>
);

export default PrivacyPage;
