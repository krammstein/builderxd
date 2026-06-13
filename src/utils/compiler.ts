import type { BlockNode } from '../types';

const WEB_SAFE_FONTS = [
  'arial',
  'georgia',
  'verdana',
  'tahoma',
  'times new roman',
  'courier new',
  'trebuchet ms',
  'sans-serif',
  'serif',
  'monospace',
  'system-ui',
  '-apple-system'
];

const getUsedFonts = (nodes: BlockNode[]): string[] => {
  const fonts = new Set<string>();
  const traverse = (node: BlockNode) => {
    if (node.properties?.fontFamily) {
      fonts.add(node.properties.fontFamily);
    }
    if (node.children) {
      node.children.forEach(traverse);
    }
  };
  nodes.forEach(traverse);
  return Array.from(fonts);
};

// Converts the JSON tree structure into standard MJML
export const compileToMJML = (nodes: BlockNode[]): string => {
  const usedFonts = getUsedFonts(nodes);
  const googleFontsUsed = usedFonts.filter(f => !WEB_SAFE_FONTS.includes(f.toLowerCase()));
  
  let fontTags = '';
  googleFontsUsed.forEach(font => {
    const encoded = font.replace(/\s+/g, '+');
    fontTags += `    <mj-font name="${font}" href="https://fonts.googleapis.com/css?family=${encoded}" />\n`;
  });

  let mjml = `<mjml>\n  <mj-head>\n${fontTags}    <mj-attributes>\n      <mj-all font-family="system-ui, -apple-system, sans-serif" />\n    </mj-attributes>\n  </mj-head>\n  <mj-body>\n`;

  const renderNode = (node: BlockNode, indent: string = '    '): string => {
    const props = node.properties;
    const styleAttr = (key: string, mjmlKey: string) => {
      return props[key] !== undefined ? ` ${mjmlKey}="${props[key]}"` : '';
    };

    switch (node.type) {
      case 'section': {
        const bg = props.backgroundColor ? ` background-color="${props.backgroundColor}"` : '';
        const pad = props.padding ? ` padding="${props.padding}"` : '';
        let content = `${indent}<mj-section${bg}${pad}>\n`;
        if (node.children) {
          node.children.forEach((child) => {
            content += renderNode(child, indent + '  ');
          });
        }
        content += `${indent}</mj-section>\n`;
        return content;
      }
      case 'column': {
        const width = props.width ? ` width="${props.width}"` : '';
        const pad = props.padding ? ` padding="${props.padding}"` : '';
        let content = `${indent}<mj-column${width}${pad}>\n`;
        if (node.children) {
          node.children.forEach((child) => {
            content += renderNode(child, indent + '  ');
          });
        }
        content += `${indent}</mj-column>\n`;
        return content;
      }
      case 'text':
      case 'heading':
      case 'paragraph': {
        const color = styleAttr('color', 'color');
        const size = styleAttr('fontSize', 'font-size');
        const align = styleAttr('align', 'align');
        const pad = styleAttr('padding', 'padding');
        const font = styleAttr('fontFamily', 'font-family');
        const weight = styleAttr('fontWeight', 'font-weight');
        const style = styleAttr('fontStyle', 'font-style');
        const decoration = styleAttr('textDecoration', 'text-decoration');
        return `${indent}<mj-text${color}${size}${align}${pad}${font}${weight}${style}${decoration}>${props.content || ''}</mj-text>\n`;
      }
      case 'image': {
        const src = props.url ? ` src="${props.url}"` : ' src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60"';
        const alt = props.altText ? ` alt="${props.altText}"` : ' alt="image"';
        const align = styleAttr('align', 'align');
        const pad = styleAttr('padding', 'padding');
        const radius = styleAttr('borderRadius', 'border-radius');
        return `${indent}<mj-image${src}${alt}${align}${pad}${radius} />\n`;
      }
      case 'button': {
        const href = props.url ? ` href="${props.url}"` : ' href="#"';
        const bg = styleAttr('backgroundColor', 'background-color');
        const color = styleAttr('color', 'color');
        const radius = styleAttr('borderRadius', 'border-radius');
        const pad = styleAttr('padding', 'padding');
        const align = styleAttr('align', 'align');
        const font = styleAttr('fontFamily', 'font-family');
        const size = styleAttr('fontSize', 'font-size');
        return `${indent}<mj-button${href}${bg}${color}${radius}${pad}${align}${font}${size}>${props.content || ''}</mj-button>\n`;
      }
      case 'divider': {
        const color = styleAttr('color', 'border-color');
        const thickness = styleAttr('thickness', 'border-width');
        const pad = styleAttr('padding', 'padding');
        return `${indent}<mj-divider${color}${thickness}${pad} />\n`;
      }
      case 'spacer': {
        const height = styleAttr('height', 'height');
        return `${indent}<mj-spacer${height} />\n`;
      }
      case 'social': {
        const align = styleAttr('align', 'align');
        const pad = styleAttr('padding', 'padding');
        return `${indent}<mj-social${align}${pad}>
${indent}  <mj-social-element name="facebook" href="#" />
${indent}  <mj-social-element name="twitter" href="#" />
${indent}  <mj-social-element name="instagram" href="#" />
${indent}</mj-social>\n`;
      }
      case 'video': {
        const src = props.thumbnailUrl ? ` src="${props.thumbnailUrl}"` : ' src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60"';
        const href = props.videoUrl ? ` href="${props.videoUrl}"` : ' href="#"';
        const align = styleAttr('align', 'align');
        const pad = styleAttr('padding', 'padding');
        return `${indent}<mj-image${src}${href}${align}${pad} />\n`;
      }
      case 'custom_html': {
        return `${indent}<mj-raw>${props.htmlContent || '<div style="padding: 20px; text-align: center;">HTML Personalizado</div>'}</mj-raw>\n`;
      }
      case 'countdown': {
        const align = styleAttr('align', 'align');
        const pad = styleAttr('padding', 'padding');
        const color = styleAttr('color', 'color');
        return `${indent}<mj-text${align}${pad}${color} font-size="20px">Contador: ${props.endTime || '2026-12-31'}</mj-text>\n`;
      }
      case 'accordion': {
        const title = props.title || 'Título del Acordeón';
        const content = props.content || 'Detalles del acordeón...';
        return `${indent}<mj-accordion>
${indent}  <mj-accordion-element>
${indent}    <mj-accordion-title>${title}</mj-accordion-title>
${indent}    <mj-accordion-text>${content}</mj-accordion-text>
${indent}  </mj-accordion-element>
${indent}</mj-accordion>\n`;
      }
      case 'carousel': {
        const imagesList = props.images ? props.images.split(',') : [
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60'
        ];
        let carouselStr = `${indent}<mj-carousel>\n`;
        imagesList.forEach((img: string) => {
          carouselStr += `${indent}  <mj-carousel-image src="${img.trim()}" />\n`;
        });
        carouselStr += `${indent}</mj-carousel>\n`;
        return carouselStr;
      }
      case 'icon': {
        const iconName = props.iconName || 'Star';
        const size = props.size || 24;
        const color = props.color || '#4f46e5';
        const align = props.align || 'center';
        const href = props.url ? ` href="${props.url}"` : '';
        return `${indent}<mj-text align="${align}" color="${color}" font-size="${size}px"${href}>${iconName === 'Star' ? '★' : iconName === 'Heart' ? '♥' : iconName === 'Smile' ? '☺' : iconName === 'Settings' ? '⚙' : iconName === 'Mail' ? '✉' : 'ℹ'}</mj-text>\n`;
      }
      case 'nav_menu': {
        const align = props.align || 'center';
        const color = props.color || '#4f46e5';
        const items = Array.isArray(props.items) ? props.items : [];
        let navStr = `${indent}<mj-navbar align="${align}">\n`;
        items.forEach((item: any) => {
          navStr += `${indent}  <mj-navbar-link href="${item.url || '#'}" color="${color}">${item.label || 'Link'}</mj-navbar-link>\n`;
        });
        navStr += `${indent}</mj-navbar>\n`;
        return navStr;
      }
      case 'image_text': {
        const imgUrl = props.imageUrl || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60';
        const text = props.text || 'Texto descriptivo al lado de la imagen.';
        const imgWidth = props.imageWidth || 40;
        const pos = props.imagePosition || 'left';
        
        const imgCol = `${indent}  <mj-column width="${imgWidth}%"><mj-image src="${imgUrl}" /></mj-column>\n`;
        const textCol = `${indent}  <mj-column width="${100 - imgWidth}%"><mj-text>${text}</mj-text></mj-column>\n`;
        
        return `${indent}<mj-section>\n${pos === 'left' ? imgCol + textCol : textCol + imgCol}${indent}</mj-section>\n`;
      }
      case 'product_card': {
        const imgUrl = props.imageUrl || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60';
        const title = props.title || 'Título Producto';
        const price = props.price || '$10.00';
        const btnText = props.buttonText || 'Comprar';
        const btnUrl = props.buttonUrl || '#';
        const color = props.color || '#4f46e5';
        return `${indent}<mj-section background-color="${props.backgroundColor || '#ffffff'}" padding="${props.padding || '15px'}">
${indent}  <mj-column>
${indent}    <mj-image src="${imgUrl}" width="150px" />
${indent}    <mj-text align="center" font-size="16px" font-weight="bold">${title}</mj-text>
${indent}    <mj-text align="center" font-size="14px" color="#666666">${price}</mj-text>
${indent}    <mj-button href="${btnUrl}" background-color="${color}">${btnText}</mj-button>
${indent}  </mj-column>
${indent}</mj-section>\n`;
      }
      case 'quote': {
        const text = props.text || 'Esta es una excelente cita o testimonio.';
        const author = props.author || 'Autor de Cita';
        const color = props.color || '#555555';
        return `${indent}<mj-section background-color="${props.backgroundColor || '#f9f9f9'}" padding="${props.padding || '15px'}">
${indent}  <mj-column>
${indent}    <mj-text font-style="italic" color="${color}" align="center">"${text}"</mj-text>
${indent}    <mj-text font-weight="bold" align="center">- ${author}</mj-text>
${indent}  </mj-column>
${indent}</mj-section>\n`;
      }
      default:
        return '';
    }
  };

  nodes.forEach((node) => {
    mjml += renderNode(node);
  });

  mjml += '  </mj-body>\n</mjml>';
  return mjml;
};

