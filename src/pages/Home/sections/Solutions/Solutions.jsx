import { useState } from 'react';
import { fadeProps } from '../../../../utils/animations';
import { Section, SectionTitle } from '../../../../components/ui/LayoutStyles';
import { solutionsData } from './data/solutionsData';
import ExpandableArea from './components/ExpandableArea';
import { GridContainer } from './styles/solutionsStyles';

export default function Solutions() {
  const [openAreaId, setOpenAreaId] = useState(solutionsData[0].id);

  const handleToggleArea = (id) => {
    // Si ya está abierta, no hacemos nada para que siempre haya una ocupando la mitad, 
    // o bien la cerramos y no se ve nada a la izquierda? Mejor que siempre haya una abierta.
    if (openAreaId !== id) {
      setOpenAreaId(id);
    }
  };

  return (
    <Section id="solutions">
      <SectionTitle {...fadeProps}>Áreas de Práctica</SectionTitle>
      
      <GridContainer>
        {solutionsData.map((area) => (
          <ExpandableArea 
            key={area.id}
            area={area} 
            isOpen={openAreaId === area.id}
            onToggle={() => handleToggleArea(area.id)}
            totalItems={solutionsData.length}
          />
        ))}
      </GridContainer>
    </Section>
  );
}
