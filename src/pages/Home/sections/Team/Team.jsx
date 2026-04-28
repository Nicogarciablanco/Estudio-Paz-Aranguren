// Componente de interfaz del proyecto. Archivo: src/pages/Home/sections/Team/Team.jsx
import { fadeProps, staggerContainer, staggerItem } from '../../../../utils/animations';
import { Section, SectionTitle } from '../../../../components/ui/LayoutStyles';
import { TeamMembers } from './data/teamdata';
import {
  Grid3Col,
  MemberDesc,
  MemberJob,
  MemberName,
  MemberPhoto,
  MemberRegistration,
  TeamMember,
} from './styles/teamStyles';

export default function Team() {
  return (
    <Section id="team">
      <SectionTitle {...fadeProps}>Profesionales</SectionTitle>
      <Grid3Col
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {TeamMembers.map((member) => (
          <TeamMember key={member.id} variants={staggerItem}>
            <MemberPhoto>
              <img src={member.img} alt={`Retrato de ${member.name}`} loading="lazy" decoding="async" />
            </MemberPhoto>
            <MemberName>{member.name}</MemberName>
            <MemberRegistration>{member.registration}</MemberRegistration>
            <MemberDesc>{member.description}</MemberDesc>
            <MemberJob>{member.job}</MemberJob>
          </TeamMember>
        ))}
      </Grid3Col>
    </Section>
  );
}

