# Plan de Refinamiento de Layout — BuilderXD
**Fecha:** 2026-06-12  
**Fuente de referencia:** `docs/preview/builderxd_mockup.png`  
**Rama de trabajo:** `dev`

---

## 1. Análisis del Mockup vs. Implementación Actual

### 1.1 Panel Izquierdo (Components + Outline)

| Aspecto | Mockup | Estado Actual | Brecha |
|---|---|---|---|
| Layout de componentes | **Grid 2 columnas**, iconos grandes centrados, solo nombre | Lista vertical con icono + nombre + descripción | ❌ Layout incorrecto |
| Iconos de componentes | Iconos oversized (≥ 40px) dentro de celdas cuadradas con borde | Iconos 18px en tarjeta horizontal | ❌ Tamaño y forma incorrecta |
| Outline/Layers | Árbol con indentación, íconos de tipo, collapse/expand | Árbol básico sin collapse de grupos | ⚠️ Parcial |
| Tabs de panel | Dos iconos de pestaña en la barra lateral izquierda (components / layers / assets) | Sin tabs laterales | ❌ Falta |
| Sección "Design" en Outline | Nodo raíz colapsable "Design" + "Layers" | Solo Layers plano | ❌ Falta agrupación |

### 1.2 Canvas Central

| Aspecto | Mockup | Estado Actual | Brecha |
|---|---|---|---|
| Etiqueta de sección | Chip flotante "Header" sobre cada sección | Sin etiquetas | ❌ Falta |
| Handles de selección | 8 puntos de control (esquinas + mitades) sobre el elemento seleccionado | Sin handles | ❌ Falta |
| Guías de alineación | Líneas guía al arrastrar | Sin guías | ❌ Falta |
| Ancho del canvas | Contenedor con padding lateral visible | Correcto | ✅ OK |

### 1.3 Panel Derecho (Inspector) — FOCO PRINCIPAL

| Control | Mockup | Estado Actual | Brecha |
|---|---|---|---|
| **Text** | Input de texto limpio con label | Input básico | ✅ OK |
| **Font** | Custom dropdown con preview de tipografía "Abbaft" | ❌ No existe (solo fontSize text) | ❌ Falta selector de fuente |
| **Size** | Input numérico con ícono de alineación izquierda + stepper | Solo input de texto libre | ⚠️ Sin stepper |
| **Color** | Swatch cuadrado clicable con gradiente visible + popover | `<input type="color">` nativo | ❌ Reemplazar |
| **Background** | Swatch cuadrado con color de fondo | `<input type="color">` nativo | ❌ Reemplazar |
| **Border Radius** | Slider horizontal + valor numérico editable | Range input básico | ⚠️ Mejorar |
| **Padding** | Slider horizontal + valor numérico editable | Input de texto libre | ❌ Sin slider |
| **Align** | Botones de icono (L / C / R / J) agrupados | `<select>` nativo | ❌ Reemplazar |
| **Font Weight** | No visible en mockup pero necesario | Ausente | ❌ Falta |
| **Line Height** | No visible en mockup pero necesario | Ausente | ❌ Falta |
| **Date picker** | Custom calendar picker (no nativo) | Input de texto libre `YYYY-MM-DD` | ❌ Reemplazar |
| **Preview button** | Botón con estilos del elemento seleccionado | Ausente | ❌ Falta |

### 1.4 Panel Inferior (Code Drawer)

| Aspecto | Mockup | Estado Actual | Brecha |
|---|---|---|---|
| Numeración de líneas | Visible en el editor de código | Sin números de línea | ❌ Falta |
| Tabs MJML / HTML | Presentes | Presentes (side by side) | ⚠️ Diferente layout |
| Resaltado de sintaxis | Colores de sintaxis | Texto plano mono | ❌ Falta |

---

## 2. Widgets Personalizados — Panel Derecho

