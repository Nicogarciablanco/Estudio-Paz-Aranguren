# Documentacion Tecnica Integral

## 1. Objetivo del Proyecto
Este proyecto implementa el sitio institucional del Estudio Paz Aranguren con una arquitectura modular por pagina y seccion. El objetivo es mostrar propuesta de valor legal y comercial con una experiencia visual premium, animaciones suaves y navegacion clara entre unidades del estudio.

## 2. Stack y Herramientas
- React 19.2.4
- Vite 8.0.4
- React Router DOM 7.14.0
- Styled Components 6.3.12
- Framer Motion 12.38.0
- @fontsource/playfair-display 5.2.8
- @fontsource/montserrat 5.2.8
- ESLint 9 (flat config)

## 3. Flujo de Render
1. `index.html` monta `#root`.
2. `src/main.jsx` crea el root de React y renderiza `App` dentro de `StrictMode`.
3. `src/App.jsx` aplica estilos globales, monta `BrowserRouter` y define rutas con transiciones (`AnimatePresence`).
4. Cada ruta carga una pagina completa (`Home`, `Marketing`, `Ugc`) envuelta por `PageWrapper`.

## 4. Rutas
- `/` -> Home (area legal principal)
- `/marketing` -> Unidad comercial de marketing
- `/ugc` -> Unidad comercial de produccion UGC

## 5. Arquitectura de Carpetas
```text
src/
  App.jsx
  main.jsx
  components/
    layout/
      Navbar/
      Footer/
      PageWrapper/
    ui/
      LayoutStyles.js
  pages/
    Home/
      sections/
        Hero/
        About/
        Team/
        Solutions/
        Commercial/
    Marketing/
      sections/
        Hero/
        Solutions/
    Ugc/
      sections/
        Hero/
        Solutions/
  styles/
    GlobalStyles.js
  utils/
    animations.js
```

## 6. Patron Modular de Secciones
Cada seccion sigue este esquema:
- Componente principal JSX con logica minima.
- `styles/` con styled-components de la seccion.
- `data/` con contenido estatico para desacoplar texto de UI.
- `components/` para subcomponentes internos (si aplica).
- `constants/` para configuracion local (si aplica).

Beneficio: facilita mantenimiento, escalado y sustitucion de contenido sin tocar estructura visual.

## 7. Sistema de Diseno
### 7.1 Variables CSS Globales
Definidas en `src/styles/GlobalStyles.js`:
- `--bg-color`: fondo base
- `--light-beige`, `--beige-muted`: fondos de apoyo
- `--text-main`, `--secondary-gray`: jerarquia tipografica
- `--accent`: color de acento
- `--font-heading`: Playfair Display
- `--font-body`: Montserrat

### 7.2 Tipografia
- Titulares con serif (`Playfair Display`) para personalidad editorial.
- Cuerpo y elementos funcionales con sans (`Montserrat`) para lectura y contraste.

## 8. Animaciones
Las animaciones se centralizan en `src/utils/animations.js`:
- `fadeProps`: entrada suave de secciones.
- `staggerContainer` y `staggerItem`: aparicion escalonada de items.
- `imageRevealProps`: efecto de revelado de imagen.

En `Home/sections/Solutions` se usa ademas una transicion local (`smoothTransition`) para apertura/cierre de tarjetas.

## 9. Paginas y Responsabilidades
### 9.1 Home
Archivo: `src/pages/Home/Home.jsx`
Secciones:
- Hero
- About
- Team
- Solutions
- Commercial

### 9.2 Marketing
Archivo: `src/pages/Marketing/Marketing.jsx`
Secciones:
- Hero
- Solutions

### 9.3 Ugc
Archivo: `src/pages/Ugc/Ugc.jsx`
Secciones:
- Hero
- Solutions

## 10. Componente Solutions (Home)
Archivos:
- `src/pages/Home/sections/Solutions/Solutions.jsx`
- `src/pages/Home/sections/Solutions/components/ExpandableArea.jsx`
- `src/pages/Home/sections/Solutions/data/solutionsData.js`
- `src/pages/Home/sections/Solutions/styles/solutionsStyles.js`

Comportamiento:
- Grilla asimetrica.
- Siempre una tarjeta abierta.
- Tarjetas cerradas en columna lateral.
- Cada subarea muestra:
  - Titulo
  - Descripcion
  - Lista desordenada de puntos clave

## 11. Navbar
Archivo: `src/components/layout/Navbar/Navbar.jsx`
- Variante `home`: links con scroll interno por anclas.
- Variante `inner`: link de regreso a inicio.
- Incluye:
  - menu mobile
  - tecla `Escape`
  - focus trap para accesibilidad

## 12. Accesibilidad Actual
Implementado:
- `:focus-visible` global
- soporte `prefers-reduced-motion`
- atributos ARIA en elementos interactivos relevantes
- focus trap en menu mobile

Pendiente recomendado:
- auditoria alt text completa de imagenes
- verificacion WCAG 2.2 por contraste en todos los estados hover/focus

## 13. Convenciones de Codigo
- Componentes en PascalCase.
- Estilos por modulo en archivos `*Styles.js`.
- Datos estaticos separados en `data/*.js`.
- Logica de animacion reutilizable en `utils/animations.js`.
- Comentario de encabezado por archivo para orientacion rapida.

## 14. Como Agregar una Nueva Seccion
1. Crear carpeta de seccion en la pagina objetivo.
2. Crear componente principal `Seccion.jsx`.
3. Extraer estilos a `styles/seccionStyles.js`.
4. Extraer contenido textual a `data/contenido.js`.
5. Importar y ensamblar en la pagina padre.
6. Reutilizar `fadeProps` o stagger si hay animaciones.

## 15. Build y Despliegue
- Build: `npm run build`
- Preview local: `npm run preview`
- El resultado de build queda en `dist/`

## 16. Deuda Tecnica Observada
- Existe al menos un subcomponente potencialmente no utilizado en `Home/Solutions/components`.
- Hay oportunidades para compartir estilos entre `Marketing/Solutions` y `Ugc/Solutions`.
- El proyecto no tiene tests automaticos aun.

## 17. Roadmap Recomendado
1. Incorporar tests de componentes criticos (Navbar, Solutions).
2. Consolidar estilos repetidos de tarjetas entre secciones equivalentes.
3. Evaluar migracion gradual a TypeScript o JSDoc tipado.
4. Incorporar estrategia de contenido externo (CMS/API) si crece el volumen editorial.

## 18. Glosario Rapido
- Area legal: unidad principal del home.
- Area comercial: division de servicios Marketing + UGC.
- Seccion: bloque modular autocontenido dentro de una pagina.
- Data file: archivo JS solo de contenido estatico.
