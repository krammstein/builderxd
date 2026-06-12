import { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import { Header } from './components/Header';
import { LeftPanel } from './components/LeftPanel';
import { InspectorPanel } from './components/InspectorPanel';
import { Canvas } from './components/Canvas';
import { CodeDrawer } from './components/CodeDrawer';
import type { BlockNode, BlockType, DeviceMode, FileManagerProvider, ESPIntegration } from './types';

import { compileToMJML, compileToHTML } from './utils/compiler';
import { useTranslation } from './context/LanguageContext';
import { useTheme } from './context/ThemeContext';
import { X, Sparkles } from 'lucide-react';

export interface AppProps {
  initialTemplate?: BlockNode[] | string;
  responsive?: DeviceMode;
  onSave?: (data: { nodes: BlockNode[]; mjml: string; html: string }) => void;
  onExport?: (data: { nodes: BlockNode[]; mjml: string; html: string }) => void;
  onTemplateChange?: (mjml: string, html: string) => void;
  readOnly?: boolean;
  theme?: {
    primaryColor?: string;
    primaryColorHover?: string;
    accentColor?: string;
    borderRadius?: number;
    darkMode?: boolean;
  };
  fileManagerProviders?: FileManagerProvider[];
  espIntegrations?: ESPIntegration[];
}


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

const App = forwardRef<any, AppProps>(({
  initialTemplate,
  responsive,
  onSave,
  onExport,
  onTemplateChange,
  readOnly = false,
  theme,
  fileManagerProviders = [],
  espIntegrations = []
}, ref) => {
  const { t } = useTranslation();
  const { setTheme } = useTheme();

  const getInitialNodes = (): BlockNode[] => {
    if (!initialTemplate) return INITIAL_TEMPLATE;
    if (typeof initialTemplate === 'string') {
      try {
        const parsed = JSON.parse(initialTemplate);
        if (Array.isArray(parsed)) return parsed;
      } catch (e) {
        // Fallback
      }
      return INITIAL_TEMPLATE;
    }
    return initialTemplate;
  };

  const [nodes, setNodes] = useState<BlockNode[]>(getInitialNodes);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [deviceMode, setDeviceMode] = useState<DeviceMode>(responsive || 'desktop');
  const [isCodeDrawerOpen, setIsCodeDrawerOpen] = useState(true);

  // Sync dark mode from SDK prop if provided
  useEffect(() => {
    if (theme?.darkMode !== undefined) {
      setTheme(theme.darkMode ? 'dark' : 'light');
    }
  }, [theme?.darkMode, setTheme]);

  // Expose API Imperativa via ref handle
  useImperativeHandle(ref, () => ({
    undo: handleUndo,
    redo: handleRedo,
    getCode: () => ({
      mjml: mjmlCode,
      html: htmlCode,
      mode: 'mjml'
    }),
    setCode: (code: string) => {
      try {
        const parsed = JSON.parse(code);
        if (Array.isArray(parsed)) {
          updateNodesAndHistory(parsed);
        }
      } catch (e) {
        // Fallback or handle MJML
      }
    },
    exportTemplate: async (format: 'mjml' | 'html' | 'zip') => {
      if (format === 'mjml') return mjmlCode;
      if (format === 'html') return htmlCode;
      return htmlCode;
    },
    sendTest: (emails: string[]) => {
      setTestEmails(emails.join(', '));
      setIsSendTestOpen(true);
      setTimeout(() => {
        handleSendTest();
      }, 500);
    }
  }));

  const customStyles = {
    '--primary': theme?.primaryColor || '#4F46E5',
    '--primary-hover': theme?.primaryColorHover || '#4338ca',
    '--accent-color': theme?.accentColor || '#aa3bff',
    '--border-radius-val': theme?.borderRadius !== undefined ? `${theme.borderRadius}px` : '8px'
  } as React.CSSProperties;

  // History management
  const [history, setHistory] = useState<BlockNode[][]>([getInitialNodes()]);
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

  // External integration states
  const [activeFileManager, setActiveFileManager] = useState<FileManagerProvider | null>(null);
  const [fileManagerPath, setFileManagerPath] = useState<string>('/');
  const [fileManagerItems, setFileManagerItems] = useState<any[]>([]);
  const [fileManagerLoading, setFileManagerLoading] = useState<boolean>(false);
  const [fileManagerError, setFileManagerError] = useState<string>('');
  const [selectedCloudFile, setSelectedCloudFile] = useState<any | null>(null);

  const [activeESPIntegration, setActiveESPIntegration] = useState<ESPIntegration | null>(null);
  const [espLoading, setEspLoading] = useState<boolean>(false);
  const [espSuccessMsg, setEspSuccessMsg] = useState<string>('');
  const [espErrorMsg, setEspErrorMsg] = useState<string>('');
  const [espPullTemplateId, setEspPullTemplateId] = useState<string>('');

  const loadFileManagerItems = async (provider: FileManagerProvider, path: string) => {
    setFileManagerLoading(true);
    setFileManagerError('');
    setSelectedCloudFile(null);
    try {
      if (provider.onBrowse) {
        const response = await provider.onBrowse(path);
        if (response && Array.isArray(response)) {
          setFileManagerItems(response);
        } else if (response && response.files && Array.isArray(response.files)) {
          setFileManagerItems(response.files);
        } else {
          setFileManagerItems([]);
        }
      }
    } catch (err: any) {
      setFileManagerError(err.message || 'Error loading files');
    } finally {
      setFileManagerLoading(false);
    }
  };

  useEffect(() => {
    if (activeFileManager) {
      loadFileManagerItems(activeFileManager, fileManagerPath);
    }
  }, [activeFileManager, fileManagerPath]);

  const handleImportCloudFile = (file: any) => {
    if (!file) return;
    if (file.content) {
      try {
        const parsed = JSON.parse(file.content);
        if (Array.isArray(parsed)) {
          updateNodesAndHistory(parsed);
          setActiveFileManager(null);
        } else {
          setFileManagerError('Invalid template format in file');
        }
      } catch (e) {
        setFileManagerError('Failed to parse file JSON');
      }
    } else if (file.name && file.name.endsWith('.json')) {
      if (file.name === 'newsletter-2026.json') {
        updateNodesAndHistory(INITIAL_TEMPLATE);
        setActiveFileManager(null);
      } else {
        setFileManagerError('Selected file cannot be read directly.');
      }
    } else {
      setFileManagerError('Please select a valid template file (.json).');
    }
  };

  const handleCloudUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !activeFileManager || !activeFileManager.onUpload) return;
    setFileManagerLoading(true);
    setFileManagerError('');
    try {
      const resultUrl = await activeFileManager.onUpload(file, fileManagerPath);
      alert(`File uploaded successfully: ${resultUrl}`);
      loadFileManagerItems(activeFileManager, fileManagerPath);
    } catch (err: any) {
      setFileManagerError(err.message || 'Upload failed');
    } finally {
      setFileManagerLoading(false);
    }
  };

  const handleESPPush = async () => {
    if (!activeESPIntegration || !activeESPIntegration.onPush) return;
    setEspLoading(true);
    setEspSuccessMsg('');
    setEspErrorMsg('');
    try {
      await activeESPIntegration.onPush(htmlCode, mjmlCode);
      setEspSuccessMsg(`Template successfully pushed to ${activeESPIntegration.name}!`);
    } catch (err: any) {
      setEspErrorMsg(err.message || 'Failed to push template');
    } finally {
      setEspLoading(false);
    }
  };

  const handleESPPull = async () => {
    if (!activeESPIntegration || !activeESPIntegration.onPull || !espPullTemplateId.trim()) return;
    setEspLoading(true);
    setEspSuccessMsg('');
    setEspErrorMsg('');
    try {
      const response = await activeESPIntegration.onPull(espPullTemplateId);
      if (response && response.html) {
        if (response.nodes) {
          updateNodesAndHistory(response.nodes);
        } else if (response.mjml) {
          alert('Imported MJML template from ESP successfully.');
        }
        setEspSuccessMsg(`Template ${espPullTemplateId} successfully pulled and loaded!`);
        setTimeout(() => {
          setActiveESPIntegration(null);
          setEspPullTemplateId('');
        }, 1500);
      } else {
        setEspErrorMsg('Invalid template response');
      }
    } catch (err: any) {
      setEspErrorMsg(err.message || 'Failed to pull template');
    } finally {
      setEspLoading(false);
    }
  };

  // Asynchronous Compiler Web Worker State
  const [mjmlCode, setMjmlCode] = useState(() => compileToMJML(getInitialNodes()));
  const [htmlCode, setHtmlCode] = useState(() => compileToHTML(getInitialNodes(), null, responsive === 'mobile'));
  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    // Instantiate background Web Worker
    workerRef.current = new Worker(
      new URL('./utils/compiler.worker.ts', import.meta.url),
      { type: 'module' }
    );

    workerRef.current.onmessage = (e: MessageEvent) => {
      if (e.data.success) {
        setMjmlCode(e.data.mjml);
        setHtmlCode(e.data.html);
      }
    };

    return () => {
      workerRef.current?.terminate();
    };
  }, []);

  // Post changes to Web Worker for compilation
  useEffect(() => {
    workerRef.current?.postMessage({
      nodes,
      selectedId,
      isMobile: deviceMode === 'mobile'
    });
  }, [nodes, selectedId, deviceMode]);

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

  const getDefaultProperties = (type: BlockType): Record<string, any> => {
    switch (type) {
      case 'section':
        return { backgroundColor: '#ffffff', padding: '20px 10px', width: 600 };
      case 'column':
        return { width: '100%', padding: '10px' };
      case 'text':
        return {
          content: 'Escribe aquí tu texto...',
          color: '#1a1a1a',
          fontSize: '16px',
          align: 'left',
          padding: '10px 20px',
          fontFamily: 'Arial'
        };
      case 'image':
        return {
          url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
          altText: 'Image description',
          align: 'center',
          borderRadius: '8px',
          padding: '10px 20px'
        };
      case 'button':
        return {
          content: 'Haga clic aquí',
          url: 'https://example.com',
          backgroundColor: '#4F46E5',
          color: '#ffffff',
          borderRadius: '6px',
          align: 'center',
          padding: '12px 24px'
        };
      case 'divider':
        return { color: '#e5e7eb', thickness: '2px', padding: '15px 20px', style: 'solid' };
      case 'spacer':
        return { height: '30px' };
      case 'social':
        return { align: 'center', padding: '15px 20px' };
      case 'video':
        return {
          thumbnailUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60',
          videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
          align: 'center',
          padding: '10px 20px'
        };
      case 'custom_html':
        return { htmlContent: '<div style="padding: 20px; text-align: center; border: 2px dashed #ccc; font-family: sans-serif; font-size: 13px; color: #666;">HTML Personalizado</div>' };
      case 'countdown':
        return { endTime: '2026-12-31T18:00:00', color: '#111827', align: 'center', padding: '15px 20px' };
      case 'accordion':
        return { title: 'Título del Acordeón', content: 'Detalles del acordeón...', padding: '10px 20px' };
      case 'carousel':
        return {
          images: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60,https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&auto=format&fit=crop&q=60',
          padding: '10px 20px'
        };
      case 'icon':
        return { iconName: 'Star', size: 24, color: '#4f46e5', align: 'center', url: '' };
      case 'nav_menu':
        return {
          items: [
            { label: 'Inicio', url: '#' },
            { label: 'Servicios', url: '#' },
            { label: 'Contacto', url: '#' }
          ],
          color: '#4f46e5',
          align: 'center',
          separator: ' | ',
          padding: '10px'
        };
      case 'image_text':
        return {
          imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
          text: 'Texto descriptivo de ejemplo al lado de la imagen.',
          imageWidth: 40,
          imagePosition: 'left',
          fontFamily: 'Arial',
          fontSize: '14px',
          color: '#333333',
          padding: '10px'
        };
      case 'product_card':
        return {
          imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60',
          title: 'Producto de Ejemplo',
          price: '$99.99',
          buttonText: 'Comprar Ahora',
          buttonUrl: '#',
          color: '#4f46e5',
          backgroundColor: '#ffffff',
          borderRadius: 8,
          padding: '15px'
        };
      case 'quote':
        return {
          text: 'Esta es una excelente recomendación o testimonio de un cliente satisfecho.',
          author: 'Juan Pérez',
          color: '#555555',
          backgroundColor: '#f9f9f9',
          borderRadius: 4,
          padding: '15px'
        };
      default:
        return {};
    }
  };

  // Add Component handler
  const handleAddComponent = (type: BlockType) => {
    if (readOnly) return;
    const newId = `${type}-${Math.random().toString(36).substr(2, 9)}`;
    const defaultProps = getDefaultProperties(type);

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
    if (readOnly) return;
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
    if (readOnly) return;
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
    if (readOnly) return;
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

  // Drag and Drop element handler
  const handleDropElement = (blockType: BlockType, targetId: string | null) => {
    if (readOnly) return;

    const newId = `${blockType}-${Math.random().toString(36).substr(2, 9)}`;
    const defaultProps = getDefaultProperties(blockType);

    const newBlock: BlockNode = {
      id: newId,
      type: blockType,
      properties: defaultProps
    };

    if (blockType === 'section') {
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

    if (!targetId) {
      const firstSection = nodes[0];
      if (firstSection && firstSection.children && firstSection.children.length > 0) {
        const firstCol = firstSection.children[0];
        firstCol.children = [...(firstCol.children || []), newBlock];
        updateNodesAndHistory([...nodes]);
        setSelectedId(newId);
      }
      return;
    }

    let inserted = false;
    const insertRecursively = (list: BlockNode[]): BlockNode[] => {
      return list.map((node) => {
        if (node.id === targetId) {
          if (node.type === 'column') {
            node.children = [...(node.children || []), newBlock];
            inserted = true;
          } else if (node.type === 'section') {
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
            inserted = true;
          }
        } else if (node.children) {
          const childIndex = node.children.findIndex((child) => child.id === targetId);
          if (childIndex !== -1 && node.type === 'column') {
            const newChildren = [...node.children];
            newChildren.splice(childIndex + 1, 0, newBlock);
            node.children = newChildren;
            inserted = true;
          } else {
            node.children = insertRecursively(node.children);
          }
        }
        return node;
      });
    };

    const updatedNodes = insertRecursively([...nodes]);
    if (inserted) {
      updateNodesAndHistory(updatedNodes);
      setSelectedId(newId);
    }
  };

  useEffect(() => {
    onTemplateChange?.(mjmlCode, htmlCode);
  }, [mjmlCode, htmlCode, onTemplateChange]);

  useEffect(() => {
    onSave?.({ nodes, mjml: mjmlCode, html: htmlCode });
  }, [nodes, mjmlCode, htmlCode, onSave]);

  const handleExportAction = () => {
    onExport?.({ nodes, mjml: mjmlCode, html: htmlCode });
    setIsExportOpen(true);
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-bg-app text-text-primary" style={customStyles}>
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
        onExportClick={handleExportAction}
        onSendTestClick={() => setIsSendTestOpen(true)}
        fileManagerProviders={fileManagerProviders}
        espIntegrations={espIntegrations}
        onFileManagerClick={(provider) => {
          setFileManagerPath('/');
          setActiveFileManager(provider);
        }}
        onESPClick={(integration) => {
          setEspSuccessMsg('');
          setEspErrorMsg('');
          setActiveESPIntegration(integration);
        }}
      />

      {/* Main Workspace layout */}
      <div className="flex flex-1 h-[calc(100vh-60px)] overflow-hidden relative">
        {/* Left panel: components & layers */}
        <LeftPanel
          onAddComponent={handleAddComponent}
          nodes={nodes}
          selectedId={selectedId}
          onSelectNode={setSelectedId}
          onDeleteNode={handleDeleteNode}
          onMoveNode={handleMoveNode}
          readOnly={readOnly}
        />

        {/* Center Canvas */}
        <div className={`flex-1 flex transition-all duration-300 ${isCodeDrawerOpen ? 'pb-[260px]' : 'pb-10'}`}>
          <Canvas
            htmlContent={htmlCode}
            deviceMode={deviceMode}
            onSelectNode={setSelectedId}
            onDropElement={handleDropElement}
          />
        </div>

        {/* Right Panel: properties inspector */}
        <InspectorPanel
          selectedNode={selectedNode}
          onUpdateProperties={handleUpdateProperties}
          onDeleteNode={handleDeleteNode}
          readOnly={readOnly}
        />

        {/* Collapsible bottom drawer for code preview */}
        <CodeDrawer
          mjmlCode={mjmlCode}
          htmlCode={htmlCode}
          isOpen={isCodeDrawerOpen}
          onToggle={() => setIsCodeDrawerOpen(!isCodeDrawerOpen)}
        />
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
                className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full font-mono text-[11px]"
                rows={12}
              />
              {importError && <span className="text-danger text-xs">{importError}</span>}
            </div>
            <div className="modal-footer">
              <button onClick={() => setIsImportOpen(false)} className="border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-bg-hover text-text-primary border border-border-color hover:bg-border-color/50">
                {t('close')}
              </button>
              <button onClick={handleImport} className="border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-primary hover:bg-primary-hover text-white">
                {t('load')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Export Modal */}
      {isExportOpen && (
        <div className="modal-overlay">
          <div className="modal-content !w-[600px]">
            <div className="modal-header">
              <h2>{t('export')}</h2>
              <button onClick={() => setIsExportOpen(false)} className="modal-close-btn">
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              <p className="text-xs text-text-secondary">{t('exportSuccess')}</p>
              <div className="flex gap-2 mt-2.5">
                <button
                  onClick={() => {
                    const blob = new Blob([mjmlCode], { type: 'text/plain;charset=utf-8' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = 'template.mjml';
                    link.click();
                  }}
                  className="flex-1 border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-bg-hover text-text-primary border border-border-color hover:bg-border-color/50"
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
                  className="flex-1 border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-primary hover:bg-primary-hover text-white"
                >
                  Download HTML
                </button>
              </div>
            </div>
            <div className="modal-footer">
              <button onClick={() => setIsExportOpen(false)} className="border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-bg-hover text-text-primary border border-border-color hover:bg-border-color/50">
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
              <label className="text-[11.5px] font-medium text-text-secondary">{t('enterTestEmails')}</label>
              <input
                type="text"
                placeholder="test@example.com, user@domain.com"
                value={testEmails}
                onChange={(e) => setTestEmails(e.target.value)}
                className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full"
              />
              {testAlert && (
                <div className="p-2 px-3 bg-green-500/15 text-success rounded-md text-xs flex items-center gap-1.5">
                  <Sparkles size={14} />
                  <span>{testAlert}</span>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button onClick={() => setIsSendTestOpen(false)} className="border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-bg-hover text-text-primary border border-border-color hover:bg-border-color/50">
                {t('close')}
              </button>
              <button onClick={handleSendTest} className="border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-accent-color text-white hover:opacity-90 disabled:opacity-55 disabled:cursor-not-allowed" disabled={!testEmails.trim()}>
                {t('send')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* File Manager Modal */}
      {activeFileManager && (
        <div className="modal-overlay">
          <div className="modal-content !w-[650px]">
            <div className="modal-header">
              <h2 className="flex items-center gap-2">
                <Sparkles size={18} className="text-primary animate-pulse" />
                <span>{activeFileManager.name}</span>
              </h2>
              <button onClick={() => setActiveFileManager(null)} className="modal-close-btn">
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              <div className="flex items-center justify-between border-b border-border-color pb-2.5">
                <span className="text-xs font-mono text-text-secondary">Path: {fileManagerPath}</span>
                <div className="flex gap-2">
                  {fileManagerPath !== '/' && (
                    <button
                      onClick={() => {
                        const parts = fileManagerPath.split('/').filter(Boolean);
                        parts.pop();
                        setFileManagerPath('/' + parts.join('/'));
                      }}
                      className="border border-border-color p-1.5 px-3 rounded-md text-[11px] font-semibold cursor-pointer transition-all bg-bg-hover text-text-primary hover:bg-border-color/50"
                    >
                      Volver
                    </button>
                  )}
                  <label className="border border-border-color p-1.5 px-3 rounded-md text-[11px] font-semibold cursor-pointer transition-all bg-primary hover:bg-primary-hover text-white flex items-center gap-1">
                    <span>Subir archivo</span>
                    <input type="file" className="hidden" onChange={handleCloudUpload} />
                  </label>
                </div>
              </div>

              {fileManagerError && (
                <div className="p-2 px-3 bg-red-500/15 text-danger rounded-md text-xs">
                  {fileManagerError}
                </div>
              )}

              <div className="border border-border-color rounded-lg max-h-[300px] overflow-y-auto bg-bg-app">
                {fileManagerLoading ? (
                  <div className="flex items-center justify-center p-8 text-xs text-text-secondary gap-2">
                    <div className="animate-spin w-4 h-4 border-2 border-primary border-t-transparent rounded-full" />
                    Cargando archivos...
                  </div>
                ) : fileManagerItems.length === 0 ? (
                  <div className="p-8 text-center text-xs text-text-muted">
                    No se encontraron archivos en este directorio.
                  </div>
                ) : (
                  <div className="divide-y divide-border-color">
                    {fileManagerItems.map((item, index) => {
                      const isDir = item.type === 'dir';
                      const isSelected = selectedCloudFile?.id === item.id;
                      return (
                        <div
                          key={item.id || index}
                          onClick={() => {
                            if (isDir) {
                              setFileManagerPath(
                                fileManagerPath === '/' ? `/${item.name}` : `${fileManagerPath}/${item.name}`
                              );
                            } else {
                              setSelectedCloudFile(item);
                            }
                          }}
                          className={`flex items-center justify-between p-2.5 px-4 cursor-pointer transition-all text-xs hover:bg-bg-hover ${
                            isSelected ? 'bg-primary/10 border-l-2 border-primary font-semibold' : ''
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-base">{isDir ? '📁' : '📄'}</span>
                            <span className="text-text-primary">{item.name}</span>
                          </div>
                          <span className="text-[10px] text-text-muted capitalize">{item.type}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => setActiveFileManager(null)}
                className="border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-bg-hover text-text-primary border border-border-color hover:bg-border-color/50"
              >
                Cerrar
              </button>
              <button
                onClick={() => handleImportCloudFile(selectedCloudFile)}
                disabled={!selectedCloudFile}
                className="border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-primary hover:bg-primary-hover text-white disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cargar Plantilla
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ESP Sync Modal */}
      {activeESPIntegration && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="flex items-center gap-2">
                <Sparkles size={18} className="text-accent-color animate-pulse" />
                <span>Sync con {activeESPIntegration.name}</span>
              </h2>
              <button onClick={() => setActiveESPIntegration(null)} className="modal-close-btn">
                <X size={18} />
              </button>
            </div>
            <div className="modal-body">
              <p className="text-xs text-text-secondary">
                Sincroniza directamente tus plantillas de correo con {activeESPIntegration.name}.
              </p>

              {espSuccessMsg && (
                <div className="p-2 px-3 bg-green-500/15 text-success rounded-md text-xs">
                  {espSuccessMsg}
                </div>
              )}
              {espErrorMsg && (
                <div className="p-2 px-3 bg-red-500/15 text-danger rounded-md text-xs">
                  {espErrorMsg}
                </div>
              )}

              <div className="border border-border-color rounded-lg p-4 bg-bg-hover flex flex-col gap-2.5">
                <h3 className="text-xs font-bold text-text-primary">Subir plantilla actual</h3>
                <p className="text-[11px] text-text-muted">
                  Sube el diseño HTML actual directamente a tu cuenta de {activeESPIntegration.name}.
                </p>
                <button
                  onClick={handleESPPush}
                  disabled={espLoading}
                  className="border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-primary hover:bg-primary-hover text-white disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {espLoading && (
                    <div className="animate-spin w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full" />
                  )}
                  <span>Exportar a {activeESPIntegration.name}</span>
                </button>
              </div>

              <div className="border border-border-color rounded-lg p-4 bg-bg-hover flex flex-col gap-2.5">
                <h3 className="text-xs font-bold text-text-primary">Importar plantilla</h3>
                <p className="text-[11px] text-text-muted">
                  Introduce el ID de una plantilla existente en {activeESPIntegration.name} para cargarla.
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="ID de plantilla (ej. tmp_1234)"
                    value={espPullTemplateId}
                    onChange={(e) => setEspPullTemplateId(e.target.value)}
                    className="flex-1 bg-bg-panel border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary"
                  />
                  <button
                    onClick={handleESPPull}
                    disabled={espLoading || !espPullTemplateId.trim()}
                    className="border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-accent-color text-white hover:opacity-90 disabled:opacity-50"
                  >
                    <span>Importar</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                onClick={() => setActiveESPIntegration(null)}
                className="border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer transition-all bg-bg-hover text-text-primary border border-border-color hover:bg-border-color/50"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
});

export default App;
