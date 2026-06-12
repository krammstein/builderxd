import { useState } from 'react';
import { Header } from './components/Header';
import { LeftPanel } from './components/LeftPanel';
import { InspectorPanel } from './components/InspectorPanel';
import { Canvas } from './components/Canvas';
import { CodeDrawer } from './components/CodeDrawer';
import type { BlockNode, BlockType, DeviceMode } from './types';

import { compileToMJML, compileToHTML } from './utils/compiler';
import { useTranslation } from './context/LanguageContext';
import { X, Sparkles } from 'lucide-react';

const INITIAL_TEMPLATE: BlockNode[] = [
  {
    id: 'sec-1',
    type: 'section',
    properties: { backgroundColor: '#ffffff', padding: '20px 10px' },
    children: [
      {
        id: 'col-1-1',
        type: 'column',
        properties: { width: '100%', padding: '10px' },
        children: [
          {
            id: 'txt-1-1-1',
            type: 'text',
            properties: {
              content: '<h1 style="margin: 0; font-size: 28px; font-weight: 800; color: #4F46E5; text-align: center;">BUILDERXD</h1><p style="margin: 5px 0 0; text-align: center; color: #6b7280;">El editor de correos definitivo</p>',
              color: '#000000',
              fontSize: '16px',
              align: 'center',
              padding: '10px'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'sec-2',
    type: 'section',
    properties: { backgroundColor: '#f3f4f6', padding: '30px 10px' },
    children: [
      {
        id: 'col-2-1',
        type: 'column',
        properties: { width: '100%', padding: '10px' },
        children: [
          {
            id: 'img-2-1-1',
            type: 'image',
            properties: {
              url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
              altText: 'Mockup Promo',
              align: 'center',
              borderRadius: '8px',
              padding: '10px 20px'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'sec-3',
    type: 'section',
    properties: { backgroundColor: '#ffffff', padding: '30px 10px' },
    children: [
      {
        id: 'col-3-1',
        type: 'column',
        properties: { width: '100%', padding: '10px' },
        children: [
          {
            id: 'txt-3-1-1',
            type: 'text',
            properties: {
              content: '<h2 style="font-size: 20px; font-weight: 700; text-align: center;">Crea plantillas increíbles en minutos</h2><p style="color: #4b5563; text-align: center;">Diseña correos completamente responsivos e interactivos sin escribir código complejo. Compatible con MJML e integraciones avanzadas.</p>',
              color: '#1f2937',
              fontSize: '16px',
              align: 'center',
              padding: '10px 20px'
            },
            mobileProperties: {
              fontSize: '14px',
              padding: '5px 10px'
            }
          },
          {
            id: 'btn-3-1-2',
            type: 'button',
            properties: {
              content: 'Comenzar Ahora',
              url: 'https://example.com',
              backgroundColor: '#4F46E5',
              color: '#ffffff',
              borderRadius: '6px',
              align: 'center',
              padding: '12px 24px'
            }
          }
        ]
      }
    ]
  },
  {
    id: 'sec-4',
    type: 'section',
    properties: { backgroundColor: '#111827', padding: '20px 10px' },
    children: [
      {
        id: 'col-4-1',
        type: 'column',
        properties: { width: '100%', padding: '10px' },
        children: [
          {
            id: 'divider-4-1-1',
            type: 'divider',
            properties: {
              color: '#374151',
              thickness: '1px',
              padding: '10px 20px'
            }
          },
          {
            id: 'soc-4-1-2',
            type: 'social',
            properties: {
              align: 'center',
              padding: '10px'
            }
          }
        ]
      }
    ]
  }
];

function App() {
  const { t } = useTranslation();
  const [nodes, setNodes] = useState<BlockNode[]>(INITIAL_TEMPLATE);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [deviceMode, setDeviceMode] = useState<DeviceMode>('desktop');

  // History management
  const [history, setHistory] = useState<BlockNode[][]>([INITIAL_TEMPLATE]);
  const [historyIndex, setHistoryIndex] = useState(0);

  // Modal control states
  const [isImportOpen, setIsImportOpen] = useState(false);
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isSendTestOpen, setIsSendTestOpen] = useState(false);

  // Import fields
  const [importCode, setImportCode] = useState('');
  const [importError, setImportError] = useState('');

  // Send Test fields
  const [testEmails, setTestEmails] = useState('');
  const [testAlert, setTestAlert] = useState('');

  // Update history stack
  const updateNodesAndHistory = (newNodes: BlockNode[]) => {
    const updatedHistory = history.slice(0, historyIndex + 1);
    setHistory([...updatedHistory, newNodes]);
    setHistoryIndex(updatedHistory.length);
    setNodes(newNodes);
  };

  const handleUndo = () => {
    if (historyIndex > 0) {
      setHistoryIndex(historyIndex - 1);
      setNodes(history[historyIndex - 1]);
    }
  };

  const handleRedo = () => {
    if (historyIndex < history.length - 1) {
      setHistoryIndex(historyIndex + 1);
      setNodes(history[historyIndex + 1]);
    }
  };

  // Find node helper
  const findNode = (id: string, list: BlockNode[] = nodes): BlockNode | null => {
    for (const item of list) {
      if (item.id === id) return item;
      if (item.children) {
        const found = findNode(id, item.children);
        if (found) return found;
      }
    }
    return null;
  };

  const selectedNode = selectedId ? findNode(selectedId) : null;

  // Add Component handler
  const handleAddComponent = (type: BlockType) => {
    const newId = `${type}-${Math.random().toString(36).substr(2, 9)}`;
    let defaultProps: Record<string, any> = {};

    switch (type) {
      case 'section':
        defaultProps = { backgroundColor: '#ffffff', padding: '20px 10px' };
        break;
      case 'column':
        defaultProps = { width: '100%', padding: '10px' };
        break;
      case 'text':
        defaultProps = {
          content: 'Escribe aquí tu texto...',
          color: '#1a1a1a',
          fontSize: '16px',
          align: 'left',
          padding: '10px 20px'
        };
        break;
      case 'image':
        defaultProps = {
          url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
          altText: 'Image description',
          align: 'center',
          borderRadius: '8px',
          padding: '10px 20px'
        };
        break;
      case 'button':
        defaultProps = {
          content: 'Haga clic aquí',
          url: 'https://example.com',
          backgroundColor: '#4F46E5',
          color: '#ffffff',
          borderRadius: '6px',
          align: 'center',
          padding: '12px 24px'
        };
        break;
      case 'divider':
        defaultProps = { color: '#e5e7eb', thickness: '2px', padding: '15px 20px' };
        break;
      case 'spacer':
        defaultProps = { height: '30px' };
        break;
      case 'social':
        defaultProps = { align: 'center', padding: '15px 20px' };
        break;
    }

    const newBlock: BlockNode = {
      id: newId,
      type,
      properties: defaultProps
    };

    if (type === 'section') {
      // Create section with columns
      newBlock.children = [
        {
          id: `col-${Math.random().toString(36).substr(2, 9)}`,
          type: 'column',
          properties: { width: '100%', padding: '10px' },
          children: []
        }
      ];
      updateNodesAndHistory([...nodes, newBlock]);
      setSelectedId(newId);
      return;
    }

    // Insert block inside selected column or section
    let updated = false;
    const addRecursively = (list: BlockNode[]): BlockNode[] => {
      return list.map((node) => {
        if (node.id === selectedId) {
          if (node.type === 'column') {
            node.children = [...(node.children || []), newBlock];
            updated = true;
          } else if (node.type === 'section') {
            // Find first column or add a column first
            if (node.children && node.children.length > 0) {
              node.children[0].children = [...(node.children[0].children || []), newBlock];
            } else {
              node.children = [
                {
                  id: `col-${Math.random().toString(36).substr(2, 9)}`,
                  type: 'column',
                  properties: { width: '100%', padding: '10px' },
                  children: [newBlock]
                }
              ];
            }
            updated = true;
          }
        } else if (node.children) {
          node.children = addRecursively(node.children);
        }
        return node;
      });
    };

    const newNodes = addRecursively([...nodes]);

    if (!updated) {
      // Append to the first found column of the first section, or add section+column
      if (newNodes.length > 0 && newNodes[0].children && newNodes[0].children.length > 0) {
        newNodes[0].children[0].children = [...(newNodes[0].children[0].children || []), newBlock];
        updateNodesAndHistory(newNodes);
      } else {
        const fallbackSection: BlockNode = {
          id: `sec-${Math.random().toString(36).substr(2, 9)}`,
          type: 'section',
          properties: { backgroundColor: '#ffffff', padding: '20px 10px' },
          children: [
            {
              id: `col-${Math.random().toString(36).substr(2, 9)}`,
              type: 'column',
              properties: { width: '100%', padding: '10px' },
              children: [newBlock]
            }
          ]
        };
        updateNodesAndHistory([...nodes, fallbackSection]);
      }
    } else {
      updateNodesAndHistory(newNodes);
    }

    setSelectedId(newId);
  };

  // Update properties handler
  const handleUpdateProperties = (id: string, newProps: Record<string, any>, isMobile: boolean) => {
    const updateRecursively = (list: BlockNode[]): BlockNode[] => {
      return list.map((node) => {
        if (node.id === id) {
          if (isMobile) {
            node.mobileProperties = {
              ...(node.mobileProperties || {}),
              ...newProps
            };
          } else {
            node.properties = {
              ...node.properties,
              ...newProps
            };
          }
        } else if (node.children) {
          node.children = updateRecursively(node.children);
        }
        return node;
      });
    };

    updateNodesAndHistory(updateRecursively([...nodes]));
  };

  // Delete node handler
  const handleDeleteNode = (id: string) => {
    const deleteRecursively = (list: BlockNode[]): BlockNode[] => {
      return list
        .filter((node) => node.id !== id)
        .map((node) => {
          if (node.children) {
            node.children = deleteRecursively(node.children);
          }
          return node;
        });
    };

    updateNodesAndHistory(deleteRecursively([...nodes]));
    if (selectedId === id) setSelectedId(null);
  };

  // Move node handler (Up / Down)
  const handleMoveNode = (id: string, direction: 'up' | 'down') => {
    const moveInArray = (arr: BlockNode[]): BlockNode[] => {
      const idx = arr.findIndex((n) => n.id === id);
      if (idx !== -1) {
        const newArr = [...arr];
        const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
        if (swapIdx >= 0 && swapIdx < newArr.length) {
          const temp = newArr[idx];
          newArr[idx] = newArr[swapIdx];
          newArr[swapIdx] = temp;
        }
        return newArr;
      }
      return arr.map((node) => {
        if (node.children) {
          node.children = moveInArray(node.children);
        }
        return node;
      });
    };

    updateNodesAndHistory(moveInArray([...nodes]));
  };

  // Import handler
  const handleImport = () => {
    try {
      const parsed = JSON.parse(importCode);
      if (Array.isArray(parsed)) {
        updateNodesAndHistory(parsed);
        setIsImportOpen(false);
        setImportError('');
        setSelectedId(null);
      } else {
        setImportError(t('invalidJSON'));
      }
    } catch (err) {
      setImportError(t('invalidJSON'));
    }
  };

  // Send Test handler
  const handleSendTest = () => {
    if (!testEmails.trim()) return;
    setTestAlert(`${t('testEmailSent')} ${testEmails}`);
    setTimeout(() => {
      setTestAlert('');
      setIsSendTestOpen(false);
      setTestEmails('');
    }, 3000);
  };

  // Compile code
  const mjmlCode = compileToMJML(nodes);
  const htmlCode = compileToHTML(nodes, selectedId, deviceMode === 'mobile');

  return (
    <div className="builder-app-container">
      {/* Header Bar */}
      <Header
        deviceMode={deviceMode}
        setDeviceMode={setDeviceMode}
        canUndo={historyIndex > 0}
        canRedo={historyIndex < history.length - 1}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onImportClick={() => {
          setImportCode(JSON.stringify(nodes, null, 2));
          setIsImportOpen(true);
        }}
        onExportClick={() => setIsExportOpen(true)}
        onSendTestClick={() => setIsSendTestOpen(true)}
      />

      {/* Main Workspace layout */}
      <div className="builder-workspace">
        {/* Left panel: components & layers */}
        <LeftPanel
          onAddComponent={handleAddComponent}
          nodes={nodes}
          selectedId={selectedId}
          onSelectNode={setSelectedId}
          onDeleteNode={handleDeleteNode}
          onMoveNode={handleMoveNode}
        />

        {/* Center Canvas */}
        <Canvas
          htmlContent={htmlCode}
          deviceMode={deviceMode}
          onSelectNode={setSelectedId}
        />

        {/* Right Panel: properties inspector */}
        <InspectorPanel
          selectedNode={selectedNode}
          onUpdateProperties={handleUpdateProperties}
          onDeleteNode={handleDeleteNode}
        />

        {/* Collapsible bottom drawer for code preview */}
        <CodeDrawer mjmlCode={mjmlCode} htmlCode={htmlCode} />
      </div>

      {/* --- MODALS --- */}

      {/* Import Modal */}
      {isImportOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{t('importTitle')}</h2>
              <button onClick={() => setIsImportOpen(false)} className="modal-close-btn">
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              <textarea
                value={importCode}
                onChange={(e) => setImportCode(e.target.value)}
                placeholder={t('importPlaceholder')}
                className="property-input"
                rows={12}
                style={{ fontFamily: 'monospace', fontSize: '11px' }}
              />
              {importError && <span style={{ color: 'var(--danger)', fontSize: '12px' }}>{importError}</span>}
            </div>
            <div className="modal-footer">
              <button onClick={() => setIsImportOpen(false)} className="btn btn-secondary">
                {t('close')}
              </button>
              <button onClick={handleImport} className="btn btn-primary">
                {t('load')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Export Modal */}
      {isExportOpen && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ width: '600px' }}>
            <div className="modal-header">
              <h2>{t('export')}</h2>
              <button onClick={() => setIsExportOpen(false)} className="modal-close-btn">
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{t('exportSuccess')}</p>
              <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                <button
                  onClick={() => {
                    const blob = new Blob([mjmlCode], { type: 'text/plain;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'template.mjml';
                    link.click();
                  }}
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  Download MJML
                </button>
                <button
                  onClick={() => {
                    const blob = new Blob([htmlCode], { type: 'text/html;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'template.html';
                    link.click();
                  }}
                  className="btn btn-primary"
                  style={{ flex: 1 }}
                >
                  Download HTML
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={() => setIsExportOpen(false)} className="btn btn-secondary">
                {t('close')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Send Test Modal */}
      {isSendTestOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2>{t('sendTest')}</h2>
              <button onClick={() => setIsSendTestOpen(false)} className="modal-close-btn">
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              <label style={{ fontSize: '12px', fontWeight: 500 }}>{t('enterTestEmails')}</label>
              <input
                type="text"
                placeholder="test@example.com, user@domain.com"
                value={testEmails}
                onChange={(e) => setTestEmails(e.target.value)}
                className="property-input"
              />
              {testAlert && (
                <div style={{ padding: '8px 12px', backgroundColor: 'rgba(16, 185, 129, 0.15)', color: 'var(--success)', borderRadius: '6px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={14} />
                  <span>{testAlert}</span>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button onClick={() => setIsSendTestOpen(false)} className="btn btn-secondary">
                {t('close')}
              </button>
              <button onClick={handleSendTest} className="btn btn-accent" disabled={!testEmails.trim()}>
                {t('send')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
