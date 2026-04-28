// Componente de interfaz del proyecto. Archivo: src/pages/Home/sections/Hero/Hero.jsx
import { fadeProps } from '../../../../utils/animations';
import {
  ContentWrapper,
  HeroSection,
  HeroTitle,
  Overline,
  HeroSubtitle,
  HeroImage,
} from './styles/heroStyles';
import { heroContent } from './data/heroContent';

export default function Hero() {
  return (
    <HeroSection>
      <HeroImage
        srcSet="
          /Heroimgs/Balanza-hero-optimized.avif 1x,
          /Heroimgs/Balanza-hero-optimized.webp 1x
        "
        src="/Heroimgs/Balanza-hero-optimized.png"
        alt="Balanza del estudio jurídico"
        aria-hidden="true"
      />
      <ContentWrapper>
        <Overline {...fadeProps} transition={{ duration: 0.8, delay: 0.6 }}>
          {heroContent.overline}
        </Overline>
        <HeroTitle {...fadeProps} transition={{ duration: 1, delay: 1.1 }}>
          {heroContent.titleLines}
        </HeroTitle>
        <HeroSubtitle {...fadeProps} transition={{ duration: 1, delay: 1.6 }}>
          {heroContent.subtitle}
        </HeroSubtitle>
      </ContentWrapper>
    </HeroSection>
  );
}