### Regla global
> ❌ **Prohibido usar `<select>` nativo, `<input type="date">` nativo, ni `<input type="color">` sin wrapper.**  
> ✅ Todos los controles deben ser componentes React personalizados con estética coherente al tema.

---

### 2.1 `<CustomSelect>` — Dropdown personalizado

**Reemplaza:** todos los `<select>` de align, fontWeight, borderStyle, etc.

```
Diseño:
┌────────────────────────────────────┐
│ Abbaft                           ▾ │  ← trigger button
└────────────────────────────────────┘
       ▼ abierto
┌────────────────────────────────────┐
│ ✓ Abbaft                           │  ← item activo
│   Inter                            │
│   Roboto                           │
│   Georgia                          │
└────────────────────────────────────┘
```

**Props:**
```ts
interface CustomSelectProps {
  value: string;
  options: { label: string; value: string; preview?: string }[];
  onChange: (value: string) => void;
  disabled?: boolean;
  renderOption?: (opt) => ReactNode; // para preview de fuentes
}
```

**Comportamiento:**
- `popover` posicionado con `position: absolute`, no portal (para evitar overflow)
- Cierra con Escape o click fuera (useClickOutside)
- Navegación con teclado (↑↓ Enter)
- Si `renderOption` presente → muestra preview de fuente

---

### 2.2 `<ColorPicker>` — Swatch + Popover

**Reemplaza:** `<input type="color">` nativo en todos los campos de color.

```
Trigger:
┌────┬─────────────────────────────┐
│ ██ │  #4F46E5                    │  ← swatch + hex input
└────┴─────────────────────────────┘

Popover (click en swatch):
┌────────────────────────────────────┐
│  ┌──────────────────────────────┐  │
│  │    Gradiente Saturation/Hue  │  │  ← canvas 2D
│  └──────────────────────────────┘  │
│  ████████████████  ← Hue bar       │
│  ░░░░░░░░░░░░░░░░  ← Alpha bar     │
│  HEX [#4F46E5   ]  R[79] G[70] B[229] │
│  ┌─┬─┬─┬─┬─┬─┬─┐ ← Swatches recientes │
│  └─┴─┴─┴─┴─┴─┴─┘                  │
└────────────────────────────────────┘
```

**Props:**
```ts
interface ColorPickerProps {
  value: string;           // hex o rgba
  onChange: (hex: string) => void;
  allowAlpha?: boolean;    // mostrar canal alpha
  presets?: string[];      // colores rápidos
  disabled?: boolean;
}
```

**Implementación:** Canvas 2D puro sin librerías externas. El canvas renderiza el cuadrado HSV y barras deslizantes para Hue y Alpha.

---

### 2.3 `<AlignButtonGroup>` — Alineación por iconos

**Reemplaza:** `<select>` de align en text, image, button, social, video.

```
┌──────────────────────────────────┐
│  [≡L]  [≡C]  [≡R]  [≡J]        │
└──────────────────────────────────┘
     ↑      ↑
  activo  hover
```

**Props:**
```ts
interface AlignButtonGroupProps {
  value: 'left' | 'center' | 'right' | 'justify';
  options?: Array<'left' | 'center' | 'right' | 'justify'>;
  onChange: (align: string) => void;
  disabled?: boolean;
}
```

**Implementación:**
- 3 o 4 botones inline con iconos `AlignLeft`, `AlignCenter`, `AlignRight`, `AlignJustify` de lucide-react
- Botón activo: fondo `bg-primary`, texto blanco
- Botón inactivo: `bg-bg-hover`, borde sutil

---

### 2.4 `<NumberStepper>` — Input numérico con +/-

**Reemplaza:** campos de texto libre para `fontSize`, `height`, `thickness`.

```
┌──────────────────────────────────┐
│  [−]  16  [+]   px              │
└──────────────────────────────────┘
```

**Props:**
```ts
interface NumberStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;           // 'px', '%', 'em'
  disabled?: boolean;
}
```

---

### 2.5 `<SliderWithInput>` — Slider + valor editable

