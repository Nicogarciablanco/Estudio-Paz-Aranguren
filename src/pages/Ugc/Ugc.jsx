// Componente de interfaz del proyecto. Archivo: src/pages/Ugc/Ugc.jsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper/PageWrapper';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import { ContentSection, MainContent } from '../../components/ui/LayoutStyles';
import Hero from './sections/Hero/Hero';
import Solutions from './sections/Solutions/Solutions';

export default function Ugc() {
  return (
    <PageWrapper>
      <Navbar variant="inner" title="Paz Aranguren Zuazaga | UGC" />
      <MainContent id="main-content" tabIndex={-1}>
        <ContentSection>
          <Hero />
          <Solutions />
        </ContentSection>
      </MainContent>
      <Footer text="Estudio Paz Aranguren Zuazaga. División Comercial." topBorder />
    </PageWrapper>
  );
}

