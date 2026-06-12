```jsx
<BuilderXD
  /* ---------- MODALIDAD DE EDICIÓN ---------- */
  mode="mjml" // "mjml" | "html" (obligatorio)

  /* ---------- PLANTILLA INICIAL ---------- */
  initialTemplate="<mjml>...</mjml>"

  /* ---------- SELECTOR RESPONSIVE ---------- */
  responsive="desktop" // "desktop" | "mobile"

  /* ---------- CALLBACKS ---------- */
  onSave={(templateData) => {}}
  onExport={(exportData) => {}}
  onTemplateChange={(mjml, html) => {}}

  /* ---------- GESTORES DE ARCHIVOS EXTERNOS ---------- */
  fileManagerProviders={[
    {
      id: 'google-drive',
      name: 'Google Drive',
      icon: 'google-drive',
      authType: 'oauth',
      onAuth: async () => {},
      onBrowse: async (path) => {},
      onUpload: async (file, path) => {}
    }
  ]}

  /* ---------- INTEGRACIONES CON ESPs ---------- */
  espIntegrations={[
    {
      id: 'mailchimp',
      name: 'Mailchimp',
      onPush: async (html, mjml) => {},
      onPull: async (templateId) => {}
    }
  ]}

  /* ---------- PERSONALIZACIÓN VISUAL ---------- */
  theme={{ primaryColor: '#4F46E5', borderRadius: 8, darkMode: false }}

  /* ---------- OTROS ---------- */
  locale="es"
  readOnly={false}
/>
```

```
CARACTERÍSTICAS INTERNAS DE <BuilderXD />

1. LIENZO EN IFRAME SANDBOXED
- La vista previa se renderiza dentro de un <iframe> con sandbox="allow-same-origin".
- Comunicación vía postMessage para inyectar estilos, capturar eventos de clic/selección y aplicar ediciones en caliente sin refrescos completos.
- Doble buffer: el HTML modificado se construye fuera de pantalla y se reemplaza atómicamente, evitando parpadeos.
- Compilación MJML en Web Worker dedicado para no bloquear el hilo principal.

2. FLUIDEZ EN PLANTILLAS COMPLEJAS Y EXTENSAS
- Partial update del iframe: al editar un elemento solo se repinta la sección afectada, usando un Virtual DOM ligero que difunde cambios mínimos sobre el DOM real.
- Lazy rendering de elementos fuera del viewport dentro del iframe, incluyendo imágenes diferidas.
- Drag & drop optimizado: los elementos arrastrables se mueven como fantasmas en la capa principal y la inserción real se ejecuta al soltar, minimizando repintados.
- Panel de capas con windowing virtualizado para árboles de cientos de elementos.
- Historial de deshacer/rehacer basado en diffs estructurales (no snapshots completos), comprimiendo memoria.
- Respuesta de edición < 50ms incluso en plantillas de 500+ elementos.

3. SELECTOR RESPONSIVE
- Control de segmentos en la barra superior: Escritorio (monitor) / Móvil (smartphone).
- Al conmutar a "mobile", el iframe se ajusta a 375px de ancho y aplica visibilidad condicional, apilado de columnas y propiedades móviles específicas.
- Panel de propiedades con pestaña "Mobile" que permite sobrescribir fuentes, paddings y visibilidad sin afectar la vista de escritorio.

4. PANELES Y HERRAMIENTAS
- Panel izquierdo plegable: componentes arrastrables con miniaturas y búsqueda.
- Panel derecho: propiedades contextuales dinámicas (según elemento seleccionado) + pestaña de ajustes responsive.
- Panel inferior colapsable: árbol de capas, historial de versiones, consola de errores MJML.
- Barra superior: botones deshacer/rehacer, selector responsive, importar, exportar, envío de prueba, acceso a gestores de archivos y ESPs.
- Modo oscuro/claro según prop o preferencia del sistema.

5. IMPORTACIÓN MULTIFUENTE
- Desde prop initialTemplate (string).
- Desde archivo local arrastrado (.mjml, .html, .zip).
- Desde portapapeles (pegar código).
- Desde URL remota.
- Desde gestores de archivos conectados (fileManagerProviders).
- Desde ESPs conectados (espIntegrations), con conversión automática de formato si el modo no coincide.

6. EXPORTACIÓN
- Formatos: MJML, HTML inline, HTML con estilos en head, ZIP (HTML + imágenes).
- Envío directo a ESP como plantilla (onPush).

7. COMPONENTES DRAG & DROP DISPONIBLES
Texto enriquecido, Imagen, Botón, Divisor, Espaciador, Redes sociales, Menú de navegación, Imagen+Texto, Vídeo, HTML personalizado, Carrusel de imágenes, Contador regresivo, Acordeón, Icono. Cada uno con propiedades completas de estilo, enlace, condiciones de visibilidad responsive y merge tags para personalización.

8. API IMPERATIVA VÍA REF
- undo() / redo()
- getCode(): { mjml?: string, html: string, mode: string }
- setCode(code: string, mode: 'mjml' | 'html')
- exportTemplate(format: 'mjml' | 'html' | 'zip'): Promise<Blob | string>
- sendTest(emailAddresses: string[]): void
```