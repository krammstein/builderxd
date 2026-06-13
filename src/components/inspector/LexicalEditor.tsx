import React, { useEffect, useCallback, useState, useRef } from 'react';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { ListPlugin } from '@lexical/react/LexicalListPlugin';
import { LinkPlugin } from '@lexical/react/LexicalLinkPlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { LexicalErrorBoundary } from '@lexical/react/LexicalErrorBoundary';
import {
  $getRoot,
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
} from 'lexical';
import { $generateHtmlFromNodes } from '@lexical/html';
import { $generateNodesFromDOM } from '@lexical/html';
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  ListNode,
  ListItemNode,
} from '@lexical/list';
import { LinkNode, AutoLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { $patchStyleText } from '@lexical/selection';
import { Check, ChevronDown, Bold, Italic, Underline, Strikethrough, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, Link, RemoveFormatting } from 'lucide-react';

const WEB_SAFE_FONTS = [
  'Arial', 'Georgia', 'Verdana', 'Tahoma', 'Times New Roman',
  'Courier New', 'Trebuchet MS',
];

const GOOGLE_FONTS = [
  'Inter', 'Roboto', 'Outfit', 'Poppins', 'Lato', 'Montserrat',
  'Open Sans', 'Nunito', 'Raleway', 'Playfair Display', 'Merriweather',
  'Lora', 'Oswald', 'Roboto Condensed', 'Source Sans Pro', 'PT Sans',
  'Noto Sans', 'Rubik', 'Kanit', 'Work Sans', 'Quicksand',
];

const ALL_FONTS = [...WEB_SAFE_FONTS, ...GOOGLE_FONTS];

const FONT_SIZES = [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 28, 32, 36, 40, 48, 56, 64, 72, 96];

interface LexicalEditorProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const editorConfig = {
  namespace: 'LexicalEditor',
  nodes: [
    ListNode,
    ListItemNode,
    LinkNode,
    AutoLinkNode,
    HeadingNode,
    QuoteNode,
  ],
  onError: (error: Error) => {
    console.error(error);
  },
};

function useToolbarState(editor: any) {
  const [state, setState] = useState({
    isBold: false,
    isItalic: false,
    isUnderline: false,
    isStrikethrough: false,
  });

  useEffect(() => {
    return editor.registerUpdateListener(() => {
      editor.getEditorState().read(() => {
        const selection = $getSelection();
        if ($isRangeSelection(selection)) {
          setState({
            isBold: selection.hasFormat('bold'),
            isItalic: selection.hasFormat('italic'),
            isUnderline: selection.hasFormat('underline'),
            isStrikethrough: selection.hasFormat('strikethrough'),
          });
        }
      });
    });
  }, [editor]);

  return state;
}

function ToolbarButton({
  active,
  onClick,
  disabled,
  title,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`p-1 rounded-md text-xs min-w-[26px] h-[26px] flex items-center justify-center cursor-pointer transition-all disabled:opacity-40 ${
        active ? 'bg-bg-panel text-primary shadow-sm' : 'text-text-secondary hover:text-text-primary hover:bg-bg-hover'
      }`}
    >
      {children}
    </button>
  );
}

