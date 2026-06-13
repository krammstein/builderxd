# BuilderXD Skill & Integration Guide

Este documento proporciona el contexto completo para que otras Inteligencias Artificiales o desarrolladores entiendan cómo integrar, configurar e interactuar con **BuilderXD**, un constructor de plantillas de correo electrónico y landing pages (HTML y MJML) basado en React.

## 1. Arquitectura Base
- **Framework**: React 19 + TypeScript.
- **Estilos**: Tailwind CSS v4.
- **Construcción y Bundling**: Vite (Library Mode - ESM / UMD).
- **Core de Compilación**:
  - `compileToMJML`: Convierte el árbol JSON (`BlockNode[]`) a código MJML.
  - `compileToHTML`: Convierte el árbol JSON a HTML renderizable para el canvas con soporte de selección.
  - `parseTemplateToNodes`: Convierte un MJML o HTML externo a un árbol JSON (Importación).

## 2. Componente Principal (`BuilderXD`)

El componente exportado por defecto es `<BuilderXD />`, el cual envuelve el núcleo del editor en proveedores de tema e idioma y expone métodos de forma imperativa.

### 2.1 Propiedades del Componente (`AppProps`)

| Propiedad | Tipo | Descripción |
|-----------|------|-------------|
| `initialNodes` | `BlockNode[]` | (Opcional) Árbol de nodos inicial para cargar en el editor. |
| `onSave` | `(data) => void` | Callback que se ejecuta ante cualquier cambio. `data: { nodes, mjml, html }`. |
| `onExport` | `(data) => void` | Callback que se dispara al clickear el botón "Exportar". |
| `onTemplateChange` | `(mjml, html) => void` | Callback al recompilar los nodos. |
| `defaultMode` | `'mjml' \| 'html'` | Modo inicial de renderizado. Por defecto: `'mjml'`. |
| `readOnly` | `boolean` | Deshabilita toda la edición, drag & drop y controles del inspector. |
| `uiConfig` | `UIConfig` | Objeto para habilitar/deshabilitar secciones de la interfaz. |
| `fileManagerProviders` | `FileManagerProvider[]` | Array de proveedores (ej. Drive, Dropbox) para cargar imágenes. |
| `espIntegrations` | `ESPIntegration[]` | Array de integraciones (ej. Mailchimp) para Push/Pull de plantillas. |
| `theme` | `ThemeConfig` | Inyecta variables CSS personalizadas (`primaryColor`, `darkMode`, etc.). |
| `assetManagerComponent` | `ReactNode` | Componente UI personalizado inyectado en el inspector para elegir imágenes. |
| `googleFonts` | `string[]` | Lista de nombres de fuentes de Google permitidas en el editor. |

### 2.2 API Imperativa (Ref)

Se puede acceder a los métodos del editor pasando un `ref` al componente `<BuilderXD ref={builderRef} />`.
La interfaz `BuilderRef` exporta los siguientes métodos:

```typescript
interface BuilderRef {
  getNodes: () => BlockNode[];
  setNodes: (nodes: BlockNode[]) => void;
  getHTML: () => string;
  getMJML: () => string;
  toggleDarkMode: () => void;
  importTemplate: (code: string, mode: 'mjml' | 'html') => void;
  exportTemplate: (format: 'mjml' | 'html' | 'zip') => Promise<string>;
  sendTest: (emails: string[]) => void;
}
```

## 3. Estructura de Nodos (`BlockNode`)

El contenido del canvas se almacena y maneja mediante un árbol JSON de nodos del tipo `BlockNode`.

```typescript
interface BlockNode {
  id: string; // Identificador único (uuid)
  type: BlockType; // 'section', 'text', 'image', 'button', etc.
  properties: Record<string, any>; // Estilos base y contenido (Desktop/Global)
  mobileProperties?: Record<string, any>; // Estilos que se aplican solo en DeviceMode = 'mobile'
  children?: BlockNode[]; // Nodos hijos
}
```

## 4. Tipos de Bloques Disponibles (`BlockType`)
`section`, `column`, `text`, `heading`, `paragraph`, `image`, `button`, `divider`, `spacer`, `social`, `video`, `custom_html`, `countdown`, `accordion`, `carousel`, `icon`, `nav_menu`, `image_text`, `product_card`, `quote`, `table`, `wrapper`, `group`, `hero`, `slider`, `gallery`, `flex_layout`, `grid_layout`.

## 5. Notas Importantes para IA

- **Modificación de Estilos**: Usa Tailwind v4 y variables CSS locales en `src/index.css`.
- **Compilador**: Si se añade un nuevo tipo de bloque, debes actualizar `src/utils/compiler.ts` tanto en la función `compileToMJML` como en `compileToHTML`.
- **Canvas / Iframe**: La vista previa visual sucede dentro de un iframe (`Canvas.tsx`). Se utiliza un algoritmo de DOM Patching para evitar recargar el iframe (evitando parpadeos). Si un bloque tiene un `data-prop="content"`, el texto puede ser editado in-line.
- **Inspector**: Para agregar controles a un bloque nuevo, se deben añadir en `src/components/InspectorPanel.tsx`, reutilizando widgets de `src/components/inspector/` (ej. `ColorPicker`, `PaddingEditor`).
