import { Helmet } from "react-helmet-async";

const SITE_URL = "https://hrcolchoes.steintechnology.com.br";
const DEFAULT_OG_IMAGE = `${SITE_URL}/images/Logo Novo.png`;

interface SEOHeadProps {
  title: string;
  description: string;
  /** Caminho relativo (ex: "/produtos/colchoes") ou URL absoluta para canonical e og:url. */
  path?: string;
  /** URL absoluta da imagem OG. Usa imagem padrão se omitido. */
  image?: string;
  /** og:type — default "website". Use "product" em páginas de produto. */
  type?: "website" | "article" | "product";
  /** Se true, adiciona noindex/nofollow (útil para 404). */
  noIndex?: boolean;
  /** Objeto JSON-LD adicional a ser inserido no <head>. */
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

const SEOHead = ({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  noIndex = false,
  jsonLd,
}: SEOHeadProps) => {
  const url = path.startsWith("http") ? path : `${SITE_URL}${path}`;
  const jsonLdBlocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:site_name" content="HR Colchões" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="pt_BR" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLdBlocks.map((block, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(block)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEOHead;
