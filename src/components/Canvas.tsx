import React, { useEffect, useRef } from 'react';
import type { DeviceMode, BlockType } from '../types';

interface CanvasProps {
  htmlContent: string;
  deviceMode: DeviceMode;
  onSelectNode: (id: string | null) => void;
  onDropElement?: (blockType: BlockType, targetId: string | null) => void;
}

export const Canvas: React.FC<CanvasProps> = ({
  htmlContent,
  deviceMode,
  onSelectNode,
  onDropElement
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Listen to postMessages from sandboxed iframe
  useEffect(() => {
    const handleIframeMessage = (event: MessageEvent) => {
      // Validate event type
      if (event.data) {
        if (event.data.type === 'SELECT_ELEMENT') {
          onSelectNode(event.data.id);
        } else if (event.data.type === 'DROP_ELEMENT') {
          onDropElement?.(event.data.blockType, event.data.targetId);
        }
      }
    };

    window.addEventListener('message', handleIframeMessage);
    return () => {
      window.removeEventListener('message', handleIframeMessage);
    };
  }, [onSelectNode, onDropElement]);

  // Determine width based on responsive setting
  const getCanvasWidth = () => {
    switch (deviceMode) {
      case 'mobile':
        return '375px';
      case 'tablet':
        return '600px';
      case 'desktop':
      default:
        return '100%';
    }
  };

  const handleIframeLoad = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    const body = doc.body;

    body.addEventListener('dragover', (e) => {
      e.preventDefault();
      const target = (e.target as HTMLElement).closest('[data-id]');
      if (target) {
        const all = doc.querySelectorAll('.drag-hover');
        all.forEach((el) => el.classList.remove('drag-hover'));
        target.classList.add('drag-hover');
      }
    });

    body.addEventListener('dragleave', (e) => {
      const target = (e.target as HTMLElement).closest('[data-id]');
      if (target) {
        target.classList.remove('drag-hover');
      }
    });

    body.addEventListener('drop', (e) => {
      e.preventDefault();
      const all = doc.querySelectorAll('.drag-hover');
      all.forEach((el) => el.classList.remove('drag-hover'));

      const blockType = e.dataTransfer?.getData('text/plain');
      if (!blockType) return;

      const target = (e.target as HTMLElement).closest('[data-id]') as HTMLElement;
      const targetId = target ? target.getAttribute('data-id') : null;

      window.parent.postMessage({
        type: 'DROP_ELEMENT',
        blockType,
        targetId
      }, '*');
    });
  };

  return (
    <main className="flex-1 bg-bg-app flex items-center justify-center p-6 overflow-hidden h-full">
      <div
        className="bg-bg-panel border border-border-color rounded-xl shadow-lg flex flex-col h-full overflow-hidden relative"
        style={{
          width: getCanvasWidth(),
          maxWidth: '100%',
          transition: 'width 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="h-8 bg-bg-hover border-b border-border-color flex items-center justify-center px-4">
          <span className="text-[10px] font-semibold font-mono text-text-muted uppercase">
            {deviceMode === 'desktop' && '100% (Desktop)'}
            {deviceMode === 'tablet' && '600px x 800px (Tablet)'}
            {deviceMode === 'mobile' && '375px x 667px (Mobile)'}
          </span>
        </div>

        <iframe
          ref={iframeRef}
          srcDoc={htmlContent}
          title="Email Builder Canvas"
          sandbox="allow-same-origin allow-scripts"
          className="flex-1 border-none w-full h-full bg-[#f8fafc]"
          onLoad={handleIframeLoad}
        />
      </div>
    </main>
  );
};
