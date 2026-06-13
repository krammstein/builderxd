import React, { useEffect } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Link from '@tiptap/extension-link';

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
  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        openOnClick: false,
      }),
    ],
    content: value,
    editable: !disabled,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && editor.getHTML() !== value) {
      editor.commands.setContent(value, false);
    }
  }, [value, editor]);

  useEffect(() => {
    if (editor) {
      editor.setEditable(!disabled);
    }
  }, [disabled, editor]);

  if (!editor) {
    return null;
  }

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);

    if (url === null) {
      return;
    }

    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }

    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="flex flex-col border border-border-color rounded-lg overflow-hidden bg-bg-panel text-text-primary">
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-1.5 border-b border-border-color bg-bg-hover">
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={disabled}
          className={`p-1 rounded-md hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all font-bold text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer ${
            editor.isActive('bold') ? 'bg-bg-panel text-primary' : 'text-text-secondary'
          }`}
          title="Negrita"
        >
          B
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={disabled}
          className={`p-1 rounded-md hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all italic text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer ${
            editor.isActive('italic') ? 'bg-bg-panel text-primary' : 'text-text-secondary'
          }`}
          title="Cursiva"
        >
          I
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={disabled}
          className={`p-1 rounded-md hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all line-through text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer ${
            editor.isActive('strike') ? 'bg-bg-panel text-primary' : 'text-text-secondary'
          }`}
          title="Tachado"
        >
          S
        </button>

        <span className="w-px h-4 bg-border-color mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          disabled={disabled}
          className={`p-1 rounded-md hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all font-bold text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer ${
            editor.isActive('heading', { level: 1 }) ? 'bg-bg-panel text-primary' : 'text-text-secondary'
          }`}
          title="Título 1"
        >
          H1
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          disabled={disabled}
          className={`p-1 rounded-md hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all font-bold text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer ${
            editor.isActive('heading', { level: 2 }) ? 'bg-bg-panel text-primary' : 'text-text-secondary'
          }`}
          title="Título 2"
        >
          H2
        </button>
        
        <span className="w-px h-4 bg-border-color mx-1" />

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          disabled={disabled}
          className={`p-1 rounded-md hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer ${
            editor.isActive('bulletList') ? 'bg-bg-panel text-primary' : 'text-text-secondary'
          }`}
          title="Lista desordenada"
        >
          • List
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          disabled={disabled}
          className={`p-1 rounded-md hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer ${
            editor.isActive('orderedList') ? 'bg-bg-panel text-primary' : 'text-text-secondary'
          }`}
          title="Lista ordenada"
        >
          1. List
        </button>

        <span className="w-px h-4 bg-border-color mx-1" />

        <button
          type="button"
          onClick={setLink}
          disabled={disabled}
          className={`p-1 rounded-md hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer ${
            editor.isActive('link') ? 'bg-bg-panel text-primary' : 'text-text-secondary'
          }`}
          title="Enlace"
        >
          🔗
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
          disabled={disabled}
          className="p-1 rounded-md text-text-secondary hover:text-text-primary hover:bg-bg-panel disabled:opacity-40 transition-all text-xs min-w-[24px] h-[24px] flex items-center justify-center cursor-pointer ml-auto"
          title="Limpiar formato"
        >
          Clear
        </button>
      </div>

      {/* Editor Content Area */}
      <div className="p-3 min-h-[120px] max-h-[260px] overflow-y-auto outline-none text-sm leading-relaxed tip-tap-content">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
