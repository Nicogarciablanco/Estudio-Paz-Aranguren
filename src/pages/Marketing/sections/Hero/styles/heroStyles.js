import styled from 'styled-components';
import { motion } from 'framer-motion';

export const HeroTitle = styled(motion.h1)`
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: var(--text-main);
`;

export const HeroText = styled(motion.p)`
  font-size: 1.25rem;
  color: var(--secondary-gray);
  max-width: 600px;
  font-weight: 300;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
`;
