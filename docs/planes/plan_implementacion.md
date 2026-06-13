# Plan de Desarrollo: BuilderXD

Este documento refleja el estado actual de la refactorización y desarrollo de funcionalidades del constructor de plantillas, dividido por fases estratégicas.

---

## ✅ Fase 1-3: Base del Editor

### Motor de Renderizado (`compiler.ts`)
- Compilación recursiva para modo **HTML** y **MJML**.
- Componentes contenedores: `wrapper`, `group`, `hero`, `flex_layout`, `grid_layout`.
- Compilación de `fontSize` en botones (HTML + MJML), default props, inspector panel, template inicial.
- Fix: referencia `isText` no definida en inline script de `compiler.ts`.

### Editor de Texto Enriquecido
- ~~**TipTap**~~ → Reemplazado por **Lexical** (Meta) — solo para bloque `text`.
- Instalados: `lexical`, `@lexical/react`, `@lexical/rich-text`, `@lexical/list`, `@lexical/link`, `@lexical/html`, `@lexical/history`, `@lexical/selection`, `@lexical/utils`, `@lexical/overflow`.
- Desinstalados: `@tiptap/react`, `@tiptap/starter-kit`, `@tiptap/extension-link`.
- Toolbar completo: B/I/U/S, listas ordenadas/no ordenadas, alineación izquierda/centro/derecha, dropdown de Google Fonts, stepper de tamaño de fuente, toggle de link, limpiar formato.
- `LexicalEditor.tsx` (nuevo) → reemplaza `RichTextEditor.tsx` (eliminado).

### InspectorPanel (`InspectorPanel.tsx`)
- Bloque `text` → `<LexicalEditor />` (toolbar integrado).
- Bloque `paragraph` → `<textarea />` simple.
- Bloque `heading` → `<textarea />` simple.
- **Controles de fuente redundantes removidos** para bloque `text` (Tipografía, Tamaño de Texto, Estilo/Formato B/I/U, Alineación, Color) — existen solo en el toolbar de Lexical. Se conservan para `heading` y `paragraph`.

### Fix: Cursor atascado en posición 0 (Lexical)
- Causa raíz: `HtmlPlugin` y `ChangePlugin` usaban refs separados → ciclo de recarga que mataba la selección.
- Fix: fusionar ambos en un solo `EditorPlugin` con un `lastHtmlRef` compartido, y comparar el HTML actual del editor contra el prop entrante antes de recargar.

### Testing
- Playwright + Chromium instalado (`@playwright/test`).
- Test `e2e/lexical-cursor.spec.ts`: selecciona bloque `text` → enfoca editor → escribe → verifica contenido y `focusOffset`.
- Script: `npm test`.

### Limpieza de UX en el Canvas
- Toolbar flotante global minimalista: `[Mover]`, `[Duplicar]`, `[Eliminar]` para todos los elementos.

---

## 🔄 Fase 4: Librerías Externas y Base de Componentes Avanzados (Postergado a v1.1+)
**Objetivo:** Extender los componentes disponibles incorporando librerías externas para visualización compleja.

- [x] Esqueleto HTML para **Galería** (`gallery`) y **Carrusel/Slider** (`slider`) en el compilador.
- [x] Preparar propiedades y estructura de datos para múltiples imágenes en el Inspector.
- [ ] **Pendiente:** Integrar scripts e inicialización de **Swiper.js** para sliders funcionales en preview.
- [ ] **Pendiente:** Integrar scripts de **PhotoSwipe** para popups de galerías interactivas.

---

## 📅 Fase 5: Importación Avanzada Bidireccional (En Progreso - v1.1+)
**Objetivo:** Parsear código externo (MJML/HTML) de vuelta a nodos internos `BlockNode` para edición vía Drag & Drop.

- [x] **Mapeo de Nodos MJML (Módulo A):** Traducir el 100% de las etiquetas estándar MJML a componentes del Builder (incluyendo wrapper, group, hero).
- [x] **Atributos Semánticos de Exportación (Módulo D):** Inyección de `data-b-type` y `data-b-props` para exportación e importación con fidelidad perfecta 1:1.
- [x] **Tests Unitarios:** Suite de Vitest cubriendo compilador y parser en modo MJML/HTML implementada con éxito.
- [x] **Configuración Global en Compilador:** Soporte matemático/lógico para configuraciones de `<mj-head>` (fuentes globales, título, preview).
- [ ] **Soporte para Tablas:** Tablas complejas encapsuladas seguras en `custom_html`.
- [ ] **UI de Configuración Global:** Panel en el Inspector para que el usuario controle el estado de la cabecera.

---

## Próximos Pasos (Post v1.0.0)
1. **Implementar UI de Configuración Global**: Panel React en el Sidebar/Inspector para editar `GlobalSettings` (`<mj-head>`).
2. Completar inyección de dependencias **Swiper.js** y **PhotoSwipe** (Fase 4).
3. Heurísticas de inferencia complejas para importación (Módulo B).
