// Componente de interfaz del proyecto. Archivo: src/components/layout/Footer/Footer.jsx
import React from 'react';
import { FooterContainer } from './styles/footerStyles';

export default function Footer({ text = 'Estudio Paz Aranguren. Todos los derechos reservados.' }) {
  return (
    <FooterContainer>
      <p>&copy; {new Date().getFullYear()} {text}</p>
    </FooterContainer>
  );
}

