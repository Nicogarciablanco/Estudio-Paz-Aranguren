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
          <p>{item.desc}</p>
        </InteractiveCard>
      ))}
    </SolutionsGrid>
  );
}
