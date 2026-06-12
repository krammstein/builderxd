import type { BlockNode } from '../types';


// Converts the JSON tree structure into standard MJML
export const compileToMJML = (nodes: BlockNode[]): string => {
  let mjml = '<mjml>\n  <mj-head>\n    <mj-attributes>\n      <mj-all font-family="system-ui, -apple-system, sans-serif" />\n    </mj-attributes>\n  </mj-head>\n  <mj-body>\n';

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
      case 'text': {
        const color = styleAttr('color', 'color');
        const size = styleAttr('fontSize', 'font-size');
        const align = styleAttr('align', 'align');
        const pad = styleAttr('padding', 'padding');
        return `${indent}<mj-text${color}${size}${align}${pad}>${props.content || ''}</mj-text>\n`;
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
        return `${indent}<mj-button${href}${bg}${color}${radius}${pad}${align}>${props.content || ''}</mj-button>\n`;
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
  const getResponsiveStyle = (node: BlockNode, key: string, defaultValue: string) => {
    if (isMobile && node.mobileProperties && node.mobileProperties[key] !== undefined) {
      return node.mobileProperties[key];
    }
    return node.properties[key] !== undefined ? node.properties[key] : defaultValue;
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
      case 'text': {
        const color = getResponsiveStyle(node, 'color', '#1a1a1a');
        const fontSize = getResponsiveStyle(node, 'fontSize', '16px');
        const align = getResponsiveStyle(node, 'align', 'left');
        const padding = getResponsiveStyle(node, 'padding', '10px 20px');
        const content = node.properties.content || 'Escribe aquí tu texto...';
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="color: ${color}; font-size: ${fontSize}; text-align: ${align}; padding: ${padding}; line-height: 1.5; font-family: system-ui, -apple-system, sans-serif; box-sizing: border-box;">
            ${content}
          </div>
        `;
      }
      case 'image': {
        const url = getResponsiveStyle(node, 'url', 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60');
        const alt = getResponsiveStyle(node, 'altText', 'image');
        const align = getResponsiveStyle(node, 'align', 'center');
        const padding = getResponsiveStyle(node, 'padding', '10px 20px');
        const borderRadius = getResponsiveStyle(node, 'borderRadius', '8px');
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="text-align: ${align}; padding: ${padding}; box-sizing: border-box;">
            <img src="${url}" alt="${alt}" style="max-width: 100%; height: auto; border-radius: ${borderRadius}; display: inline-block; vertical-align: middle;" />
          </div>
        `;
      }
      case 'button': {
        const bg = getResponsiveStyle(node, 'backgroundColor', '#4F46E5');
        const color = getResponsiveStyle(node, 'color', '#ffffff');
        const radius = getResponsiveStyle(node, 'borderRadius', '6px');
        const padding = getResponsiveStyle(node, 'padding', '12px 24px');
        const align = getResponsiveStyle(node, 'align', 'center');
        const content = node.properties.content || 'Haga clic aquí';
        const url = node.properties.url || '#';
        return `
          <div data-id="${node.id}" class="builder-element${isSelectedClass}" style="text-align: ${align}; padding: 10px 20px; box-sizing: border-box;">
            <a href="${url}" style="background-color: ${bg}; color: ${color}; border-radius: ${radius}; padding: ${padding}; display: inline-block; text-decoration: none; font-weight: 500; font-family: system-ui, -apple-system, sans-serif;" target="_blank">
              ${content}
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
      default:
        return '';
    }
  };

  const bodyHtml = nodes.map(renderNode).join('');

  return `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Email Preview</title>
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
        // Send selected ID back to parent window
        document.body.addEventListener('click', function(e) {
          const el = e.target.closest('[data-id]');
          if (el) {
            e.preventDefault();
            e.stopPropagation();
            window.parent.postMessage({
              type: 'SELECT_ELEMENT',
              id: el.getAttribute('data-id')
            }, '*');
          }
        }, true);
      </script>
    </body>
    </html>
  `;
};
