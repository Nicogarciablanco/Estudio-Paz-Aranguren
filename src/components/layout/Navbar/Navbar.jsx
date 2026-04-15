import { useState, useEffect, useRef } from 'react';
import {
  BackLink,
  DesktopLinks,
  Hamburger,
  MobileMenu,
  NavContainer,
  NavLogo,
} from './styles/navbarStyles';
import { homeNavLinksDesktop, homeNavLinksMobile } from './data/navLinks';

export default function Navbar({ variant = 'home', title = 'Paz Aranguren' }) {
  const [isOpen, setIsOpen] = useState(false);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Cerrar menú con tecla Escape por accesibilidad
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Focus trap para el dialog móvil y retorno de foco al botón al cerrar
  useEffect(() => {
    if (!isOpen || !mobileMenuRef.current) {
      return;
    }

    const focusableElements = mobileMenuRef.current.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );

    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    firstFocusable?.focus();

    const handleTrap = (e) => {
      if (e.key !== 'Tab' || !focusableElements.length) {
        return;
      }

      if (e.shiftKey && document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable?.focus();
      } else if (!e.shiftKey && document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable?.focus();
      }
    };

    window.addEventListener('keydown', handleTrap);

    return () => {
      window.removeEventListener('keydown', handleTrap);
      hamburgerRef.current?.focus();
    };
  }, [isOpen]);

  const scrollTo = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const prefersReducedMotion = window
        .matchMedia('(prefers-reduced-motion: reduce)')
        .matches;
      el.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <NavContainer>
      <NavLogo>{title}</NavLogo>
      {variant === 'home' ? (
        <>
          <DesktopLinks>
            {homeNavLinksDesktop.slice(0, 3).map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
            <hr />
            <a
              href="#commercial"
              onClick={(e) => {
                e.preventDefault();
                scrollTo('commercial');
              }}
            >
              {homeNavLinksDesktop[3].label}
            </a>
          </DesktopLinks>
          
          <Hamburger 
            ref={hamburgerRef}
            $isOpen={isOpen} 
            onClick={toggleMenu} 
            aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </Hamburger>

          <MobileMenu 
            id="mobile-menu"
            ref={mobileMenuRef}
            $isOpen={isOpen}
            aria-hidden={!isOpen}
            role="dialog"
            aria-modal="true"
            aria-label="Menú principal móvil"
          >
            {homeNavLinksMobile.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </MobileMenu>
        </>
      ) : (
        <BackLink to="/" aria-label="Volver a la página principal">
          <span className="back-icon" aria-hidden="true">←</span>
          <span className="back-text-full">Volver al Área Legal</span>
          <span className="back-text-short">Volver</span>
        </BackLink>
      )}
    </NavContainer>
  );
}
