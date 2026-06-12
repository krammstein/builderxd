import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import type { BlockType, BlockNode } from '../types';

import {
  Type,
  Image,
  Square,
  Minus,
  MoveVertical,
  Share2,
  Layout,
  Columns,
  Search,
  Trash2,
  ChevronUp,
  ChevronDown,
  Layers
} from 'lucide-react';

interface LeftPanelProps {
  onAddComponent: (type: BlockType) => void;
  nodes: BlockNode[];
  selectedId: string | null;
  onSelectNode: (id: string | null) => void;
  onDeleteNode: (id: string) => void;
  onMoveNode: (id: string, direction: 'up' | 'down') => void;
}

export const LeftPanel: React.FC<LeftPanelProps> = ({
  onAddComponent,
  nodes,
  selectedId,
  onSelectNode,
  onDeleteNode,
  onMoveNode
}) => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');

  const availableComponents = [
    { type: 'section' as BlockType, label: t('componentSection'), desc: 'Contenedor de ancho completo', icon: <Layout size={18} /> },
    { type: 'column' as BlockType, label: t('componentColumn'), desc: 'Divisor de columnas en sección', icon: <Columns size={18} /> },
    { type: 'text' as BlockType, label: t('componentText'), desc: 'Texto con tipografías y colores', icon: <Type size={18} /> },
    { type: 'image' as BlockType, label: t('componentImage'), desc: 'Imagen adaptable con enlaces', icon: <Image size={18} /> },
    { type: 'button' as BlockType, label: t('componentButton'), desc: 'Botón con enlace personalizable', icon: <Square size={18} /> },
    { type: 'divider' as BlockType, label: t('componentDivider'), desc: 'Línea separadora de contenido', icon: <Minus size={18} /> },
    { type: 'spacer' as BlockType, label: t('componentSpacer'), desc: 'Espacio vertical de relleno', icon: <MoveVertical size={18} /> },
    { type: 'social' as BlockType, label: t('componentSocial'), desc: 'Enlaces a redes sociales', icon: <Share2 size={18} /> }
  ];

  const filteredComponents = availableComponents.filter((comp) =>
    comp.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
    comp.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Helper to recursively render layers in tree
  const renderLayerItem = (node: BlockNode, depth: number = 0): React.ReactNode => {
    const isSelected = node.id === selectedId;
    const displayName = availableComponents.find((c) => c.type === node.type)?.label || node.type;

    return (
      <div key={node.id} className="layer-item-wrapper">
        <div
          className={`layer-item ${isSelected ? 'selected' : ''}`}
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
          onClick={(e) => {
            e.stopPropagation();
            onSelectNode(node.id);
          }}
        >
          <span className="layer-item-icon">
            {availableComponents.find((c) => c.type === node.type)?.icon}
          </span>
          <span className="layer-item-label">{displayName}</span>

          <div className="layer-item-actions">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMoveNode(node.id, 'up');
              }}
              title={t('moveUp')}
              className="layer-action-btn"
            >
              <ChevronUp size={12} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onMoveNode(node.id, 'down');
              }}
              title={t('moveDown')}
              className="layer-action-btn"
            >
              <ChevronDown size={12} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDeleteNode(node.id);
              }}
              title={t('deleteBlock')}
              className="layer-action-btn delete"
            >
              <Trash2 size={12} />
            </button>
          </div>
        </div>
        {node.children && node.children.map((child) => renderLayerItem(child, depth + 1))}
      </div>
    );
  };

  return (
    <aside className="builder-left-panel">
      {/* Component Library section */}
      <div className="panel-section">
        <h2>{t('components')}</h2>
        <div className="search-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder={t('searchComponents')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="components-list">
          {filteredComponents.map((comp) => (
            <div
              key={comp.type}
              className="component-card"
              onClick={() => onAddComponent(comp.type)}
            >
              <div className="component-icon">{comp.icon}</div>
              <div className="component-info">
                <h3>{comp.label}</h3>
                <p>{comp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layers Tree section */}
      <div className="panel-section layers-section">
        <div className="layers-header">
          <Layers size={16} />
          <h2>{t('layers')}</h2>
        </div>
        <div className="layers-tree">
          {nodes.length === 0 ? (
            <p className="no-layers-msg">Crea secciones para estructurar tu correo.</p>
          ) : (
            nodes.map((node) => renderLayerItem(node, 0))
          )}
        </div>
      </div>
    </aside>
  );
};
