# Plan de Implementación: Mejoras y Nuevos Elementos BuilderXD

## Fase 1: Arquitectura y Registro Dinámico (Refactor Seguro)
- Crear el sistema `ComponentRegistry` para manejar la configuración de elementos.
- Mover los componentes estáticos (hardcodeados) de `LeftPanel.tsx` al registro dinámico.
- Agregar campo `allowedModes: ['html'] | ['mjml'] | ['html', 'mjml']` en cada elemento del registro.
- Actualizar `LeftPanel.tsx` para leer los componentes desde el registro, filtrados estrictamente por el `templateMode` activo.
- *Objetivo:* No romper el JSON de guardado (se mantienen los IDs) y asegurar que HTML y MJML **nunca se mezclen**.

## Fase 2: Toolbar y Editor de Texto
- Migrar el contenido de "Texto enriquecido" a **TipTap** (`@tiptap/react`).
- Reestructurar el Toolbar flotante: hacerlo compacto, en una sola fila, alineado a la izquierda (iconos de acciones) y derecha (texto, opcional), sin traslaparse con el elemento (borde superior).
- Lógica para ocultar herramientas de texto si el elemento no las requiere (ej. "Texto Libre", "Botones").
- Eliminar opciones de tipografía y color redundantes en el panel derecho (Inspector) para dar paso al nuevo editor.

## Fase 3: Mejoras a Elementos Existentes
- **Panel de Código:** Iniciar con estado colapsado por defecto.
- **Iconos:** Añadir selector de íconos para el modo HTML.
- **Video:** 
  - Inyectar modal/botón de Storage externo vía props (ej. `<BuilderXD video={<CustomVideoModal />} />`).
  - Implementar lógica para detectar URLs (YouTube, Vimeo, TikTok, etc.) y generar sus respectivos `iframes` responsivos con máxima compatibilidad.
- **Redes Sociales:** Configuración individual (Toggle on/off, URL específica, y selector de ícono/imagen personalizada).
- **Imagen:** Evento de "Doble Clic" para abrir el Gestor de Archivos (inyectado también vía props).

## Fase 4: Nuevos Elementos Drag & Drop
- **Modo HTML:**
  - Contenedores flexibles (Flexbox) anidables.
  - Contenedores de grilla (Grid) anidables.
  - Slider de imágenes: Integración con **Swiper.js**.
  - Galerías de imágenes/videos: Implementación con CSS Grid puro para el layout (Masonry) y **react-photoswipe-gallery** para el Lightbox interactivo.
  - Secciones predefinidas configurables: Hero, FAQ, Tabla de precios, Contenedor de redes sociales, Testimoniales.
- **Modo MJML:**
  - Habilitar e integrar todos los elementos estándar de MJML (`mj-section`, `mj-column`, `mj-button`, etc.), asegurando que el modo sea 100% estricto.

## Librerías Seleccionadas (Stack)
- **Texto enriquecido:** `@tiptap/react`, `@tiptap/starter-kit`, `@tiptap/extension-link`.
- **Slider:** `swiper`.
- **Galería lightbox:** `react-photoswipe-gallery`.

---
*Nota: Este plan se diseñó para preservar la estructura actual de datos y estado (`BlockType`), garantizando que ninguna plantilla previa se rompa y que la interfaz mantenga su comportamiento.*