**Reemplaza:** todos los range inputs básicos (Border Radius, Padding, Opacity).

```
┌────────────────────────────┬──────┐
│  ━━━━━━━━●━━━━━━━━━━━━━━   │  8   │
└────────────────────────────┴──────┘
```

**Props:**
```ts
interface SliderWithInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  disabled?: boolean;
}
```

**Nota:** El input numérico a la derecha es editable directamente (click → tipear).

---

### 2.6 `<PaddingEditor>` — Control de padding 4 lados

**Reemplaza:** texto libre `"10px 20px"` para padding.

```
         [ Top: 10  ]
[Left: 20]  🔗  [Right: 20]   ← 🔗 = link para igualar todos
         [Bottom: 10 ]
```

**Modos:**
- **Linked** (icono 🔗 activo): mismo valor en los 4 lados
- **Independent**: cada lado se edita por separado

**Props:**
```ts
interface PaddingEditorProps {
  value: string;          // "10px 20px" o "10px 20px 10px 20px"
  onChange: (value: string) => void;
  disabled?: boolean;
}
```

---

### 2.7 `<FontFamilyPicker>` — Selector de tipografía con preview

**Reemplaza:** campo de texto libre para fuente.

```
┌──────────────────────────────────┐
│  Inter (sans-serif)            ▾ │
└──────────────────────────────────┘
       ▼ abierto
┌──────────────────────────────────┐
│ [Buscar fuente...]               │
│──────────────────────────────────│
│ Web-safe                         │
│  Arial     ← (en Arial)          │
│  Georgia   ← (en Georgia)        │
│  Verdana   ← (en Verdana)        │
│──────────────────────────────────│
│ Google Fonts (top 20)            │
│  Inter     ← (en Inter)          │
│  Roboto    ← (en Roboto)         │
│  Outfit    ← (en Outfit)         │
└──────────────────────────────────┘
```

**Fuentes incluidas:**
```ts
const WEB_SAFE_FONTS = ['Arial','Georgia','Verdana','Tahoma','Times New Roman','Courier New','Trebuchet MS'];
const GOOGLE_FONTS = ['Inter','Roboto','Outfit','Poppins','Lato','Montserrat','Open Sans','Nunito','Raleway','Playfair Display'];
```

---

### 2.8 `<DateTimePicker>` — Selector de fecha/hora personalizado

**Reemplaza:** `<input type="date">` nativo (prohibido) para el componente Countdown.

```
┌────────────────────────────────────┐
│  📅  2026-12-31  18:00           │  ← trigger
└────────────────────────────────────┘
       ▼ abierto
┌────────────────────────────────────┐
│  ‹ Junio 2026 ›                    │
│  L   M   X   J   V   S   D        │
│  1   2   3   4   5   6   7        │
│  8   9  10  11  12  13  14        │
│ 15  16  17  18  19  20  21        │
│ 22  23  24  25  26  27  28        │
│ 29  30  [31]                       │ ← día seleccionado resaltado
│────────────────────────────────────│
│  Hora: [18] : [00] : [00]         │
│  [Confirmar]  [Limpiar]           │
└────────────────────────────────────┘
```

**Props:**
```ts
interface DateTimePickerProps {
  value: string;          // ISO: "2026-12-31T18:00:00"
  onChange: (value: string) => void;
  showTime?: boolean;
  minDate?: string;
  disabled?: boolean;
}
```

---

### 2.9 `<VisibilityToggle>` — Control de visibilidad responsive

**Nuevo widget** para controlar `hide-on-mobile` / `hide-on-desktop`.

```
┌───────────────────────────────────────┐
│  Visibilidad                          │
│  [🖥 Desktop  ON ]  [📱 Mobile  ON ]  │
└───────────────────────────────────────┘
```

**Props:**
```ts
interface VisibilityToggleProps {
  desktop: boolean;
  mobile: boolean;
  onChange: (desktop: boolean, mobile: boolean) => void;
}
```

---

### 2.10 `<LinkInput>` — Campo de URL con preview + tipo de link

