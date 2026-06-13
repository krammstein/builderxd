# Importación de Plantillas (MJML/HTML) - BuilderXD API

El componente `BuilderXD` ofrece la capacidad de importar código fuente (ya sea en formato MJML o HTML) y convertirlo dinámicamente en bloques (`BlockNode[]`) nativos que pueden ser manipulados, editados y reorganizados mediante Drag & Drop.

## Método `importTemplate`

Se ha expuesto el método `importTemplate` a través de la referencia del componente (`ref`) usando `useImperativeHandle`.

### Firma del método
```typescript
importTemplate: (code: string, mode: 'mjml' | 'html') => void
```

### Uso desde un componente padre
Para invocar la función desde tu aplicación contenedora, debes crear un `ref` y pasarlo al componente `BuilderXD`.

```tsx
import React, { useRef } from 'react';
import { BuilderXD, BuilderRef } from 'builderxd';

export const MiEditor = () => {
  const builderRef = useRef<BuilderRef>(null);

  const cargarPlantillaExterna = () => {
    const miMjml = `
      <mjml>
        <mj-body>
          <mj-section background-color="#f0f0f0">
            <mj-column>
              <mj-text font-size="20px" color="#333">¡Hola Mundo!</mj-text>
            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>
    `;

    // Llama al método expuesto
    if (builderRef.current) {
      builderRef.current.importTemplate(miMjml, 'mjml');
    }
  };

  return (
    <div style={{ height: '100vh' }}>
      <button onClick={cargarPlantillaExterna}>Importar Plantilla</button>
      <BuilderXD ref={builderRef} defaultMode="mjml" />
    </div>
  );
};
```

### Funcionamiento de la Heurística de Conversión
El método `importTemplate` internamente utiliza el parser nativo `DOMParser` del navegador para convertir el código proporcionado en un árbol DOM de lectura. Luego, aplica las siguientes reglas de heurística:

1. **Mapeo Estándar 1:1:** Etiquetas comunes como `<mj-section>`, `<mj-column>`, `<mj-text>`, `<mj-button>`, `<mj-image>`, etc., se convierten automáticamente a sus equivalentes exactos en `BlockNode`. Los atributos inline (ej. `background-color`, `padding`) se guardan en el objeto `properties` para que el panel de Inspector los detecte sin problemas.
2. **HTML Complejo / Tablas de Correo:** Si el modo es `html` y se detecta una estructura de `<table role="presentation">` con estilos inline que no coincide con un diseño simplificado (como el que arrojan los motores de correo), el parser lo convertirá en un bloque de tipo `custom_html` para preservar la estructura visual sin romperse, permitiendo que el usuario lo mueva y edite su código, pero no sus atributos en el Inspector.
3. **Manejo de Etiquetas Desconocidas:** Cualquier etiqueta personalizada o no estandarizada será degradada elegantemente a un bloque `custom_html` manteniendo su código intacto para evitar pérdida de datos.

Este enfoque **garantiza** que todo componente estándar importado será completamente configurable desde la UI de BuilderXD, mientras encapsula lo desconocido de manera segura.
