// Componente de interfaz del proyecto. Archivo: src/pages/Home/Home.jsx
import React from 'react';
import PageWrapper from '../../components/layout/PageWrapper/PageWrapper';
import Navbar from '../../components/layout/Navbar/Navbar';
import Footer from '../../components/layout/Footer/Footer';
import Hero from './sections/Hero/Hero';
import About from './sections/About/About';
import Team from './sections/Team/Team';
import Solutions from './sections/Solutions/Solutions';
import Commercial from './sections/Commercial/Commercial';
import { MainContent } from '../../components/ui/LayoutStyles';

export default function Home() {
  return (
    <PageWrapper>
      <Navbar variant="home" />
      <MainContent id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Team />
        <Solutions />
        <Commercial />
      </MainContent>
      <Footer showContact text="Estudio Paz Aranguren. Todos los derechos reservados." />
    </PageWrapper>
  );
}

