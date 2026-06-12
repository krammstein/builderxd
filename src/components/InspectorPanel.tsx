import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import type { BlockNode } from '../types';

import { Sliders, Smartphone, Trash2 } from 'lucide-react';

interface InspectorPanelProps {
  selectedNode: BlockNode | null;
  onUpdateProperties: (id: string, properties: Record<string, any>, isMobile: boolean) => void;
  onDeleteNode: (id: string) => void;
}

export const InspectorPanel: React.FC<InspectorPanelProps> = ({
  selectedNode,
  onUpdateProperties,
  onDeleteNode
}) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'general' | 'mobile'>('general');

  if (!selectedNode) {
    return (
      <aside className="builder-right-panel empty">
        <div className="empty-panel-content">
          <Sliders size={32} />
          <p>{t('noElementSelected')}</p>
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
      <div className="property-field" key={key}>
        <div className="property-field-header">
          <label>{label}</label>
          {isMobileTab && selectedNode.mobileProperties?.[key] !== undefined && (
            <span className="mobile-badge" title="Valor sobrescrito para móvil">Móvil</span>
          )}
        </div>

        {type === 'textarea' && (
          <textarea
            value={val}
            onChange={(e) => handleChange(key, e.target.value)}
            className="property-input"
            rows={4}
          />
        )}

        {type === 'text' && (
          <input
            type="text"
            value={val}
            onChange={(e) => handleChange(key, e.target.value)}
            className="property-input"
          />
        )}

        {type === 'color' && (
          <div className="color-picker-wrapper">
            <input
              type="color"
              value={val.startsWith('#') && val.length === 7 ? val : '#ffffff'}
              onChange={(e) => handleChange(key, e.target.value)}
              className="color-picker-input"
            />
            <input
              type="text"
              value={val}
              onChange={(e) => handleChange(key, e.target.value)}
              className="property-input color-text"
            />
          </div>
        )}

        {type === 'range' && (
          <div className="range-picker-wrapper">
            <input
              type="range"
              min="0"
              max="100"
              value={parseInt(val) || 0}
              onChange={(e) => handleChange(key, `${e.target.value}px`)}
              className="range-input"
            />
            <span className="range-value">{val}</span>
          </div>
        )}

        {type === 'select' && options && (
          <select
            value={val}
            onChange={(e) => handleChange(key, e.target.value)}
            className="property-input select"
          >
            {options.map((opt) => (
              <option key={opt} value={opt}>
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
            <h3>{t('generalSettings')}</h3>
            {renderField(t('backgroundColor'), 'backgroundColor', 'color')}
            {renderField(t('padding'), 'padding', 'text')}
          </>
        );
      case 'column':
        return (
          <>
            <h3>{t('generalSettings')}</h3>
            {renderField('Ancho (width)', 'width', 'text')}
            {renderField(t('padding'), 'padding', 'text')}
          </>
        );
      case 'text':
        return (
          <>
            <h3>{t('textProperties')}</h3>
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
            <h3>{t('imageProperties')}</h3>
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
            <h3>{t('buttonProperties')}</h3>
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
            <h3>{t('componentDivider')}</h3>
            {renderField('Color', 'color', 'color')}
            {renderField(t('thickness'), 'thickness', 'text')}
            {renderField(t('padding'), 'padding', 'text')}
          </>
        );
      case 'spacer':
        return (
          <>
            <h3>{t('componentSpacer')}</h3>
            {renderField(t('height'), 'height', 'text')}
          </>
        );
      case 'social':
        return (
          <>
            <h3>{t('componentSocial')}</h3>
            {renderField(t('align'), 'align', 'select', ['left', 'center', 'right'])}
            {renderField(t('padding'), 'padding', 'text')}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <aside className="builder-right-panel">
      {/* Panel header tabs */}
      <div className="inspector-tabs">
        <button
          className={`inspector-tab ${activeTab === 'general' ? 'active' : ''}`}
          onClick={() => setActiveTab('general')}
        >
          {t('properties')}
        </button>
        <button
          className={`inspector-tab ${activeTab === 'mobile' ? 'active' : ''}`}
          onClick={() => setActiveTab('mobile')}
        >
          <Smartphone size={14} style={{ marginRight: '4px' }} />
          {t('mobileOverrides')}
        </button>
      </div>

      {/* Fields area */}
      <div className="inspector-content">
        {renderContentProperties()}

        {/* Delete node option */}
        <div className="danger-zone">
          <button onClick={() => onDeleteNode(selectedNode.id)} className="btn-delete-full">
            <Trash2 size={16} />
            <span>{t('deleteBlock')}</span>
          </button>
        </div>
      </div>
    </aside>
  );
};
