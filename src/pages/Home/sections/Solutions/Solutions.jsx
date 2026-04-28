// Componente de interfaz del proyecto. Archivo: src/pages/Home/sections/Solutions/Solutions.jsx
import { useEffect, useRef, useState } from 'react';
import { fadeProps } from '../../../../utils/animations';
import { Section, SectionTitle } from '../../../../components/ui/LayoutStyles';
import { solutionsData } from './data/solutionsData';
import ExpandableArea from './components/ExpandableArea/ExpandableArea';
import { DesktopSplit, RailColumn, MainColumn, MobileStack } from './styles/solutionsStyles';

export default function Solutions() {
  const [openAreaId, setOpenAreaId] = useState(solutionsData[0].id);
  const [isMobile, setIsMobile] = useState(() =>
    typeof window === 'undefined' ? false : window.innerWidth <= 1200
  );
  const scrollTimeoutRef = useRef(null);

  const scrollToAreaStart = (id) => {
    const targetCard = document.getElementById(`area-card-${id}`);
    if (!targetCard) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    const navHeight = document.querySelector('nav')?.offsetHeight ?? 80;
    // Aumentamos el margen superior para que no quede "pisando" el navbar
    const targetTop =
      targetCard.getBoundingClientRect().top + window.scrollY - navHeight - 30;

    window.scrollTo({
      top: Math.max(targetTop, 0),
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });
  };

  const handleToggleArea = (id) => {
    if (openAreaId !== id) {
      setOpenAreaId(id);

      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }

      // Esperamos a que la transición de Framer Motion progrese antes de reubicar el viewport.
      scrollTimeoutRef.current = window.setTimeout(() => {
        scrollToAreaStart(id);
      }, 400);
    }
  };

  const openArea = solutionsData.find((a) => a.id === openAreaId) ?? solutionsData[0];
  const closedAreas = solutionsData.filter((a) => a.id !== openArea.id);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1200);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <Section id="solutions">
      <SectionTitle {...fadeProps}>Áreas de Práctica</SectionTitle>

      {isMobile ? (
        <MobileStack>
          <ExpandableArea
            area={openArea}
            isOpen={true}
            onToggle={() => handleToggleArea(openArea.id)}
            totalItems={solutionsData.length}
          />
          {closedAreas.map((area, index) => (
            <ExpandableArea
              key={area.id}
              area={area}
              isOpen={false}
              onToggle={() => handleToggleArea(area.id)}
              totalItems={solutionsData.length}
              isMuted={index !== 0}
            />
          ))}
        </MobileStack>
      ) : (
          <DesktopSplit>
            <RailColumn>
              <ExpandableArea
                area={openArea}
                isOpen={false}
                onToggle={() => handleToggleArea(openArea.id)}
                totalItems={solutionsData.length}
                isMuted={false}
                isSelectedPreview={true}
                isRail={true}
              />
              {closedAreas.map((area) => (
                <ExpandableArea
                  key={area.id}
                  area={area}
                  isOpen={false}
                  onToggle={() => handleToggleArea(area.id)}
                  totalItems={solutionsData.length}
                  isMuted={true}
                  isRail={true}
                />
              ))}
            </RailColumn>
            <MainColumn>
              <ExpandableArea
                area={openArea}
                isOpen={true}
                onToggle={() => handleToggleArea(openArea.id)}
                totalItems={solutionsData.length}
              />
            </MainColumn>
          </DesktopSplit>
      )}
    </Section>
  );
}
