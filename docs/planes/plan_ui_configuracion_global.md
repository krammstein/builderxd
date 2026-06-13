# Plan de Implementación: UI de Configuración Global (Módulo `<mj-head>`)

## 1. Análisis de Experiencia de Usuario (UX)
En los constructores visuales modernos (como Webflow, Elementor o Stripo), cuando el usuario hace clic fuera del lienzo o no tiene ningún bloque seleccionado, el panel inspector lateral ("InspectorPanel") no debe quedar vacío. Ese es el espacio perfecto para alojar los **Ajustes Globales del Documento**.

**Flujo Propuesto:**
- Seleccionar bloque -> Inspector muestra propiedades del bloque.
- Deseleccionar bloque -> Inspector muestra propiedades globales (`GlobalSettings`).

## 2. Arquitectura de Estado
1. **Tipos (`src/types.ts`)**: 
   - La interfaz `GlobalSettings` ya ha sido creada.
   - `AppProps` debe actualizarse para aceptar un nuevo prop opcional: `initialGlobalSettings?: GlobalSettings`.
2. **Estado Raíz (`src/App.tsx`)**:
   - Se creará un estado local `[globalSettings, setGlobalSettings] = useState<GlobalSettings>(...)`.
   - El hook `useImperativeHandle` de `BuilderRef` se actualizará para exponer `getGlobalSettings: () => GlobalSettings` y `setGlobalSettings: (settings) => void`.
3. **Comunicación al Canvas (`src/components/Canvas.tsx`)**:
   - Pasaremos `globalSettings` al componente Canvas. 
   - El compilador en tiempo real de React (`compileToHTML`) será re-ejecutado y alimentado con este estado para que el fondo del iframe y la tipografía base cambien dinámicamente frente al usuario.

## 3. Componente `GlobalSettingsPanel.tsx`
Crearemos un nuevo sub-componente que se renderizará dentro del Inspector cuando `selectedNode === null`.

**Controles Visuales Requeridos:**
- **Título de la Página (`title`)**: `<TextInput>` simple. Afecta el tag `<title>`.
- **Pre-encabezado (`previewText`)**: `<TextArea>` o `<TextInput>`. Es el texto oculto que muestran Gmail/Outlook antes de abrir el correo.
- **Fuente Global (`globalFontFamily`)**: Usaremos nuestro widget existente `<FontFamilyPicker>`.
- **Color de Fondo Global (`globalBackgroundColor`)**: Usaremos `<ColorPicker>`.
- **Color de Texto Base (`globalTextColor`)**: Usaremos `<ColorPicker>`.
- **Punto de Quiebre (`breakpoint`)**: `<NumberStepper>` o `<TextInput>` para definir en qué pixel el layout de escritorio colapsa a móvil (por defecto 480px).

## 4. Traducciones (`src/context/LanguageContext.tsx`)
Debemos expandir el diccionario `TranslationDict` con las nuevas etiquetas de UI:
- `pageTitle`, `previewText`, `globalSettings`, `globalFont`, `globalBackground`, `globalTextColor`, `responsiveBreakpoint`.

## 5. Fases de Ejecución Inmediata
1. **Fase A**: Expandir los diccionarios (`LanguageContext` y `types.ts`).
2. **Fase B**: Crear el componente `GlobalSettingsPanel.tsx`.
3. **Fase C**: Actualizar `InspectorPanel.tsx` para alojarlo cuando no hay nodo.
4. **Fase D**: Conectar el estado en `App.tsx` (BuilderXD) y pasarlo al `Canvas` para el re-render en vivo.

Este plan asegura que todo lo que probamos matemáticamente en la sesión de pruebas (Vitest) ahora cobre vida interactiva para el usuario.