**Reemplaza:** input de texto libre para URL en botones e imágenes.

```
┌────────────────────────────────────┐
│  🔗  https://example.com          │ ← input
│  [Web URL] [Email] [Tel] [Anchor] │ ← tipo de enlace
└────────────────────────────────────┘
```

---

## 3. Controles por Tipo de Bloque — Detalle Completo

### 3.1 `section`
```
SECCIÓN
├─ Background Color      → <ColorPicker>
├─ Background Image      → <LinkInput> (URL) + posición <CustomSelect>
├─ Padding               → <PaddingEditor>
├─ Max Width             → <NumberStepper unit="px" min=300 max=800>
├─ Border                → toggle + <NumberStepper> + <ColorPicker>
└─ Visibilidad           → <VisibilityToggle>
```

### 3.2 `column`
```
COLUMNA
├─ Ancho                 → <SliderWithInput min=10 max=100 unit="%">
├─ Padding               → <PaddingEditor>
├─ Background Color      → <ColorPicker>
├─ Border                → toggle + width + <ColorPicker>
└─ Alineación Vertical   → <CustomSelect> ["top","middle","bottom"]
```

### 3.3 `text`
```
TEXTO
├─ Contenido             → <textarea> con toolbar RTE básico
├─ TIPOGRAFÍA
│   ├─ Fuente            → <FontFamilyPicker>
│   ├─ Tamaño            → <NumberStepper unit="px" min=8 max=96>
│   ├─ Peso              → <CustomSelect> ["100","300","400","600","700","800","900"]
│   ├─ Altura de línea   → <NumberStepper min=1 max=3 step=0.1>
│   ├─ Espacio letras    → <NumberStepper unit="em" min=0 max=1 step=0.05>
│   └─ Transformación    → botones [Aa] [AA] [aa] (none/uppercase/lowercase)
├─ COLOR
│   ├─ Color del texto   → <ColorPicker>
│   └─ Color de fondo    → <ColorPicker>
├─ ALINEACIÓN
│   └─ Alineación        → <AlignButtonGroup> [L][C][R][J]
└─ ESPACIADO
    └─ Padding           → <PaddingEditor>
```

### 3.4 `image`
```
IMAGEN
├─ URL de imagen         → <LinkInput type="url"> + botón "Subir"
├─ Texto alternativo     → <input text>
├─ URL de destino        → <LinkInput>
├─ DIMENSIONES
│   ├─ Ancho máximo      → <NumberStepper unit="px" min=50 max=800>
│   └─ Alto              → <NumberStepper unit="px" min=0> (0 = auto)
├─ Alineación            → <AlignButtonGroup> [L][C][R]
├─ Border Radius         → <SliderWithInput min=0 max=50 unit="px">
├─ Borde                 → toggle + width + <ColorPicker>
├─ Sombra                → toggle + preset de sombras
└─ Padding               → <PaddingEditor>
```

### 3.5 `button`
```
BOTÓN
├─ Texto del botón       → <input text>
├─ URL destino           → <LinkInput>
├─ ESTILO
│   ├─ Color de fondo    → <ColorPicker>
│   ├─ Color de texto    → <ColorPicker>
│   ├─ Borde             → toggle + <ColorPicker> + <NumberStepper>
│   ├─ Border Radius     → <SliderWithInput min=0 max=50 unit="px">
│   └─ Variante          → <CustomSelect> ["filled","outlined","ghost"]
├─ TIPOGRAFÍA
│   ├─ Fuente            → <FontFamilyPicker>
│   ├─ Tamaño            → <NumberStepper unit="px" min=10 max=32>
│   └─ Peso              → <CustomSelect> ["400","600","700"]
├─ Alineación            → <AlignButtonGroup> [L][C][R]
├─ Padding               → <PaddingEditor>
└─ Preview               → Botón visual live con los estilos aplicados
```

