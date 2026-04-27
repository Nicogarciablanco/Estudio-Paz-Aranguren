// Estilos del componente ExpandableArea. Archivo: src/pages/Home/sections/Solutions/components/ExpandableArea/styles/expandableAreaStyles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AreaCard = styled(motion.div)`
  background-color: var(--bg-color);
  border: 1px solid rgba(10, 10, 10, 0.08);
  padding: 2.5rem 2rem;
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.3s ease;
  cursor: pointer;
  
  /* Layout */
  width: 100%;
  box-sizing: border-box;

  /* Heights */
  height: 100%;
  min-height: 240px;
  overflow: ${({ $isCardOpen }) => ($isCardOpen ? 'hidden' : 'visible')};
  transition: height 320ms ease;

  &:hover {
    box-shadow: 0 10px 30px rgba(10, 10, 10, 0.03);
    border-color: var(--accent);
  }

  @media (max-width: 1100px) {
    padding: 2rem 1.5rem;
    width: 100%;
    margin-right: 0;
    margin-bottom: 0;
    text-align: center;
    height: ${({ $isCardOpen }) => ($isCardOpen ? 'auto' : '240px')};
    overflow: visible;
  }
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
    color: var(--text-main);
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1100px) {
      font-size: 1.5rem;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      column-gap: 0.4rem;
      justify-content: initial;
    }

    @media (max-width: 1100px) {
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

      @media (max-width: 1100px) {
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

      @media (max-width: 1100px) {
        grid-column: 3;
        justify-self: end;
        transform: ${({ $isCardOpen }) =>
          $isCardOpen
            ? 'rotate(45deg)'
            : 'rotate(0)'};
      }
    }
  }

  .responsable-text {
    font-family: var(--font-body);
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    color: var(--accent);
    margin-bottom: 1rem;
    display: block;
    white-space: pre-line;

    @media (max-width: 1100px) {
      font-size: 0.75rem;
      margin-bottom: 0.5rem;
    }
  }

  > p {
    color: var(--secondary-gray);
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

export const AreaContentWrapper = styled(motion.div)`
  overflow: visible;
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

  ul {
    margin: 1rem 0 0;
    padding-left: 1.2rem;
    color: var(--text-main);
    display: grid;
    gap: 0.45rem;
  }

  li {
    color: var(--secondary-gray);
    font-size: 0.92rem;
    line-height: 1.55;
    padding-left: 0.15rem;
  }

  @media (max-width: 1100px) {
    text-align: center;

    ul {
      padding-left: 0;
      list-style-position: inside;
    }
  }
`;
