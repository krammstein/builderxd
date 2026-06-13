# Plan Detallado: Importación Avanzada Bidireccional (Fase 5)

## 1. Análisis del Estado Actual (`src/utils/parser.ts`)
Actualmente, el sistema cuenta con un parser básico (`parseTemplateToNodes`) que utiliza `DOMParser` para leer código y convertirlo en un árbol de tipo `BlockNode[]`.

**Lo que ya hace:**
- Parsea etiquetas estándar de MJML (`mj-section`, `mj-column`, `mj-text`, `mj-image`, `mj-button`, `mj-divider`, `mj-spacer`, `mj-social`, `mj-accordion`, `mj-carousel`, `mj-navbar`).
- Extrae propiedades comunes como padding, color, tamaños a través de `parseCommonStyles`.
- Tiene un *fallback* simple: si encuentra etiquetas HTML comunes de texto (`h1`, `p`, `span`), las envuelve en un nodo `text`. Si encuentra elementos estructurales (`div` con hijos, `table`), los convierte en un bloque estático de tipo `custom_html`.

**Lo que le falta:**
- **Mapeo de Nuevos Componentes**: BuilderXD tiene componentes más avanzados (`hero`, `video`, `countdown`, `quote`, `product_card`, `image_text`, `wrapper`, `group`, `slider`, `gallery`) que actualmente no son reconocidos al importar código MJML.
- **Manejo Inteligente de HTML Puro**: Los correos electrónicos estándar se basan en múltiples `<table>` anidadas. El parser actual las tira todas a `custom_html`, perdiendo la capacidad de editar la estructura (columnas, secciones) visualmente en el canvas.
- **Diferenciación de Nodos de Texto**: Trata todos los encabezados y párrafos como un bloque genérico `text`, en lugar de diferenciarlos en los nuevos bloques `heading` y `paragraph` introducidos en versiones recientes.

## 2. Objetivo Principal
Conseguir que el usuario pueda tomar **cualquier código MJML o HTML de correo electrónico**, pegarlo en la herramienta de importación, y que BuilderXD lo descomponga de manera inteligente en bloques nativos editables (Arrastrar y soltar, cambio de textos en Canvas, cambio de estilos en Inspector), minimizando el uso de cajas negras (`custom_html`).

## 3. Estrategia de Implementación

Para llevar esto a cabo, dividiremos el trabajo en 4 módulos lógicos:

### Módulo A: Completar el Mapeo de Etiquetas MJML
Actualizar el `switch` de `parseMJMLNode` para incluir todos los bloques del `BlockType`.
- **Hero**: Leer `<mj-hero>` e instanciar nodo `hero` extrayendo el `background-url`.
- **Wrapper / Group**: Leer `<mj-wrapper>` y `<mj-group>` mapeando a sus respectivos nodos anidando hijos.
- **Tablas MJML**: Parsear `<mj-table>` para convertirla en el bloque `table` de BuilderXD.

### Módulo B: Inferencia de Componentes Compuestos (Bloques Pre-fabricados)
Componentes como `product_card`, `quote`, o `image_text` se compilan como secciones o columnas estándar. Para re-importarlos, necesitamos **Heurísticas de Patrones**:
- **Patrón Quote**: Si se detecta un `<mj-section>` que contiene un `<mj-text>` con texto entre comillas y fuente itálica, sugerir importarlo como un nodo `quote`.
- **Patrón Tarjeta de Producto**: Si se detecta una columna con la secuencia `Imagen -> Título -> Precio -> Botón`, consolidarlo en un único bloque `product_card` en lugar de 4 bloques sueltos. Esto simplifica enormemente la vida del usuario final.

### Módulo C: Manejo de HTML Puro (Sin Des-tabulación Compleja)
**Decisión Estratégica**: NO vamos a soportar la "des-tabulación" de plantillas HTML antiguas hechas a base de `<table>` complejas y anidadas para convertirlas mágicamente en secciones y columnas fluidas. 
- Si un usuario importa código HTML puro con tablas anidadas pesadas, el parser lo tratará **íntegramente** como un bloque inmutable de tipo `custom_html` (o un bloque genérico `table`).
- Solo intentaremos parsear HTML semántico moderno (ej. divs con roles claros) o HTML generado por BuilderXD. Esto evitará una sobreingeniería masiva en el parser, asumiendo que el estándar de uso principal y recomendado de la plataforma es importar/exportar a través de **MJML**.

