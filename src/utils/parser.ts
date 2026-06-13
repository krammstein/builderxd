import type { BlockNode, BlockType } from '../types';

const generateId = (prefix: string) => `${prefix}-${Math.random().toString(36).substr(2, 9)}`;

// Mapea atributos comunes como padding, background-color, align, etc.
const parseCommonStyles = (el: Element): Record<string, any> => {
  const props: Record<string, any> = {};
  
  const mapAttr = (mjmlAttr: string, propName: string) => {
    if (el.hasAttribute(mjmlAttr)) {
      props[propName] = el.getAttribute(mjmlAttr);
    }
  };

  mapAttr('background-color', 'backgroundColor');
  mapAttr('padding', 'padding');
  mapAttr('align', 'align');
  mapAttr('color', 'color');
  mapAttr('font-size', 'fontSize');
  mapAttr('font-family', 'fontFamily');
  mapAttr('border-radius', 'borderRadius');
  mapAttr('width', 'width');
  mapAttr('height', 'height');
  
  return props;
};

// Función principal de parseo (Recursiva)
const parseMJMLNode = (el: Element): BlockNode | null => {
  const tagName = el.tagName.toLowerCase();
  const commonProps = parseCommonStyles(el);

  // Parseamos hijos recursivamente si es necesario
  const parseChildren = (): BlockNode[] => {
    const children: BlockNode[] = [];
    Array.from(el.children).forEach(child => {
      const parsedChild = parseMJMLNode(child);
      if (parsedChild) children.push(parsedChild);
    });
    return children;
  };

  // Módulo D: Atributos Semánticos de Exportación (Nodos propios)
  if (el.hasAttribute('data-b-type')) {
    const bType = el.getAttribute('data-b-type') as BlockType | any;
    let bProps = {};
    try {
      bProps = JSON.parse(el.getAttribute('data-b-props') || '{}');
    } catch (e) {
      console.warn('Error parsing data-b-props for', bType);
    }
    return {
      id: generateId(bType),
      type: bType,
      properties: bProps,
      children: parseChildren()
    };
  }

  switch (tagName) {
    case 'mj-body':
      // mj-body es solo un contenedor transparente, parseamos sus hijos y los devolvemos al nivel superior.
      // (Esta función retorna un BlockNode, por lo que para mj-body lo manejamos en el loop principal).
      return null; 
      
    case 'mj-section':
    case 'section':
      return {
        id: generateId('section'),
        type: 'section',
        properties: commonProps,
        children: parseChildren()
      };

    case 'mj-column':
    case 'column':
      return {
        id: generateId('column'),
        type: 'column',
        properties: commonProps,
        children: parseChildren()
      };

    case 'mj-text':
      return {
        id: generateId('text'),
        type: 'text',
        properties: {
          ...commonProps,
          content: el.innerHTML.trim()
        }
      };

    case 'mj-image':
      return {
        id: generateId('image'),
        type: 'image',
        properties: {
          ...commonProps,
          url: el.getAttribute('src') || '',
          alt: el.getAttribute('alt') || '',
          href: el.getAttribute('href') || ''
        }
      };

    case 'mj-button':
      return {
        id: generateId('button'),
        type: 'button',
        properties: {
          ...commonProps,
          content: el.innerHTML.trim(),
          url: el.getAttribute('href') || ''
        }
      };

    case 'mj-divider':
      return {
        id: generateId('divider'),
        type: 'divider',
        properties: {
          ...commonProps,
          color: el.getAttribute('border-color') || '#cccccc',
          thickness: el.getAttribute('border-width') || '1px'
        }
      };

    case 'mj-spacer':
      return {
        id: generateId('spacer'),
        type: 'spacer',
        properties: commonProps
      };

    case 'mj-social': {
      const networks: any[] = [];
      Array.from(el.children).forEach(child => {
        if (child.tagName.toLowerCase() === 'mj-social-element') {
          networks.push({
            id: child.getAttribute('name') || 'facebook',
            name: child.getAttribute('name') || 'facebook',
            href: child.getAttribute('href') || '#',
            enabled: true
          });
        }
      });
      return {
        id: generateId('social'),
        type: 'social',
        properties: {
          ...commonProps,
          networks: networks.length > 0 ? networks : undefined
        }
      };
    }

    case 'mj-accordion': {
      // Simplificado: toma el primer mj-accordion-element
      const element = el.querySelector('mj-accordion-element');
      const title = element?.querySelector('mj-accordion-title')?.innerHTML || '';
      const text = element?.querySelector('mj-accordion-text')?.innerHTML || '';
      return {
        id: generateId('accordion'),
        type: 'accordion',
        properties: {
          ...commonProps,
          title: title.trim(),
          content: text.trim()
        }
      };
    }

    case 'mj-carousel': {
      const images: string[] = [];
      Array.from(el.children).forEach(child => {
        if (child.tagName.toLowerCase() === 'mj-carousel-image') {
          const src = child.getAttribute('src');
          if (src) images.push(src);
        }
      });
      return {
        id: generateId('carousel'),
        type: 'carousel',
        properties: {
          ...commonProps,
          images: images.join(',')
        }
      };
    }

    case 'mj-navbar': {
      const items: any[] = [];
      Array.from(el.children).forEach(child => {
        if (child.tagName.toLowerCase() === 'mj-navbar-link') {
          items.push({
            label: child.innerHTML.trim(),
            url: child.getAttribute('href') || '#'
          });
        }
      });
      return {
        id: generateId('nav_menu'),
        type: 'nav_menu',
        properties: {
          ...commonProps,
          items: items.length > 0 ? items : undefined
        }
      };
    }

    case 'mj-wrapper':
      return {
        id: generateId('wrapper'),
        type: 'wrapper',
        properties: commonProps,
        children: parseChildren()
      };

    case 'mj-group':
      return {
        id: generateId('group'),
        type: 'group',
        properties: {
          ...commonProps,
          verticalAlign: el.getAttribute('vertical-align') || 'top'
        },
        children: parseChildren()
      };

    case 'mj-hero':
      return {
        id: generateId('hero'),
        type: 'hero',
        properties: {
          ...commonProps,
          mode: el.getAttribute('mode') || 'fluid-height',
          backgroundImageUrl: el.getAttribute('background-url') || '',
          backgroundWidth: el.getAttribute('background-width') || '',
          backgroundHeight: el.getAttribute('background-height') || ''
        },
        children: parseChildren()
      };

    case 'table':
      // Fallback para tablas si estamos en modo MJML/HTML que no mapean directo
      if (el.getAttribute('data-mj-table') === 'true') {
        return {
          id: generateId('table'),
          type: 'table',
          properties: {
            ...commonProps,
            htmlContent: el.innerHTML
          }
        };
      }
      return {
        id: generateId('custom_html'),
        type: 'custom_html',
        properties: {
          htmlContent: el.outerHTML
        }
      };
    case 'mj-raw':
      return {
        id: generateId('custom_html'),
        type: 'custom_html',
        properties: {
          htmlContent: el.innerHTML
        }
      };

    // HTML Genérico estructural
    case 'div':
      // Heurística simple: un div con hijos estructurales se vuelve una sección, o lo pasamos a HTML custom
      if (el.querySelector('table, img, h1, h2, h3, p')) {
        return {
          id: generateId('custom_html'),
          type: 'custom_html',
          properties: {
            htmlContent: el.outerHTML
          }
        };
      }
      return null;

    case 'table':
      // Fallback para tablas si estamos en modo MJML/HTML que no mapean directo
      return {
        id: generateId('custom_html'),
        type: 'custom_html',
        properties: {
          htmlContent: el.outerHTML
        }
      };

    default:
      // Si el tag es una etiqueta básica de texto (h1, p, span), tratar de envolverlo en texto
      if (['h1','h2','h3','h4','h5','h6','p','span','strong','em','b','i'].includes(tagName)) {
         return {
            id: generateId('text'),
            type: 'text',
            properties: {
              content: el.outerHTML
            }
         };
      }
      
      // Fallback a custom_mjml o custom_html
      return {
        id: generateId('custom_html'),
        type: 'custom_html',
        properties: {
          htmlContent: el.outerHTML
        }
      };
  }
};

