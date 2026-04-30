// Componente de interfaz del proyecto. Archivo: src/pages/Home/sections/Solutions/components/SubAreaCollapsible/SubAreaCollapsible.jsx
import { useLayoutEffect, useRef, useState } from 'react';
import { smoothTransition } from '../../constants/motion';
import {
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from './styles/subAreaStyles';

export default function SubAreaCollapsible({ subArea, initiallyOpen = false }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [contentMaxHeight, setContentMaxHeight] = useState(0);
  const contentRef = useRef(null);
  const contentId = subArea.contentId;
  const hasTitle = Boolean(subArea.title?.trim());

  useLayoutEffect(() => {
    if (!contentRef.current) {
      return;
    }

    if (isOpen) {
      setContentMaxHeight(contentRef.current.scrollHeight);
      return;
    }

    setContentMaxHeight(0);
  }, [isOpen, subArea.description, subArea.items]);

  if (!hasTitle) {
    return (
      <AccordionItem $isLast={subArea.isLast}>
        <AccordionContent id={contentId} $isStaticContent>
          {subArea.description && <p className="accordion-description">{subArea.description}</p>}
          <ul>
            {(subArea.items ?? []).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <AccordionItem $isLast={subArea.isLast}>
      <AccordionHeader
        $isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        type="button"
      >
        <span className="accordion-copy">
          <span className="accordion-title-text">{subArea.title}</span>
        </span>
        <span className="icon">+</span>
      </AccordionHeader>

      <AccordionContent
        id={contentId}
        ref={contentRef}
        animate={{ opacity: isOpen ? 1 : 0, maxHeight: isOpen ? contentMaxHeight : 0 }}
        initial={false}
        transition={smoothTransition}
      >
        {subArea.description && <p className="accordion-description">{subArea.description}</p>}
        <ul>
          {(subArea.items ?? []).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
}

