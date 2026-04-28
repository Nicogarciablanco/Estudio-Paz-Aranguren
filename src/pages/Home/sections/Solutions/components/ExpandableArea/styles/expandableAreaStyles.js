// Estilos del componente ExpandableArea. Archivo: src/pages/Home/sections/Solutions/components/ExpandableArea/styles/expandableAreaStyles.js
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const AreaCard = styled(motion.div)`
  background: transparent;
  border: 1px solid
    ${({ $isCardOpen, $isSelectedPreview }) =>
      $isCardOpen || $isSelectedPreview
        ? 'rgba(96, 79, 55, 0.42)'
        : 'rgba(10, 10, 10, 0.08)'};
  padding: ${({ $isCardOpen }) => ($isCardOpen ? '2.6rem 2.2rem' : '0.95rem 1.2rem')};
  display: flex;
  flex-direction: column;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    opacity 0.3s ease,
    filter 0.3s ease;
  cursor: pointer;

  /* Layout */
  width: 100%;
  box-sizing: border-box;
  border-radius: 0;
  position: relative;
  box-shadow: ${({ $isCardOpen, $isSelectedPreview }) =>
    $isCardOpen || $isSelectedPreview
      ? '0 14px 30px rgba(10, 10, 10, 0.08)'
      : '0 10px 22px rgba(10, 10, 10, 0.05)'};

  /* Heights */
  height: ${({ $isCardOpen }) => ($isCardOpen ? 'auto' : '100%')};
  min-height: ${({ $isCardOpen }) => ($isCardOpen ? 'auto' : '92px')};
  overflow: hidden;
  /* Muted cards keep the light background but only reduce opacity */
  opacity: ${({ $isCardOpen, $isSelectedPreview }) =>
    $isCardOpen || $isSelectedPreview ? 1 : 0.56};
  filter: none;
  color: var(--text-main);
  cursor: ${({ $isCardOpen }) => ($isCardOpen ? 'default' : 'pointer')};

  &:hover {
    border-color: rgba(96, 79, 55, 0.35);
    opacity: ${({ $isCardOpen, $isSelectedPreview }) => ($isCardOpen || $isSelectedPreview ? 1 : 0.9)};
    background: transparent;
  }

  /* When the card is inside the left rail, make hover change the title color like the navbar */
  &:hover {
    .title-card-text {
      color: ${({ $isInRail, $isCardOpen }) => ($isInRail && !$isCardOpen ? 'var(--accent)' : 'inherit')};
    }
    .icon-card {
      color: ${({ $isInRail, $isCardOpen }) => ($isInRail && !$isCardOpen ? 'var(--accent)' : 'inherit')};
    }
  }

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
  }

  @media (max-width: 1200px) {
    padding: ${({ $isCardOpen }) => ($isCardOpen ? '2.2rem 1.7rem' : '0.95rem 1rem')};
    width: 100%;
    text-align: center;
    height: ${({ $isCardOpen }) => ($isCardOpen ? 'auto' : '96px')};
    overflow: visible;
    opacity: 1;
    filter: none;
    box-shadow: ${({ $isCardOpen, $isSelectedPreview }) =>
      $isCardOpen || $isSelectedPreview
        ? '0 14px 30px rgba(10, 10, 10, 0.08)'
        : '0 10px 22px rgba(10, 10, 10, 0.05)'};
    background: transparent;
    border-color: ${({ $isCardOpen, $isSelectedPreview }) =>
      $isCardOpen || $isSelectedPreview ? 'rgba(96, 79, 55, 0.42)' : 'rgba(10, 10, 10, 0.08)'};
  }

  h3 {
    font-size: ${({ $isCardOpen }) => ($isCardOpen ? '1.82rem' : '1.08rem')};
    margin-bottom: ${({ $isCardOpen }) => ($isCardOpen ? '0.5rem' : 0)};
    color: inherit;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.75rem;
    position: relative;
    z-index: 1;

    @media (max-width: 1200px) {
      font-size: 1.5rem;
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      align-items: center;
      column-gap: 0.4rem;
      justify-content: initial;
    }

    &::before {
      content: '+';
      display: none;
    }

    @media (max-width: 1200px) {
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
      line-height: 1.1;

      @media (max-width: 1200px) {
        grid-column: 2;
        justify-self: center;
        width: auto;
        max-width: 100%;
        text-align: center;
        white-space: normal;
      }
    }

    .icon-card {
      font-size: 1.3rem;
      color: ${({ $isCardOpen, $isSelectedPreview }) =>
        $isCardOpen || $isSelectedPreview ? 'var(--accent)' : 'rgba(10, 10, 10, 0.52)'};
      font-weight: 300;
      transition: color 0.3s ease;
      transform: ${({ $isCardOpen, $isSelectedPreview }) =>
        $isCardOpen || $isSelectedPreview ? 'rotate(45deg)' : 'rotate(0)'};

      @media (max-width: 1200px) {
        grid-column: 3;
        justify-self: end;
        transform: ${({ $isCardOpen, $isSelectedPreview }) =>
          $isCardOpen || $isSelectedPreview ? 'rotate(45deg)' : 'rotate(0)'};
      }
    }
  }

  .responsable-text {
    font-family: var(--font-body);
    font-size: 0.85rem;
    letter-spacing: 0.1em;
    color: var(--accent);
    margin-bottom: 1rem;
    white-space: pre-line;
    position: relative;
    z-index: 1;
    display: ${({ $isCardOpen }) => ($isCardOpen ? 'block' : 'none')};

    @media (max-width: 1200px) {
      font-size: 0.75rem;
      margin-bottom: 0.5rem;
      display: ${({ $isCardOpen }) => ($isCardOpen ? 'block' : 'none')};
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
  position: relative;
  z-index: 1;
`;

export const SubAreasGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(10, 10, 10, 0.08);

  @media (max-width: 1200px) {
    gap: 1.5rem;
  }
`;

export const SubAreaItem = styled.div`
  h4 {
    font-size: 1.1rem;
    color: inherit;
    margin-bottom: 0.5rem;
    font-family: var(--font-body);
  }

  p {
    color: inherit;
    font-size: 0.95rem;
    line-height: 1.6;
    margin: 0;
  }

  ul {
    margin: 1rem 0 0;
    padding-left: 1.2rem;
    color: inherit;
    display: grid;
    gap: 0.45rem;
  }

  li {
    color: inherit;
    font-size: 0.92rem;
    line-height: 1.55;
    padding-left: 0.15rem;
  }

  @media (max-width: 1200px) {
    text-align: center;

    ul {
      padding-left: 0;
      list-style-position: inside;
    }
  }
`;
