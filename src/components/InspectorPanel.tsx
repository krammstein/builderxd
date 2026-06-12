import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import type { BlockNode } from '../types';
import { Sliders, Smartphone, Trash2 } from 'lucide-react';
import { RichTextEditor } from './inspector/RichTextEditor';

// Import Custom Widgets
import { ColorPicker } from './inspector/ColorPicker';
import { AlignButtonGroup } from './inspector/AlignButtonGroup';
import { NumberStepper } from './inspector/NumberStepper';
import { SliderWithInput } from './inspector/SliderWithInput';
import { PaddingEditor } from './inspector/PaddingEditor';
import { MarginEditor } from './inspector/MarginEditor';
import { BorderRadiusEditor } from './inspector/BorderRadiusEditor';
import { CustomSelect } from './inspector/CustomSelect';
import { FontFamilyPicker } from './inspector/FontFamilyPicker';
import { DateTimePicker } from './inspector/DateTimePicker';
import { LinkInput } from './inspector/LinkInput';
import { VisibilityToggle } from './inspector/VisibilityToggle';

interface InspectorPanelProps {
  selectedNode: BlockNode | null;
  onUpdateProperties: (id: string, properties: Record<string, any>, isMobile: boolean) => void;
  onDeleteNode: (id: string) => void;
  readOnly?: boolean;
  onOpenAssetManager?: (currentUrl: string, onSelect: (url: string) => void) => void;
  googleFonts?: string[];
}

