import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
}

const SEOHead = ({ title, description }: SEOHeadProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href="https://hrcolchoes.steintechnology.com.br" />
    
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:url" content="https://hrcolchoes.steintechnology.com.br" />
    <meta property="og:image" content="https://hrcolchoes.steintechnology.com.br/images/Logo Novo.png" />
    <meta property="og:type" content="website" />
    
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Helmet>
);

export default SEOHead;
