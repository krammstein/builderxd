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
  Layers,
  Video,
  Code,
  Clock,
  Menu,
  Images
} from 'lucide-react';

interface LeftPanelProps {
  onAddComponent: (type: BlockType) => void;
  nodes: BlockNode[];
  selectedId: string | null;
  onSelectNode: (id: string | null) => void;
  onDeleteNode: (id: string) => void;
  onMoveNode: (id: string, direction: 'up' | 'down') => void;
  readOnly?: boolean;
}

export const LeftPanel: React.FC<LeftPanelProps> = ({
  onAddComponent,
  nodes,
  selectedId,
  onSelectNode,
  onDeleteNode,
  onMoveNode,
  readOnly = false
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
    { type: 'social' as BlockType, label: t('componentSocial'), desc: 'Enlaces a redes sociales', icon: <Share2 size={18} /> },
    { type: 'video' as BlockType, label: t('componentVideo'), desc: 'Enlace de vídeo con miniatura', icon: <Video size={18} /> },
    { type: 'custom_html' as BlockType, label: t('componentCustomHtml'), desc: 'Código HTML incrustado', icon: <Code size={18} /> },
    { type: 'countdown' as BlockType, label: t('componentCountdown'), desc: 'Contador de tiempo regresivo', icon: <Clock size={18} /> },
    { type: 'accordion' as BlockType, label: t('componentAccordion'), desc: 'Acordeón de contenido plegable', icon: <Menu size={18} /> },
    { type: 'carousel' as BlockType, label: t('componentCarousel'), desc: 'Carrusel de imágenes deslizables', icon: <Images size={18} /> }
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
      <div key={node.id} className="flex flex-col">
        <div
          className={`flex items-center p-2 rounded-md mb-0.5 cursor-pointer transition-all hover:bg-bg-hover group ${
            isSelected ? 'bg-primary/10 text-primary' : 'text-text-secondary'
          }`}
          style={{ paddingLeft: `${depth * 12 + 8}px` }}
          onClick={(e) => {
            e.stopPropagation();
            onSelectNode(node.id);
          }}
        >
          <span className={`mr-2 flex items-center ${isSelected ? 'text-primary' : 'text-text-secondary'}`}>
            {availableComponents.find((c) => c.type === node.type)?.icon}
          </span>
          <span className="text-xs font-medium truncate flex-1">{displayName}</span>

          {!readOnly && (
            <div className="hidden group-hover:flex items-center gap-0.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMoveNode(node.id, 'up');
                }}
                title={t('moveUp')}
                className="bg-transparent border-none text-text-muted p-1 rounded-xs cursor-pointer flex items-center justify-center transition-all hover:bg-border-color hover:text-text-primary"
              >
                <ChevronUp size={12} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMoveNode(node.id, 'down');
                }}
                title={t('moveDown')}
                className="bg-transparent border-none text-text-muted p-1 rounded-xs cursor-pointer flex items-center justify-center transition-all hover:bg-border-color hover:text-text-primary"
              >
                <ChevronDown size={12} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteNode(node.id);
                }}
                title={t('deleteBlock')}
                className="bg-transparent border-none text-text-muted p-1 rounded-xs cursor-pointer flex items-center justify-center transition-all hover:bg-red-500/15 hover:text-red-500"
              >
                <Trash2 size={12} />
              </button>
            </div>
          )}
        </div>
        {node.children && node.children.map((child) => renderLayerItem(child, depth + 1))}
      </div>
    );
  };

  return (
    <aside className="w-[300px] bg-bg-panel border-r border-border-color flex flex-col overflow-y-auto h-full">
      {/* Component Library section */}
      <div className="p-5 border-b border-border-color">
        <h2 className="text-sm font-semibold text-text-primary mb-3">{t('components')}</h2>
        <div className="flex items-center bg-bg-hover border border-border-color rounded-md p-2 px-3 gap-2 mb-4">
          <Search size={16} className="text-text-muted" />
          <input
            type="text"
            placeholder={t('searchComponents')}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent border-none text-text-primary text-xs outline-none w-full"
          />
        </div>

        <div className="flex flex-col gap-2">
          {filteredComponents.map((comp) => (
            <div
              key={comp.type}
              className="flex items-center p-2.5 border border-border-color rounded-lg cursor-pointer transition-all hover:bg-bg-hover hover:border-primary hover:-translate-y-0.5 gap-3 group"
              onClick={() => onAddComponent(comp.type)}
              draggable={!readOnly}
              onDragStart={(e) => e.dataTransfer.setData('text/plain', comp.type)}
            >
              <div className="bg-bg-hover text-primary p-2 rounded-md flex items-center justify-center transition-colors group-hover:bg-primary/10">
                {comp.icon}
              </div>
              <div>
                <h3 className="text-xs font-semibold text-text-primary mb-0.5">{comp.label}</h3>
                <p className="text-[10px] text-text-muted">{comp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Layers Tree section */}
      <div className="p-5 flex-1 flex flex-col border-b-0 overflow-hidden">
        <div className="flex items-center gap-2 mb-3 text-text-primary text-sm font-semibold">
          <Layers size={16} />
          <h2>{t('layers')}</h2>
        </div>
        <div className="flex-1 overflow-y-auto">
          {nodes.length === 0 ? (
            <p className="text-xs text-text-muted text-center mt-5">Crea secciones para estructurar tu correo.</p>
          ) : (
            nodes.map((node) => renderLayerItem(node, 0))
          )}
        </div>
      </div>
    </aside>
  );
};
