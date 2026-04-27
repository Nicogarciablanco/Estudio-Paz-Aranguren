// Componente de interfaz del proyecto. Archivo: src/pages/Home/sections/Solutions/Solutions.jsx
import { useState, useRef, useEffect } from 'react';
import { fadeProps } from '../../../../utils/animations';
import { Section, SectionTitle } from '../../../../components/ui/LayoutStyles';
import { solutionsData } from './data/solutionsData';
import ExpandableArea from './components/ExpandableArea/ExpandableArea';
import { GridContainer, TopRow, MainColumn, RightColumn, BottomRow } from './styles/solutionsStyles';

export default function Solutions() {
  const [openAreaId, setOpenAreaId] = useState(solutionsData[0].id);

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
      
      // Esperamos a que la animación de Framer Motion (~0.5s) 
      // progrese/termine para calcular la posición real de la tarjeta y scrollear
      setTimeout(() => {
        scrollToAreaStart(id);
      }, 400);
    }
  };

  const openArea = solutionsData.find((a) => a.id === openAreaId) ?? solutionsData[0];
  const closedAreas = solutionsData.filter((a) => a.id !== openArea.id);

  const containerRef = useRef(null);
  const mainRef = useRef(null);
  const [visibleCount, setVisibleCount] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1200);

  // Sincronización del estado mobile para asegurar el flujo de una sola columna
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1200);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Medir la altura del main (tarjeta abierta) y aplicarla como variable CSS al contenedor
    const setMainHeight = () => {
      const mainEl = mainRef.current;
      const containerEl = containerRef.current;

      if (!mainEl || !containerEl) return;

      if (isMobile) {
        // Eliminamos las restricciones de altura de escritorio
        containerEl.style.removeProperty('--top-height');
        mainEl.style.removeProperty('height');
        setVisibleCount(0);
        return;
      }

      const naturalMainHeight = mainEl.offsetHeight;
      const closedEl = containerEl.querySelector('[data-open="false"]');
      const closedHeight = closedEl ? closedEl.offsetHeight : 240;
      const gapValue = parseFloat(getComputedStyle(containerEl).gap) || 24;
      const perItem = closedHeight + gapValue;

      let bestK = 1;
      for (let k = 1; k <= closedAreas.length; k++) {
        const stacked = k * perItem - gapValue;
        bestK = k;
        if (stacked >= naturalMainHeight) break;
      }

      const visible = Math.min(bestK, closedAreas.length);
      const rightColumnHeight = visible * perItem - gapValue;
      const finalTopHeight = Math.max(naturalMainHeight, rightColumnHeight);

      containerEl.style.setProperty('--top-height', `${finalTopHeight}px`);
      setVisibleCount(visible);
    };

    setMainHeight();
    window.addEventListener('resize', setMainHeight);
    return () => window.removeEventListener('resize', setMainHeight);
  }, [openAreaId, closedAreas.length, isMobile]);

  return (
    <Section id="solutions">
      <SectionTitle {...fadeProps}>Áreas de Práctica</SectionTitle>

      <GridContainer ref={containerRef}>
        {isMobile ? (
          /* Layout Simple para Mobile: Una sola columna sin contenedores complejos */
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <ExpandableArea
              area={openArea}
              isOpen={true}
              onToggle={() => handleToggleArea(openArea.id)}
              totalItems={solutionsData.length}
            />
            {closedAreas.map((area) => (
              <ExpandableArea
                key={area.id}
                area={area}
                isOpen={false}
                onToggle={() => handleToggleArea(area.id)}
                totalItems={solutionsData.length}
              />
            ))}
          </div>
        ) : (
          /* Layout Editorial para Desktop: TopRow (Main + Right) y BottomRow */
          <>
            <TopRow>
              <MainColumn ref={mainRef}>
                <ExpandableArea
                  area={openArea}
                  isOpen={true}
                  onToggle={() => handleToggleArea(openArea.id)}
                  totalItems={solutionsData.length}
                />
              </MainColumn>
              <RightColumn>
                {closedAreas.slice(0, visibleCount).map((area) => (
                  <ExpandableArea
                    key={area.id}
                    area={area}
                    isOpen={false}
                    onToggle={() => handleToggleArea(area.id)}
                    totalItems={solutionsData.length}
                  />
                ))}
              </RightColumn>
            </TopRow>
            <BottomRow>
              {closedAreas.slice(visibleCount).map((area) => (
                <ExpandableArea
                  key={area.id}
                  area={area}
                  isOpen={false}
                  onToggle={() => handleToggleArea(area.id)}
                  totalItems={solutionsData.length}
                />
              ))}
            </BottomRow>
          </>
        )}
      </GridContainer>
    </Section>
  );
}
