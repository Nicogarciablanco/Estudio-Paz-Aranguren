import React from 'react';
import { fadeProps } from '../../../../utils/animations';
import { heroContent } from './data/heroContent';
import { HeroText, HeroTitle } from './styles/heroStyles';

export default function Hero() {
  return (
    <>
      <HeroTitle {...fadeProps}>
        {heroContent.title}
      </HeroTitle>
      <HeroText {...fadeProps} transition={{ duration: 0.8, delay: 0.2 }}>
        {heroContent.description}
      </HeroText>
    </>
  );
}
