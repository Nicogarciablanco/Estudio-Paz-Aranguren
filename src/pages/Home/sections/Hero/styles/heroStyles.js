// Estilos del modulo con styled-components. Archivo: src/pages/Home/sections/Hero/styles/heroStyles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
  position: relative;
  min-height: 92vh; /* Desktop */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  overflow: hidden;
  padding: 4rem 2rem;
  background-color: var(--bg-color);

  @media (max-width: 768px) {
    min-height: clamp(50vh, 60vh, 65vh); /* Altura fluida para compensar distintas tablets/landscape */
    padding: clamp(1.5rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem);
    justify-content: center;
  }

  @media (max-width: 480px) {
    min-height: 55vh; /* Darle mayor jerarquía y peso visual frente al About */
    padding: 1rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: -5%;
    left: -5%;
    width: 110%;
    height: 110%;
    background-image: url('/Heroimgs/Balanza-hero.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(5px);
    opacity: 0;
    z-index: 0;
    animation: fadeZoomIn 2.5s ease-out 0.5s forwards;
  }

  @keyframes fadeZoomIn {
    0% {
      opacity: 0;
      transform: scale(1.05);
    }

    100% {
      opacity: 0.3;
      transform: scale(1);
    }
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`;

export const Overline = styled(motion.h2)`
  font-family: var(--font-body);
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.35em;
  color: var(--accent);
  margin-bottom: 1.5rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: clamp(0.7rem, 2vw, 0.85rem);
    letter-spacing: clamp(0.2em, 2vw, 0.35em);
    margin-bottom: clamp(1rem, 2vh, 1.5rem);
  }

  @media (max-width: 480px) {
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    margin-bottom: 0.75rem;
  }
`;

export const HeroTitle = styled(motion.h1)`
  font-size: clamp(3.5rem, 8vw, 7.5rem);
  line-height: 1.05;
  margin-bottom: 2rem;
  color: var(--text-main);
  letter-spacing: -0.01em;

  span {
    display: block;
  }

  @media (max-width: 768px) {
    font-size: clamp(2.8rem, 6vw, 4.5rem); /* Dinamismo expandido hasta 768px */
    margin-bottom: clamp(1.25rem, 3vh, 2rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(2.8rem, 12vw, 3.5rem); /* Título mucho más grande e imponente para asegurar predominancia */
    line-height: 1;
    margin-bottom: 0.5rem;
  }
`;

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  span {
    font-family: var(--font-body);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: var(--text-main);
    margin-bottom: 1rem;
    opacity: 0.6;
  }

  .line {
    width: 1px;
    height: 80px;
    background-color: var(--text-main);
    opacity: 0.3;
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 30%;
      background-color: var(--accent);
      animation: scrollLineDrop 2s cubic-bezier(0.77, 0, 0.175, 1) infinite;
    }
  }

  @keyframes scrollLineDrop {
    0% {
      transform: translateY(-100%);
    }

    100% {
      transform: translateY(350%);
    }
  }

  @media (max-width: 768px) {
    display: none;
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
  font-size: 0.9rem;
  color: var(--text-main);
  opacity: 0.8;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 300;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

