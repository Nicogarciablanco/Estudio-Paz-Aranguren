// Componente de interfaz del proyecto. Archivo: src/App.jsx
import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { GlobalStyle } from './styles/GlobalStyles.js';

const Home = lazy(() => import('./pages/Home/Home.jsx'));
const Marketing = lazy(() => import('./pages/Marketing/Marketing.jsx'));
const Ugc = lazy(() => import('./pages/Ugc/Ugc.jsx'));

const siteName = 'Estudio Paz Aranguren';
const siteDescription = 'Estudio Jurídico Paz Aranguren Zuazaga. Asesoramiento legal integral, estratégico y corporativo en Marcas, Familia, Laboral y Mediación.';
const defaultImagePath = '/og-image.svg';

const seoByPath = {
  '/': {
    title: 'Estudio Jurídico Paz Aranguren Zuazaga | Derecho Laboral, Familia y Marcas',
    description: siteDescription,
    imageAlt: 'Estudio Paz Aranguren Zuazaga, asesoramiento jurídico integral',
  },
  '/marketing': {
    title: 'Marketing Estratégico para Marcas | Estudio Paz Aranguren',
    description: 'Estrategias de marketing para posicionar tu marca, optimizar tu presencia digital y potenciar campañas con foco comercial y creativo.',
    imageAlt: 'Ailén Metetiero, área de marketing de Estudio Paz Aranguren',
  },
  '/ugc': {
    title: 'Contenido UGC para Marcas | Estudio Paz Aranguren',
    description: 'Producción UGC para marcas que buscan piezas auténticas, gestión profesional de creadores y un marco contractual seguro.',
    imageAlt: 'Creadora de contenido UGC de Estudio Paz Aranguren',
  },
};

const socialLinks = [
  'https://www.instagram.com/estudiopazaranguren/',
  'https://www.linkedin.com/in/pazarangurenzuazaga',
];

function getSiteUrl() {
  const configuredUrl = import.meta.env.VITE_SITE_URL?.trim().replace(/\/$/, '');
  if (configuredUrl) {
    return configuredUrl;
  }

  const { origin } = window.location;
  if (origin.includes('github.io')) {
    return `${origin}/Estudio-Paz-Aranguren`;
  }

  return origin;
}

function getAbsoluteUrl(pathname = '/') {
  return new URL(pathname, `${getSiteUrl()}/`).toString();
}

function upsertMeta(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function upsertLink(selector, attributes) {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('link');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

function upsertStructuredData(json) {
  const scriptId = 'structured-data-jsonld';
  let script = document.getElementById(scriptId);

  if (!script) {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = scriptId;
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(json);
}

function applySeo(pathname) {
  const seo = seoByPath[pathname] ?? seoByPath['/'];
  const pageUrl = getAbsoluteUrl(pathname === '/' ? '/' : pathname);
  const imageUrl = getAbsoluteUrl(defaultImagePath);

  document.title = seo.title;

  upsertMeta('meta[name="description"]', {
    name: 'description',
    content: seo.description,
  });

  upsertMeta('meta[name="robots"]', {
    name: 'robots',
    content: 'index, follow, max-snippet:160, max-image-preview:large, max-video-preview:-1',
  });

  upsertMeta('meta[name="author"]', {
    name: 'author',
    content: siteName,
  });

  upsertMeta('meta[property="og:type"]', {
    property: 'og:type',
    content: 'website',
  });

  upsertMeta('meta[property="og:locale"]', {
    property: 'og:locale',
    content: 'es_AR',
  });

  upsertMeta('meta[property="og:site_name"]', {
    property: 'og:site_name',
    content: siteName,
  });

  upsertMeta('meta[property="og:title"]', {
    property: 'og:title',
    content: seo.title,
  });

  upsertMeta('meta[property="og:description"]', {
    property: 'og:description',
    content: seo.description,
  });

  upsertMeta('meta[property="og:url"]', {
    property: 'og:url',
    content: pageUrl,
  });

  upsertMeta('meta[property="og:image"]', {
    property: 'og:image',
    content: imageUrl,
  });

  upsertMeta('meta[property="og:image:alt"]', {
    property: 'og:image:alt',
    content: seo.imageAlt,
  });

  upsertMeta('meta[name="twitter:card"]', {
    name: 'twitter:card',
    content: 'summary_large_image',
  });

  upsertMeta('meta[name="twitter:title"]', {
    name: 'twitter:title',
    content: seo.title,
  });

  upsertMeta('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: seo.description,
  });

  upsertMeta('meta[name="twitter:image"]', {
    name: 'twitter:image',
    content: imageUrl,
  });

  upsertLink('link[rel="canonical"]', {
    rel: 'canonical',
    href: pageUrl,
  });

  upsertStructuredData({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': `${pageUrl}#organization`,
        name: siteName,
        url: getAbsoluteUrl('/'),
        logo: getAbsoluteUrl('/Titleicon/apple-touch-icon.png'),
        image: imageUrl,
        description: siteDescription,
        email: 'Estudiolegalpazyasociados@gmail.com',
        telephone: '+5493434563532',
        areaServed: 'AR',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          telephone: '+5493434563532',
          email: 'Estudiolegalpazyasociados@gmail.com',
        },
        sameAs: socialLinks,
      },
      {
        '@type': 'WebSite',
        '@id': `${getAbsoluteUrl('/')}#website`,
        url: getAbsoluteUrl('/'),
        name: siteName,
        description: siteDescription,
        inLanguage: 'es-AR',
      },
    ],
  });
}

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window
      .matchMedia('(prefers-reduced-motion: reduce)')
      .matches;

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  }, [location.pathname]);

  useEffect(() => {
    applySeo(location.pathname);
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div style={{ minHeight: '40vh' }} aria-hidden="true" />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/ugc" element={<Ugc />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <GlobalStyle />
      <a className="skip-link" href="#main-content">
        Saltar al contenido principal
      </a>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;

