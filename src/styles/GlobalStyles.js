// Estilos del modulo con styled-components. Archivo: src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';
import '@fontsource/playfair-display/400.css';
import '@fontsource/playfair-display/700.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg-color: #F2F2F0;
    --light-beige: #E6E1D6;
    --beige-muted: #EFEBE3;
    --text-main: #0A0A0A;
    --accent: #96815E;
    --secondary-gray: #4D4D4D;
    
    --font-heading: 'Playfair Display', serif;
    --font-body: 'Montserrat', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-main);
    font-family: var(--font-body);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* Mejora de Accesibilidad: Soporte visible para navegación por teclado */
  :focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 4px;
    border-radius: 2px;
  }

  /* Mejora de Accesibilidad: Respeto a preferencias del sistema para personas con sensibilidad a movimiento */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-heading);
    font-weight: 400;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    font-family: var(--font-body);
    border: none;
    cursor: pointer;
    background: none;
  }
`;
