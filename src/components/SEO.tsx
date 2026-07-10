import { Helmet } from 'react-helmet-async';
import { useSettings } from '../contexts/SettingsContext';

export default function SEO() {
  const { t, language } = useSettings();

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      <title>{t.seo.title}</title>
      <meta name="description" content={t.seo.description} />
      <meta name="keywords" content={t.seo.keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={t.seo.title} />
      <meta property="og:description" content={t.seo.description} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={t.seo.title} />
      <meta property="twitter:description" content={t.seo.description} />
    </Helmet>
  );
}
