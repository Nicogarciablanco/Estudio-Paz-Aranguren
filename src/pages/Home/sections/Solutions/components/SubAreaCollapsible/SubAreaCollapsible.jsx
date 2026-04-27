// Componente de interfaz del proyecto. Archivo: src/pages/Home/sections/Solutions/components/SubAreaCollapsible/SubAreaCollapsible.jsx
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { smoothTransition } from '../../constants/motion';
import {
  AccordionItem,
  AccordionHeader,
  AccordionContent,
} from './styles/subAreaStyles';

export default function SubAreaCollapsible({ subArea, initiallyOpen = false }) {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
    <AccordionItem>
      <AccordionHeader $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span className="accordion-title-text">{subArea.title}</span>
        <span className="icon">+</span>
      </AccordionHeader>

      <AnimatePresence initial={false}>
        {isOpen && (
          <AccordionContent
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={smoothTransition}
          >
            <p>{subArea.content}</p>
          </AccordionContent>
        )}
      </AnimatePresence>
    </AccordionItem>
  );
}

