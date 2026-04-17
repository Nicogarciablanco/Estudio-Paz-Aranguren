const PREMIUM_EASE = [0.16, 1, 0.3, 1];

// Fade estándar con Y offset suave (ideal para bloques grandes o párrafos)
export const fadeProps = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: PREMIUM_EASE }
};

// Contenedor padre para Staggering elegante (Casillas, grids, equipo)
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Item hijo del stagger respetando la curva premium (Bézier corporativo)
export const staggerItem = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: PREMIUM_EASE }
  }
};

// Revealer para imágenes (Desliza un recorte tipo "telón teatral" premium)
export const imageRevealProps = {
  initial: { clipPath: "inset(100% 0 0 0)" },
  whileInView: { clipPath: "inset(0% 0 0 0)" },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 1.2, ease: [0.25, 1, 0.5, 1] }
};
