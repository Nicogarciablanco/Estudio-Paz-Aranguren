// Estilos del modulo con styled-components. Archivo: src/components/layout/Footer/styles/footerStyles.js
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: relative;
  padding: ${({ $showContact }) => ($showContact ? '3rem 4rem 2.5rem' : '3rem 4rem')};
  color: var(--secondary-gray);
  background: rgba(242, 242, 240, 0.9);

  .footer-contact-shell {
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    gap: 1.5rem;
    align-items: start;
    max-width: 1400px;
    margin: 0 auto;
    margin-bottom: 3rem;
  }

  .footer-contact-copy {
    max-width: 34rem;
  }

  .footer-eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.72rem;
    color: var(--accent);
    margin-bottom: 0.8rem;
  }

  .footer-contact-copy h2 {
    font-family: var(--font-heading);
    font-size: clamp(1.8rem, 2.6vw, 2.6rem);
    line-height: 1.05;
    color: var(--text-main);
    margin-bottom: 1rem;
    max-width: 14ch;
  }

  .footer-description {
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--secondary-gray);
  }

  .footer-contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.6rem 1rem;
    align-content: start;
    min-width: min(100%, 26rem);
  }

  .footer-contact-card {
    min-height: 3.2rem;
    padding: 0.4rem 0;
    border-bottom: 1px solid rgba(10, 10, 10, 0.08);
    background: transparent;
    box-shadow: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 0.2rem;
    color: var(--text-main);
    transition: color 0.25s ease, border-color 0.25s ease;
  }

  .footer-contact-card:hover {
    color: var(--accent);
    border-color: rgba(150, 129, 94, 0.34);
  }

  .footer-contact-card:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
    color: var(--accent);
    border-color: rgba(150, 129, 94, 0.34);
  }

  .footer-contact-label {
    font-size: 0.92rem;
    font-weight: 500;
  }

  .footer-contact-note {
    font-size: 0.78rem;
    line-height: 1.4;
    color: var(--secondary-gray);
  }

  .footer-legal {
    position: relative;
    text-align: center;
    font-size: 0.85rem;
    color: var(--secondary-gray);
    padding-top: 1.5rem;
    border-top: 1px solid rgba(10, 10, 10, 0.06);
    max-width: 1400px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    padding: ${({ $showContact }) => ($showContact ? '2.5rem 2rem 2rem' : '2.5rem 2rem')};

    .footer-contact-shell {
      grid-template-columns: 1fr;
      gap: 1rem;
      justify-items: center;
      text-align: center;
    }

    .footer-contact-list {
      grid-template-columns: 1fr;
      min-width: 0;
      width: 100%;
      max-width: 28rem;
    }

    .footer-contact-copy h2 {
      max-width: none;
    }

    .footer-contact-copy,
    .footer-contact-list,
    .footer-legal {
      margin-left: auto;
      margin-right: auto;
    }

    .footer-contact-card {
      align-items: center;
      text-align: center;
      border-bottom: none;
    }
  }

  @media (max-width: 480px) {
    padding: ${({ $showContact }) => ($showContact ? '2rem 1.25rem 1.75rem' : '2rem 1.25rem')};

    .footer-contact-copy h2 {
      font-size: 1.8rem;
    }

    .footer-contact-card {
      min-height: 2.8rem;
    }

    .footer-legal {
      font-size: 0.75rem;
    }
  }
`;

