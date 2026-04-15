import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
}

const SEOHead = ({ title, description }: SEOHeadProps) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Helmet>
);

export default SEOHead;
