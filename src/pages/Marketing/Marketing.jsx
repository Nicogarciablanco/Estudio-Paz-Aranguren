// Componente de interfaz del proyecto. Archivo: src/pages/Marketing/Marketing.jsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper/PageWrapper';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import { ContentSection } from '../../components/ui/LayoutStyles';
import Hero from './sections/Hero/Hero';
import Solutions from './sections/Solutions/Solutions';

export default function Marketing() {
  return (
    <PageWrapper>
      <Navbar variant="inner" title="Paz Aranguren Zuazaga | MKT" />
      <ContentSection>
        <Hero />
        <Solutions />
      </ContentSection>
      <Footer text="Estudio Paz Aranguren. División Comercial." />
    </PageWrapper>
  );
}

