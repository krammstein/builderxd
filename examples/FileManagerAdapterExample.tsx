/**
 * FileManagerAdapterExample.tsx
 *
 * Demonstrates how to integrate a custom File Manager modal (e.g. EnigmaSuite's
 * FileManagerModal) into BuilderXD using the `fileManagerComponent` slot.
 *
 * The adapter pattern lets you plug ANY file manager UI into BuilderXD without
 * modifying its source code — just wrap your modal so it receives `onInsert`
 * and `onClose` props.
 */
import React, { useState } from 'react';
import { BuilderXD } from 'builderxd';
import type { MediaFile } from 'builderxd';
import 'builderxd/dist/builderxd.css';

// ─── Mock EnigmaSuite FileManagerModal ────────────────────────────────────
// In a real app, replace this with your actual FileManagerModal import:
//   import { FileManagerModal } from '@enigmasuite/file-manager';
//
// The key contract:
//   Props: { onInsert: (files: MediaFile[]) => void, onClose: () => void }
//   When user selects files, call onInsert([...selectedFiles]).

interface FileManagerModalProps {
  onInsert: (files: MediaFile[]) => void;
  onClose: () => void;
}

function MockFileManagerModal({ onInsert, onClose }: FileManagerModalProps) {
  const [selected, setSelected] = useState<string | null>(null);

  const mockFiles: MediaFile[] = [
    { url: 'https://example.com/templates/newsletter.json', name: 'newsletter.json', type: 'json' },
    { url: 'https://example.com/templates/promo.json', name: 'promo.json', type: 'json' },
    { url: 'https://example.com/images/banner.jpg', name: 'banner.jpg', type: 'image' },
  ];

  return (
    <div className="flex flex-col gap-3">
      <p className="text-xs text-text-secondary mb-1">
        Selecciona una plantilla o imagen:
      </p>
      <div className="divide-y divide-border-color border border-border-color rounded-lg max-h-[250px] overflow-y-auto">
        {mockFiles.map((file) => (
          <div
            key={file.url}
            onClick={() => setSelected(file.url)}
            className={`flex items-center gap-3 p-2.5 px-4 cursor-pointer transition-all text-xs hover:bg-bg-hover ${
              selected === file.url ? 'bg-primary/10 border-l-2 border-primary font-semibold' : ''
            }`}
          >
            <span className="text-base">{file.type === 'json' ? '📄' : '🖼️'}</span>
            <span className="text-text-primary">{file.name}</span>
            <span className="text-[10px] text-text-muted ml-auto">{file.type}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-end gap-2 mt-2">
        <button
          onClick={onClose}
          className="border border-border-color p-1.5 px-3 rounded-md text-xs font-semibold cursor-pointer bg-bg-hover text-text-primary hover:bg-border-color/50"
        >
          Cancelar
        </button>
        <button
          onClick={() => {
            const file = mockFiles.find((f) => f.url === selected);
            if (file) onInsert([file]);
          }}
          disabled={!selected}
          className="border-none p-1.5 px-3 rounded-md text-xs font-semibold cursor-pointer bg-primary text-white disabled:opacity-50"
        >
          Insertar
        </button>
      </div>
    </div>
  );
}

// ─── Usage ──────────────────────────────────────────────────────────────────
export default function FileManagerAdapterExample() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <BuilderXD
          // Pass your custom file manager component to replace the built-in one:
          fileManagerComponent={<MockFileManagerModal />}
          // Built-in providers still work for fallback:
          fileManagerProviders={[]}
        />
      </div>
    </div>
  );
}
