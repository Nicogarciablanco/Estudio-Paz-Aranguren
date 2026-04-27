// Componente de interfaz del proyecto. Archivo: src/pages/Home/sections/Hero/Hero.jsx
import { fadeProps } from '../../../../utils/animations';
import {
  ContentWrapper,
  HeroSection,
  HeroTitle,
  Overline,
  HeroSubtitle,
} from './styles/heroStyles';
import { heroContent } from './data/heroContent';

export default function Hero() {
  return (
    <HeroSection>
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

