// Estilos del componente SubAreaCollapsible. Archivo: src/pages/Home/sections/Solutions/components/SubAreaCollapsible/styles/subAreaStyles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

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

  @media (max-width: 1100px) {
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
