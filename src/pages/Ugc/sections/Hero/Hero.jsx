// Componente de interfaz del proyecto. Archivo: src/pages/Ugc/sections/Hero/Hero.jsx
import React from 'react';
import { fadeProps } from '../../../../utils/animations';
import { heroContent } from './data/heroContent';
import { HeroText, HeroTitle, HeroContainer, TextContent, ImageContent, SocialLinks } from './styles/heroStyles';

export default function Hero() {
  return (
    <HeroContainer>
      <TextContent>
        <HeroTitle {...fadeProps}>
          {heroContent.title}
        </HeroTitle>
        <HeroText {...fadeProps} transition={{ duration: 0.8, delay: 0.2 }}>
          {heroContent.description}
        </HeroText>
      </TextContent>
      <ImageContent {...fadeProps} transition={{ duration: 0.8, delay: 0.4 }}>
        <img src="/Videosugc/Ugc.png" alt="UGC Creadora" />
        <SocialLinks>
          <a href="https://www.tiktok.com/@gicupazok" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
              <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25v178.72A162.55 162.55 0 1 1 162.6 182.2v84.9a77.62 77.62 0 1 0 84.9 77.62V0h84.9a162.7 162.7 0 0 0 115.6 115.6z"/>
            </svg>
            @gicupazok (+100.000 l)
          </a>
          <a href="https://www.instagram.com/gicupaz" target="_blank" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 448 512" fill="currentColor">
              <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
            </svg>
            @gicupaz (+17.5 k)
          </a>
        </SocialLinks>
      </ImageContent>
    </HeroContainer>
  );
}