### Módulo D: Atributos Semánticos de Exportación (La Solución Definitiva)
Para garantizar una importación 100% perfecta de las plantillas que fueron *exportadas desde BuilderXD* (viaje de ida y vuelta):
- Modificar el compilador (`compiler.ts`) para inyectar opcionalmente metadatos ocultos.
- Ej: `<mj-section data-builder-type="product_card" data-builder-props="{...}">`
- El parser buscará primero si el atributo `data-builder-type` existe. Si es así, saltará la heurística y recreará el bloque con precisión milimétrica leyendo las propiedades serializadas. Si no existe (código externo de terceros), usará las heurísticas desarrolladas en el Módulo B y C.

## 4. REQUERIMIENTO CRÍTICO: 100% Compatibilidad Estándar MJML

El parser debe ser capaz de procesar **cualquier template MJML válido** y separar su contenido en los componentes arrastrables (drag & drop) que tenemos disponibles en BuilderXD.

### Análisis a Profundidad y Mapeo de Estándar MJML
A continuación, se detalla cómo el estándar MJML se traduce a nuestra librería, y qué bloques nos faltan por implementar para lograr el 100%.

**Mapeo Directo (Ya implementados o fáciles de adaptar):**
- `<mj-section>` → `section`
- `<mj-column>` → `column`
- `<mj-text>` → `text`, `heading`, `paragraph` (se requiere inferencia semántica)
- `<mj-image>` → `image`
- `<mj-button>` → `button`
- `<mj-divider>` → `divider`
- `<mj-spacer>` → `spacer`
- `<mj-social>` → `social`
- `<mj-accordion>` → `accordion`
- `<mj-carousel>` → `carousel`
- `<mj-navbar>` → `nav_menu`
- `<mj-hero>` → `hero`
- `<mj-wrapper>` → `wrapper`
- `<mj-group>` → `group`
- `<mj-table>` → `table` (Falta implementar su manejo granular en el editor)
- `<mj-raw>` → `custom_html`

**Elementos Faltantes en el Editor (A Implementar):**
Para que la importación no degrade bloques válidos a `custom_html`, necesitamos crear controles visuales en nuestro Inspector para la cabecera y configuraciones globales:
1. **Configuraciones de `<mj-head>`**: `<mj-attributes>`, `<mj-style>`, `<mj-font>`, `<mj-title>`, `<mj-preview>`, `<mj-breakpoint>`. No son bloques drag & drop, sino que requerirán un panel de "Configuración Global del Correo" en el editor.

### Excepciones Estimadas y Casos Límite (Edge Cases)

Durante el parsing de plantillas externas, pueden surgir las siguientes excepciones que impedirán una separación granular perfecta:

1. **El uso de `<mj-include>`**:
   - *Problema*: MJML permite incluir archivos externos (ej. `<mj-include path="./header.mjml" />`). El parser del navegador no tiene acceso al sistema de archivos del usuario.
   - *Solución/Excepción*: El código MJML debe ser "aplanado" (pre-procesado) antes de importarlo a BuilderXD, o el `<mj-include>` se representará como un bloque bloqueado/no-renderizable.

2. **Componentes Custom de Terceros**:
   - *Problema*: Desarrolladores pueden registrar sus propias etiquetas en MJML (ej. `<mj-my-custom-card>`).
   - *Solución/Excepción*: Cualquier etiqueta MJML no estándar o no reconocida nativamente caerá ineludiblemente en el bloque `custom_html`.

3. **Bloques `<mj-raw>` con Estructuras Complejas**:
   - *Problema*: `<mj-raw>` permite inyectar HTML arbitrario (ej. un `<form>` complejo o código Liquid/Handlebars de Mailchimp/Shopify).
   - *Solución/Excepción*: Quedarán intactos dentro del bloque `custom_html`. No intentaremos parsear lógica de plantillas backend (como `{% if %}`) hacia bloques visuales nativos.

4. **Nodos de Texto muy compuestos**:
   - *Problema*: Un `<mj-text>` masivo que en su interior contenga docenas de `divs`, `spans`, imágenes flotantes y listas.
   - *Solución/Excepción*: Si el HTML interno de `<mj-text>` es demasiado complejo para el editor `Lexical` (texto enriquecido), el parser deberá segmentarlo en múltiples bloques secuenciales, o tratarlo como `custom_html` para evitar pérdida de fidelidad visual.

## 5. Próximos Pasos de Acción
1. **Paso 1**: Implementar el panel de "Configuración Global" para capturar el `<mj-head>`.
2. **Paso 2**: Implementar el Módulo D (Atributos semánticos `data-builder-type`) para plantillas propias.
3. **Paso 3**: Implementar el Módulo A (Expandir el switch en `parser.ts` a 100% de tags MJML).
4. **Paso 4**: Implementar heurísticas de inferencia de Texto (`heading` vs `paragraph` vs `text`).
5. **Paso 5**: Manejo del fallback seguro (`custom_html` / `mj-raw`) para las excepciones listadas.
