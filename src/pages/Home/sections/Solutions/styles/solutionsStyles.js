import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GridContainer = styled(motion.div)`
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-auto-rows: min-content;
  gap: 1.5rem;
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    display: flex;
    flex-direction: column;
  }
`;

export const AreaCard = styled(motion.div)`
  background-color: var(--bg-color);
  border: 1px solid rgba(10, 10, 10, 0.08);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  width: 100%;
  
  /* Logica de grilla: activo ocupa lado izquierdo y todas las filas, inactivos se apilan a la der */
  grid-column: ${({ $isCardOpen }) => ($isCardOpen ? '1 / 2' : '2 / 3')};
  grid-row: ${({ $isCardOpen, $totalItems }) => 
    $isCardOpen ? `1 / span ${$totalItems ? $totalItems - 1 : 3}` : 'auto'};
  height: ${({ $isCardOpen }) => ($isCardOpen ? '100%' : 'auto')};

  &:hover {
    box-shadow: 0 10px 30px rgba(10, 10, 10, 0.03);
    border-color: var(--accent);
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    grid-column: 1 / -1;
    grid-row: auto;
    text-align: center;
  }
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: var(--text-main);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      column-gap: 0.4rem;
      justify-content: initial;
    }

    @media (max-width: 768px) {
      &::before {
        content: '+';
        grid-column: 1;
        justify-self: start;
        visibility: hidden;
        font-size: 1.5rem;
        font-weight: 300;
      }
    }

    @media (max-width: 480px) {
      font-size: 1.35rem;
    }

    .title-card-text {
      flex: 1;

      @media (max-width: 768px) {
        grid-column: 2;
        justify-self: center;
        width: auto;
        max-width: 100%;
        text-align: center;
        white-space: normal;
      }
    }

    .icon-card {
      font-size: 1.5rem;
      color: var(--accent);
      font-weight: 300;
      transition: transform 0.3s ease;
      transform: ${({ $isCardOpen }) =>
        $isCardOpen ? 'rotate(45deg)' : 'rotate(0)'};

      @media (max-width: 768px) {
        grid-column: 3;
        justify-self: end;
        transform: ${({ $isCardOpen }) =>
          $isCardOpen
            ? 'rotate(45deg)'
            : 'rotate(0)'};
      }
    }
  }

  > p {
    color: var(--secondary-gray);
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

export const AreaContentWrapper = styled(motion.div)`
  overflow: hidden;
`;

export const SubAreasGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(10, 10, 10, 0.08);

  @media (max-width: 1024px) {
    gap: 1.5rem;
  }
`;

export const SubAreaItem = styled.div`
  h4 {
    font-size: 1.1rem;
    color: var(--text-main);
    margin-bottom: 0.5rem;
    font-family: var(--font-body);
  }

  p {
    color: var(--secondary-gray);
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

// Conservado temporalmente si AccordionItem era usado
export const AccordionItem = styled.div`
  border-top: 1px solid rgba(10, 10, 10, 0.08);

  &:first-child {
    margin-top: 2rem;
  }

  &:last-child {
    border-bottom: 1px solid rgba(10, 10, 10, 0.08);
  }
`;

export const AccordionHeader = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-main);
  transition: color 0.3s;

  &:hover {
    color: var(--accent);
  }

  .accordion-title-text {
    flex: 1;
  }

  .icon {
    font-size: 1.5rem;
    color: var(--accent);
    font-weight: 300;
    transition: transform 0.3s ease;
    transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    column-gap: 0.4rem;
    text-align: center;

    &::before {
      content: '+';
      grid-column: 1;
      justify-self: start;
      visibility: hidden;
      font-size: 1.5rem;
      font-weight: 300;
    }

    .accordion-title-text {
      grid-column: 2;
      justify-self: center;
      width: auto;
    }

    .icon {
      grid-column: 3;
      justify-self: end;
      transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
    }
  }
`;

export const AccordionContent = styled(motion.div)`
  overflow: hidden;

  p {
    color: var(--secondary-gray);
    font-size: 0.9rem;
    line-height: 1.6;
    padding-bottom: 1.2rem;
    margin: 0;
  }
`;
