# Plan de Desarrollo: BuilderXD

Este documento refleja el estado actual de la refactorización y desarrollo de funcionalidades del constructor de plantillas, dividido por fases estratégicas.

## Fases Completadas (Fases 1, 2 y 3) ✅
- **Centralización y Estructura:** Se refactorizaron componentes clave y se unificó la lógica del DOM (`App.tsx`, `ComponentRegistry.tsx`).
- **Motor de Renderizado (`compiler.ts`):** 
  - Se desarrolló la compilación recursiva para soportar tanto modo **HTML** puro como **MJML**.
  - Se añadieron capacidades para nuevos componentes contenedores (`wrapper`, `group`, `hero`, `flex_layout`, `grid_layout`).
- **Editor de Texto Enriquecido:** Se implementó y perfeccionó **TipTap** para que controle nativamente la edición rica (Bold, Italic, Enlaces, etc.).
  - Se configuró para uso exclusivo en los bloques **"Texto Libre" (`text`)** y **"Párrafo" (`paragraph`)**.
- **Refactorización del Inspector (`InspectorPanel.tsx`):**
  - Se unificaron los controles globales de tipografía (fuente, color, tamaño, alineación) para que funcionen armónicamente junto con el texto enriquecido, sin pisarse.
- **Limpieza de UX en el Canvas:**
  - Se removió el formato en línea obsoleto (formatRow) de la barra flotante del Canvas.
  - Se estableció un **Toolbar Flotante Global minimalista** que solo muestra: `[Mover]`, `[Duplicar]` y `[Eliminar]` para **todos** los elementos.

## Fase 4: Librerías Externas y Base de Componentes Avanzados 🔄 (En Progreso)
**Objetivo:** Extender los componentes disponibles incorporando librerías externas para visualización compleja.

- [x] Crear el esqueleto HTML para componentes de **Galería** (`gallery`) y **Carrusel/Slider** (`slider`) dentro del compilador.
- [x] Preparar las propiedades y la estructura de datos para alojar múltiples imágenes en el Inspector.
- [ ] **Pendiente:** Integrar los scripts e inicialización de la librería **Swiper.js** para darle funcionalidad real a los sliders en las vistas previas.
- [ ] **Pendiente:** Integrar los scripts de **PhotoSwipe** para los popups de las galerías interactivas.

## Fase 5: Importación Avanzada Bidireccional (MJML / HTML) 📅 (Planificada)
**Objetivo:** Permitir la lectura de código externo (MJML/HTML) y parsearlo dinámicamente de vuelta a los nodos internos (`BlockNode`) para que sean 100% editables mediante el *Drag & Drop*.

- [ ] **Mapeo de Nodos MJML:** Analizar la última versión de MJML y asegurar que cada etiqueta se traduzca correctamente a su contraparte en el Builder.
- [ ] **Soporte para Tablas:** 
  - Implementar un elemento `table` simple y nativo para el modo HTML.
  - Tratar las "tablas anidadas complejas" importadas derivándolas automáticamente a bloques `custom_html` para no quebrar el editor.
- [ ] **Exportación de Funcionalidad:** Extraer el motor de Importación/Parsing como una función utilitaria exportable (`parseTemplateToNodes`) documentada en `@docs` para integraciones externas fluidas.
- [ ] **Heurística de Renderizado Editable:** Asegurar que todos los bloques reconstruidos recuperen el atributo de edición (`data-id`, `data-prop`) para continuar construyendo encima.

## Siguientes Pasos Inmediatos
1. Terminar de inyectar las dependencias de **Swiper.js** y **PhotoSwipe** para completar formalmente la **Fase 4**.
2. Comenzar la investigación del parser para la importación avanzada de la **Fase 5**.
