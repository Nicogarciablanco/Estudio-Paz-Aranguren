// Estilos del modulo Solutions con styled-components. Archivo: src/pages/Home/sections/Solutions/styles/solutionsStyles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const BoardShell = styled(motion.div)`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
  padding: 1rem;

  &::before {
    content: '';
    position: absolute;
    inset: 0.25rem;
    border: 1px solid rgba(10, 10, 10, 0.08);
    border-radius: 1.75rem;
    background:
      linear-gradient(135deg, rgba(10, 10, 10, 0.025), transparent 40%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(250, 248, 244, 0.96));
    box-shadow: 0 24px 80px rgba(10, 10, 10, 0.06);
    pointer-events: none;
  }
`;

export const DesktopSplit = styled.div`
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(280px, 30%) minmax(0, 1fr);
  gap: 1.5rem;
  width: 100%;
  align-items: start;
  padding: 1.25rem;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const RailColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  min-width: 0;
  align-self: start;
`;

export const MainColumn = styled.div`
  display: flex;
  min-width: 0;

  > * {
    width: 100%;
  }
`;

export const MobileStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: relative;
  z-index: 1;
`;

