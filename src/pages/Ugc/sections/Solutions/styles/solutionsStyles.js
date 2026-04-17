import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SolutionsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const InteractiveCard = styled(motion.div)`
  padding: 3rem 2rem;
  background-color: var(--beige-muted);
  border: 1px solid rgba(10, 10, 10, 0.03);
  border-left: 2px solid transparent;
  transition: background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    text-align: center;
  }

  &:hover {
    background-color: var(--light-beige);
    border-color: var(--accent);
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(10, 10, 10, 0.05);
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
  }
`;
