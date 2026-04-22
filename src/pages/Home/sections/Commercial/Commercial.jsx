// Componente de interfaz del proyecto. Archivo: src/pages/Home/sections/Commercial/Commercial.jsx
import React from 'react';
import { fadeProps, staggerContainer, staggerItem } from '../../../../utils/animations';
import { commercialContent } from './data/commercialData';
import {
  BridgeButton,
  CommercialArea,
  CommercialDescription,
  CommercialLinks,
  CommercialTitle,
} from './styles/commercialStyles';

export default function Commercial() {
  return (
    <CommercialArea id="commercial">
      <CommercialTitle {...fadeProps}>{commercialContent.title}</CommercialTitle>
      <CommercialDescription {...fadeProps}>
        {commercialContent.description}
      </CommercialDescription>
      <CommercialLinks 
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {commercialContent.links.map((link) => (
          <BridgeButton key={link.to} to={link.to} variants={staggerItem}>
            {link.label}
          </BridgeButton>
        ))}
      </CommercialLinks>
    </CommercialArea>
  );
}

