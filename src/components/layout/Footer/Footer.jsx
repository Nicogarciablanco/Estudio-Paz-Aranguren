// Componente de interfaz del proyecto. Archivo: src/components/layout/Footer/Footer.jsx
import React from 'react';
import { FooterContainer } from './styles/footerStyles';

const contactLinks = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/+5493434563532',
    note: '+5493434563532',
    external: true,
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/estudiopazaranguren/',
    note: 'Seguinos en redes',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pazarangurenzuazaga',
    note: 'pazarangurenzuazaga',
    external: true,
  },
  {
    id: 'mail',
    label: 'Mail',
    href: 'mailto:Estudiolegalpazyasociados@gmail.com',
    note: 'Estudiolegalpazyasociados@gmail.com',
  },
];

export default function Footer({
  text = 'Estudio Paz Aranguren Zuazaga. Todos los derechos reservados.',
  showContact = true,
  topBorder = false,
}) {
  return (
    <FooterContainer
      id={showContact ? 'contacto' : undefined}
      $showContact={showContact}
      $topBorder={topBorder}
    >
      {showContact && (
        <div className="footer-contact-shell">
          <div className="footer-contact-copy">
            <h2>Contactanos</h2>
            <p className="footer-description">
              Escribinos por WhatsApp, llamanos o dej&aacute; tu consulta por mail. Tambi&eacute;n pod&eacute;s seguirnos en Instagram y LinkedIn.
            </p>
          </div>

          <ul className="footer-contact-list" aria-label="Canales de contacto">
            {contactLinks.map((item) => (
              <li key={item.id}>
                <a
                  className="footer-contact-card"
                  href={item.href}
                  target={item.external ? '_blank' : undefined}
                  rel={item.external ? 'noreferrer noopener' : undefined}
                  aria-label={`${item.label}. ${item.note}`}
                >
                  <span className="footer-contact-label">{item.label}</span>
                  <span className="footer-contact-note">{item.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      <p className="footer-legal">&copy; {new Date().getFullYear()} {text}</p>
    </FooterContainer>
  );
}

