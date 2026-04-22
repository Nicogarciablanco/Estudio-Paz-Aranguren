// Estilos del modulo con styled-components. Archivo: src/pages/Home/sections/Team/styles/teamStyles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Grid3Col = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

export const TeamMember = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const MemberPhoto = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;

  img {
    border-radius: 100%;
    width: 100%;
    max-width: 250px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center 20%;
  }
`;

export const MemberName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

export const MemberRegistration = styled.p`
  color: var(--accent);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 500;
  margin-bottom: 1rem;
  white-space: pre-line;
`;

export const MemberDesc = styled.p`
  color: var(--secondary-gray);
  font-size: 0.95rem;
  white-space: pre-line;
`;

export const MemberJob = styled.p`
  color: var(--secondary-gray);
  font-size: 0.95rem;
  margin-top: 0.5rem;
  white-space: pre-line;
`;

