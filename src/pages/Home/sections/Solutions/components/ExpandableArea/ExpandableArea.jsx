// Componente de interfaz del proyecto. Archivo: src/pages/Home/sections/Solutions/components/ExpandableArea/ExpandableArea.jsx
import { AnimatePresence } from 'framer-motion';
import { smoothTransition } from '../../constants/motion';
import { AreaCard, AreaContentWrapper, SubAreasGrid, SubAreaItem } from './styles/expandableAreaStyles';

export default function ExpandableArea({
  area,
  isOpen,
  isMuted = false,
  isSelectedPreview = false,
  isRail = false,
  onToggle,
  totalItems,
}) {
  const denseResponsableLength = (area.responsable ?? '').replace(/\s+/g, ' ').trim().length;
  const isDenseClosed =
    !isOpen &&
    ((area.title?.length ?? 0) > 18 || denseResponsableLength > 30);
  const showContent = isOpen && !isSelectedPreview;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onToggle();
    }
  };

  return (
    <AreaCard
      id={`area-card-${area.id}`}
      $isCardOpen={isOpen}
      $isMuted={isMuted}
      $isSelectedPreview={isSelectedPreview}
      $isInRail={isRail}
      $isDenseClosed={isDenseClosed}
      $totalItems={totalItems}
      data-open={isOpen}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={showContent}
      aria-controls={`area-content-${area.id}`}
      aria-label={`${area.title}, ${showContent ? 'expandida' : 'colapsada'}`}
      layout
      transition={smoothTransition}
    >
      {area.responsable && (
        <span className="responsable-text">Responsable: {area.responsable}</span>
      )}
      <h3>
        <span className="title-card-text">{area.title}</span>
        {!isOpen && <span className="icon-card">+</span>}
      </h3>

      <AnimatePresence initial={false}>
        {showContent && (
          <AreaContentWrapper
            id={`area-content-${area.id}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={smoothTransition}
            onClick={(e) => e.stopPropagation()}
          >
            <SubAreasGrid>
              {area.subAreas.map((subArea, subIndex) => (
                <SubAreaItem key={subIndex}>
                  <h4>{subArea.title}</h4>
                  <p>{subArea.description}</p>
                  <ul>
                    {subArea.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </SubAreaItem>
              ))}
            </SubAreasGrid>
          </AreaContentWrapper>
        )}
      </AnimatePresence>
    </AreaCard>
  );
}

