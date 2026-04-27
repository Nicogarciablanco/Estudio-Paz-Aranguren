// Componente de interfaz del proyecto. Archivo: src/components/layout/Footer/Footer.jsx
import React from 'react';
import { FooterContainer } from './styles/footerStyles';

const contactLinks = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://wa.me/+5493434563532',
    note: '3434563532',
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
  showContact = false,
}) {
  return (
    <FooterContainer id={showContact ? 'contacto' : undefined} $showContact={showContact}>
      {showContact && (
        <div className="footer-contact-shell">
          <div className="footer-contact-copy">
            <p className="footer-eyebrow">Contacto</p>
            <h2>Contactanos</h2>
            <p className="footer-description">
              Escribinos por WhatsApp, llamanos o dej&aacute; tu consulta por mail. Tambi&eacute;n pod&eacute;s seguirnos en Instagram y LinkedIn.
            </p>
          </div>

          <div className="footer-contact-list" aria-label="Canales de contacto">
            {contactLinks.map((item) => (
              <a
                key={item.id}
                className="footer-contact-card"
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
              >
                <span className="footer-contact-label">{item.label}</span>
                <span className="footer-contact-note">{item.note}</span>
              </a>
            ))}
          </div>
        </div>
      )}

      <p className="footer-legal">&copy; {new Date().getFullYear()} {text}</p>
    </FooterContainer>
  );
}