export const InspectorPanel: React.FC<InspectorPanelProps> = ({
  selectedNode,
  onUpdateProperties,
  onDeleteNode,
  readOnly = false,
  onOpenAssetManager,
  googleFonts
}) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'general' | 'mobile'>('general');

  if (!selectedNode) {
    return (
      <aside className="w-[300px] bg-bg-panel border-l border-border-color flex items-center justify-center h-full">
        <div className="text-center text-text-muted p-5 flex flex-col items-center gap-2.5">
          <Sliders size={32} />
          <p className="text-xs">{t('noElementSelected')}</p>
        </div>
      </aside>
    );
  }

  const isMobileTab = activeTab === 'mobile';
  const currentProperties = isMobileTab
    ? { ...selectedNode.properties, ...(selectedNode.mobileProperties || {}) }
    : selectedNode.properties;

  const handleChange = (key: string, value: any) => {
    onUpdateProperties(selectedNode.id, { [key]: value }, isMobileTab);
  };

  const handleVisibilityChange = (desktopVal: boolean, mobileVal: boolean) => {
    onUpdateProperties(selectedNode.id, { desktop: desktopVal, mobile: mobileVal }, false);
  };

  const renderLabel = (label: string, key: string) => (
    <div className="flex items-center justify-between select-none">
      <label className="text-[11.5px] font-medium text-text-secondary">{label}</label>
      {isMobileTab && selectedNode.mobileProperties?.[key] !== undefined && (
        <span className="bg-primary text-white text-[9px] font-bold px-1 py-0.5 rounded-xs uppercase" title="Sobrescrito en móvil">
          Móvil
        </span>
      )}
    </div>
  );

  const renderAssetField = (label: string, key: string) => {
    const val = currentProperties[key] || '';
    return (
      <div className="flex flex-col gap-1.5">
        {renderLabel(label, key)}
        <div className="flex gap-1.5 w-full items-center">
          <div className="flex-1">
            <LinkInput value={val} onChange={(newVal) => handleChange(key, newVal)} disabled={readOnly} />
          </div>
          {onOpenAssetManager && (
            <button
              type="button"
              onClick={() => onOpenAssetManager(val, (url) => handleChange(key, url))}
              className="p-2 border border-border-color bg-bg-hover text-text-secondary hover:text-text-primary rounded-md flex items-center justify-center cursor-pointer shrink-0 transition-all hover:bg-bg-panel"
              title="Abrir gestor de archivos"
            >
              📁
            </button>
          )}
        </div>
      </div>
    );
  };

  const renderContentProperties = () => {
    const p = currentProperties;

    switch (selectedNode.type) {
      case 'section':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Sección</h3>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color de Fondo', 'backgroundColor')}
              <ColorPicker value={p.backgroundColor || '#ffffff'} onChange={(val) => handleChange('backgroundColor', val)} disabled={readOnly} />
            </div>
            {renderAssetField('Fondo de Imagen (URL)', 'backgroundImage')}
            <div className="flex flex-col gap-1.5">
              {renderLabel('Posición del Fondo', 'backgroundPosition')}
              <CustomSelect
                value={p.backgroundPosition || 'center'}
                options={[
                  { label: 'Centro', value: 'center' },
                  { label: 'Superior', value: 'top' },
                  { label: 'Inferior', value: 'bottom' },
                  { label: 'Cubrir (Cover)', value: 'cover' }
                ]}
                onChange={(val) => handleChange('backgroundPosition', val)}
                disabled={readOnly}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Ancho Máximo', 'width')}
              <NumberStepper value={p.width || 600} onChange={(val) => handleChange('width', val)} min={300} max={800} unit="px" disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <PaddingEditor value={p.padding || '20px'} onChange={(val) => handleChange('padding', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <MarginEditor value={p.margin || '0px'} onChange={(val) => handleChange('margin', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <BorderRadiusEditor value={p.borderRadius || '0px'} onChange={(val) => handleChange('borderRadius', val)} disabled={readOnly} />
            </div>
            {!isMobileTab && (
              <VisibilityToggle
                desktop={p.desktop !== false}
                mobile={p.mobile !== false}
                onChange={handleVisibilityChange}
                disabled={readOnly}
              />
            )}
          </div>
        );

      case 'column':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Columna</h3>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Ancho (%)', 'width')}
              <SliderWithInput value={p.width || 100} onChange={(val) => handleChange('width', val)} min={10} max={100} unit="%" disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Alineación Vertical', 'verticalAlign')}
              <CustomSelect
                value={p.verticalAlign || 'top'}
                options={[
                  { label: 'Superior', value: 'top' },
                  { label: 'Centrado', value: 'middle' },
                  { label: 'Inferior', value: 'bottom' }
                ]}
                onChange={(val) => handleChange('verticalAlign', val)}
                disabled={readOnly}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color de Fondo', 'backgroundColor')}
              <ColorPicker value={p.backgroundColor || 'transparent'} onChange={(val) => handleChange('backgroundColor', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <PaddingEditor value={p.padding || '0px'} onChange={(val) => handleChange('padding', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <MarginEditor value={p.margin || '0px'} onChange={(val) => handleChange('margin', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <BorderRadiusEditor value={p.borderRadius || '0px'} onChange={(val) => handleChange('borderRadius', val)} disabled={readOnly} />
            </div>
          </div>
        );

      case 'text':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Propiedades de Texto Libre</h3>
            {!isMobileTab && (
              <div className="flex flex-col gap-1.5 builder-rich-text-editor">
                {renderLabel('Contenido Enriquecido', 'content')}
                <RichTextEditor
                  value={p.content || ''}
                  onChange={(val) => handleChange('content', val)}
                  disabled={readOnly}
                />
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              {renderLabel('Tipografía Base', 'fontFamily')}
              <FontFamilyPicker value={p.fontFamily || 'Arial'} onChange={(val) => handleChange('fontFamily', val)} disabled={readOnly} googleFonts={googleFonts} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Tamaño de Texto Base', 'fontSize')}
              <NumberStepper value={p.fontSize || 16} onChange={(val) => handleChange('fontSize', val)} min={8} max={96} unit="px" disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color de Texto Base', 'color')}
              <ColorPicker value={p.color || '#333333'} onChange={(val) => handleChange('color', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Alineación Base', 'align')}
              <AlignButtonGroup value={p.align || 'left'} onChange={(val) => handleChange('align', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <PaddingEditor value={p.padding || '10px 20px'} onChange={(val) => handleChange('padding', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <MarginEditor value={p.margin || '0px'} onChange={(val) => handleChange('margin', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <BorderRadiusEditor value={p.borderRadius || '0px'} onChange={(val) => handleChange('borderRadius', val)} disabled={readOnly} />
            </div>
          </div>
        );

      case 'heading':
      case 'paragraph':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Propiedades de Texto</h3>
            {selectedNode.type === 'heading' && (
              <div className="flex flex-col gap-1.5">
                {renderLabel('Nivel de Encabezado', 'level')}
                <CustomSelect
                  value={p.level || 'h1'}
                  options={[
                    { label: 'Título 1 (H1)', value: 'h1' },
                    { label: 'Título 2 (H2)', value: 'h2' },
                    { label: 'Título 3 (H3)', value: 'h3' },
                    { label: 'Título 4 (H4)', value: 'h4' },
                    { label: 'Título 5 (H5)', value: 'h5' },
                    { label: 'Título 6 (H6)', value: 'h6' }
                  ]}
                  onChange={(val) => {
                    const sizeMap: Record<string, string> = {
                      h1: '32px',
                      h2: '24px',
                      h3: '20px',
                      h4: '18px',
                      h5: '16px',
                      h6: '14px'
                    };
                    handleChange('level', val);
                    handleChange('fontSize', sizeMap[val] || '24px');
                  }}
                  disabled={readOnly}
                />
              </div>
            )}
            {!isMobileTab && (
              <div className="flex flex-col gap-1.5">
                {renderLabel('Contenido', 'content')}
                <textarea
                  value={p.content || ''}
                  onChange={(e) => {
                    // Strip HTML tags to ensure plain text only
                    const cleaned = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
                    handleChange('content', cleaned);
                  }}
                  disabled={readOnly}
                  className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
                  rows={4}
                />
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              {renderLabel('Tipografía', 'fontFamily')}
              <FontFamilyPicker value={p.fontFamily || 'Arial'} onChange={(val) => handleChange('fontFamily', val)} disabled={readOnly} googleFonts={googleFonts} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Tamaño de Texto', 'fontSize')}
              <NumberStepper value={p.fontSize || 16} onChange={(val) => handleChange('fontSize', val)} min={8} max={96} unit="px" disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Estilo / Formato', 'fontWeight')}
              <div className="flex bg-bg-hover p-1 rounded-md border border-border-color/80 w-full shrink-0 select-none gap-1">
                <button
                  type="button"
                  onClick={() => handleChange('fontWeight', p.fontWeight === 'bold' || p.fontWeight === '700' ? 'normal' : 'bold')}
                  className={`flex-1 text-center py-1 text-xs font-bold rounded-md cursor-pointer transition-all border-none ${
                    p.fontWeight === 'bold' || p.fontWeight === '700' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text-primary hover:bg-bg-panel'
                  }`}
                  style={{ fontWeight: 'bold' }}
                >
                  B
                </button>
                <button
                  type="button"
                  onClick={() => handleChange('fontStyle', p.fontStyle === 'italic' ? 'normal' : 'italic')}
                  className={`flex-1 text-center py-1 text-xs font-bold rounded-md cursor-pointer transition-all border-none ${
                    p.fontStyle === 'italic' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text-primary hover:bg-bg-panel'
                  }`}
                  style={{ fontStyle: 'italic' }}
                >
                  I
                </button>
                <button
                  type="button"
                  onClick={() => handleChange('textDecoration', p.textDecoration === 'underline' ? 'none' : 'underline')}
                  className={`flex-1 text-center py-1 text-xs font-bold rounded-md cursor-pointer transition-all border-none ${
                    p.textDecoration === 'underline' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text-primary hover:bg-bg-panel'
                  }`}
                  style={{ textDecoration: 'underline' }}
                >
                  U
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Peso de Fuente', 'fontWeight')}
              <CustomSelect
                value={p.fontWeight || '400'}
                options={[
                  { label: 'Fino (300)', value: '300' },
                  { label: 'Normal (400)', value: '400' },
                  { label: 'Seminegrita (600)', value: '600' },
                  { label: 'Negrita (700)', value: '700' },
                  { label: 'Extra Negrita (900)', value: '900' }
                ]}
                onChange={(val) => handleChange('fontWeight', val)}
                disabled={readOnly}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color de Texto', 'color')}
              <ColorPicker value={p.color || '#333333'} onChange={(val) => handleChange('color', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Alineación', 'align')}
              <AlignButtonGroup value={p.align || 'left'} onChange={(val) => handleChange('align', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <PaddingEditor value={p.padding || '10px 20px'} onChange={(val) => handleChange('padding', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <MarginEditor value={p.margin || '0px'} onChange={(val) => handleChange('margin', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <BorderRadiusEditor value={p.borderRadius || '0px'} onChange={(val) => handleChange('borderRadius', val)} disabled={readOnly} />
            </div>
          </div>
        );

      case 'image':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Propiedades de Imagen</h3>
            {!isMobileTab && renderAssetField('URL de Imagen', 'url')}
            {!isMobileTab && (
              <div className="flex flex-col gap-1.5">
                {renderLabel('Texto Alternativo', 'altText')}
                <input
                  type="text"
                  value={p.altText || ''}
                  onChange={(e) => handleChange('altText', e.target.value)}
                  disabled={readOnly}
                  className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
                />
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              {renderLabel('Alineación', 'align')}
              <AlignButtonGroup value={p.align || 'center'} options={['left', 'center', 'right']} onChange={(val) => handleChange('align', val as any)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <BorderRadiusEditor value={p.borderRadius || '8px'} onChange={(val) => handleChange('borderRadius', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <PaddingEditor value={p.padding || '0px'} onChange={(val) => handleChange('padding', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <MarginEditor value={p.margin || '0px'} onChange={(val) => handleChange('margin', val)} disabled={readOnly} />
            </div>
          </div>
        );

      case 'button':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Propiedades de Botón</h3>
            {!isMobileTab && (
              <div className="flex flex-col gap-1.5">
                {renderLabel('Texto del Botón', 'content')}
                <input
                  type="text"
                  value={p.content || ''}
                  onChange={(e) => {
                    const cleaned = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
                    handleChange('content', cleaned);
                  }}
                  disabled={readOnly}
                  className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
                />
              </div>
            )}
            {!isMobileTab && (
              <div className="flex flex-col gap-1.5">
                {renderLabel('Destino (URL/Email)', 'url')}
                <LinkInput value={p.url || ''} onChange={(val) => handleChange('url', val)} disabled={readOnly} />
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color de Botón', 'backgroundColor')}
              <ColorPicker value={p.backgroundColor || '#4f46e5'} onChange={(val) => handleChange('backgroundColor', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color de Texto', 'color')}
              <ColorPicker value={p.color || '#ffffff'} onChange={(val) => handleChange('color', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <BorderRadiusEditor value={p.borderRadius || '6px'} onChange={(val) => handleChange('borderRadius', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Alineación', 'align')}
              <AlignButtonGroup value={p.align || 'center'} options={['left', 'center', 'right']} onChange={(val) => handleChange('align', val as any)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <PaddingEditor value={p.padding || '12px 24px'} onChange={(val) => handleChange('padding', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <MarginEditor value={p.margin || '0px'} onChange={(val) => handleChange('margin', val)} disabled={readOnly} />
            </div>
          </div>
        );

      case 'divider':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Línea Divisora</h3>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color de Línea', 'color')}
              <ColorPicker value={p.color || '#cccccc'} onChange={(val) => handleChange('color', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Grosor (Thickness)', 'thickness')}
              <NumberStepper value={p.thickness || 2} onChange={(val) => handleChange('thickness', val)} min={1} max={20} unit="px" disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Estilo de Borde', 'style')}
              <CustomSelect
                value={p.style || 'solid'}
                options={[
                  { label: 'Sólido', value: 'solid' },
                  { label: 'Guiones (Dashed)', value: 'dashed' },
                  { label: 'Puntos (Dotted)', value: 'dotted' }
                ]}
                onChange={(val) => handleChange('style', val)}
                disabled={readOnly}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <PaddingEditor value={p.padding || '10px'} onChange={(val) => handleChange('padding', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <MarginEditor value={p.margin || '0px'} onChange={(val) => handleChange('margin', val)} disabled={readOnly} />
            </div>
          </div>
        );

      case 'spacer':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Espaciador</h3>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Altura', 'height')}
              <SliderWithInput value={p.height || 20} onChange={(val) => handleChange('height', val)} min={5} max={200} unit="px" disabled={readOnly} />
            </div>
          </div>
        );

      case 'social':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Redes Sociales</h3>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Alineación', 'align')}
              <AlignButtonGroup value={p.align || 'center'} options={['left', 'center', 'right']} onChange={(val) => handleChange('align', val as any)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <PaddingEditor value={p.padding || '10px'} onChange={(val) => handleChange('padding', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <MarginEditor value={p.margin || '0px'} onChange={(val) => handleChange('margin', val)} disabled={readOnly} />
            </div>
          </div>
        );

      case 'video':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Elemento de Vídeo</h3>
            {!isMobileTab && renderAssetField('Miniatura (Thumbnail)', 'thumbnailUrl')}
            {!isMobileTab && (
              <div className="flex flex-col gap-1.5">
                {renderLabel('Enlace de Vídeo', 'videoUrl')}
                <LinkInput value={p.videoUrl || ''} onChange={(val) => handleChange('videoUrl', val)} disabled={readOnly} />
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              {renderLabel('Alineación', 'align')}
              <AlignButtonGroup value={p.align || 'center'} options={['left', 'center', 'right']} onChange={(val) => handleChange('align', val as any)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <PaddingEditor value={p.padding || '10px'} onChange={(val) => handleChange('padding', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <MarginEditor value={p.margin || '0px'} onChange={(val) => handleChange('margin', val)} disabled={readOnly} />
            </div>
          </div>
        );

      case 'custom_html':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">HTML Personalizado</h3>
            {!isMobileTab && (
              <div className="flex flex-col gap-1.5">
                {renderLabel('Código HTML', 'htmlContent')}
                <textarea
                  value={p.htmlContent || ''}
                  onChange={(e) => handleChange('htmlContent', e.target.value)}
                  disabled={readOnly}
                  className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full font-mono disabled:opacity-55"
                  rows={8}
                />
              </div>
            )}
          </div>
        );

      case 'countdown':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Contador Regresivo</h3>
            {!isMobileTab && (
              <div className="flex flex-col gap-1.5">
                {renderLabel('Fecha Límite', 'endTime')}
                <DateTimePicker value={p.endTime || ''} onChange={(val) => handleChange('endTime', val)} disabled={readOnly} />
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color de Texto', 'color')}
              <ColorPicker value={p.color || '#ffffff'} onChange={(val) => handleChange('color', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color de Fondo', 'backgroundColor')}
              <ColorPicker value={p.backgroundColor || '#333333'} onChange={(val) => handleChange('backgroundColor', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Alineación', 'align')}
              <AlignButtonGroup value={p.align || 'center'} options={['left', 'center', 'right']} onChange={(val) => handleChange('align', val as any)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <PaddingEditor value={p.padding || '10px'} onChange={(val) => handleChange('padding', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <MarginEditor value={p.margin || '0px'} onChange={(val) => handleChange('margin', val)} disabled={readOnly} />
            </div>
          </div>
        );

      case 'accordion':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Acordeón</h3>
            {!isMobileTab && (
              <>
                <div className="flex flex-col gap-1.5">
                  {renderLabel('Título', 'title')}
                  <input
                    type="text"
                    value={p.title || ''}
                    onChange={(e) => {
                      const cleaned = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
                      handleChange('title', cleaned);
                    }}
                    disabled={readOnly}
                    className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  {renderLabel('Contenido', 'content')}
                  <textarea
                    value={p.content || ''}
                    onChange={(e) => {
                      const cleaned = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
                      handleChange('content', cleaned);
                    }}
                    disabled={readOnly}
                    className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
                    rows={4}
                  />
                </div>
              </>
            )}
            <div className="flex flex-col gap-1.5">
              <PaddingEditor value={p.padding || '10px'} onChange={(val) => handleChange('padding', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <MarginEditor value={p.margin || '0px'} onChange={(val) => handleChange('margin', val)} disabled={readOnly} />
            </div>
          </div>
        );

      case 'carousel':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Carrusel</h3>
            {!isMobileTab && (
              <div className="flex flex-col gap-1.5">
                {renderLabel('Imágenes (URLs por comas)', 'images')}
                <textarea
                  value={p.images || ''}
                  onChange={(e) => handleChange('images', e.target.value)}
                  disabled={readOnly}
                  className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
                  rows={4}
                  placeholder="URL1, URL2, URL3"
                />
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              <PaddingEditor value={p.padding || '10px'} onChange={(val) => handleChange('padding', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <MarginEditor value={p.margin || '0px'} onChange={(val) => handleChange('margin', val)} disabled={readOnly} />
            </div>
          </div>
        );

      case 'icon':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Icono</h3>
            {!isMobileTab && (
              <div className="flex flex-col gap-1.5">
                {renderLabel('Nombre de Icono', 'iconName')}
                <CustomSelect
                  value={p.iconName || 'Star'}
                  options={[
                    { label: '★ Estrella', value: 'Star' },
                    { label: '❤ Corazón', value: 'Heart' },
                    { label: '☺ Emoji Sonrisa', value: 'Smile' },
                    { label: '⚙ Tuerca', value: 'Settings' },
                    { label: '✉ Correo', value: 'Mail' },
                    { label: 'ℹ Info', value: 'Info' }
                  ]}
                  onChange={(val) => handleChange('iconName', val)}
                  disabled={readOnly}
                />
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              {renderLabel('Tamaño', 'size')}
              <NumberStepper value={p.size || 24} onChange={(val) => handleChange('size', val)} min={16} max={128} unit="px" disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color', 'color')}
              <ColorPicker value={p.color || '#4f46e5'} onChange={(val) => handleChange('color', val)} disabled={readOnly} />
            </div>
            {!isMobileTab && (
              <div className="flex flex-col gap-1.5">
                {renderLabel('Enlace (Opcional)', 'url')}
                <LinkInput value={p.url || ''} onChange={(val) => handleChange('url', val)} disabled={readOnly} />
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              {renderLabel('Alineación', 'align')}
              <AlignButtonGroup value={p.align || 'center'} options={['left', 'center', 'right']} onChange={(val) => handleChange('align', val as any)} disabled={readOnly} />
            </div>
          </div>
        );

      case 'nav_menu':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Menú de Navegación</h3>
            {!isMobileTab && (
              <div className="flex flex-col gap-1.5">
                {renderLabel('Items (JSON)', 'items')}
                <textarea
                  value={typeof p.items === 'string' ? p.items : JSON.stringify(p.items || [
                    { label: 'Inicio', url: '#' },
                    { label: 'Servicios', url: '#' },
                    { label: 'Contacto', url: '#' }
                  ], null, 2)}
                  onChange={(e) => {
                    try {
                      const parsed = JSON.parse(e.target.value);
                      handleChange('items', parsed);
                    } catch (err) {
                      handleChange('items', e.target.value);
                    }
                  }}
                  disabled={readOnly}
                  className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full font-mono disabled:opacity-55"
                  rows={5}
                />
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color de Enlaces', 'color')}
              <ColorPicker value={p.color || '#4f46e5'} onChange={(val) => handleChange('color', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color de Fondo', 'backgroundColor')}
              <ColorPicker value={p.backgroundColor || 'transparent'} onChange={(val) => handleChange('backgroundColor', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Tipografía', 'fontFamily')}
              <FontFamilyPicker value={p.fontFamily || 'Arial'} onChange={(val) => handleChange('fontFamily', val)} disabled={readOnly} googleFonts={googleFonts} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Tamaño de Texto', 'fontSize')}
              <NumberStepper value={p.fontSize || 14} onChange={(val) => handleChange('fontSize', val)} min={10} max={24} unit="px" disabled={readOnly} />
            </div>
            {!isMobileTab && (
              <div className="flex flex-col gap-1.5">
                {renderLabel('Separador', 'separator')}
                <input
                  type="text"
                  value={p.separator || ' | '}
                  onChange={(e) => handleChange('separator', e.target.value)}
                  disabled={readOnly}
                  className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
                />
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              {renderLabel('Alineación', 'align')}
              <AlignButtonGroup value={p.align || 'center'} options={['left', 'center', 'right']} onChange={(val) => handleChange('align', val as any)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <PaddingEditor value={p.padding || '10px'} onChange={(val) => handleChange('padding', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <MarginEditor value={p.margin || '0px'} onChange={(val) => handleChange('margin', val)} disabled={readOnly} />
            </div>
          </div>
        );

      case 'image_text':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Imagen + Texto</h3>
            {!isMobileTab && renderAssetField('URL de Imagen', 'imageUrl')}
            {!isMobileTab && (
              <div className="flex flex-col gap-1.5">
                {renderLabel('Contenido de Texto', 'text')}
                <textarea
                  value={p.text || ''}
                  onChange={(e) => {
                    const cleaned = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
                    handleChange('text', cleaned);
                  }}
                  disabled={readOnly}
                  className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
                  rows={4}
                />
              </div>
            )}
            <div className="flex flex-col gap-1.5">
              {renderLabel('Posición de Imagen', 'imagePosition')}
              <CustomSelect
                value={p.imagePosition || 'left'}
                options={[
                  { label: 'Izquierda', value: 'left' },
                  { label: 'Derecha', value: 'right' }
                ]}
                onChange={(val) => handleChange('imagePosition', val)}
                disabled={readOnly}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Ancho de Imagen', 'imageWidth')}
              <SliderWithInput value={p.imageWidth || 40} onChange={(val) => handleChange('imageWidth', val)} min={20} max={80} unit="%" disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Tipografía', 'fontFamily')}
              <FontFamilyPicker value={p.fontFamily || 'Arial'} onChange={(val) => handleChange('fontFamily', val)} disabled={readOnly} googleFonts={googleFonts} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Tamaño de Texto', 'fontSize')}
              <NumberStepper value={p.fontSize || 14} onChange={(val) => handleChange('fontSize', val)} min={10} max={32} unit="px" disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color de Texto', 'color')}
              <ColorPicker value={p.color || '#333333'} onChange={(val) => handleChange('color', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <PaddingEditor value={p.padding || '10px'} onChange={(val) => handleChange('padding', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <MarginEditor value={p.margin || '0px'} onChange={(val) => handleChange('margin', val)} disabled={readOnly} />
            </div>
          </div>
        );

      case 'product_card':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Tarjeta de Producto</h3>
            {!isMobileTab && renderAssetField('URL de Imagen', 'imageUrl')}
            {!isMobileTab && (
              <>
                <div className="flex flex-col gap-1.5">
                  {renderLabel('Título de Producto', 'title')}
                  <input
                    type="text"
                    value={p.title || ''}
                    onChange={(e) => {
                      const cleaned = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
                      handleChange('title', cleaned);
                    }}
                    disabled={readOnly}
                    className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  {renderLabel('Precio', 'price')}
                  <input
                    type="text"
                    value={p.price || ''}
                    onChange={(e) => {
                      const cleaned = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
                      handleChange('price', cleaned);
                    }}
                    disabled={readOnly}
                    className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  {renderLabel('Texto del Botón', 'buttonText')}
                  <input
                    type="text"
                    value={p.buttonText || ''}
                    onChange={(e) => {
                      const cleaned = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
                      handleChange('buttonText', cleaned);
                    }}
                    disabled={readOnly}
                    className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  {renderLabel('Destino Botón', 'buttonUrl')}
                  <LinkInput value={p.buttonUrl || ''} onChange={(val) => handleChange('buttonUrl', val)} disabled={readOnly} />
                </div>
              </>
            )}
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color del Botón', 'color')}
              <ColorPicker value={p.color || '#4f46e5'} onChange={(val) => handleChange('color', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color de Fondo', 'backgroundColor')}
              <ColorPicker value={p.backgroundColor || '#ffffff'} onChange={(val) => handleChange('backgroundColor', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <BorderRadiusEditor value={p.borderRadius || '8px'} onChange={(val) => handleChange('borderRadius', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <PaddingEditor value={p.padding || '15px'} onChange={(val) => handleChange('padding', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <MarginEditor value={p.margin || '0px'} onChange={(val) => handleChange('margin', val)} disabled={readOnly} />
            </div>
          </div>
        );

      case 'quote':
        return (
          <div className="flex flex-col gap-4">
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">Testimonial / Cita</h3>
            {!isMobileTab && (
              <>
                <div className="flex flex-col gap-1.5">
                  {renderLabel('Texto de la Cita', 'text')}
                  <textarea
                    value={p.text || ''}
                    onChange={(e) => {
                      const cleaned = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
                      handleChange('text', cleaned);
                    }}
                    disabled={readOnly}
                    className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
                    rows={4}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  {renderLabel('Autor', 'author')}
                  <input
                    type="text"
                    value={p.author || ''}
                    onChange={(e) => {
                      const cleaned = e.target.value.replace(/<\/?[^>]+(>|$)/g, "");
                      handleChange('author', cleaned);
                    }}
                    disabled={readOnly}
                    className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
                  />
                </div>
                {renderAssetField('Avatar (URL)', 'avatarUrl')}
              </>
            )}
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color de Texto', 'color')}
              <ColorPicker value={p.color || '#555555'} onChange={(val) => handleChange('color', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              {renderLabel('Color de Fondo', 'backgroundColor')}
              <ColorPicker value={p.backgroundColor || '#f9f9f9'} onChange={(val) => handleChange('backgroundColor', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <BorderRadiusEditor value={p.borderRadius || '4px'} onChange={(val) => handleChange('borderRadius', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <PaddingEditor value={p.padding || '15px'} onChange={(val) => handleChange('padding', val)} disabled={readOnly} />
            </div>
            <div className="flex flex-col gap-1.5">
              <MarginEditor value={p.margin || '0px'} onChange={(val) => handleChange('margin', val)} disabled={readOnly} />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <aside className="w-[300px] bg-bg-panel border-l border-border-color flex flex-col overflow-y-auto h-full">
      {/* Panel header tabs */}
      <div className="flex border-b border-border-color shrink-0">
        <button
          className={`flex-1 bg-transparent border-none border-b-2 p-3 text-xs font-semibold cursor-pointer transition-all hover:text-text-primary flex items-center justify-center ${
            activeTab === 'general' ? 'border-b-primary text-primary' : 'border-b-transparent text-text-secondary'
          }`}
          onClick={() => setActiveTab('general')}
        >
          {t('properties')}
        </button>
        <button
          className={`flex-1 bg-transparent border-none border-b-2 p-3 text-xs font-semibold cursor-pointer transition-all hover:text-text-primary flex items-center justify-center ${
            activeTab === 'mobile' ? 'border-b-primary text-primary' : 'border-b-transparent text-text-secondary'
          }`}
          onClick={() => setActiveTab('mobile')}
        >
          <Smartphone size={14} style={{ marginRight: '4px' }} />
          {t('mobileOverrides')}
        </button>
      </div>

      {/* Fields area */}
      <div className="p-5 flex flex-col gap-4 overflow-y-auto flex-1">
        {renderContentProperties()}

        {/* Delete node option */}
        {!readOnly && (
          <div className="mt-6 border-t border-border-color pt-5 shrink-0">
            <button
              onClick={() => onDeleteNode(selectedNode.id)}
              className="w-full bg-red-500/10 text-danger border border-red-500/20 p-2.5 rounded-md text-xs font-semibold cursor-pointer flex items-center justify-center gap-2 transition-all hover:bg-danger hover:text-white hover:border-danger"
            >
              <Trash2 size={16} />
              <span>{t('deleteBlock')}</span>
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};
