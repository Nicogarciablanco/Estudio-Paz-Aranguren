// Estilos del modulo con styled-components. Archivo: src/components/ui/LayoutStyles.js
import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

const sharedSectionSpacing = css`
  padding: 8rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

export const Section = styled.section`
  ${sharedSectionSpacing}

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ContentSection = styled.section`
  ${sharedSectionSpacing}
  flex: 1;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const MainContent = styled(motion.main)`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-main);
  border-bottom: 1px solid var(--accent);
  padding-bottom: 1rem;
  display: inline-block;
  width: fit-content;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
    display: inline-flex;
    margin: 0 auto 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;

