# Ajustes al Builder

0. Por defautl el panel de Código -> collapsado.
1. Que exista la manera desde la programación de poder agregar más elementos (drag & drop) y poder definir las configuraciones (panel derecho). ¿Dudas?
1. Agregar un elemento (panel izquiero) para que se puedan usar icons (Fontawesome y otras librerias opensource) solo en **modo HTML**.
1. En el elemento (video) - en el panel derecho - Agregar un botón para poder subir un video (storage) - un modal - Con un prop algo como :`<BuilderXD video={<modal-storage-video}>` ¿Sí se entiende?

- Sí el video es de YouTube | Vimeo | TikTok | Facebook | etc => el elemento debe de poder tomar la resolución del video
- Implementación no solo con el tag "<video>" sino dependiendo de la fuente - Investigar en documentación Oficial de la red social - La mejor manera de embed el video. ¿Dudas?
- Video **responsive**
- Máxima compatibilidad con todos los navegadores y Sistemas Operativos (por ejemplo: inline)

3. Cuando se edita el elemento "Redes sociales" - agregar que se pueda configurar cada red social (Facebook, Instagram, TikTok, YouTube, Pinterestm, X, etc)

- control para (activar | desactivar) por cada red.
- Personalizar icon (Fontawesome, etc) o escoger una foto (botón) para abrir el gestor.

4. El "Toolbar" hacerlo más compacto en un solo row - derecha (herramientas para texto) opcional - izquierda (icon: duplicate, icon:trash, icon: move). Hacer que no se traslape a la vista de los elementos seleccionados (que quede al borde superior del elemento seleccionado).

5. Casos en los que **no debe de aparecer** las "Herramientas de texto":

- Elemento "Texto Libre"
- Botones

6.  Al doble click sobre una imagen => abrir el modal "Gestor de archivoss".

7.  El Gestor de archivos debe poder configurarse desde los props o usar el que viene por default.

8.  En el panel de lado derecho sí hay un "texto enriquecido" eliminar el control de la tipografía + color de fuente + alineación.

9.  Buscar una librería para reemplazar el componente de "texto enriquecido" - dame opciones.

10. Agregar los elementos (drag & drop):
    > Modo HTML:
        - Contenedor flexible (flexbox). => configurable - Que en cada columna se pueda meter cualquier elemento. (se puede hacer nesting de flexbox containers)
        - Contenedor de grid. => configurable - en la columna se puedan meter cualquier elemento. (se puede hacer nesting de grid containers).
        - Slider de imagenes - configurable - Darme opciones de liberías.
        - Galeria de imágenes - configurable (grid / flexbox / masonry) - Darme opciones de liberías.
        - Galeria de videos - configurable (grid / flexbox / masonry) - Darme opciones de liberías.
        - Sections predefinidos - configurables:
         - Hero
         - FAQ's
         - Tabla comparativa de precios
         - Contenedor de iconos (Redes sociales)
         - Testimonial
    > Modo MJML:
        - Todos los **elementos MJML posibles** - Configurables.

¿Detectas algún elemento que pueda hacer falta?
¿Tienes dudas sobre algún detalle?
