// Componente de interfaz del proyecto. Archivo: src/pages/Marketing/sections/Hero/Hero.jsx
import React from 'react';
import { fadeProps } from '../../../../utils/animations';
import { heroContent } from './data/heroContent';
import { HeroText, HeroTitle, HeroContainer, TextContent, ImageContent, ImageTitle, ImageDescription } from './styles/heroStyles';

export default function Hero() {
  return (
    <HeroContainer>
      <TextContent>
        <HeroTitle {...fadeProps}>
          {heroContent.title}
        </HeroTitle>
        <HeroText {...fadeProps} transition={{ duration: 0.8, delay: 0.2 }}>
          {heroContent.description.map((paragraph) => (
            <span key={paragraph}>{paragraph}</span>
          ))}
        </HeroText>
      </TextContent>
      <ImageContent {...fadeProps} transition={{ duration: 0.8, delay: 0.4 }}>
        <img
          src="/Marketingimgs/TesistaAilenMetetiero.png"
          alt="Retrato de Ailén Metetiero, área de marketing de Estudio Paz Aranguren"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <ImageTitle>Ailén Metetiero</ImageTitle>
        <ImageDescription>
          Tesista de la Licenciatura en Marketing.
        </ImageDescription>
      </ImageContent>
    </HeroContainer>
  );
}

