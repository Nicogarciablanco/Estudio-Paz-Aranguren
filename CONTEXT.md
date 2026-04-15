# Contexto del Proyecto: Frontend Estudio Jurídico Paz Aranguren

Este archivo documenta todas las decisiones técnicas, arquitectónicas y de diseño implementadas hasta la fecha para permitir que cualquier instancia futura retome el desarrollo exactamente donde se dejó.

## 1. Stack Técnico
- **Framework:** React 19 + Vite 8
- **Lenguaje:** JavaScript puro (`.jsx`), sin TypeScript.
- **Estilos:** Styled Components
- **Animaciones:** Framer Motion
- **Enrutamiento:** React Router DOM (v6/v7)
- **Tipografías:** Fontsource (`@fontsource/playfair-display` y `@fontsource/montserrat`)

## 2. Decisiones de Diseño (UX/UI Boutique)
Estética minimalista, editorial, elegante, con amplio uso del espacio negativo.

**Paleta de Colores:**
- Fondo Principal: `#F2F2F0` (Blanco hueso)
- Texto Principal: `#0A0A0A` (Negro puro)
- Acento: `#96815E` (Dorado/Habano sutil)
- Gris Secundario: `#4D4D4D`
- *[Agregado UX]* Beige Claro: `#E6E1D6` (Para descansos visuales)
- *[Agregado UX]* Beige Muted: `#EFEBE3` (Para fondos de tarjetas en hover/transición)

**Tipografías:**
- Títulos: *Playfair Display* (Serif)
- Cuerpo y Botones: *Montserrat* (Sans-serif)
- *Ajuste UX:* Se aplicó un *tracking* extendido (`letter-spacing`) amplio a etiquetas, roles corporativos, enlaces de navegación y botones para dar un aspecto premium de moda/alta gama corporativa.

## 3. Arquitectura del Proyecto (Modular)
Se implementó una estructura basada en componentes y secciones específicas para lograr máxima escalabilidad. Recientemente se ejecutó una **Modularización Global** de todo el proyecto, separando rigurosamente código, estilos y datos.

```text
/src
 ├── /assets                  (Recursos gráficos)
 ├── /components
 │    ├── /layout             (Navbar, Footer, PageWrapper, cada uno con sus /styles y /data)
 │    └── /ui                 (LayoutStyles.js - Estilos base para Sections)
 ├── /pages
 │    ├── /Home
 │    │    ├── /sections      (Hero, About, Team, Solutions, Commercial - cada uno modularizado con /styles, /data, /components)
 │    │    └── Home.jsx       (Vista ensamblada Área Legal y Puente Comercial)
 │    ├── /Marketing
 │    │    ├── /sections      (Hero, Solutions - modularizados)
 │    │    └── Marketing.jsx  (Vista Comercial independiente)
 │    └── /Ugc
 │         ├── /sections      (Hero, Solutions - modularizados)
 │         └── Ugc.jsx        (Vista UGC independiente)
 ├── /styles
 │    └── GlobalStyles.js     (Variables CSS y Reset)
 ├── /utils
 │    └── animations.js       (fadeProps de Framer Motion centralizado)
 ├── /data                    (Datos globales si aplica)
 ├── App.jsx                  (Routing con <AnimatePresence> para transiciones)
 └── main.jsx                 (Root render)
```

## 4. Funcionalidades y Componentes Implementados
1. **Navegación (Navbar):** Navbar 'sticky' global que tiene dos modos (Home con anchors suavizados `#id`, e Inner con botón "Volver al Área Legal").
2. **Animaciones de Página:** Uso de `AnimatePresence` envolviendo las rutas. Transiciones tipo fade cruzado de 0.6s.
3. **Scroll Reveal Simultáneo:** Utilización del hook prop `whileInView={{ opacity: 1, y: 0 }}` en todas las secciones para que los elementos aparezcan elegantemente desplazándose hacia arriba simultáneamente (sin delay escalonado). Transiciones refinadas con curvas Bézier personalizadas (`[0.04, 0.62, 0.23, 0.98]`) para eliminar rebotes y lograr suavidad extrema.
4. **Sección "Sobre Nosotros" (Bandeo Modular):** Atraviesa el ancho completo en tono Beige Claro para cortar la verticalidad visual entre el Hero y el equipo interactivo.
5. **Tarjetas Interactivas (Home, MKT, UGC):** Incluyen transiciones `cubic-bezier`, ligera elevación eje-Y, borde acentuado e inyección de background cálido sutil (`--beige-muted`) al momento del hover.
6. **Hero Principal Rediseñado (Home):**
   - Centrado absoluto de los elementos.
   - Textos masivos: "Estudio Jurídico" asomando como Overline tipográfico en oro viejo + "Paz Aranguren" apilado y gigantesco.
   - Efecto dinámico de Background difuminado subyacente. Código listo vía modificador `::before` con `filter: blur(15px); opacity: 0.12` a la espera de la URL de la gráfica real.
7. **Modularización Integral (Separation of Concerns):** Todo el código JSX ha sido limpiado. Los estilos con `styled-components` viven en archivos `*Styles.js` y el contenido estático/configuraciones en `*Data.js`.
8. **Sección Equipo (Team):** Ajuste de renderizado de textos con `white-space: pre-line` para respetar saltos de línea (`\n`). Ajuste fino de posicionamiento de fotos (`object-position: center 20%`) para priorizar los rostros.
9. **Sección Áreas de Práctica (Solutions - Home):** Rediseño complejo de UX/UI. 
   - Se implementó una **CSS Grid Asimétrica (75% / 25%)**.
   - Siempre hay una tarjeta abierta (ocupando 3/4 de pantalla), expandida para mostrar todas sus sub-áreas apiladas verticalmente.
   - Las tarjetas inactivas se apilan como un acordeón en la columna derecha (ocupando 1/4 de pantalla).
   - "Marcas y Patentes" inicia abierta por defecto, mostrando todo su contenido.
