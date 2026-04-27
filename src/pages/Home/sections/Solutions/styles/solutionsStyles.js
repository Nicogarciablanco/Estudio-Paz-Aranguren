// Estilos del modulo Solutions con styled-components. Archivo: src/pages/Home/sections/Solutions/styles/solutionsStyles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Contenedor principal del grid de soluciones
export const GridContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TopRow = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: start;
  width: 100%;

  @media (max-width: 1100px) {
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MainColumn = styled.div`
  display: flex;
  flex: 3 1 0;
  min-width: 0;
  min-height: 0;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: stretch;
  flex: 1 1 0;
  min-width: 280px;
`;

export const BottomRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;