// Generates email-friendly responsive HTML with an embedded postMessage communicator script
export const compileToHTML = (
  nodes: BlockNode[],
  selectedId: string | null,
  isMobile: boolean = false
): string => {
  const getResponsiveStyle = (node: BlockNode, key: string, defaultValue: any) => {
    if (isMobile && node.mobileProperties && node.mobileProperties[key] !== undefined) {
      return node.mobileProperties[key];
    }
    return node.properties[key] !== undefined ? node.properties[key] : defaultValue;
  };

  const formatRadius = (val: any) => {
    if (val === undefined || val === null) return '0px';
    const s = String(val);
    if (!s) return '0px';
    if (/^\d+$/.test(s)) return `${s}px`;
    return s;
  };

  const renderNode = (node: BlockNode): string => {
    const isSelectedClass = node.id === selectedId ? ' builder-element-selected' : '';

    switch (node.type) {
      case 'section': {
        const bg = getResponsiveStyle(node, 'backgroundColor', 'transparent');
        const padding = getResponsiveStyle(node, 'padding', '20px 0px');
        return `
          <table data-id="${node.id}" class="builder-element${isSelectedClass}" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: ${bg}; padding: ${padding}; box-sizing: border-box;">
            <tr>
              <td align="center" style="font-size: 0;">
                <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                  <tr>
                    <td align="center" valign="top" width="600">
                <![endif]-->
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="display: flex; flex-direction: ${isMobile ? 'column' : 'row'}; width: 100%;">
                      ${node.children ? node.children.map(renderNode).join('') : ''}
                    </td>
                  </tr>
                </table>
                <!--[if mso]>
                    </td>
                  </tr>
                </table>
                <![endif]-->
              </td>
            </tr>
          </table>
        `;
      }
      case 'column': {
        const width = getResponsiveStyle(node, 'width', '100%');
        const padding = getResponsiveStyle(node, 'padding', '10px');
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="flex: 1; min-width: ${isMobile ? '100%' : '0'}; width: ${isMobile ? '100%' : width}; padding: ${padding}; box-sizing: border-box;">
            ${node.children ? node.children.map(renderNode).join('') : ''}
          </div>
        `;
      }
      case 'text':
      case 'heading':
      case 'paragraph': {
        const font = getResponsiveStyle(node, 'fontFamily', 'Arial');
        const color = getResponsiveStyle(node, 'color', '#1a1a1a');
        const fontSize = getResponsiveStyle(node, 'fontSize', '16px');
        const align = getResponsiveStyle(node, 'align', 'left');
        const padding = getResponsiveStyle(node, 'padding', '10px 20px');
        const margin = getResponsiveStyle(node, 'margin', '0px');
        const borderRadius = getResponsiveStyle(node, 'borderRadius', '0px');
        const fontWeight = getResponsiveStyle(node, 'fontWeight', node.type.startsWith('heading') ? 'bold' : 'normal');
        const fontStyle = getResponsiveStyle(node, 'fontStyle', 'normal');
        const textDecoration = getResponsiveStyle(node, 'textDecoration', 'none');
        const content = node.properties.content || 'Escribe aquí tu texto...';
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" data-prop="content" style="color: ${color}; font-size: ${fontSize}; text-align: ${align}; padding: ${padding}; margin: ${margin}; border-radius: ${borderRadius}; line-height: 1.5; font-family: ${font}; font-weight: ${fontWeight}; font-style: ${fontStyle}; text-decoration: ${textDecoration}; box-sizing: border-box;">
            ${content}
          </div>
        `;
      }
      case 'image': {
        const url = getResponsiveStyle(node, 'url', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60');
        const alt = getResponsiveStyle(node, 'altText', 'image');
        const align = getResponsiveStyle(node, 'align', 'center');
        const padding = getResponsiveStyle(node, 'padding', '10px 20px');
        const borderRadius = formatRadius(getResponsiveStyle(node, 'borderRadius', '8px'));
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="text-align: ${align}; padding: ${padding}; box-sizing: border-box;">
            <img src="${url}" alt="${alt}" style="max-width: 100%; height: auto; border-radius: ${borderRadius}; display: inline-block; vertical-align: middle;" />
          </div>
        `;
      }
      case 'button': {
        const font = getResponsiveStyle(node, 'fontFamily', 'Arial');
        const bg = getResponsiveStyle(node, 'backgroundColor', '#4F46E5');
        const color = getResponsiveStyle(node, 'color', '#ffffff');
        const radius = formatRadius(getResponsiveStyle(node, 'borderRadius', '6px'));
        const padding = getResponsiveStyle(node, 'padding', '12px 24px');
        const align = getResponsiveStyle(node, 'align', 'center');
        const fontSize = getResponsiveStyle(node, 'fontSize', '16px');
        const content = node.properties.content || 'Haga clic aquí';
        const url = node.properties.url || '#';
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="text-align: ${align}; padding: 10px 20px; box-sizing: border-box;">
            <a href="${url}" style="background-color: ${bg}; color: ${color}; border-radius: ${radius}; padding: ${padding}; display: inline-block; text-decoration: none; font-weight: 500; font-family: ${font}; font-size: ${fontSize};" target="_blank">
              <span data-prop="content">${content}</span>
            </a>
          </div>
        `;
      }
      case 'divider': {
        const color = getResponsiveStyle(node, 'color', '#e5e7eb');
        const thickness = getResponsiveStyle(node, 'thickness', '2px');
        const padding = getResponsiveStyle(node, 'padding', '15px 20px');
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="padding: ${padding}; box-sizing: border-box;">
            <hr style="border: none; border-top: ${thickness} solid ${color}; margin: 0; padding: 0;" />
          </div>
        `;
      }
      case 'spacer': {
        const height = getResponsiveStyle(node, 'height', '30px');
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="height: ${height}; min-height: ${height}; font-size: 0; line-height: 0; box-sizing: border-box;">
            &nbsp;
          </div>
        `;
      }
      case 'social': {
        const align = getResponsiveStyle(node, 'align', 'center');
        const padding = getResponsiveStyle(node, 'padding', '15px 20px');
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="text-align: ${align}; padding: ${padding}; box-sizing: border-box;">
            <table align="${align}" border="0" cellpadding="0" cellspacing="0" style="display: inline-block; border-collapse: collapse;">
              <tr>
                <td style="padding: 0 8px;">
                  <a href="#" style="display: inline-block; width: 32px; height: 32px; border-radius: 50%; background-color: #3b5998; color: white; text-align: center; line-height: 32px; font-weight: bold; font-family: sans-serif; text-decoration: none;">f</a>
                </td>
                <td style="padding: 0 8px;">
                  <a href="#" style="display: inline-block; width: 32px; height: 32px; border-radius: 50%; background-color: #1da1f2; color: white; text-align: center; line-height: 32px; font-weight: bold; font-family: sans-serif; text-decoration: none;">t</a>
                </td>
                <td style="padding: 0 8px;">
                  <a href="#" style="display: inline-block; width: 32px; height: 32px; border-radius: 50%; background-color: #e1306c; color: white; text-align: center; line-height: 32px; font-weight: bold; font-family: sans-serif; text-decoration: none;">i</a>
                </td>
              </tr>
            </table>
          </div>
        `;
      }
      case 'video': {
        const url = getResponsiveStyle(node, 'thumbnailUrl', 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60');
        const align = getResponsiveStyle(node, 'align', 'center');
        const padding = getResponsiveStyle(node, 'padding', '10px 20px');
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="text-align: ${align}; padding: ${padding}; box-sizing: border-box;">
            <div style="position: relative; display: inline-block; cursor: pointer; max-width: 100%;">
              <img src="${url}" style="max-width: 100%; height: auto; border-radius: 8px; display: block;" />
              <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 64px; height: 64px; background: rgba(0,0,0,0.7); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white;">
                <div style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 16px solid white; margin-left: 6px;"></div>
              </div>
            </div>
          </div>
        `;
      }
      case 'custom_html': {
        const content = node.properties.htmlContent || '<div style="padding: 20px; text-align: center; border: 2px dashed #ccc; font-family: sans-serif; font-size: 13px; color: #666;">HTML Personalizado</div>';
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="box-sizing: border-box;">
            ${content}
          </div>
        `;
      }
      case 'countdown': {
        const align = getResponsiveStyle(node, 'align', 'center');
        const padding = getResponsiveStyle(node, 'padding', '15px 20px');
        const endTime = node.properties.endTime || '2026-12-31';
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="text-align: ${align}; padding: ${padding}; box-sizing: border-box; font-family: sans-serif;">
            <div style="display: inline-flex; gap: 8px; justify-content: ${align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start'};">
              <div style="background: #111827; color: white; padding: 8px 12px; border-radius: 4px; text-align: center; min-width: 50px;">
                <span style="font-size: 18px; font-weight: bold; display: block;">02</span>
                <span style="font-size: 9px; opacity: 0.7; text-transform: uppercase;">días</span>
              </div>
              <div style="background: #111827; color: white; padding: 8px 12px; border-radius: 4px; text-align: center; min-width: 50px;">
                <span style="font-size: 18px; font-weight: bold; display: block;">05</span>
                <span style="font-size: 9px; opacity: 0.7; text-transform: uppercase;">horas</span>
              </div>
              <div style="background: #111827; color: white; padding: 8px 12px; border-radius: 4px; text-align: center; min-width: 50px;">
                <span style="font-size: 18px; font-weight: bold; display: block;">34</span>
                <span style="font-size: 9px; opacity: 0.7; text-transform: uppercase;">mins</span>
              </div>
              <div style="background: #111827; color: white; padding: 8px 12px; border-radius: 4px; text-align: center; min-width: 50px;">
                <span style="font-size: 18px; font-weight: bold; display: block;">12</span>
                <span style="font-size: 9px; opacity: 0.7; text-transform: uppercase;">segs</span>
              </div>
            </div>
            <div style="font-size: 10px; color: #6b7280; margin-top: 6px;">Termina el: ${endTime}</div>
          </div>
        `;
      }
      case 'accordion': {
        const title = node.properties.title || 'Título del Acordeón';
        const content = node.properties.content || 'Detalles del acordeón...';
        const padding = getResponsiveStyle(node, 'padding', '10px 20px');
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="padding: ${padding}; box-sizing: border-box; font-family: sans-serif;">
            <details style="border: 1px solid #e5e7eb; border-radius: 6px; padding: 10px; background: white;" open>
              <summary style="font-weight: 600; cursor: pointer; outline: none; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                <span data-prop="title">${title}</span>
                <span style="font-size: 12px; opacity: 0.5;">▼</span>
              </summary>
              <div data-prop="content" style="margin-top: 8px; color: #4b5563; font-size: 14px; line-height: 1.5;">
                ${content}
              </div>
            </details>
          </div>
        `;
      }
      case 'carousel': {
        const imagesVal = node.properties.images || '';
        const imagesList = imagesVal ? imagesVal.split(',') : [
          'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
          'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60'
        ];
        const padding = getResponsiveStyle(node, 'padding', '10px 20px');
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="padding: ${padding}; box-sizing: border-box; text-align: center;">
            <div style="display: flex; gap: 8px; justify-content: center; overflow: hidden; max-width: 100%;">
              ${imagesList.map((img: string) => `
                <img src="${img.trim()}" style="width: 80px; height: 60px; object-fit: cover; border-radius: 4px; border: 1px solid #e5e7eb;" />
              `).join('')}
            </div>
            <div style="font-size: 9px; color: #9ca3af; margin-top: 4px;">Carrusel de ${imagesList.length} imágenes (Vista Compacta)</div>
          </div>
        `;
      }
      case 'icon': {
        const iconName = node.properties.iconName || 'Star';
        const size = getResponsiveStyle(node, 'size', '24px');
        const color = getResponsiveStyle(node, 'color', '#4f46e5');
        const align = getResponsiveStyle(node, 'align', 'center');
        const url = node.properties.url || '#';
        const iconChar = iconName === 'Star' ? '★' : iconName === 'Heart' ? '♥' : iconName === 'Smile' ? '☺' : iconName === 'Settings' ? '⚙' : iconName === 'Mail' ? '✉' : 'ℹ';
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="text-align: ${align}; padding: 10px 20px; box-sizing: border-box;">
            <a href="${url}" style="text-decoration: none; color: ${color}; font-size: ${size};" target="_blank">
              ${iconChar}
            </a>
          </div>
        `;
      }
      case 'nav_menu': {
        const align = getResponsiveStyle(node, 'align', 'center');
        const color = getResponsiveStyle(node, 'color', '#4f46e5');
        const bg = getResponsiveStyle(node, 'backgroundColor', 'transparent');
        const font = getResponsiveStyle(node, 'fontFamily', 'Arial');
        const size = getResponsiveStyle(node, 'fontSize', '14px');
        const separator = node.properties.separator || ' | ';
        const padding = getResponsiveStyle(node, 'padding', '10px');
        const items = Array.isArray(node.properties.items) ? node.properties.items : [];
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="text-align: ${align}; background-color: ${bg}; padding: ${padding}; font-family: ${font}; font-size: ${size}; box-sizing: border-box;">
            ${items.map((item: any, idx: number) => `
              <a href="${item.url || '#'}" style="color: ${color}; text-decoration: none; font-weight: 500;">${item.label || 'Link'}</a>
              ${idx < items.length - 1 ? `<span style="color: #9ca3af; margin: 0 4px;">${separator}</span>` : ''}
            `).join('')}
          </div>
        `;
      }
      case 'image_text': {
        const imgUrl = getResponsiveStyle(node, 'imageUrl', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60');
        const text = node.properties.text || 'Texto descriptivo de ejemplo.';
        const imgWidth = getResponsiveStyle(node, 'imageWidth', '40');
        const pos = node.properties.imagePosition || 'left';
        const font = getResponsiveStyle(node, 'fontFamily', 'Arial');
        const size = getResponsiveStyle(node, 'fontSize', '14px');
        const color = getResponsiveStyle(node, 'color', '#333333');
        const padding = getResponsiveStyle(node, 'padding', '10px');
        
        const isRight = pos === 'right';
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="padding: ${padding}; box-sizing: border-box; font-family: ${font}; font-size: ${size}; color: ${color}; display: flex; flex-direction: ${isMobile ? 'column' : isRight ? 'row-reverse' : 'row'}; align-items: center; gap: 15px;">
            <div style="width: ${isMobile ? '100%' : imgWidth + '%'}; shrink: 0;">
              <img src="${imgUrl}" style="max-width: 100%; height: auto; border-radius: 4px; display: block;" />
            </div>
            <div data-prop="text" style="flex: 1; min-width: 0;">
              ${text}
            </div>
          </div>
        `;
      }
      case 'product_card': {
        const imgUrl = getResponsiveStyle(node, 'imageUrl', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60');
        const title = node.properties.title || 'Título Producto';
        const price = node.properties.price || '$10.00';
        const btnText = node.properties.buttonText || 'Comprar';
        const btnUrl = node.properties.buttonUrl || '#';
        const color = getResponsiveStyle(node, 'color', '#4f46e5');
        const bg = getResponsiveStyle(node, 'backgroundColor', '#ffffff');
        const radius = formatRadius(getResponsiveStyle(node, 'borderRadius', '8px'));
        const padding = getResponsiveStyle(node, 'padding', '15px');
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="padding: ${padding}; box-sizing: border-box;">
            <div style="background-color: ${bg}; border-radius: ${radius}; border: 1px solid #e5e7eb; padding: 15px; text-align: center; font-family: Arial, sans-serif;">
              <img src="${imgUrl}" style="max-width: 150px; height: auto; border-radius: 4px; margin: 0 auto 10px; display: block;" />
              <h4 data-prop="title" style="margin: 0 0 5px; font-size: 16px; color: #1f2937; font-weight: bold;">${title}</h4>
              <p data-prop="price" style="margin: 0 0 12px; font-size: 14px; color: #6b7280;">${price}</p>
              <a href="${btnUrl}" data-prop="buttonText" style="background-color: ${color}; color: #ffffff; padding: 8px 16px; border-radius: 4px; display: inline-block; text-decoration: none; font-size: 13px; font-weight: 500;" target="_blank">
                ${btnText}
              </a>
            </div>
          </div>
        `;
      }
      case 'quote': {
        const text = node.properties.text || 'Esta es una excelente cita o testimonio.';
        const author = node.properties.author || 'Autor de Cita';
        const color = getResponsiveStyle(node, 'color', '#555555');
        const bg = getResponsiveStyle(node, 'backgroundColor', '#f9f9f9');
        const radius = formatRadius(getResponsiveStyle(node, 'borderRadius', '4px'));
        const padding = getResponsiveStyle(node, 'padding', '15px');
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="padding: ${padding}; box-sizing: border-box;">
            <div style="background-color: ${bg}; border-radius: ${radius}; padding: 20px; text-align: center; font-family: Arial, sans-serif; border-left: 4px solid #4f46e5;">
              <p data-prop="text" style="margin: 0 0 8px; font-style: italic; color: ${color}; font-size: 15px; line-height: 1.5;">"${text}"</p>
              <h5 data-prop="author" style="margin: 0; font-size: 13px; color: #1f2937; font-weight: bold;">- ${author}</h5>
            </div>
          </div>
        `;
      }
      default:
        return '';
    }
  };

  const bodyHtml = nodes.map(renderNode).join('');

  const usedFonts = getUsedFonts(nodes);
  const googleFontsUsed = usedFonts.filter(f => !WEB_SAFE_FONTS.includes(f.toLowerCase()));
  
  let fontLinks = '';
  googleFontsUsed.forEach(font => {
    const encoded = font.replace(/\s+/g, '+');
    fontLinks += `      <link href="https://fonts.googleapis.com/css2?family=${encoded}:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />\n`;
  });

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Email Preview</title>
${fontLinks}
      <style>
        body {
          margin: 0;
          padding: 20px 10px;
          background-color: #f7f9fa;
          font-family: system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
          min-height: 100vh;
        }
        
        /* Interactive overlay styles for builder elements */
        .builder-element {
          position: relative;
          outline: 1px dashed rgba(79, 70, 229, 0.25);
          outline-offset: -1px;
          cursor: pointer;
          transition: outline 0.15s ease-in-out, background-color 0.15s ease-in-out;
        }
        
        .builder-element:hover {
          outline: 2px solid #4F46E5;
          outline-offset: -2px;
          background-color: rgba(79, 70, 229, 0.03);
        }
        
        .builder-element-selected {
          outline: 2px solid #4F46E5 !important;
          outline-offset: -2px !important;
          background-color: rgba(79, 70, 229, 0.06) !important;
        }

        /* Float labels for builder elements on hover/selection */
        .builder-element::before {
          content: "";
          position: absolute;
          top: -18px;
          left: 8px;
          background: #4F46E5;
          color: #ffffff;
          font-size: 9px;
          font-family: system-ui, sans-serif;
          font-weight: bold;
          padding: 2px 6px;
          border-radius: 4px 4px 0 0;
          pointer-events: none;
          z-index: 99;
          display: none;
          white-space: nowrap;
          text-transform: uppercase;
        }

        .builder-element:hover::before,
        .builder-element-selected::before {
          display: block;
        }

        /* Specify labels based on data-id prefix */
        [data-id^="section-"]::before { content: "Sección"; }
        [data-id^="column-"]::before { content: "Columna"; }
        [data-id^="text-"]::before { content: "Texto Libre"; }
        [data-id^="heading-"]::before { content: "Título"; }
        [data-id^="paragraph-"]::before { content: "Párrafo"; }
        [data-id^="image-"]::before { content: "Imagen"; }
        [data-id^="button-"]::before { content: "Botón"; }
        [data-id^="divider-"]::before { content: "Divisor"; }
        [data-id^="spacer-"]::before { content: "Espaciador"; }
        [data-id^="social-"]::before { content: "Redes"; }
        [data-id^="video-"]::before { content: "Vídeo"; }
        [data-id^="custom_html-"]::before { content: "HTML"; }
        [data-id^="countdown-"]::before { content: "Contador"; }
        [data-id^="accordion-"]::before { content: "Acordeón"; }
        [data-id^="carousel-"]::before { content: "Carrusel"; }
        [data-id^="icon-"]::before { content: "Icono"; }
        [data-id^="nav_menu-"]::before { content: "Menú Nav"; }
        [data-id^="image_text-"]::before { content: "Img + Texto"; }
        [data-id^="product_card-"]::before { content: "Producto"; }
        [data-id^="quote-"]::before { content: "Cita"; }

        /* 8-point selection handles */
        .builder-element-selected::after {
          content: "";
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          border: 2px solid #4F46E5;
          pointer-events: none;
          z-index: 98;
          background-image: 
            radial-gradient(circle, #ffffff 3px, #4F46E5 3px, #4F46E5 4px, transparent 4px),
            radial-gradient(circle, #ffffff 3px, #4F46E5 3px, #4F46E5 4px, transparent 4px),
            radial-gradient(circle, #ffffff 3px, #4F46E5 3px, #4F46E5 4px, transparent 4px),
            radial-gradient(circle, #ffffff 3px, #4F46E5 3px, #4F46E5 4px, transparent 4px),
            radial-gradient(circle, #ffffff 3px, #4F46E5 3px, #4F46E5 4px, transparent 4px),
            radial-gradient(circle, #ffffff 3px, #4F46E5 3px, #4F46E5 4px, transparent 4px),
            radial-gradient(circle, #ffffff 3px, #4F46E5 3px, #4F46E5 4px, transparent 4px),
            radial-gradient(circle, #ffffff 3px, #4F46E5 3px, #4F46E5 4px, transparent 4px);
          background-position: 
            0% 0%, 50% 0%, 100% 0%,
            0% 50%, 100% 50%,
            0% 100%, 50% 100%, 100% 100%;
          background-size: 10px 10px;
          background-repeat: no-repeat;
          margin: -2px;
        }

        .drag-hover {
          outline: 2px dashed #4F46E5 !important;
          outline-offset: -2px !important;
          background-color: rgba(79, 70, 229, 0.08) !important;
        }

        /* Responsive utilities */
        @media only screen and (max-width: 480px) {
          .builder-element {
            outline-color: rgba(79, 70, 229, 0.15);
          }
        }
      </style>
    </head>
    <body>
      <div id="builder-canvas-wrapper" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-radius: 8px; overflow: hidden; min-height: 400px; border: 1px solid #e5e7eb;">
        ${bodyHtml}
      </div>

      <script>
        // Prevent all anchor navigation in the builder preview
        document.body.addEventListener('click', function(e) {
          const link = e.target.closest('a[href]');
          if (link) e.preventDefault();
        }, true);

        // Send selected ID back to parent window
        document.body.addEventListener('click', function(e) {
          // If clicking toolbar elements, ignore selection
          if (e.target.closest('#builder-inline-toolbar')) {
            return;
          }
          const el = e.target.closest('[data-id]');
          if (el) {
            const id = el.getAttribute('data-id');
            const hasProp = e.target.hasAttribute('data-prop') || e.target.closest('[data-prop]');
            if (!hasProp) {
              e.preventDefault();
            }
            e.stopPropagation();
            window.parent.postMessage({
              type: 'SELECT_ELEMENT',
              id: id
            }, '*');
          }
        }, true);

        // Manage floating toolbar and inline editing
        const updateToolbar = () => {
          let toolbar = document.getElementById('builder-inline-toolbar');
          if (!toolbar) {
            toolbar = document.createElement('div');
            toolbar.id = 'builder-inline-toolbar';
            toolbar.style.cssText = 'position: absolute; display: none; background: #1f2937; color: white; flex-direction: column; gap: 4px; padding: 4px; border-radius: 6px; z-index: 99999; font-size: 11px; font-family: system-ui, sans-serif; pointer-events: auto; box-shadow: 0 4px 15px rgba(0,0,0,0.25); border: 1px solid #374151;';
            toolbar.innerHTML = 
              '<div class="tb-row" style="display:flex; align-items:center; gap:4px; padding: 2px;">' +
              '  <div id="tb-drag" class="tb-icon-btn" style="cursor: move;" title="Mover">' +
              '    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/></svg>' +
              '  </div>' +
              '  <button id="tb-clone" type="button" class="tb-icon-btn" title="Duplicar">' +
              '    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>' +
              '  </button>' +
              '  <button id="tb-delete" type="button" class="tb-icon-btn" id="tb-delete" style="color: #ef4444;" title="Eliminar">' +
              '    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>' +
              '  </button>' +
              '</div>';
            document.body.appendChild(toolbar);

            // Style hover transitions
            const styles = document.createElement('style');
            styles.innerHTML = 
              '.tb-btn { background: transparent; border: none; color: #d1d5db; padding: 3px 6px; border-radius: 4px; cursor: pointer; font-size: 11px; font-weight: bold; display: flex; align-items: center; justify-content: center; transition: all 0.1s ease; }' +
              '.tb-btn:hover { background: #374151; color: white; }' +
              '.tb-btn.active { background: #4f46e5; color: white; }' +
              '.tb-icon-btn { background: transparent; border: none; color: #9ca3af; padding: 4px; border-radius: 4px; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.15s ease; width: 22px; height: 22px; }' +
              '.tb-icon-btn:hover { background: #374151; color: #ffffff; }' +
              '.tb-icon-btn#tb-delete:hover { background: #ef4444; color: #ffffff; }';
            document.head.appendChild(styles);

            toolbar.addEventListener('click', (e) => e.stopPropagation());

            toolbar.querySelector('#tb-delete').addEventListener('click', () => {
              const id = toolbar.getAttribute('data-target-id');
              if (id) window.parent.postMessage({ type: 'DELETE_ELEMENT', id }, '*');
            });

            toolbar.querySelector('#tb-clone').addEventListener('click', () => {
              const id = toolbar.getAttribute('data-target-id');
              if (id) window.parent.postMessage({ type: 'CLONE_ELEMENT', id }, '*');
            });
          }

          const selected = document.querySelector('.builder-element-selected');
          if (selected) {
            const rect = selected.getBoundingClientRect();
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            const scrollX = window.scrollX || document.documentElement.scrollLeft;

            // Positioning toolbar right above selected element
            toolbar.style.top = (rect.top + scrollY - (selected.getAttribute('data-id') && (selected.getAttribute('data-id').startsWith('text-') || selected.getAttribute('data-id').startsWith('heading') || selected.getAttribute('data-id').startsWith('paragraph') || selected.getAttribute('data-id').startsWith('button-')) ? 55 : 32)) + 'px';
            toolbar.style.left = (rect.left + scrollX) + 'px';
            toolbar.style.display = 'flex';
            toolbar.setAttribute('data-target-id', selected.getAttribute('data-id'));

            // Check if it is a text-editing node
            const id = selected.getAttribute('data-id');
            const editableElements = selected.hasAttribute('data-prop') ? [selected] : Array.from(selected.querySelectorAll('[data-prop]'));
            const isText = editableElements.length > 0;
            let formatRow = document.getElementById('tb-format-row');

            if (isText) {
              editableElements.forEach(target => {
                target.setAttribute('contenteditable', 'true');
                target.style.outline = 'none';

                if (!target.getAttribute('data-editable-bound')) {
                  target.setAttribute('data-editable-bound', 'true');
                  target.addEventListener('input', () => {
                    const prop = target.getAttribute('data-prop');
                    let rawVal = target.innerText;
                    if (prop === 'text') {
                      rawVal = rawVal.replace(/^"|"$/g, '');
                    } else if (prop === 'author') {
                      rawVal = rawVal.replace(/^- /, '');
                    }
                    window.parent.postMessage({
                      type: 'UPDATE_CONTENT',
                      id,
                      propName: prop,
                      content: rawVal
                    }, '*');
                  });
                }
              });

              const isButton = id && id.startsWith('button-');

              if (!formatRow && !isButton) {
                formatRow = document.createElement('div');
                formatRow.id = 'tb-format-row';
                formatRow.style.cssText = 'display: flex; gap: 4px; border-top: 1px solid #374151; padding-top: 4px; margin-top: 2px; align-items: center;';
                toolbar.appendChild(formatRow);
              }

              if (!isButton) {
                // Apply styles to the focused editable element, or the first one
                let activeTarget = editableElements[0];
                const activeEl = document.activeElement;
                if (activeEl && editableElements.includes(activeEl)) {
                  activeTarget = activeEl;
                }

                const isB = activeTarget.style.fontWeight === 'bold' || activeTarget.style.fontWeight === '700';
                const isI = activeTarget.style.fontStyle === 'italic';
                const isU = activeTarget.style.textDecoration.includes('underline');
                const textAlign = activeTarget.style.textAlign || 'left';
                const activeFont = activeTarget.style.fontFamily || 'Arial';
                const activeSize = activeTarget.style.fontSize || '16px';

                const fontsList = ['Arial', 'Georgia', 'Verdana', 'Tahoma', 'Times New Roman', 'Courier New', 'Trebuchet MS', 'Inter', 'Roboto', 'Outfit', 'Poppins', 'Lato', 'Montserrat', 'Open Sans', 'Nunito', 'Raleway', 'Playfair Display'];
                const fontOptions = fontsList.map(f => '<option value="' + f + '"' + (activeFont.includes(f) ? ' selected' : '') + '>' + f + '</option>').join('');

                formatRow.innerHTML = 
                  '<button type="button" class="tb-btn' + (isB ? ' active' : '') + '" id="tb-bold" style="font-weight:bold;">B</button>' +
                  '<button type="button" class="tb-btn' + (isI ? ' active' : '') + '" id="tb-italic" style="font-style:italic;">I</button>' +
                  '<button type="button" class="tb-btn' + (isU ? ' active' : '') + '" id="tb-underline" style="text-decoration:underline;">U</button>' +
                  '<select id="tb-font-family" style="background:#374151;color:white;border:1px solid #4b5563;font-size:10px;border-radius:3px;padding:2px 4px;max-width:85px;outline:none;cursor:pointer;">' + fontOptions + '</select>' +
                  '<input type="text" id="tb-font-size" style="background:#374151;color:white;border:1px solid #4b5563;font-size:10px;border-radius:3px;padding:2px 4px;width:38px;outline:none;text-align:center;" value="' + activeSize + '" />' +
                  '<button type="button" class="tb-btn' + (textAlign === 'left' ? ' active' : '') + '" id="tb-align-left" title="Izquierda">⬅</button>' +
                  '<button type="button" class="tb-btn' + (textAlign === 'center' ? ' active' : '') + '" id="tb-align-center" title="Centro">↔</button>' +
                  '<button type="button" class="tb-btn' + (textAlign === 'right' ? ' active' : '') + '" id="tb-align-right" title="Derecha">➡</button>';

                // Listeners
                formatRow.querySelector('#tb-bold').onclick = () => {
                  const nextVal = (activeTarget.style.fontWeight === 'bold' || activeTarget.style.fontWeight === '700') ? 'normal' : 'bold';
                  activeTarget.style.fontWeight = nextVal;
                  window.parent.postMessage({ type: 'UPDATE_PROPERTIES', id, properties: { fontWeight: nextVal } }, '*');
                  updateToolbar();
                };
                formatRow.querySelector('#tb-italic').onclick = () => {
                  const nextVal = activeTarget.style.fontStyle === 'italic' ? 'normal' : 'italic';
                  activeTarget.style.fontStyle = nextVal;
                  window.parent.postMessage({ type: 'UPDATE_PROPERTIES', id, properties: { fontStyle: nextVal } }, '*');
                  updateToolbar();
                };
                formatRow.querySelector('#tb-underline').onclick = () => {
                  const nextVal = activeTarget.style.textDecoration.includes('underline') ? 'none' : 'underline';
                  activeTarget.style.textDecoration = nextVal;
                  window.parent.postMessage({ type: 'UPDATE_PROPERTIES', id, properties: { textDecoration: nextVal } }, '*');
                  updateToolbar();
                };
                formatRow.querySelector('#tb-font-family').onchange = (e) => {
                  const nextVal = e.target.value;
                  activeTarget.style.fontFamily = nextVal;
                  window.parent.postMessage({ type: 'UPDATE_PROPERTIES', id, properties: { fontFamily: nextVal } }, '*');
                };
                formatRow.querySelector('#tb-font-size').onchange = (e) => {
                  const nextVal = e.target.value;
                  activeTarget.style.fontSize = nextVal;
                  window.parent.postMessage({ type: 'UPDATE_PROPERTIES', id, properties: { fontSize: nextVal } }, '*');
                };
                formatRow.querySelector('#tb-align-left').onclick = () => {
                  activeTarget.style.textAlign = 'left';
                  window.parent.postMessage({ type: 'UPDATE_PROPERTIES', id, properties: { align: 'left' } }, '*');
                  updateToolbar();
                };
                formatRow.querySelector('#tb-align-center').onclick = () => {
                  activeTarget.style.textAlign = 'center';
                  window.parent.postMessage({ type: 'UPDATE_PROPERTIES', id, properties: { align: 'center' } }, '*');
                  updateToolbar();
                };
                formatRow.querySelector('#tb-align-right').onclick = () => {
                  activeTarget.style.textAlign = 'right';
                  window.parent.postMessage({ type: 'UPDATE_PROPERTIES', id, properties: { align: 'right' } }, '*');
                  updateToolbar();
                };
              }
            } else {
              if (formatRow) {
                formatRow.remove();
              }
            }
          } else {
            toolbar.style.display = 'none';
          }
        };

        // Watch DOM mutations to reposition toolbar or bound editable events
        window.addEventListener('load', updateToolbar);
        const observer = new MutationObserver(() => requestAnimationFrame(updateToolbar));
        observer.observe(document.body, { attributes: true, subtree: true, attributeFilter: ['class'], childList: true });
        window.addEventListener('scroll', updateToolbar);
        window.addEventListener('resize', updateToolbar);
      </script>
    </body>
    </html>
  `;
};