function DropdownItem({
  label,
  onClick,
  active,
  style,
}: {
  label: string;
  onClick: () => void;
  active?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left px-2.5 py-1.5 text-xs flex items-center gap-2 hover:bg-bg-hover transition-colors cursor-pointer ${
        active ? 'bg-bg-hover text-text-primary' : 'text-text-secondary'
      }`}
      style={style}
    >
      {active && <Check size={12} className="shrink-0" />}
      <span className={active ? '' : 'ml-5'} style={style}>{label}</span>
    </button>
  );
}

function FontFamilyDropdown({ editor, disabled }: { editor: any; disabled: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const applyFont = useCallback((font: string) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, { 'font-family': font });
      }
    });
    setOpen(false);
  }, [editor]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}
        className="flex items-center gap-1 px-1.5 py-1 rounded-md text-xs text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-all disabled:opacity-40 cursor-pointer min-w-[80px]"
      >
        <span className="truncate max-w-[60px]">Font</span>
        <ChevronDown size={12} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-bg-panel border border-border-color rounded-md shadow-lg z-50 max-h-[220px] overflow-y-auto min-w-[160px]">
          {ALL_FONTS.map((font) => (
            <DropdownItem
              key={font}
              label={font}
              onClick={() => applyFont(font)}
              style={{ fontFamily: font }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function FontSizeDropdown({ editor, disabled }: { editor: any; disabled: boolean }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const applySize = useCallback((size: number) => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        $patchStyleText(selection, { 'font-size': `${size}px` });
      }
    });
    setOpen(false);
  }, [editor]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => !disabled && setOpen(!open)}
        disabled={disabled}
        className="flex items-center gap-1 px-1.5 py-1 rounded-md text-xs text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-all disabled:opacity-40 cursor-pointer min-w-[48px]"
      >
        <span>16</span>
        <ChevronDown size={12} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-1 bg-bg-panel border border-border-color rounded-md shadow-lg z-50 max-h-[220px] overflow-y-auto min-w-[80px]">
          {FONT_SIZES.map((size) => (
            <DropdownItem
              key={size}
              label={`${size}`}
              onClick={() => applySize(size)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function Toolbar({ disabled }: { disabled: boolean }) {
  const [editor] = useLexicalComposerContext();
  const fmt = useToolbarState(editor);

  const toggleList = useCallback((type: 'bullet' | 'ordered') => {
    editor.dispatchCommand(
      type === 'bullet' ? INSERT_UNORDERED_LIST_COMMAND : INSERT_ORDERED_LIST_COMMAND,
      undefined as any
    );
  }, [editor]);

  const handleLink = useCallback(() => {
    const url = window.prompt('URL del enlace');
    if (url === null) return;
    if (url === '') {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, url);
    }
  }, [editor]);

  const handleClear = useCallback(() => {
    editor.update(() => {
      const selection = $getSelection();
      if ($isRangeSelection(selection)) {
        selection.removeText();
      }
    });
  }, [editor]);

  return (
    <div className="flex flex-wrap items-center gap-0.5 p-1 border-b border-border-color bg-bg-hover">
      <ToolbarButton active={fmt.isBold} onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold')} disabled={disabled} title="Negrita">
        <Bold size={14} />
      </ToolbarButton>
      <ToolbarButton active={fmt.isItalic} onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic')} disabled={disabled} title="Cursiva">
        <Italic size={14} />
      </ToolbarButton>
      <ToolbarButton active={fmt.isUnderline} onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline')} disabled={disabled} title="Subrayado">
        <Underline size={14} />
      </ToolbarButton>
      <ToolbarButton active={fmt.isStrikethrough} onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'strikethrough')} disabled={disabled} title="Tachado">
        <Strikethrough size={14} />
      </ToolbarButton>

      <span className="w-px h-4 bg-border-color mx-1" />

      <ToolbarButton onClick={() => toggleList('bullet')} disabled={disabled} title="Lista desordenada">
        <List size={14} />
      </ToolbarButton>
      <ToolbarButton onClick={() => toggleList('ordered')} disabled={disabled} title="Lista ordenada">
        <ListOrdered size={14} />
      </ToolbarButton>

      <span className="w-px h-4 bg-border-color mx-1" />

      <ToolbarButton onClick={() => editor.update(() => { const s = $getSelection(); if ($isRangeSelection(s)) $patchStyleText(s, { 'text-align': 'left' }); })} disabled={disabled} title="Alinear izquierda">
        <AlignLeft size={14} />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.update(() => { const s = $getSelection(); if ($isRangeSelection(s)) $patchStyleText(s, { 'text-align': 'center' }); })} disabled={disabled} title="Centrar">
        <AlignCenter size={14} />
      </ToolbarButton>
      <ToolbarButton onClick={() => editor.update(() => { const s = $getSelection(); if ($isRangeSelection(s)) $patchStyleText(s, { 'text-align': 'right' }); })} disabled={disabled} title="Alinear derecha">
        <AlignRight size={14} />
      </ToolbarButton>

      <span className="w-px h-4 bg-border-color mx-1" />

      <FontFamilyDropdown editor={editor} disabled={disabled} />
      <FontSizeDropdown editor={editor} disabled={disabled} />

      <span className="w-px h-4 bg-border-color mx-1" />

      <ToolbarButton onClick={handleLink} disabled={disabled} title="Enlace">
        <Link size={14} />
      </ToolbarButton>

      <ToolbarButton onClick={handleClear} disabled={disabled} title="Limpiar formato">
        <RemoveFormatting size={14} />
      </ToolbarButton>
    </div>
  );
}

function EditorPlugin({ html, onChange }: { html: string; onChange: (v: string) => void }) {
  const [editor] = useLexicalComposerContext();
  const lastHtmlRef = useRef('');

  useEffect(() => {
    editor.update(() => {
      const currentHtml = $generateHtmlFromNodes(editor);
      if (currentHtml === html) return;
      const root = $getRoot();
      root.clear();
      if (html) {
        const parser = new DOMParser();
        const dom = parser.parseFromString(`<body>${html}</body>`, 'text/html');
        const nodes = $generateNodesFromDOM(editor, dom);
        for (const node of nodes) {
          root.append(node);
        }
      }
    });
  }, [html, editor]);

  useEffect(() => {
    return editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        const htmlStr = $generateHtmlFromNodes(editor);
        if (htmlStr === lastHtmlRef.current) return;
        lastHtmlRef.current = htmlStr;
        onChange(htmlStr);
      }, { editor });
    });
  }, [editor, onChange]);

  return null;
}

export const LexicalEditor: React.FC<LexicalEditorProps> = ({
  value,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="flex flex-col border border-border-color rounded-lg overflow-hidden bg-bg-panel text-text-primary">
      <LexicalComposer initialConfig={editorConfig}>
        <EditorPlugin html={value} onChange={onChange} />
        <DisabledPlugin disabled={disabled} />
        <Toolbar disabled={disabled} />
        <div className="p-3 min-h-[120px] max-h-[260px] overflow-y-auto outline-none text-sm leading-relaxed lexical-content">
          <RichTextPlugin
            contentEditable={<ContentEditable className="outline-none min-h-[80px]" dir="ltr" />}
            placeholder={<div className="text-text-muted text-sm pointer-events-none">Escribe aquí tu texto...</div>}
            ErrorBoundary={LexicalErrorBoundary}
          />
        </div>
        <ListPlugin />
        <LinkPlugin />
        <HistoryPlugin />
      </LexicalComposer>
    </div>
  );
};

function DisabledPlugin({ disabled }: { disabled: boolean }) {
  const [editor] = useLexicalComposerContext();
  useEffect(() => {
    editor.setEditable(!disabled);
  }, [editor, disabled]);
  return null;
}
