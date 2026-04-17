import styled from 'styled-components';
import { motion } from 'framer-motion';

export const SectionBackground = styled.section`
  background-color: var(--light-beige);
  width: 100%;
  
  .about-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Asegura que el título quede arriba a la izquierda */
  }

  .about-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
    width: 100%;
  }

  @media (max-width: 1100px) {
        .about-content {
      flex-direction: column;
      gap: 2rem;
    }
  }

  @media (max-width: 768px) {
    min-height: clamp(35vh, 40vh, 45vh); /* Compensa de manera fluida las áreas restantes de la pantalla */
    display: flex;
    align-items: center;

    .about-title {
      display: none;
    }

    .about-section {
      text-align: center;
      padding: clamp(1.5rem, 4vw, 3rem) clamp(1rem, 3vw, 2rem) !important;
    }
  }

  @media (max-width: 480px) {
    display: block; /* Quitamos el flex center global para que la foto no sea atraída al área visible de arriba */
    .about-section {
      padding: 0 1rem 2rem 1rem !important; /* Ajuste interno seguro (sin padding superior para no pisar el 35vh) */
      align-items: center;
    }
    .about-content {
      align-items: center;
      justify-content: flex-start;
    }
  }
`;

export const AboutText = styled(motion.p)`
  font-size: 1.5rem;
  line-height: 1.8;
  color: var(--text-main);
  max-width: 800px;
  font-weight: 300;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: clamp(1rem, 2.5vw, 1.35rem); /* Dinamismo expandido hasta 768px */
    line-height: clamp(1.4, 2.5vw, 1.6);
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: clamp(0.85rem, 4vw, 1rem); /* Ligeramente menor para crear más contraste y dejar brillo al Hero */
    line-height: 1.4;
    min-height: 35vh; /* Obliga a que solo este texto ocupe el bloque de 35vh disponible al inicio */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
  }
`;

export const AboutImg = styled(motion.img)`
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
  border-radius: 8px; /* Pequeño ajuste estético opcional */

  @media (max-width: 768px) {
    max-width: 250px;
  }

  @media (max-width: 480px) {
    max-width: 250px;
    margin-top: 1rem; /* Empujada sutilmente debajo del final de los 35vh del texto */
  }
`;