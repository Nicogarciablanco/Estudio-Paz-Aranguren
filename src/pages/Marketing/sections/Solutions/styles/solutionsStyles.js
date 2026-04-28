// Estilos del modulo con styled-components. Archivo: src/pages/Marketing/sections/Solutions/styles/solutionsStyles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SolutionsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const InteractiveCard = styled(motion.div)`
  padding: 3rem 2rem;
  background-color: var(--bg-color);
  border: 1px solid var(--accent);
  transition: background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    text-align: center;
  }


  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.35rem;
    }
  }

  p {
    color: var(--secondary-gray);
    font-size: 0.95rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .services-list {
    list-style-type: disc;
    padding-left: 1.25rem;
    margin: 0;
    text-align: left;
  }

  .services-list li {
    font-size: 0.9rem;
    color: var(--text-main);
    margin-bottom: 0.8rem;
    line-height: 1.5;
  }
`;