### 3.6 `divider`
```
DIVISOR
├─ Color                 → <ColorPicker>
├─ Grosor (thickness)    → <NumberStepper unit="px" min=1 max=20>
├─ Estilo               → <CustomSelect> ["solid","dashed","dotted","double"]
├─ Ancho                 → <SliderWithInput min=10 max=100 unit="%">
└─ Padding               → <PaddingEditor>
```

### 3.7 `spacer`
```
ESPACIADOR
└─ Alto                  → <SliderWithInput min=5 max=200 unit="px">
```

### 3.8 `social`
```
REDES SOCIALES
├─ REDES
│   └─ Lista editable de redes:
│       [Facebook]  URL: [___________]  [🗑]
│       [Twitter]   URL: [___________]  [🗑]
│       [Instagram] URL: [___________]  [🗑]
│       [+ Agregar red]
├─ Tamaño de iconos      → <NumberStepper unit="px" min=16 max=64>
├─ Espaciado entre       → <NumberStepper unit="px" min=4 max=32>
├─ Alineación            → <AlignButtonGroup>
└─ Padding               → <PaddingEditor>
```

### 3.9 `video`
```
VÍDEO
├─ URL de miniatura      → <LinkInput> + botón "Subir"
├─ URL del vídeo         → <LinkInput> (YouTube / Vimeo / directo)
├─ Texto de botón play   → <input text> (ej. "▶ Ver vídeo")
├─ Alineación            → <AlignButtonGroup>
└─ Padding               → <PaddingEditor>
```

### 3.10 `custom_html`
```
HTML PERSONALIZADO
├─ Código HTML           → <MonacoLite> (editor con resaltado de sintaxis simple)
└─ Vista previa          → toggle para ver render vs. código
```

### 3.11 `countdown`
```
CONTADOR REGRESIVO
├─ Fecha y hora límite   → <DateTimePicker showTime>
├─ ETIQUETAS (editables)
│   ├─ Días              → <input text> default "días"
│   ├─ Horas             → <input text> default "horas"
│   ├─ Minutos           → <input text> default "mins"
│   └─ Segundos          → <input text> default "segs"
├─ Color de fondo celdas → <ColorPicker>
├─ Color del texto       → <ColorPicker>
├─ Border Radius celdas  → <NumberStepper unit="px">
├─ Alineación            → <AlignButtonGroup>
└─ Padding               → <PaddingEditor>
```

### 3.12 `accordion`
```
ACORDEÓN
├─ Items (lista dinámica)
│   Item 1:
│   ├─ Título            → <input text>
│   └─ Contenido         → <textarea>
│   [+ Agregar item]
├─ Color encabezado      → <ColorPicker>
├─ Color fondo           → <ColorPicker>
├─ Border Radius         → <NumberStepper unit="px">
└─ Padding               → <PaddingEditor>
```

### 3.13 `carousel`
```
CARRUSEL
├─ Imágenes (lista dinámica)
│   [────IMG 1────]  URL: [___]  Alt: [___]  [🗑]
│   [────IMG 2────]  URL: [___]  Alt: [___]  [🗑]
│   [+ Agregar imagen]
├─ Mostrar puntos        → toggle
├─ Mostrar flechas       → toggle
├─ Autoplay              → toggle + delay <NumberStepper unit="s">
└─ Padding               → <PaddingEditor>
```

---

## 4. Elementos Arrastrables Faltantes

### 4.1 Especificados en `docs/initial.md` pero no implementados

| Bloque | Estado | Prioridad |
|---|---|---|
| **Icono** (`icon`) | ❌ Falta | 🔴 Alta |
| **Menú de navegación** (`nav_menu`) | ❌ Falta | 🔴 Alta |
| **Imagen + Texto** (`image_text`) | ❌ Falta | 🔴 Alta |

### 4.2 Nuevos elementos sugeridos

