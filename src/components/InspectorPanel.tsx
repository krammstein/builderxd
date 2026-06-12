import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import type { BlockNode } from '../types';
import { Sliders, Smartphone, Trash2 } from 'lucide-react';

interface InspectorPanelProps {
  selectedNode: BlockNode | null;
  onUpdateProperties: (id: string, properties: Record<string, any>, isMobile: boolean) => void;
  onDeleteNode: (id: string) => void;
  readOnly?: boolean;
}

export const InspectorPanel: React.FC<InspectorPanelProps> = ({
  selectedNode,
  onUpdateProperties,
  onDeleteNode,
  readOnly = false
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

  // Helper to render property fields
  const renderField = (
    label: string,
    key: string,
    type: 'text' | 'color' | 'select' | 'range' | 'textarea',
    options?: string[]
  ) => {
    const val = currentProperties[key] !== undefined ? currentProperties[key] : '';

    return (
      <div className="flex flex-col gap-1.5" key={key}>
        <div className="flex items-center justify-between">
          <label className="text-[11.5px] font-medium text-text-secondary">{label}</label>
          {isMobileTab && selectedNode.mobileProperties?.[key] !== undefined && (
            <span className="bg-primary text-white text-[9px] font-bold px-1 py-0.5 rounded-xs uppercase" title="Valor sobrescrito para móvil">Móvil</span>
          )}
        </div>

        {type === 'textarea' && (
          <textarea
            value={val}
            onChange={(e) => handleChange(key, e.target.value)}
            disabled={readOnly}
            className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
            rows={4}
          />
        )}

        {type === 'text' && (
          <input
            type="text"
            value={val}
            onChange={(e) => handleChange(key, e.target.value)}
            disabled={readOnly}
            className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full disabled:opacity-55"
          />
        )}

        {type === 'color' && (
          <div className="flex gap-2 w-full">
            <input
              type="color"
              value={val.startsWith('#') && val.length === 7 ? val : '#ffffff'}
              onChange={(e) => handleChange(key, e.target.value)}
              disabled={readOnly}
              className="bg-transparent border-none w-9 h-9 cursor-pointer p-0 shrink-0 disabled:opacity-55"
            />
            <input
              type="text"
              value={val}
              onChange={(e) => handleChange(key, e.target.value)}
              disabled={readOnly}
              className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full font-mono disabled:opacity-55"
            />
          </div>
        )}

        {type === 'range' && (
          <div className="flex items-center gap-3 w-full">
            <input
              type="range"
              min="0"
              max="100"
              value={parseInt(val) || 0}
              onChange={(e) => handleChange(key, `${e.target.value}px`)}
              disabled={readOnly}
              className="flex-1 cursor-pointer accent-primary disabled:opacity-55"
            />
            <span className="font-mono text-xs text-text-secondary shrink-0">{val}</span>
          </div>
        )}

        {type === 'select' && options && (
          <select
            value={val}
            onChange={(e) => handleChange(key, e.target.value)}
            disabled={readOnly}
            className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full cursor-pointer disabled:opacity-55"
          >
            {options.map((opt) => (
              <option key={opt} value={opt} className="dark:bg-bg-panel">
                {opt}
              </option>
            ))}
          </select>
        )}
      </div>
    );
  };

  const renderContentProperties = () => {
    switch (selectedNode.type) {
      case 'section':
        return (
          <>
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">{t('generalSettings')}</h3>
            {renderField(t('backgroundColor'), 'backgroundColor', 'color')}
            {renderField(t('padding'), 'padding', 'text')}
          </>
        );
      case 'column':
        return (
          <>
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">{t('generalSettings')}</h3>
            {renderField('Ancho (width)', 'width', 'text')}
            {renderField(t('padding'), 'padding', 'text')}
          </>
        );
      case 'text':
        return (
          <>
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">{t('textProperties')}</h3>
            {!isMobileTab && renderField(t('content'), 'content', 'textarea')}
            {renderField(t('color'), 'color', 'color')}
            {renderField(t('fontSize'), 'fontSize', 'text')}
            {renderField(t('align'), 'align', 'select', ['left', 'center', 'right', 'justify'])}
            {renderField(t('padding'), 'padding', 'text')}
          </>
        );
      case 'image':
        return (
          <>
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">{t('imageProperties')}</h3>
            {!isMobileTab && renderField(t('url'), 'url', 'text')}
            {!isMobileTab && renderField(t('altText'), 'altText', 'text')}
            {renderField(t('align'), 'align', 'select', ['left', 'center', 'right'])}
            {renderField(t('borderRadius'), 'borderRadius', 'text')}
            {renderField(t('padding'), 'padding', 'text')}
          </>
        );
      case 'button':
        return (
          <>
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">{t('buttonProperties')}</h3>
            {!isMobileTab && renderField(t('content'), 'content', 'text')}
            {!isMobileTab && renderField(t('url'), 'url', 'text')}
            {renderField(t('backgroundColor'), 'backgroundColor', 'color')}
            {renderField(t('color'), 'color', 'color')}
            {renderField(t('borderRadius'), 'borderRadius', 'text')}
            {renderField(t('align'), 'align', 'select', ['left', 'center', 'right'])}
            {renderField(t('padding'), 'padding', 'text')}
          </>
        );
      case 'divider':
        return (
          <>
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">{t('componentDivider')}</h3>
            {renderField('Color', 'color', 'color')}
            {renderField(t('thickness'), 'thickness', 'text')}
            {renderField(t('padding'), 'padding', 'text')}
          </>
        );
      case 'spacer':
        return (
          <>
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">{t('componentSpacer')}</h3>
            {renderField(t('height'), 'height', 'text')}
          </>
        );
      case 'social':
        return (
          <>
            <h3 className="text-[10.5px] font-bold uppercase tracking-wider text-text-muted mt-2">{t('componentSocial')}</h3>
            {renderField(t('align'), 'align', 'select', ['left', 'center', 'right'])}
            {renderField(t('padding'), 'padding', 'text')}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <aside className="w-[300px] bg-bg-panel border-l border-border-color flex flex-col overflow-y-auto h-full">
      {/* Panel header tabs */}
      <div className="flex border-b border-border-color">
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
          <div className="mt-6 border-t border-border-color pt-5">
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
