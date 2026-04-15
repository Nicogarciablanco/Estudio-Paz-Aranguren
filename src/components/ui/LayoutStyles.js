import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Section = styled.section`
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

export const ContentSection = styled.section`
  padding: 8rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  flex: 1;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1rem;
  }
`;

export const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--text-main);
  border-bottom: 1px solid var(--accent);
  padding-bottom: 1rem;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
  }
`;
