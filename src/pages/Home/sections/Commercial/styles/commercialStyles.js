import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CommercialArea = styled.section`
  background-color: var(--text-main);
  color: var(--bg-color);
  padding: 8rem 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 5rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 4rem 1.5rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--bg-color);

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
    }
  }

  p {
    color: #a0a0a0;
    max-width: 600px;
    margin-bottom: 3rem;
    font-size: 1.1rem;

    @media (max-width: 768px) {
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }
`;

export const CommercialLinks = styled(motion.div)`
  display: flex;
  gap: 2rem;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const BridgeButton = styled(motion(Link))`
  border: 1px solid var(--accent);
  color: var(--bg-color);
  padding: 1rem 2.5rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  transition: background-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    background-color: var(--accent);
    color: var(--text-main);
  }
`;

export const CommercialTitle = styled(motion.h2)``;

export const CommercialDescription = styled(motion.p)``;
