// Componente de interfaz del proyecto. Archivo: src/pages/Ugc/sections/Solutions/Solutions.jsx
import React from 'react';
import { staggerContainer, staggerItem } from '../../../../utils/animations';
import { ugcSolutions } from './data/solutionsData';
import { InteractiveCard, SolutionsGrid } from './styles/solutionsStyles';

export default function Solutions() {
  return (
    <SolutionsGrid
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {ugcSolutions.map((item, idx) => (
        <InteractiveCard key={idx} variants={staggerItem}>
          <h3>{item.title}</h3>
          {item.services && item.services.length > 0 && (
            <ul className="services-list">
              {item.services.map((service, i) => (
                <li key={i}>{service}</li>
              ))}
            </ul>
          )}
        </InteractiveCard>
      ))}
    </SolutionsGrid>
  );
}