| Bloque | Descripción | Prioridad |
|---|---|---|
| **Tarjeta de Producto** (`product_card`) | Imagen + nombre + precio + botón CTA. Ideal para e-commerce | 🔴 Alta |
| **Testimonial / Cita** (`quote`) | Bloque de cita con avatar, texto y autor | 🔴 Alta |
| **Tabla** (`table`) | Tabla HTML de datos (precios, features, pedidos) | 🟡 Media |
| **GIF Animado** (`gif`) | Variante de imagen optimizada para GIFs (loop, width) | 🟡 Media |
| **Código QR** (`qrcode`) | Genera QR code en base a una URL — útil para mobile | 🟡 Media |
| **Barra de Progreso** (`progress_bar`) | Métrica visual: "80% completado", "Quedan 3 días" | 🟡 Media |
| **Rating / Estrellas** (`rating`) | ★★★★☆ para encuestas NPS o reviews | 🟡 Media |
| **Encuesta / Poll** (`survey`) | Pregunta de opción múltiple inline en email | 🟠 Baja |
| **Footer Preset** (`footer_preset`) | Footer pre-armado: logo + links + unsubscribe + copyright | 🟠 Baja |
| **Hero Preset** (`hero_preset`) | Sección hero: background image + título + subtítulo + CTA | 🟠 Baja |
| **Columnas Preset** (`columns_preset`) | Layouts rápidos: 1/2-1/2, 1/3-2/3, 1/3-1/3-1/3, etc. | 🟠 Baja |
| **Merge Tag** (`merge_tag`) | Token de personalización: `{{NOMBRE}}`, `{{EMPRESA}}` | 🟠 Baja |

---

### 4.3 Fichas de los 3 elementos de prioridad alta

#### `icon` — Bloque de Icono

**Inspector:**
```
ICONO
├─ Biblioteca de iconos  → grid de iconos (lucide/heroicons) con buscador
├─ Tamaño                → <NumberStepper unit="px" min=16 max=128>
├─ Color                 → <ColorPicker>
├─ URL de destino        → <LinkInput>
└─ Alineación            → <AlignButtonGroup>
```

**HTML compilado:**
```html
<div style="text-align: center; padding: 10px 20px;">
  <a href="{{url}}" style="text-decoration: none; color: {{color}};">
    <svg>...</svg>
  </a>
</div>
```

---

#### `nav_menu` — Menú de Navegación

**Inspector:**
```
MENÚ DE NAVEGACIÓN
├─ Items (lista dinámica)
│   Inicio   → URL [___]  [🗑]
│   Sobre    → URL [___]  [🗑]
│   Contacto → URL [___]  [🗑]
│   [+ Agregar ítem]
├─ Color de texto        → <ColorPicker>
├─ Color de fondo        → <ColorPicker>
├─ Fuente                → <FontFamilyPicker>
├─ Tamaño                → <NumberStepper unit="px">
├─ Alineación            → <AlignButtonGroup>
├─ Separador             → <input text> (ej. " | ")
└─ Padding               → <PaddingEditor>
```

---

#### `image_text` — Imagen + Texto (dos columnas)

**Inspector:**
```
IMAGEN + TEXTO
├─ IMAGEN
│   ├─ URL               → <LinkInput> + botón "Subir"
│   ├─ Posición          → <CustomSelect> ["izquierda","derecha"]
│   └─ Ancho %           → <SliderWithInput min=20 max=80 unit="%">
├─ TEXTO
│   ├─ Contenido         → <textarea>
│   ├─ Fuente            → <FontFamilyPicker>
│   ├─ Tamaño            → <NumberStepper unit="px">
│   └─ Color             → <ColorPicker>
└─ Padding               → <PaddingEditor>
```

---

## 5. Refinamientos de Layout General

### 5.1 Panel Izquierdo — Cambios de Layout

```
ACTUAL (lista):                    OBJETIVO (grid 2 cols):
┌──────────────────────┐           ┌──────────┬──────────┐
│ [T] Text             │           │    T     │   IMG    │
│ [IMG] Image          │           │   Text   │  Image   │
│ [BTN] Button         │     →     ├──────────┼──────────┤
│ [▶] Video            │           │   BTN    │    ▶     │
│ ...                  │           │  Button  │  Video   │
└──────────────────────┘           └──────────┴──────────┘
```

