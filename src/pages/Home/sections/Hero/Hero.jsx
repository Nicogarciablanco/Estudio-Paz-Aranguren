import { fadeProps } from '../../../../utils/animations';
import {
  ContentWrapper,
  HeroSection,
  HeroTitle,
  Overline,
  ScrollIndicator,
  Divider,
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
          {heroContent.titleLines.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </HeroTitle>
        
        <Divider 
          initial={{ width: 0, opacity: 0 }} 
          animate={{ width: "40px", opacity: 0.5 }} 
          transition={{ duration: 1.2, delay: 1.4 }} 
        />
        <HeroSubtitle {...fadeProps} transition={{ duration: 1, delay: 1.6 }}>
          {heroContent.subtitle}
        </HeroSubtitle>
      </ContentWrapper>
      
      <ScrollIndicator
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1.2 }}
      >
        <span>{heroContent.discoverLabel}</span>
        <div className="line"></div>
      </ScrollIndicator>
    </HeroSection>
  );
}
