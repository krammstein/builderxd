import React, { useRef, useEffect } from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  value,
  onChange,
  disabled = false,
}) => {
  const editorRef = useRef<HTMLDivElement>(null);

  // Keep editor content in sync with value prop, but only if it's different from current innerHTML
  useEffect(() => {
    if (editorRef.current && editorRef.current.innerHTML !== value) {
      try {
        editorRef.current.innerHTML = value;
      } catch (e) {
        console.warn('RichTextEditor: innerHTML set failed', e);
      }
    }
  }, [value]);

  const executeCommand = (command: string, arg: string = '') => {
    try {
      document.execCommand(command, false, arg);
    } catch (e) {
      console.warn('RichTextEditor: execCommand failed', command, e);
    }
    triggerChange();
  };

  const triggerChange = () => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML);
    }
  };

  const handleInput = () => {
    triggerChange();
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  };

  return (
    <div className="flex flex-col border border-border-color rounded-lg overflow-hidden bg-bg-panel text-text-primary">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-1.5 border-b border-border-color bg-bg-hover">
        <button
          type="button"
          onClick={() => executeCommand('bold')}
          disabled={disabled}
          className="p-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all font-bold text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer"
          title="Negrita"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => executeCommand('italic')}
          disabled={disabled}
          className="p-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all italic text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer"
          title="Cursiva"
        >
          I
        </button>
        <button
          type="button"
          onClick={() => executeCommand('underline')}
          disabled={disabled}
          className="p-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all underline text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer"
          title="Subrayado"
        >
          U
        </button>
        <button
          type="button"
          onClick={() => executeCommand('strikeThrough')}
          disabled={disabled}
          className="p-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all line-through text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer"
          title="Tachado"
        >
          S
        </button>

        <span className="w-px h-4 bg-border-color mx-1" />

        {/* Text Color Selection */}
        <input
          type="color"
          onChange={(e) => executeCommand('foreColor', e.target.value)}
          disabled={disabled}
          className="w-5 h-5 p-0 border border-border-color rounded-sm cursor-pointer bg-transparent"
          title="Color de texto"
        />

        {/* Highlight Color Selection */}
        <input
          type="color"
          onChange={(e) => executeCommand('hiliteColor', e.target.value)}
          disabled={disabled}
          className="w-5 h-5 p-0 border border-border-color rounded-sm cursor-pointer bg-transparent"
          title="Resaltado de fondo"
          defaultValue="#ffff00"
        />

        <span className="w-px h-4 bg-border-color mx-1" />

        <button
          type="button"
          onClick={() => executeCommand('insertUnorderedList')}
          disabled={disabled}
          className="p-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer"
          title="Lista desordenada"
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => executeCommand('insertOrderedList')}
          disabled={disabled}
          className="p-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer"
          title="Lista ordenada"
        >
          1. List
        </button>

        <span className="w-px h-4 bg-border-color mx-1" />

        <button
          type="button"
          onClick={() => executeCommand('justifyLeft')}
          disabled={disabled}
          className="p-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer"
          title="Alineación izquierda"
        >
          ←
        </button>
        <button
          type="button"
          onClick={() => executeCommand('justifyCenter')}
          disabled={disabled}
          className="p-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer"
          title="Alineación centro"
        >
          ↔
        </button>
        <button
          type="button"
          onClick={() => executeCommand('justifyRight')}
          disabled={disabled}
          className="p-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer"
          title="Alineación derecha"
        >
          →
        </button>
        <button
          type="button"
          onClick={() => executeCommand('removeFormat')}
          disabled={disabled}
          className="p-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer"
          title="Limpiar formato"
        >
          Clear
        </button>
      </div>

      {/* Editor Content Area */}
      <div
        ref={editorRef}
        contentEditable={!disabled}
        onInput={handleInput}
        onPaste={handlePaste}
        className="p-3 min-h-[120px] max-h-[260px] overflow-y-auto outline-none text-sm leading-relaxed"
        style={{
          boxSizing: 'border-box',
          fontFamily: 'inherit',
        }}
      />
    </div>
  );
};
