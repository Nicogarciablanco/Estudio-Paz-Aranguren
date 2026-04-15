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
    align-items: flex-start;
    gap: 3rem;
    margin-bottom: 3rem;
  }
`;

export const TextContent = styled.div`
  flex: 1;
  max-width: 600px;
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

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const ImageContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0.8;
  
  img {
    border-radius: 100%;
    width: 100%;
    max-width: 300px;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    object-position: center 20%;
    margin-bottom: 1.5rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--text-main);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: var(--accent);
    }

    svg {
      font-size: 1.2rem;
    }
  }
`;
