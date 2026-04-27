// Estilos del modulo con styled-components. Archivo: src/pages/Marketing/sections/Hero/styles/heroStyles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;
  margin-bottom: 5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 3rem;
    margin-bottom: 3rem;
  }
`;

export const TextContent = styled.div`
  flex: 1.25;
  width: 100%;
  max-width: 840px;

  @media (max-width: 900px) {
    max-width: 100%;
    margin: 0 auto;
  }
`;

export const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-main);
`;

export const HeroText = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--secondary-gray);
  font-weight: 300;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 72ch;

  span {
    display: block;
  }

  @media (max-width: 768px) {
    font-size: 1.1rem;
    gap: 0.85rem;
    max-width: 100%;
  }
`;

export const ImageContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0.55;
  text-align: center;

  img {
    border-radius: 100%;
    width: 100%;
    max-width: 250px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center 20%;
    margin-bottom: 1.5rem;
  }
`;

export const ImageTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-main);
`;

export const ImageDescription = styled.p`
  color: var(--secondary-gray);
  font-size: 0.95rem;
  line-height: 1.7;
  max-width: 26rem;
`;

