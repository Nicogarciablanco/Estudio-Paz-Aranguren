import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: rgba(242, 242, 240, 0.95);
  backdrop-filter: blur(10px);
  padding: 1.5rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  border-bottom: 1px solid rgba(10, 10, 10, 0.05);

  @media (max-width: 768px) {
    padding: 1.2rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.2rem;
    gap: 0.5rem;
  }
`;

export const NavLogo = styled.div`
  font-family: var(--font-heading);
  font-size: 1.5rem;
  letter-spacing: 1px;
  color: var(--text-main);
  z-index: 101;
  white-space: nowrap; /* Evita que el título salte de línea de manera impredecible */

  @media (max-width: 480px) {
    font-size: clamp(1rem, 4vw, 1.25rem); /* Escalado fluido para títulos largos como Paz Aranguren | UGC */
    overflow: hidden;
    text-overflow: ellipsis; /* Si sigue siendo enorme en 320px, que lo trunque elegante */
  }
`;

export const DesktopLinks = styled.div`
  display: flex;
  gap: 2.5rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-weight: 500;
  align-items: center;

  a {
    transition: color 0.3s ease;
    text-decoration: none;
    color: var(--text-main);

    &:hover {
      color: var(--accent);
    }
  }

  hr {
    height: 15px;
    border: none;
    border-left: 1px solid var(--secondary-gray);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 101;
  padding: 0.5rem;

  span {
    display: block;
    width: 25px;
    height: 2px;
    background-color: var(--text-main);
    margin-bottom: 5px;
    /* Mejora de Performance: Evitar transición "all" para renderizado acelerado por GPU */
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:last-child {
      margin-bottom: 0;
    }
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
    span:nth-child(1) {
      transform: translateY(7px) rotate(45deg);
    }
    span:nth-child(2) {
      opacity: 0;
    }
    span:nth-child(3) {
      transform: translateY(-7px) rotate(-45deg);
    }
  `}

  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: var(--bg-color);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  z-index: 100;
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: opacity 0.4s ease;

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--text-main);
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: var(--accent);
    }
  }
`;

export const BackLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--secondary-gray);
  border: 1px solid var(--secondary-gray);
  padding: 0.5rem 1.5rem;
  /* Transformaciones limitadas para evitar repainting global en hover */
  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
  z-index: 101;
  text-decoration: none;
  white-space: nowrap;

  .back-text-short {
    display: none;
  }

  .back-icon {
    font-size: 1rem;
    line-height: 1;
  }

  &:hover {
    color: var(--bg-color);
    background-color: var(--text-main);
    border-color: var(--text-main);
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.75rem;
    
    .back-text-full {
      display: none;
    }

    .back-text-short {
      display: inline;
    }
  }
`;