- Icono grande centrado en celda cuadrada (60×60px)
- Solo nombre debajo del icono
- Hover: borde primario + fondo sutil
- Drag handle visible al hover

### 5.2 Tabs de Panel Izquierdo (barra lateral de íconos)

```
│ ● │   ← tab activo (components)
│ ◼ │   ← layers
│ ◉ │   ← assets/media
│   │
│ ⚙ │   ← settings (abajo)
```

Estructura: barra estrecha (44px) de íconos a la izquierda del panel.

### 5.3 Etiquetas de Sección en Canvas

Chips flotantes posicionados en `position: absolute` sobre cada sección:
```
    [Header]           ← chip sobre sección
┌─────────────────┐
│  GLOBAL         │
│  ADVENTURES     │
└─────────────────┘
    [Hero Section]
┌─────────────────┐
│  imagen hero    │
└─────────────────┘
```

### 5.4 Handles de Selección en Canvas

8 puntos de control SVG sobre el elemento seleccionado:
```
◼─────────◼─────────◼
│                   │
◼     Elemento      ◼
│     Seleccionado  │
◼─────────◼─────────◼
```

Implementación: overlay `div` con `pointer-events` calculado sobre el `boundingClientRect` del elemento en el iframe via `postMessage`.

---

## 6. Orden de Implementación Recomendado

### Fase 1 — Widgets Core del Inspector (semana actual)
1. `<ColorPicker>` con canvas HSV + hex input
2. `<AlignButtonGroup>` reemplazando todos los `<select>` de align
3. `<NumberStepper>` para fontSize, height, thickness
4. `<SliderWithInput>` con valor editable para borderRadius, padding, opacity
5. `<PaddingEditor>` con modo linked/independent
6. `<CustomSelect>` genérico para borderStyle, fontWeight, etc.
7. `<FontFamilyPicker>` con web-safe + Google Fonts top 20
8. `<DateTimePicker>` para countdown (calendar + time picker)
9. `<LinkInput>` con tipos de URL
10. `<VisibilityToggle>` para hide-on-device

### Fase 2 — Layout del Panel Izquierdo
11. Migrar components a grid 2 columnas
12. Añadir tabs laterales (icons sidebar)
13. Ampliar layers tree con collapse/expand

### Fase 3 — Nuevos Bloques
14. `icon` block
15. `nav_menu` block
16. `image_text` block
17. `product_card` block
18. `quote` block

### Fase 4 — Canvas Enhancements
19. Etiquetas de sección flotantes
20. Handles de selección (8 puntos)
21. Líneas guía de alineación

### Fase 5 — Code Drawer Upgrade
22. Numeración de líneas en editor de código
23. Resaltado de sintaxis (tokenizer simple regex)
24. Tabs MJML / HTML separados en lugar de side-by-side

---

## 7. Convenciones de Código para los Nuevos Widgets

```
src/
  components/
    inspector/
      ColorPicker.tsx
      AlignButtonGroup.tsx
      NumberStepper.tsx
      SliderWithInput.tsx
      PaddingEditor.tsx
      CustomSelect.tsx
      FontFamilyPicker.tsx
      DateTimePicker.tsx
      LinkInput.tsx
      VisibilityToggle.tsx
    blocks/
      IconBlock.tsx
      NavMenuBlock.tsx
      ImageTextBlock.tsx
      ProductCardBlock.tsx
      QuoteBlock.tsx
```

Todos los widgets deben:
- Aceptar `disabled` prop
- Soportar temas claro/oscuro via CSS variables
- No usar librerías externas (solo React + lucide-react)
- Exportar su interfaz TypeScript desde `src/types.ts`
- Tener id único en cada elemento interactivo para accesibilidad

---

*Plan generado el 2026-06-12. Rama: `dev`.*
