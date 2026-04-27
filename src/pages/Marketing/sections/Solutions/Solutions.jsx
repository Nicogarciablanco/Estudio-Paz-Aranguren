// Componente de interfaz del proyecto. Archivo: src/pages/Marketing/sections/Solutions/Solutions.jsx
import React from 'react';
import { staggerContainer, staggerItem } from '../../../../utils/animations';
import { marketingSolutions } from './data/solutionsData';
import { InteractiveCard, SolutionsGrid } from './styles/solutionsStyles';

export default function Solutions() {
  return (
    <SolutionsGrid
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
    >
      {marketingSolutions.map((item, idx) => (
        <InteractiveCard key={idx} variants={staggerItem}>
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
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

