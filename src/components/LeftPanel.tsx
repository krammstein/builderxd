import React, { useState } from 'react';
import type { BlockType, BlockNode, UIConfig, TemplateMode } from '../types';
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
  Images,
  Star,
  FolderOpen,
  LayoutGrid,
  FileText,
  User,
  ShoppingBag
} from 'lucide-react';

interface LeftPanelProps {
  onAddComponent: (type: BlockType) => void;
  nodes: BlockNode[];
  selectedId: string | null;
  onSelectNode: (id: string | null) => void;
  onDeleteNode: (id: string) => void;
  onMoveNode: (id: string, direction: 'up' | 'down') => void;
  readOnly?: boolean;
  templateMode?: TemplateMode;
  setTemplateMode?: (mode: TemplateMode) => void;
  onClearCanvas?: () => void;
  uiConfig?: UIConfig;
}

export const LeftPanel: React.FC<LeftPanelProps> = ({
  onAddComponent,
  nodes,
  selectedId,
  onSelectNode,
  onDeleteNode,
  onMoveNode,
  readOnly = false,
  templateMode = 'mjml',
  setTemplateMode,
  onClearCanvas,
  uiConfig
}) => {
  const [activeTab, setActiveTab] = useState<'components' | 'layers' | 'assets'>('components');
  const [searchQuery, setSearchQuery] = useState('');
  const [collapsedLayers, setCollapsedLayers] = useState<Record<string, boolean>>({});

  const availableComponents = [
    { type: 'section' as BlockType, label: 'Sección', icon: <Layout size={24} /> },
    { type: 'column' as BlockType, label: 'Columna', icon: <Columns size={24} /> },
    { type: 'heading' as BlockType, label: 'Título', icon: <Type size={24} /> },
    { type: 'paragraph' as BlockType, label: 'Párrafo', icon: <FileText size={24} /> },
    { type: 'text' as BlockType, label: 'Texto Libre', icon: <Type size={24} /> },
    { type: 'image' as BlockType, label: 'Imagen', icon: <Image size={24} /> },
    { type: 'button' as BlockType, label: 'Botón', icon: <Square size={24} /> },
    { type: 'divider' as BlockType, label: 'Divisor', icon: <Minus size={24} /> },
    { type: 'spacer' as BlockType, label: 'Espaciador', icon: <MoveVertical size={24} /> },
    { type: 'social' as BlockType, label: 'Redes', icon: <Share2 size={24} /> },
    { type: 'video' as BlockType, label: 'Vídeo', icon: <Video size={24} /> },
    { type: 'custom_html' as BlockType, label: 'HTML', icon: <Code size={24} /> },
    { type: 'countdown' as BlockType, label: 'Contador', icon: <Clock size={24} /> },
    { type: 'accordion' as BlockType, label: 'Acordeón', icon: <Menu size={24} /> },
    { type: 'carousel' as BlockType, label: 'Carrusel', icon: <Images size={24} /> },
    { type: 'icon' as BlockType, label: 'Icono', icon: <Star size={24} /> },
    { type: 'nav_menu' as BlockType, label: 'Menú Nav', icon: <Menu size={24} /> },
    { type: 'image_text' as BlockType, label: 'Img + Texto', icon: <FileText size={24} /> },
    { type: 'product_card' as BlockType, label: 'Producto', icon: <ShoppingBag size={24} /> },
    { type: 'quote' as BlockType, label: 'Cita', icon: <User size={24} /> }
  ];

  // Define components that are only valid in MJML template mode
  const mjmlOnlyTypes: BlockType[] = ['section', 'column', 'accordion', 'carousel', 'countdown'];

  const filteredComponents = availableComponents.filter((comp) => {
    if (templateMode === 'html' && mjmlOnlyTypes.includes(comp.type)) {
      return false;
    }
    return (
      comp.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.type.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const toggleCollapse = (id: string) => {
    setCollapsedLayers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const renderLayerItem = (node: BlockNode, depth: number = 0): React.ReactNode => {
    const isSelected = node.id === selectedId;
    const hasChildren = node.children && node.children.length > 0;
    const isCollapsed = collapsedLayers[node.id];
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
          {hasChildren && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleCollapse(node.id);
              }}
              className="bg-transparent border-none text-text-muted mr-1 cursor-pointer"
            >
              <span className="text-[10px]">{isCollapsed ? '▶' : '▼'}</span>
            </button>
          )}
          <span className={`mr-2 flex items-center shrink-0 ${isSelected ? 'text-primary' : 'text-text-muted'}`}>
            {React.cloneElement(availableComponents.find((c) => c.type === node.type)?.icon || <Layout size={14} />, { size: 14 })}
          </span>
          <span className="text-xs font-medium truncate flex-1">{displayName}</span>

          {!readOnly && (
            <div className="hidden group-hover:flex items-center gap-0.5 shrink-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMoveNode(node.id, 'up');
                }}
                className="bg-transparent border-none text-text-muted p-0.5 rounded-xs cursor-pointer hover:bg-border-color hover:text-text-primary"
              >
                <ChevronUp size={12} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMoveNode(node.id, 'down');
                }}
                className="bg-transparent border-none text-text-muted p-0.5 rounded-xs cursor-pointer hover:bg-border-color hover:text-text-primary"
              >
                <ChevronDown size={12} />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteNode(node.id);
                }}
                className="bg-transparent border-none text-text-muted p-0.5 rounded-xs cursor-pointer hover:bg-red-500/15 hover:text-red-500"
              >
                <Trash2 size={12} />
              </button>
            </div>
          )}
        </div>
        {hasChildren && !isCollapsed && (
          <div className="flex flex-col">
            {node.children!.map((child) => renderLayerItem(child, depth + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-[344px] bg-bg-panel border-r border-border-color flex h-full select-none overflow-hidden shrink-0">
      {/* 5.2 Vertical Tabs Sidebar (44px wide) */}
      <div className="w-11 border-r border-border-color/65 bg-bg-panel flex flex-col items-center py-4 gap-4 shrink-0">
        <button
          onClick={() => setActiveTab('components')}
          className={`p-2 rounded-lg cursor-pointer transition-all border-none outline-none ${
            activeTab === 'components' ? 'bg-primary/10 text-primary' : 'text-text-muted hover:text-text-primary'
          }`}
          title="Componentes"
          id="tab-btn-components"
        >
          <LayoutGrid size={20} />
        </button>

        <button
          onClick={() => setActiveTab('layers')}
          className={`p-2 rounded-lg cursor-pointer transition-all border-none outline-none ${
            activeTab === 'layers' ? 'bg-primary/10 text-primary' : 'text-text-muted hover:text-text-primary'
          }`}
          title="Capas / Layers"
          id="tab-btn-layers"
        >
          <Layers size={20} />
        </button>

        <button
          onClick={() => setActiveTab('assets')}
          className={`p-2 rounded-lg cursor-pointer transition-all border-none outline-none ${
            activeTab === 'assets' ? 'bg-primary/10 text-primary' : 'text-text-muted hover:text-text-primary'
          }`}
          title="Recursos / Assets"
          id="tab-btn-assets"
        >
          <FolderOpen size={20} />
        </button>
      </div>

      {/* Main content area (300px wide) */}
      <div className="flex-1 flex flex-col overflow-hidden h-full">
        {activeTab === 'components' && (
          <div className="p-4 flex flex-col overflow-y-auto flex-1 h-full gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold text-text-primary">Librería de Componentes</h2>
                {uiConfig?.showClearCanvas !== false && onClearCanvas && (
                  <button
                    onClick={onClearCanvas}
                    className="p-1 px-2 text-[10px] font-bold text-red-500 border border-red-500/20 bg-red-500/10 rounded-md cursor-pointer hover:bg-red-500 hover:text-white transition-all border-none shrink-0"
                    id="btn-clear-canvas"
                  >
                    Limpiar
                  </button>
                )}
              </div>

              {uiConfig?.showTemplateModeToggle !== false && setTemplateMode && (
                <div className="flex bg-bg-hover p-1 rounded-md border border-border-color/80 w-full shrink-0 select-none">
                  <button
                    onClick={() => setTemplateMode('html')}
                    className={`flex-1 text-center py-1 text-[10.5px] font-bold rounded-sm cursor-pointer transition-all border-none ${
                      templateMode === 'html' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    HTML
                  </button>
                  <button
                    onClick={() => setTemplateMode('mjml')}
                    className={`flex-1 text-center py-1 text-[10.5px] font-bold rounded-sm cursor-pointer transition-all border-none ${
                      templateMode === 'mjml' ? 'bg-primary text-white' : 'text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    MJML
                  </button>
                </div>
              )}

              <div className="flex items-center bg-bg-hover border border-border-color rounded-md p-2 px-3 gap-2 shrink-0">
                <Search size={14} className="text-text-muted shrink-0" />
                <input
                  type="text"
                  placeholder="Buscar componentes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none text-text-primary text-xs outline-none w-full"
                  id="comp-search"
                />
              </div>
            </div>

            {/* 5.1 Grid 2 Columns for available draggable components */}
            <div className="grid grid-cols-2 gap-3.5 pb-4">
              {filteredComponents.map((comp) => (
                <div
                  key={comp.type}
                  className="flex flex-col items-center justify-center p-3.5 border border-border-color rounded-lg cursor-grab transition-all hover:bg-bg-hover hover:border-primary active:cursor-grabbing group bg-bg-panel text-center select-none"
                  onClick={() => onAddComponent(comp.type)}
                  draggable={!readOnly}
                  onDragStart={(e) => e.dataTransfer.setData('text/plain', comp.type)}
                  id={`block-item-${comp.type}`}
                >
                  <div className="text-primary mb-2 bg-bg-hover p-3 rounded-lg group-hover:bg-primary/10 transition-colors">
                    {comp.icon}
                  </div>
                  <span className="text-[11.5px] font-medium text-text-primary truncate w-full">{comp.label}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'layers' && (
          <div className="p-4 flex-1 flex flex-col overflow-hidden h-full">
            <h2 className="text-sm font-semibold text-text-primary mb-3.5">Árbol de Capas</h2>
            <div className="flex-1 overflow-y-auto">
              {nodes.length === 0 ? (
                <p className="text-xs text-text-muted text-center mt-5">Arrastra componentes al canvas central.</p>
              ) : (
                <div className="flex flex-col">
                  {/* Collapsible Design node wrapper */}
                  <div className="flex items-center p-2 rounded-md mb-0.5 text-text-primary font-bold text-xs bg-bg-hover border border-border-color/20">
                    <span className="mr-2 text-primary">⚡</span>
                    <span>Design System Layers</span>
                  </div>
                  <div className="pl-2.5 pt-1.5 border-l border-border-color/40 ml-4">
                    {nodes.map((node) => renderLayerItem(node, 0))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {activeTab === 'assets' && (
          <div className="p-4 flex-1 flex flex-col overflow-hidden h-full">
            <h2 className="text-sm font-semibold text-text-primary mb-3.5">Gestor de Recursos</h2>
            <div className="flex-1 flex flex-col items-center justify-center text-center p-5 text-text-muted gap-2">
              <FolderOpen size={36} className="text-text-muted/60" />
              <p className="text-xs">No hay imágenes o recursos locales subidos aún.</p>
              <span className="text-[10px] text-text-muted/50">Usa las integraciones del menú superior.</span>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};
