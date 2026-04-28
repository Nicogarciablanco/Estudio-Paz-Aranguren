// Estilos del modulo con styled-components. Archivo: src/pages/Home/sections/Hero/styles/heroStyles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  --hero-optical-center-shift: 14px;
  --hero-balance-x-shift: 0px;
  position: relative;
  min-height: 93vh; /* Desktop */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  padding: 4rem 2rem;
  background-color: var(--bg-color);

  @media (max-width: 768px) {
    --hero-optical-center-shift: 10px;
    min-height: clamp(50vh, 60vh, 65vh); /* Altura fluida para compensar distintas tablets/landscape */
    padding: clamp(1.5rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem);
    justify-content: center;
  }

  @media (max-width: 480px) {
    --hero-optical-center-shift: 6px;
    --hero-balance-x-shift: 0px;
    min-height: 55vh; /* Darle mayor jerarquía y peso visual frente al About */
    padding: 1rem;
  }

  /* Pseudo-element removed: using <img> with srcset for LCP control */
`;

export const HeroImage = styled.img`
  position: absolute;
  width: 90%;
  height: 70%;
  object-fit: contain;
  filter: blur(5px) opacity(0.7);
  opacity: 0;
  z-index: 0;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  animation: fadeZoomIn 2.5s ease-out 0.5s forwards;
  
  @keyframes fadeZoomIn {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) scale(1.05);
    }

    100% {
      opacity: 0.3;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  transform: translateX(var(--hero-optical-center-shift));
`;

export const Overline = styled(motion.h2)`
  font-family: var(--font-heading); /* Cambiado a Serif como en la imagen */
  font-size: clamp(3rem, 7vw, 4.5rem); /* Ajustado súper grande para parecerse al título */
  letter-spacing: 0.01em; /* Menos espaciado para la serif */
  color: var(--text-main);
  margin-bottom: 0.5rem; /* Margen muy reducido para que estén pegados */
  font-weight: 400; /* Regular, como en la imagen */
  line-height: 1.1;
  text-align: center;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 5vw, 3rem);
    letter-spacing: 0.02em;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: clamp(1.5rem, 8vw, 2.5rem);
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
  }
`;

export const HeroTitle = styled(motion.h1)`
  font-family: var(--font-heading); /* Reforzamos el uso de la Serif */
  font-weight: 400;
  font-size: clamp(3.5rem, 8vw, 5.5rem);
  line-height: 1.05;
  margin-bottom: 1rem; /* Modificado de 2rem a 1rem para pegarlo al subtítulo */
  color: var(--text-main);
  letter-spacing: 0;
  text-align: center;
  width: 100%;

  @media (max-width: 768px) {
    font-size: clamp(2.8rem, 6vw, 4.5rem); /* Dinamismo expandido hasta 768px */
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: clamp(2.8rem, 12vw, 3.5rem); /* Título mucho más grande e imponente para asegurar predominancia */
    line-height: 1;
    margin-bottom: 0.5rem;
  }
`;

export const Divider = styled(motion.div)`
  height: 1px;
  background-color: var(--text-main);
  margin: 1.5rem auto;
  
  @media (max-width: 480px) {
    margin: 1.2rem auto;
  }
`;

export const HeroSubtitle = styled(motion.p)`
  font-family: var(--font-body);
  font-size: clamp(1.2rem, 2.5vw, 1.8rem); /* Mucho más presente para imitar la captura */
  color: var(--accent);
  opacity: 0.8;
  letter-spacing: 0.05em; /* Reducido un poco para que no quede tan abierto */
  font-weight: 400; /* Levantado apenas el peso para dar más visibilidad */

  @media (max-width: 480px) {
    font-size: clamp(1rem, 4vw, 1.2rem);
  }
`;

