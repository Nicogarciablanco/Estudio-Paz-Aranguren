import { AnimatePresence } from 'framer-motion';
import { smoothTransition } from '../constants/motion';
import { AreaCard, AreaContentWrapper, SubAreasGrid, SubAreaItem } from '../styles/solutionsStyles';

export default function ExpandableArea({ area, isOpen, onToggle, totalItems }) {
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
      $totalItems={totalItems}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      aria-controls={`area-content-${area.id}`}
      aria-label={`${area.title}, ${isOpen ? 'expandida' : 'colapsada'}`}
      layout
      transition={smoothTransition}
    >
      
      <h3>
        <span className="title-card-text">{area.title}</span>
        <span className="icon-card">+</span>
      </h3>

      <p>{area.desc}</p>

      <AnimatePresence initial={false}>
        {isOpen && (
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
                  <p>{subArea.content}</p>
                </SubAreaItem>
              ))}
            </SubAreasGrid>
          </AreaContentWrapper>
        )}
      </AnimatePresence>
    </AreaCard>
  );
}
