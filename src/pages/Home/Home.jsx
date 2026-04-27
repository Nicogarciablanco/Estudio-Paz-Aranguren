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

export default function Home() {
  return (
    <PageWrapper>
      <Navbar variant="home" />
      <Hero />
      <About />
      <Team />
      <Solutions />
      <Commercial />
      <Footer showContact text="Estudio Paz Aranguren. Todos los derechos reservados." />
    </PageWrapper>
  );
}

