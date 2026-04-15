import { fadeProps, imageRevealProps } from '../../../../utils/animations';
import { Section, SectionTitle } from '../../../../components/ui/LayoutStyles';
import { aboutParagraph } from './data/aboutContent';
import { AboutText, SectionBackground, AboutImg } from './styles/aboutStyles';

export default function About() {
  return (
    <SectionBackground id="about">
      <Section className="about-section">
      <SectionTitle className="about-title" {...fadeProps}>El estudio</SectionTitle>
        <AboutText {...fadeProps}>
          {aboutParagraph}
        </AboutText>
        
        {/* Aquí usas src y pasas la "P", "N", "G" en mayúsculas */}
        <AboutImg 
          src="/Sobrenosotrosimgs/sobrenosotros.PNG" 
          alt="Sobre nosotros" 
          {...imageRevealProps} 
        />
        
      </Section>
    </SectionBackground>
  );
}
