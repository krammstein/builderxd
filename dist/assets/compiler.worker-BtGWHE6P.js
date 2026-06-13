(function(){let e=[`arial`,`georgia`,`verdana`,`tahoma`,`times new roman`,`courier new`,`trebuchet ms`,`sans-serif`,`serif`,`monospace`,`system-ui`,`-apple-system`],t=(e,t)=>{let n=new Set;t&&n.add(t);let r=e=>{e.properties?.fontFamily&&n.add(e.properties.fontFamily),e.children&&e.children.forEach(r)};return e.forEach(r),Array.from(n)},n=(n,r)=>{let i=t(n,r?.globalFontFamily).filter(t=>!e.includes(t.toLowerCase())),a=``;i.forEach(e=>{let t=e.replace(/\s+/g,`+`);a+=`    <mj-font name="${e}" href="https://fonts.googleapis.com/css?family=${t}" />\n`});let o=r?.title?`    <mj-title>${r.title}</mj-title>\n`:``,s=r?.previewText?`    <mj-preview>${r.previewText}</mj-preview>\n`:``,c=r?.globalFontFamily?` font-family="${r.globalFontFamily}"`:` font-family="system-ui, -apple-system, sans-serif"`,l=r?.globalTextColor?` color="${r.globalTextColor}"`:``,u=r?.breakpoint?`    <mj-breakpoint width="${r.breakpoint}" />\n`:``,d=r?.globalBackgroundColor?` background-color="${r.globalBackgroundColor}"`:``,f=`<mjml>\n  <mj-head>\n${o}${s}${u}${a}    <mj-attributes>\n      <mj-all${c}${l} />\n    </mj-attributes>\n  </mj-head>\n  <mj-body${d}>\n`,p=(e,t=`    `)=>{let n=e.properties,r=(e,t)=>n[e]===void 0?``:` ${t}="${n[e]}"`,i=` data-b-type="${e.type}" data-b-props="${JSON.stringify(n).replace(/"/g,`&quot;`)}"`;switch(e.type){case`section`:{let r=`${t}<mj-section${n.backgroundColor?` background-color="${n.backgroundColor}"`:``}${n.padding?` padding="${n.padding}"`:``}${i}>\n`;return e.children&&e.children.forEach(e=>{r+=p(e,t+`  `)}),r+=`${t}</mj-section>\n`,r}case`column`:{let r=`${t}<mj-column${n.width?` width="${n.width}"`:``}${n.padding?` padding="${n.padding}"`:``}${i}>\n`;return e.children&&e.children.forEach(e=>{r+=p(e,t+`  `)}),r+=`${t}</mj-column>\n`,r}case`text`:case`heading`:case`paragraph`:return`${t}<mj-text${r(`color`,`color`)}${r(`fontSize`,`font-size`)}${r(`align`,`align`)}${r(`padding`,`padding`)}${r(`fontFamily`,`font-family`)}${r(`fontWeight`,`font-weight`)}${r(`fontStyle`,`font-style`)}${r(`textDecoration`,`text-decoration`)}${i}>${n.content||``}</mj-text>\n`;case`image`:return`${t}<mj-image${n.url?` src="${n.url}"`:` src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60"`}${n.altText?` alt="${n.altText}"`:` alt="image"`}${r(`align`,`align`)}${r(`padding`,`padding`)}${r(`borderRadius`,`border-radius`)}${i} />\n`;case`button`:return`${t}<mj-button${n.url?` href="${n.url}"`:` href="#"`}${r(`backgroundColor`,`background-color`)}${r(`color`,`color`)}${r(`borderRadius`,`border-radius`)}${r(`padding`,`padding`)}${r(`align`,`align`)}${r(`fontFamily`,`font-family`)}${r(`fontSize`,`font-size`)}${i}>${n.content||``}</mj-button>\n`;case`divider`:return`${t}<mj-divider${r(`color`,`border-color`)}${r(`thickness`,`border-width`)}${r(`padding`,`padding`)}${i} />\n`;case`spacer`:return`${t}<mj-spacer${r(`height`,`height`)}${i} />\n`;case`social`:{let e=n.align?` align="${n.align}"`:``,r=n.padding?` padding="${n.padding}"`:``,a=n.networks||[{id:`facebook`,name:`facebook`,href:`https://facebook.com`,enabled:!0},{id:`twitter`,name:`twitter`,href:`https://twitter.com`,enabled:!0},{id:`instagram`,name:`instagram`,href:`https://instagram.com`,enabled:!0}],o=``;return a.forEach(e=>{e.enabled&&(o+=`${t}  <mj-social-element name="${e.name}" href="${e.href}" />\n`)}),`${t}<mj-social${e}${r}${i}>\n${o}${t}</mj-social>\n`}case`video`:return`${t}<mj-image${n.thumbnailUrl?` src="${n.thumbnailUrl}"`:` src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60"`}${n.videoUrl?` href="${n.videoUrl}"`:` href="#"`}${r(`align`,`align`)}${r(`padding`,`padding`)}${i} />\n`;case`custom_html`:return`${t}<mj-raw${i}>${n.htmlContent||`<div style="padding: 20px; text-align: center;">HTML Personalizado</div>`}</mj-raw>\n`;case`countdown`:return`${t}<mj-text${r(`align`,`align`)}${r(`padding`,`padding`)}${r(`color`,`color`)} font-size="20px"${i}>Contador: ${n.endTime||`2026-12-31`}</mj-text>\n`;case`accordion`:return`${t}<mj-accordion${i}>
${t}  <mj-accordion-element>
${t}    <mj-accordion-title>${n.title||`Título del Acordeón`}</mj-accordion-title>
${t}    <mj-accordion-text>${n.content||`Detalles del acordeón...`}</mj-accordion-text>
${t}  </mj-accordion-element>
${t}</mj-accordion>\n`;case`carousel`:{let e=n.images?n.images.split(`,`):[`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60`,`https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60`],r=`${t}<mj-carousel${i}>\n`;return e.forEach(e=>{r+=`${t}  <mj-carousel-image src="${e.trim()}" />\n`}),r+=`${t}</mj-carousel>\n`,r}case`icon`:{let e=n.iconName||`Star`,r=n.size||24,a=n.color||`#4f46e5`;return`${t}<mj-text align="${n.align||`center`}" color="${a}" font-size="${r}px"${n.url?` href="${n.url}"`:``}${i}>${e===`Star`?`★`:e===`Heart`?`♥`:e===`Smile`?`☺`:e===`Settings`?`⚙`:e===`Mail`?`✉`:`ℹ`}</mj-text>\n`}case`nav_menu`:{let e=n.align||`center`,r=n.color||`#4f46e5`,a=Array.isArray(n.items)?n.items:[],o=`${t}<mj-navbar align="${e}"${i}>\n`;return a.forEach(e=>{o+=`${t}  <mj-navbar-link href="${e.url||`#`}" color="${r}">${e.label||`Link`}</mj-navbar-link>\n`}),o+=`${t}</mj-navbar>\n`,o}case`image_text`:{let e=n.imageUrl||`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60`,r=n.text||`Texto descriptivo al lado de la imagen.`,a=n.imageWidth||40,o=n.imagePosition||`left`,s=`${t}  <mj-column width="${a}%"><mj-image src="${e}" /></mj-column>\n`,c=`${t}  <mj-column width="${100-a}%"><mj-text>${r}</mj-text></mj-column>\n`;return`${t}<mj-section${i}>\n${o===`left`?s+c:c+s}${t}</mj-section>\n`}case`product_card`:{let e=n.imageUrl||`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60`,r=n.title||`Título Producto`,a=n.price||`$10.00`,o=n.buttonText||`Comprar`,s=n.buttonUrl||`#`,c=n.color||`#4f46e5`;return`${t}<mj-section background-color="${n.backgroundColor||`#ffffff`}" padding="${n.padding||`15px`}"${i}>
${t}  <mj-column>
${t}    <mj-image src="${e}" width="150px" />
${t}    <mj-text align="center" font-size="16px" font-weight="bold">${r}</mj-text>
${t}    <mj-text align="center" font-size="14px" color="${c}">${a}</mj-text>
${t}    <mj-button href="${s}" background-color="${c}">${o}</mj-button>
${t}  </mj-column>
${t}</mj-section>\n`}case`quote`:{let e=n.text||`Esta es una excelente cita o testimonio.`,r=n.author||`Autor de Cita`,a=n.color||`#555555`;return`${t}<mj-section background-color="${n.backgroundColor||`#f9f9f9`}" padding="${n.padding||`15px`}"${i}>
${t}  <mj-column>
${t}    <mj-text font-style="italic" color="${a}" align="center">"${e}"</mj-text>
${t}    <mj-text font-weight="bold" align="center">- ${r}</mj-text>
${t}  </mj-column>
${t}</mj-section>\n`}case`wrapper`:{let r=`${t}<mj-wrapper${n.backgroundColor?` background-color="${n.backgroundColor}"`:``}${n.padding?` padding="${n.padding}"`:``}${i}>\n`;return e.children&&e.children.forEach(e=>{r+=p(e,t+`  `)}),r+=`${t}</mj-wrapper>\n`,r}case`group`:{let r=`${t}<mj-group${n.width?` width="${n.width}"`:``}${n.verticalAlign?` vertical-align="${n.verticalAlign}"`:``}${i}>\n`;return e.children&&e.children.forEach(e=>{r+=p(e,t+`  `)}),r+=`${t}</mj-group>\n`,r}case`hero`:{let r=`${t}<mj-hero${n.mode?` mode="${n.mode}"`:``}${n.backgroundImageUrl?` background-url="${n.backgroundImageUrl}"`:``}${n.backgroundColor?` background-color="${n.backgroundColor}"`:``}${n.backgroundWidth?` background-width="${n.backgroundWidth}"`:``}${n.backgroundHeight?` background-height="${n.backgroundHeight}"`:``}${n.padding?` padding="${n.padding}"`:``}${i}>\n`;return e.children&&e.children.forEach(e=>{r+=p(e,t+`  `)}),r+=`${t}</mj-hero>\n`,r}default:return``}};return n.forEach(e=>{f+=p(e)}),f+=`  </mj-body>
</mjml>`,f},r=(n,r=null,i=!1,a)=>{let o=(e,t,n)=>i&&e.mobileProperties&&e.mobileProperties[t]!==void 0?e.mobileProperties[t]:e.properties[t]===void 0?n:e.properties[t],s=e=>{if(e==null)return`0px`;let t=String(e);return t?/^\d+$/.test(t)?`${t}px`:t:`0px`},c=e=>{let t=e.id===r?` builder-element-selected`:``,n=e.properties,a=` data-b-type="${e.type}" data-b-props="${JSON.stringify(n).replace(/"/g,`&quot;`)}"`,l=`data-id="${e.id}" class="builder-element${t}"${a}`,u=`          `;switch(e.type){case`section`:return`
          <table ${l} border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: ${o(e,`backgroundColor`,`transparent`)}; padding: ${o(e,`padding`,`20px 0px`)}; box-sizing: border-box;">
            <tr>
              <td align="center" style="font-size: 0;">
                <!--[if mso]>
                <table align="center" border="0" cellspacing="0" cellpadding="0" width="600">
                  <tr>
                    <td align="center" valign="top" width="600">
                <![endif]-->
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="display: flex; flex-direction: ${i?`column`:`row`}; width: 100%;">
                      ${e.children?e.children.map(c).join(``):``}
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
        `;case`column`:{let t=o(e,`width`,`100%`),n=o(e,`padding`,`10px`);return`
          <div ${l} style="flex: 1; min-width: ${i?`100%`:`0`}; width: ${i?`100%`:t}; padding: ${n}; box-sizing: border-box;">
            ${e.children?e.children.map(c).join(``):``}
          </div>
        `}case`text`:case`heading`:case`paragraph`:{let t=o(e,`fontFamily`,`Arial`);return`
          <div ${l} data-prop="content" style="color: ${o(e,`color`,`#1a1a1a`)}; font-size: ${o(e,`fontSize`,`16px`)}; text-align: ${o(e,`align`,`left`)}; padding: ${o(e,`padding`,`10px 20px`)}; margin: ${o(e,`margin`,`0px`)}; border-radius: ${o(e,`borderRadius`,`0px`)}; line-height: 1.5; font-family: ${t}; font-weight: ${o(e,`fontWeight`,e.type.startsWith(`heading`)?`bold`:`normal`)}; font-style: ${o(e,`fontStyle`,`normal`)}; text-decoration: ${o(e,`textDecoration`,`none`)}; box-sizing: border-box;">
            ${n.content||`Escribe aquí tu texto...`}
          </div>
        `}case`image`:{let t=o(e,`url`,`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60`),n=o(e,`altText`,`image`);return`
          <div ${l} style="text-align: ${o(e,`align`,`center`)}; padding: ${o(e,`padding`,`10px 20px`)}; box-sizing: border-box;">
            <img src="${t}" alt="${n}" style="max-width: 100%; height: auto; border-radius: ${s(o(e,`borderRadius`,`8px`))}; display: inline-block; vertical-align: middle;" />
          </div>
        `}case`button`:{let t=o(e,`fontFamily`,`Arial`),r=o(e,`backgroundColor`,`#4F46E5`),i=o(e,`color`,`#ffffff`),a=s(o(e,`borderRadius`,`6px`)),c=o(e,`padding`,`12px 24px`),u=o(e,`align`,`center`),d=o(e,`fontSize`,`16px`),f=n.content||`Haga clic aquí`;return`
          <div ${l} style="text-align: ${u}; padding: 10px 20px; box-sizing: border-box;">
            <a href="${n.url||`#`}" style="background-color: ${r}; color: ${i}; border-radius: ${a}; padding: ${c}; display: inline-block; text-decoration: none; font-weight: 500; font-family: ${t}; font-size: ${d};" target="_blank">
              <span data-prop="content">${f}</span>
            </a>
          </div>
        `}case`divider`:{let t=o(e,`color`,`#e5e7eb`),n=o(e,`thickness`,`2px`);return`
          <div ${l} style="padding: ${o(e,`padding`,`15px 20px`)}; box-sizing: border-box;">
            <hr style="border: none; border-top: ${n} solid ${t}; margin: 0; padding: 0;" />
          </div>
        `}case`spacer`:{let t=o(e,`height`,`30px`);return`
          <div ${l} style="height: ${t}; min-height: ${t}; font-size: 0; line-height: 0; box-sizing: border-box;">
            &nbsp;
          </div>
        `}case`social`:{let e=n.padding?`padding: ${n.padding};`:`padding: 15px 20px;`,t=n.align||`center`,r=n.networks||[{id:`facebook`,name:`facebook`,href:`https://facebook.com`,enabled:!0},{id:`twitter`,name:`twitter`,href:`https://twitter.com`,enabled:!0},{id:`instagram`,name:`instagram`,href:`https://instagram.com`,enabled:!0}],i=``;return r.forEach(e=>{e.enabled&&(i+=`<a href="${e.href}" style="display:inline-block; margin: 0 4px; text-decoration: none;"><div style="width:24px; height:24px; background:#4b5563; border-radius:50%; display:inline-flex; align-items:center; justify-content:center; color:white; font-size:10px;">${e.name.substring(0,1).toUpperCase()}</div></a>`)}),`
${u}<table border="0" cellpadding="0" cellspacing="0" width="100%">
${u}  <tr>
${u}    <td style="${e} text-align: ${t}; cursor: pointer;" ${l}>
${u}      ${i}
${u}    </td>
${u}  </tr>
${u}</table>`}case`video`:{let t=o(e,`thumbnailUrl`,`https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60`);return`
          <div ${l} style="text-align: ${o(e,`align`,`center`)}; padding: ${o(e,`padding`,`10px 20px`)}; box-sizing: border-box;">
            <div style="position: relative; display: inline-block; cursor: pointer; max-width: 100%;">
              <img src="${t}" style="max-width: 100%; height: auto; border-radius: 8px; display: block;" />
              <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 64px; height: 64px; background: rgba(0,0,0,0.7); border-radius: 50%; display: flex; align-items: center; justify-content: center; border: 2px solid white;">
                <div style="width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 16px solid white; margin-left: 6px;"></div>
              </div>
            </div>
          </div>
        `}case`custom_html`:{let n=e.properties.htmlContent||`<div style="padding: 20px; text-align: center; border: 2px dashed #ccc; font-family: sans-serif; font-size: 13px; color: #666;">HTML Personalizado</div>`;return`
          <div data-id="${e.id}" class="builder-element${t}" style="box-sizing: border-box;">
            ${n}
          </div>
        `}case`countdown`:{let n=o(e,`align`,`center`),r=o(e,`padding`,`15px 20px`),i=e.properties.endTime||`2026-12-31`;return`
          <div data-id="${e.id}" class="builder-element${t}" style="text-align: ${n}; padding: ${r}; box-sizing: border-box; font-family: sans-serif;">
            <div style="display: inline-flex; gap: 8px; justify-content: ${n===`center`?`center`:n===`right`?`flex-end`:`flex-start`};">
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
            <div style="font-size: 10px; color: #6b7280; margin-top: 6px;">Termina el: ${i}</div>
          </div>
        `}case`accordion`:{let n=e.properties.title||`Título del Acordeón`,r=e.properties.content||`Detalles del acordeón...`,i=o(e,`padding`,`10px 20px`);return`
          <div data-id="${e.id}" class="builder-element${t}" style="padding: ${i}; box-sizing: border-box; font-family: sans-serif;">
            <details style="border: 1px solid #e5e7eb; border-radius: 6px; padding: 10px; background: white;" open>
              <summary style="font-weight: 600; cursor: pointer; outline: none; list-style: none; display: flex; justify-content: space-between; align-items: center;">
                <span data-prop="title">${n}</span>
                <span style="font-size: 12px; opacity: 0.5;">▼</span>
              </summary>
              <div data-prop="content" style="margin-top: 8px; color: #4b5563; font-size: 14px; line-height: 1.5;">
                ${r}
              </div>
            </details>
          </div>
        `}case`carousel`:{let n=e.properties.images||``,r=n?n.split(`,`):[`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60`,`https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60`],i=o(e,`padding`,`10px 20px`);return`
          <div data-id="${e.id}" class="builder-element${t}" style="padding: ${i}; box-sizing: border-box; text-align: center;">
            <div style="display: flex; gap: 8px; justify-content: center; overflow: hidden; max-width: 100%;">
              ${r.map(e=>`
                <img src="${e.trim()}" style="width: 80px; height: 60px; object-fit: cover; border-radius: 4px; border: 1px solid #e5e7eb;" />
              `).join(``)}
            </div>
            <div style="font-size: 9px; color: #9ca3af; margin-top: 4px;">Carrusel de ${r.length} imágenes (Vista Compacta)</div>
          </div>
        `}case`icon`:{let n=e.properties.iconName||`Star`,r=o(e,`size`,`24px`),i=o(e,`color`,`#4f46e5`),a=o(e,`align`,`center`),s=e.properties.url||`#`,c=n===`Star`?`★`:n===`Heart`?`♥`:n===`Smile`?`☺`:n===`Settings`?`⚙`:n===`Mail`?`✉`:`ℹ`;return`
          <div data-id="${e.id}" class="builder-element${t}" style="text-align: ${a}; padding: 10px 20px; box-sizing: border-box;">
            <a href="${s}" style="text-decoration: none; color: ${i}; font-size: ${r};" target="_blank">
              ${c}
            </a>
          </div>
        `}case`nav_menu`:{let n=o(e,`align`,`center`),r=o(e,`color`,`#4f46e5`),i=o(e,`backgroundColor`,`transparent`),a=o(e,`fontFamily`,`Arial`),s=o(e,`fontSize`,`14px`),c=e.properties.separator||` | `,l=o(e,`padding`,`10px`),u=Array.isArray(e.properties.items)?e.properties.items:[];return`
          <div data-id="${e.id}" class="builder-element${t}" style="text-align: ${n}; background-color: ${i}; padding: ${l}; font-family: ${a}; font-size: ${s}; box-sizing: border-box;">
            ${u.map((e,t)=>`
              <a href="${e.url||`#`}" style="color: ${r}; text-decoration: none; font-weight: 500;">${e.label||`Link`}</a>
              ${t<u.length-1?`<span style="color: #9ca3af; margin: 0 4px;">${c}</span>`:``}
            `).join(``)}
          </div>
        `}case`image_text`:{let n=o(e,`imageUrl`,`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60`),r=e.properties.text||`Texto descriptivo de ejemplo.`,a=o(e,`imageWidth`,`40`),s=e.properties.imagePosition||`left`,c=o(e,`fontFamily`,`Arial`),l=o(e,`fontSize`,`14px`),u=o(e,`color`,`#333333`),d=o(e,`padding`,`10px`),f=s===`right`;return`
          <div data-id="${e.id}" class="builder-element${t}" style="padding: ${d}; box-sizing: border-box; font-family: ${c}; font-size: ${l}; color: ${u}; display: flex; flex-direction: ${i?`column`:f?`row-reverse`:`row`}; align-items: center; gap: 15px;">
            <div style="width: ${i?`100%`:a+`%`}; shrink: 0;">
              <img src="${n}" style="max-width: 100%; height: auto; border-radius: 4px; display: block;" />
            </div>
            <div data-prop="text" style="flex: 1; min-width: 0;">
              ${r}
            </div>
          </div>
        `}case`product_card`:{let n=o(e,`imageUrl`,`https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60`),r=e.properties.title||`Título Producto`,i=e.properties.price||`$10.00`,a=e.properties.buttonText||`Comprar`,c=e.properties.buttonUrl||`#`,l=o(e,`color`,`#4f46e5`),u=o(e,`backgroundColor`,`#ffffff`),d=s(o(e,`borderRadius`,`8px`)),f=o(e,`padding`,`15px`);return`
          <div data-id="${e.id}" class="builder-element${t}" style="padding: ${f}; box-sizing: border-box;">
            <div style="background-color: ${u}; border-radius: ${d}; border: 1px solid #e5e7eb; padding: 15px; text-align: center; font-family: Arial, sans-serif;">
              <img src="${n}" style="max-width: 150px; height: auto; border-radius: 4px; margin: 0 auto 10px; display: block;" />
              <h4 data-prop="title" style="margin: 0 0 5px; font-size: 16px; color: #1f2937; font-weight: bold;">${r}</h4>
              <p data-prop="price" style="margin: 0 0 12px; font-size: 14px; color: #6b7280;">${i}</p>
              <a href="${c}" data-prop="buttonText" style="background-color: ${l}; color: #ffffff; padding: 8px 16px; border-radius: 4px; display: inline-block; text-decoration: none; font-size: 13px; font-weight: 500;" target="_blank">
                ${a}
              </a>
            </div>
          </div>
        `}case`quote`:{let n=e.properties.text||`Esta es una excelente cita o testimonio.`,r=e.properties.author||`Autor de Cita`,i=o(e,`color`,`#555555`),a=o(e,`backgroundColor`,`#f9f9f9`),c=s(o(e,`borderRadius`,`4px`)),l=o(e,`padding`,`15px`);return`
          <div data-id="${e.id}" class="builder-element${t}" style="padding: ${l}; box-sizing: border-box;">
            <div style="background-color: ${a}; border-radius: ${c}; padding: 20px; text-align: center; font-family: Arial, sans-serif; border-left: 4px solid #4f46e5;">
              <p data-prop="text" style="margin: 0 0 8px; font-style: italic; color: ${i}; font-size: 15px; line-height: 1.5;">"${n}"</p>
              <h5 data-prop="author" style="margin: 0; font-size: 13px; color: #1f2937; font-weight: bold;">- ${r}</h5>
            </div>
          </div>
        `}case`table`:{let r=n.rows||3,i=n.cols||3,a=n.showHeaders!==!1,s=o(e,`borderColor`,`#e5e7eb`),c=o(e,`padding`,`10px`),l=o(e,`align`,`center`),u=o(e,`width`,`100%`),d=`<table style="width: 100%; border-collapse: collapse;">`;for(let e=0;e<r;e++){d+=`<tr>`;for(let t=0;t<i;t++){let n=e===0&&a,r=n?`th`:`td`;d+=`<${r} style="border: 1px solid ${s}; padding: 8px; background-color: ${n?`#f3f4f6`:`transparent`}; font-weight: ${n?`bold`:`normal`}; text-align: ${l};">Celda ${e+1}-${t+1}</${r}>`}d+=`</tr>`}return d+=`</table>`,`
          <div data-id="${e.id}" class="builder-element${t}" style="padding: ${c}; box-sizing: border-box; width: ${u}; margin: ${l===`center`?`0 auto`:l===`right`?`0 0 0 auto`:`0 auto 0 0`};">
            ${d}
          </div>
        `}case`wrapper`:{let n=o(e,`backgroundColor`,`transparent`),r=o(e,`padding`,`20px 0px`),i=``;return e.children&&(i=e.children.map(c).join(``)),`
          <div data-id="${e.id}" class="builder-element${t}" style="background-color: ${n}; padding: ${r}; box-sizing: border-box; width: 100%;">
            ${i}
          </div>
        `}case`group`:{let n=o(e,`width`,`100%`),r=o(e,`verticalAlign`,`top`),i={top:`flex-start`,middle:`center`,bottom:`flex-end`},a=``;return e.children&&(a=e.children.map(c).join(``)),`
          <div data-id="${e.id}" class="builder-element${t}" style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: ${i[r]||`flex-start`}; width: ${n}; box-sizing: border-box;">
            ${a}
          </div>
        `}case`hero`:{let n=o(e,`backgroundColor`,`#000000`),r=o(e,`backgroundImageUrl`,``),i=o(e,`padding`,`100px 0px`),a=o(e,`backgroundHeight`,`400px`),s=``;return e.children&&(s=e.children.map(c).join(``)),`
          <div data-id="${e.id}" class="builder-element${t}" style="background-color: ${n}; background-image: url('${r}'); background-size: cover; background-position: center; padding: ${i}; min-height: ${a}; box-sizing: border-box; width: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
            ${s}
          </div>
        `}case`flex_layout`:{let n=o(e,`direction`,`row`),r=o(e,`justifyContent`,`flex-start`),i=o(e,`alignItems`,`flex-start`),a=o(e,`gap`,16),s=o(e,`padding`,`10px`),l=``;return e.children&&(l=e.children.map(c).join(``)),`
          <div data-id="${e.id}" class="builder-element${t}" style="display: flex; flex-direction: ${n}; justify-content: ${r}; align-items: ${i}; gap: ${a}px; padding: ${s}; box-sizing: border-box; width: 100%;">
            ${l}
          </div>
        `}case`grid_layout`:{let n=o(e,`columns`,2),r=o(e,`gap`,16),i=o(e,`padding`,`10px`),a=``;return e.children&&(a=e.children.map(c).join(``)),`
          <div data-id="${e.id}" class="builder-element${t}" style="display: grid; grid-template-columns: repeat(${n}, 1fr); gap: ${r}px; padding: ${i}; box-sizing: border-box; width: 100%;">
            ${a}
          </div>
        `}case`slider`:{let n=o(e,`images`,``),r=n?n.split(`,`).map(e=>e.trim()).filter(Boolean):[],i=o(e,`padding`,`0px`),a=`<div style="display: flex; overflow-x: auto; gap: 10px; padding-bottom: 10px;">`;return r.forEach(e=>{a+=`<img src="${e}" style="height: 200px; object-fit: cover; border-radius: 8px; flex-shrink: 0;" />`}),r.length===0&&(a+=`<div style="padding: 20px; background: #eee; width: 100%; text-align: center;">Agrega imágenes al slider</div>`),a+=`</div>`,`
          <div data-id="${e.id}" class="builder-element${t}" style="padding: ${i}; box-sizing: border-box; width: 100%;">
            ${a}
          </div>
        `}case`gallery`:{let n=o(e,`images`,``),r=n?n.split(`,`).map(e=>e.trim()).filter(Boolean):[],i=o(e,`padding`,`10px`),a=`<div style="display: grid; grid-template-columns: repeat(${o(e,`columns`,3)}, 1fr); gap: ${o(e,`gap`,10)}px;">`;return r.forEach(e=>{a+=`<img src="${e}" style="width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 4px;" />`}),r.length===0&&(a+=`<div style="padding: 20px; background: #eee; grid-column: 1 / -1; text-align: center;">Agrega imágenes a la galería</div>`),a+=`</div>`,`
          <div data-id="${e.id}" class="builder-element${t}" style="padding: ${i}; box-sizing: border-box; width: 100%;">
            ${a}
          </div>
        `}default:return``}},l=n.map(c).join(``),u=t(n,a?.globalFontFamily).filter(t=>!e.includes(t.toLowerCase())),d=``;u.forEach(e=>{let t=e.replace(/\s+/g,`+`);d+=`      <link href="https://fonts.googleapis.com/css2?family=${t}:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />\n`});let f=a?.title||`Email Preview`,p=a?.previewText?`\n      <div style="display: none; max-height: 0px; overflow: hidden;">${a.previewText}</div>`:``,m=a?.globalBackgroundColor||`#f7f9fa`,h=a?.globalFontFamily?`${a.globalFontFamily}, system-ui, sans-serif`:`system-ui, -apple-system, sans-serif`,g=a?.globalTextColor?`color: ${a.globalTextColor};`:``;return`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${f}</title>
${d}
      <style>
        body {
          margin: 0;
          padding: 20px 10px;
          background-color: ${m};
          font-family: ${h};
          ${g}
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
    <body>${p}
      <div id="builder-canvas-wrapper" style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border-radius: 8px; overflow: hidden; min-height: 400px; border: 1px solid #e5e7eb;">
        ${l}
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
            const isText = id && (id.startsWith('text-') || id.startsWith('heading') || id.startsWith('paragraph') || id.startsWith('button-'));
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
      <\/script>
    </body>
    </html>
  `};self.onmessage=e=>{let{nodes:t,selectedId:i,isMobile:a}=e.data;try{let e=n(t),o=r(t,i,a);self.postMessage({success:!0,mjml:e,html:o})}catch(e){self.postMessage({success:!1,error:e.message||`Error compiling template`})}}})();