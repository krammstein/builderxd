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
        const align = props.align ? ` align="${props.align}"` : '';
        const pad = props.padding ? ` padding="${props.padding}"` : '';
        const networks = props.networks || [
          { id: 'facebook', name: 'facebook', href: 'https://facebook.com', enabled: true },
          { id: 'twitter', name: 'twitter', href: 'https://twitter.com', enabled: true },
          { id: 'instagram', name: 'instagram', href: 'https://instagram.com', enabled: true }
        ];
        let socialElements = '';
        networks.forEach((net: any) => {
          if (net.enabled) {
            socialElements += `${indent}  <mj-social-element name="${net.name}" href="${net.href}" />\n`;
          }
        });
        return `${indent}<mj-social${align}${pad}>\n${socialElements}${indent}</mj-social>\n`;
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
${indent}    <mj-text align="center" font-size="14px" color="${color}">${price}</mj-text>
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
      case 'wrapper': {
        const bg = props.backgroundColor ? ` background-color="${props.backgroundColor}"` : '';
        const pad = props.padding ? ` padding="${props.padding}"` : '';
        let content = `${indent}<mj-wrapper${bg}${pad}>\n`;
        if (node.children) {
          node.children.forEach((child) => {
            content += renderNode(child, indent + '  ');
          });
        }
        content += `${indent}</mj-wrapper>\n`;
        return content;
      }
      case 'group': {
        const width = props.width ? ` width="${props.width}"` : '';
        const vAlign = props.verticalAlign ? ` vertical-align="${props.verticalAlign}"` : '';
        let content = `${indent}<mj-group${width}${vAlign}>\n`;
        if (node.children) {
          node.children.forEach((child) => {
            content += renderNode(child, indent + '  ');
          });
        }
        content += `${indent}</mj-group>\n`;
        return content;
      }
      case 'hero': {
        const mode = props.mode ? ` mode="${props.mode}"` : '';
        const bgUrl = props.backgroundImageUrl ? ` background-url="${props.backgroundImageUrl}"` : '';
        const bgColor = props.backgroundColor ? ` background-color="${props.backgroundColor}"` : '';
        const bgW = props.backgroundWidth ? ` background-width="${props.backgroundWidth}"` : '';
        const bgH = props.backgroundHeight ? ` background-height="${props.backgroundHeight}"` : '';
        const pad = props.padding ? ` padding="${props.padding}"` : '';
        let content = `${indent}<mj-hero${mode}${bgUrl}${bgColor}${bgW}${bgH}${pad}>\n`;
        if (node.children) {
          node.children.forEach((child) => {
            content += renderNode(child, indent + '  ');
          });
        }
        content += `${indent}</mj-hero>\n`;
        return content;
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
    const p = node.properties;
    const attr = `data-id="${node.id}" class="builder-element${isSelectedClass}"`;
    const indent = '          ';

    switch (node.type) {
      case 'section': {
        const bg = getResponsiveStyle(node, 'backgroundColor', 'transparent');
        const padding = getResponsiveStyle(node, 'padding', '20px 0px');
        return `
          <table ${attr} border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: ${bg}; padding: ${padding}; box-sizing: border-box;">
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
          <div ${attr} style="flex: 1; min-width: ${isMobile ? '100%' : '0'}; width: ${isMobile ? '100%' : width}; padding: ${padding}; box-sizing: border-box;">
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
        const content = p.content || 'Escribe aquí tu texto...';
        return `
          <div ${attr} data-prop="content" style="color: ${color}; font-size: ${fontSize}; text-align: ${align}; padding: ${padding}; margin: ${margin}; border-radius: ${borderRadius}; line-height: 1.5; font-family: ${font}; font-weight: ${fontWeight}; font-style: ${fontStyle}; text-decoration: ${textDecoration}; box-sizing: border-box;">
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
          <div ${attr} style="text-align: ${align}; padding: ${padding}; box-sizing: border-box;">
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
        const content = p.content || 'Haga clic aquí';
        const url = p.url || '#';
        return `
          <div ${attr} style="text-align: ${align}; padding: 10px 20px; box-sizing: border-box;">
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
          <div ${attr} style="padding: ${padding}; box-sizing: border-box;">
            <hr style="border: none; border-top: ${thickness} solid ${color}; margin: 0; padding: 0;" />
          </div>
        `;
      }
      case 'spacer': {
        const height = getResponsiveStyle(node, 'height', '30px');
        return `
          <div ${attr} style="height: ${height}; min-height: ${height}; font-size: 0; line-height: 0; box-sizing: border-box;">
            &nbsp;
          </div>
        `;
      }
      case 'social': {
        const padding = p.padding ? `padding: ${p.padding};` : 'padding: 15px 20px;';
        const align = p.align || 'center';
        const networks = p.networks || [
          { id: 'facebook', name: 'facebook', href: 'https://facebook.com', enabled: true },
          { id: 'twitter', name: 'twitter', href: 'https://twitter.com', enabled: true },
          { id: 'instagram', name: 'instagram', href: 'https://instagram.com', enabled: true }
        ];

        let socialElements = '';
        networks.forEach((net: any) => {
          if (net.enabled) {
            socialElements += `<a href="${net.href}" style="display:inline-block; margin: 0 4px; text-decoration: none;"><div style="width:24px; height:24px; background:#4b5563; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; color:white; font-size:10px;">${net.name.substring(0, 1).toUpperCase()}</div></a>`;
          }
        });

        return `
${indent}<table border="0" cellpadding="0" cellspacing="0" width="100%">
${indent}  <tr>
${indent}    <td style="${padding} text-align: ${align}; cursor: pointer;" ${attr}>
${indent}      ${socialElements}
${indent}    </td>
${indent}  </tr>
${indent}</table>`;
      }
      case 'video': {
        const url = getResponsiveStyle(node, 'thumbnailUrl', 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60');
        const align = getResponsiveStyle(node, 'align', 'center');
        const padding = getResponsiveStyle(node, 'padding', '10px 20px');
        return `
          <div ${attr} style="text-align: ${align}; padding: ${padding}; box-sizing: border-box;">
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
      case 'table': {
        const rows = p.rows || 3;
        const cols = p.cols || 3;
        const showHeaders = p.showHeaders !== false;
        const borderColor = getResponsiveStyle(node, 'borderColor', '#e5e7eb');
        const padding = getResponsiveStyle(node, 'padding', '10px');
        const align = getResponsiveStyle(node, 'align', 'center');
        const width = getResponsiveStyle(node, 'width', '100%');
        
        let tableHtml = `<table style="width: 100%; border-collapse: collapse;">`;
        for (let i = 0; i < rows; i++) {
          tableHtml += `<tr>`;
          for (let j = 0; j < cols; j++) {
            const isHeader = i === 0 && showHeaders;
            const tag = isHeader ? 'th' : 'td';
            const bg = isHeader ? '#f3f4f6' : 'transparent';
            const weight = isHeader ? 'bold' : 'normal';
            tableHtml += `<${tag} style="border: 1px solid ${borderColor}; padding: 8px; background-color: ${bg}; font-weight: ${weight}; text-align: ${align};">Celda ${i+1}-${j+1}</${tag}>`;
          }
          tableHtml += `</tr>`;
        }
        tableHtml += `</table>`;

        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="padding: ${padding}; box-sizing: border-box; width: ${width}; margin: ${align === 'center' ? '0 auto' : align === 'right' ? '0 0 0 auto' : '0 auto 0 0'};">
            ${tableHtml}
          </div>
        `;
      }
      case 'wrapper': {
        const bg = getResponsiveStyle(node, 'backgroundColor', 'transparent');
        const padding = getResponsiveStyle(node, 'padding', '20px 0px');
        let childrenHtml = '';
        if (node.children) {
          childrenHtml = node.children.map(renderNode).join('');
        }
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="background-color: ${bg}; padding: ${padding}; box-sizing: border-box; width: 100%;">
            ${childrenHtml}
          </div>
        `;
      }
      case 'group': {
        const width = getResponsiveStyle(node, 'width', '100%');
        const vAlign = getResponsiveStyle(node, 'verticalAlign', 'top');
        const alignMap: any = { top: 'flex-start', middle: 'center', bottom: 'flex-end' };
        let childrenHtml = '';
        if (node.children) {
          childrenHtml = node.children.map(renderNode).join('');
        }
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: ${alignMap[vAlign] || 'flex-start'}; width: ${width}; box-sizing: border-box;">
            ${childrenHtml}
          </div>
        `;
      }
      case 'hero': {
        const bg = getResponsiveStyle(node, 'backgroundColor', '#000000');
        const bgUrl = getResponsiveStyle(node, 'backgroundImageUrl', '');
        const padding = getResponsiveStyle(node, 'padding', '100px 0px');
        const bgHeight = getResponsiveStyle(node, 'backgroundHeight', '400px');
        let childrenHtml = '';
        if (node.children) {
          childrenHtml = node.children.map(renderNode).join('');
        }
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="background-color: ${bg}; background-image: url('${bgUrl}'); background-size: cover; background-position: center; padding: ${padding}; min-height: ${bgHeight}; box-sizing: border-box; width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            ${childrenHtml}
          </div>
        `;
      }
      case 'flex_layout': {
        const dir = getResponsiveStyle(node, 'direction', 'row');
        const jc = getResponsiveStyle(node, 'justifyContent', 'flex-start');
        const ai = getResponsiveStyle(node, 'alignItems', 'flex-start');
        const gap = getResponsiveStyle(node, 'gap', 16);
        const padding = getResponsiveStyle(node, 'padding', '10px');
        let childrenHtml = '';
        if (node.children) {
          childrenHtml = node.children.map(renderNode).join('');
        }
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="display: flex; flex-direction: ${dir}; justify-content: ${jc}; align-items: ${ai}; gap: ${gap}px; padding: ${padding}; box-sizing: border-box; width: 100%;">
            ${childrenHtml}
          </div>
        `;
      }
      case 'grid_layout': {
        const cols = getResponsiveStyle(node, 'columns', 2);
        const gap = getResponsiveStyle(node, 'gap', 16);
        const padding = getResponsiveStyle(node, 'padding', '10px');
        let childrenHtml = '';
        if (node.children) {
          childrenHtml = node.children.map(renderNode).join('');
        }
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="display: grid; grid-template-columns: repeat(${cols}, 1fr); gap: ${gap}px; padding: ${padding}; box-sizing: border-box; width: 100%;">
            ${childrenHtml}
          </div>
        `;
      }
      case 'slider': {
        const imagesStr = getResponsiveStyle(node, 'images', '');
        const images = imagesStr ? imagesStr.split(',').map((u:string) => u.trim()).filter(Boolean) : [];
        const padding = getResponsiveStyle(node, 'padding', '0px');
        
        let sliderHtml = '<div style="display: flex; overflow-x: auto; gap: 10px; padding-bottom: 10px;">';
        images.forEach((img: string) => {
          sliderHtml += `<img src="${img}" style="height: 200px; object-fit: cover; border-radius: 8px; flex-shrink: 0;" />`;
        });
        if (images.length === 0) sliderHtml += '<div style="padding: 20px; background: #eee; width: 100%; text-align: center;">Agrega imágenes al slider</div>';
        sliderHtml += '</div>';

        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="padding: ${padding}; box-sizing: border-box; width: 100%;">
            ${sliderHtml}
          </div>
        `;
      }
      case 'gallery': {
        const imagesStr = getResponsiveStyle(node, 'images', '');
        const images = imagesStr ? imagesStr.split(',').map((u:string) => u.trim()).filter(Boolean) : [];
        const padding = getResponsiveStyle(node, 'padding', '10px');
        const cols = getResponsiveStyle(node, 'columns', 3);
        const gap = getResponsiveStyle(node, 'gap', 10);
        
        let galleryHtml = `<div style="display: grid; grid-template-columns: repeat(${cols}, 1fr); gap: ${gap}px;">`;
        images.forEach((img: string) => {
          galleryHtml += `<img src="${img}" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 4px;" />`;
        });
        if (images.length === 0) galleryHtml += '<div style="padding: 20px; background: #eee; grid-column: 1 / -1; text-align: center;">Agrega imágenes a la galería</div>';
        galleryHtml += '</div>';

        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="padding: ${padding}; box-sizing: border-box; width: 100%;">
            ${galleryHtml}
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

        // Double click on images
        document.body.addEventListener('dblclick', function(e) {
          const el = e.target.closest('[data-id]');
          if (el) {
            const id = el.getAttribute('data-id');
            if (id && id.startsWith('image-')) {
              window.parent.postMessage({
                type: 'DOUBLE_CLICK_IMAGE',
                id: id
              }, '*');
            }
          }
        }, true);

        // Manage floating toolbar and inline editing
        const updateToolbar = () => {
          let toolbar = document.getElementById('builder-inline-toolbar');
          if (!toolbar) {
            toolbar = document.createElement('div');
            toolbar.id = 'builder-inline-toolbar';
            toolbar.style.cssText = 'position: absolute; display: none; background: #1f2937; color: white; flex-direction: row; gap: 4px; padding: 4px; border-radius: 6px; z-index: 99999; font-size: 11px; font-family: system-ui, sans-serif; pointer-events: auto; box-shadow: 0 4px 15px rgba(0,0,0,0.25); border: 1px solid #374151; align-items: center;';
            toolbar.innerHTML = 
              '  <div id="tb-drag" class="tb-icon-btn" style="cursor: move;" title="Mover">' +
              '    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/></svg>' +
              '  </div>' +
              '  <button id="tb-clone" type="button" class="tb-icon-btn" title="Duplicar">' +
              '    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>' +
              '  </button>' +
              '  <button id="tb-delete" type="button" class="tb-icon-btn" id="tb-delete" style="color: #ef4444;" title="Eliminar">' +
              '    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>' +
              '  </button>';
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
