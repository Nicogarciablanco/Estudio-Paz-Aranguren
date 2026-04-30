// Estilos del componente SubAreaCollapsible. Archivo: src/pages/Home/sections/Solutions/components/SubAreaCollapsible/styles/subAreaStyles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AccordionItem = styled.div`
  border-bottom: ${({ $isLast }) => ($isLast ? '1px solid transparent' : '1px solid rgba(10, 10, 10, 0.08)')};
  padding-bottom: 0.95rem;
`;

export const AccordionHeader = styled.button`
  width: 100%;
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
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
  gap: 1rem;

  &:hover {
    color: var(--accent);
  }

  .accordion-copy {
    display: grid;
    gap: 0.35rem;
    min-width: 0;
  }

  .accordion-title-text {
    flex: 1;
    font-size: 1.02rem;
  }

  .accordion-description {
    color: var(--secondary-gray);
    font-size: 0.92rem;
    line-height: 1.6;
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

    .accordion-description {
      text-align: center;
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
  padding-top: ${({ $isStaticContent }) => ($isStaticContent ? '0.75rem' : '0.75rem')};
  max-height: ${({ $isStaticContent }) => ($isStaticContent ? 'none' : '0')};
  opacity: ${({ $isStaticContent }) => ($isStaticContent ? 1 : 0)};

  .accordion-description {
    color: var(--secondary-gray);
    font-size: 0.92rem;
    line-height: 1.6;
    margin: 0 0 0.75rem;
  }

  ul {
    margin: 0.75rem 0 0;
    padding-left: 1.2rem;
    display: grid;
    gap: 0.5rem;
  }

  li {
    color: var(--secondary-gray);
    font-size: 0.9rem;
    line-height: 1.6;
  }

  @media (max-width: 1100px) {
    ul {
      padding-left: 0;
      list-style: none;
    }
  }
`;