/**
 * Convierte un string MJML o HTML en un AST de BlockNodes
 */
export const parseTemplateToNodes = (code: string, mode: 'mjml' | 'html'): BlockNode[] => {
  let preparedCode = code;
  
  if (mode === 'mjml') {
    // 1. Convertir tags MJML auto-cerrados a tags con cierre explícito (para que text/html no los anide)
    preparedCode = preparedCode.replace(/<mj-([a-zA-Z0-9-]+)([^>]*?)\/>/gi, '<mj-$1$2></mj-$1>');
    // 2. Proteger mj-table convirtiéndolo temporalmente en <table> para evitar que el DOMParser destruya los <tr>/<td>
    preparedCode = preparedCode.replace(/<mj-table([^>]*)>/gi, '<table data-mj-table="true"$1>');
    preparedCode = preparedCode.replace(/<\/mj-table>/gi, '</table>');
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(`<div>${preparedCode}</div>`, 'text/html');
  const rootContainer = doc.body.firstElementChild;
  
  if (!rootContainer) return [];

  const nodes: BlockNode[] = [];
  
  // Procesar elementos de alto nivel
  Array.from(rootContainer.children).forEach(child => {
    const tagName = child.tagName.toLowerCase();
    
    // Extraer desde mj-body si está envuelto
    if (tagName === 'mj-body') {
      Array.from(child.children).forEach(mjmlChild => {
        const parsed = parseMJMLNode(mjmlChild);
        if (parsed) nodes.push(parsed);
      });
    } else {
      const parsed = parseMJMLNode(child);
      if (parsed) nodes.push(parsed);
    }
  });

  return nodes;
};
