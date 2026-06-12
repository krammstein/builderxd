import React, { useEffect, useRef } from 'react';
import type { DeviceMode, BlockType } from '../types';

interface CanvasProps {
  htmlContent: string;
  deviceMode: DeviceMode;
  onSelectNode: (id: string | null) => void;
  onDropElement?: (blockType: BlockType, targetId: string | null) => void;
  onDeleteNode?: (id: string) => void;
  onCloneNode?: (id: string) => void;
  onUpdateNodeContent?: (id: string, content: string) => void;
}

export const Canvas: React.FC<CanvasProps> = ({
  htmlContent,
  deviceMode,
  onSelectNode,
  onDropElement,
  onDeleteNode,
  onCloneNode,
  onUpdateNodeContent
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const lastHtmlRef = useRef<string>('');

  // Handle postMessage events from inside the iframe
  useEffect(() => {
    const handleIframeMessage = (event: MessageEvent) => {
      if (event.data) {
        if (event.data.type === 'SELECT_ELEMENT') {
          onSelectNode(event.data.id);
        } else if (event.data.type === 'DROP_ELEMENT') {
          onDropElement?.(event.data.blockType, event.data.targetId);
        } else if (event.data.type === 'DELETE_ELEMENT') {
          onDeleteNode?.(event.data.id);
        } else if (event.data.type === 'CLONE_ELEMENT') {
          onCloneNode?.(event.data.id);
        } else if (event.data.type === 'UPDATE_CONTENT') {
          onUpdateNodeContent?.(event.data.id, event.data.content);
        }
      }
    };

    window.addEventListener('message', handleIframeMessage);
    return () => {
      window.removeEventListener('message', handleIframeMessage);
    };
  }, [onSelectNode, onDropElement, onDeleteNode, onCloneNode, onUpdateNodeContent]);

  // Apply DOM patching or reload srcdoc programmatically
  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;

    // If iframe hasn't loaded or it's the first time
    if (!lastHtmlRef.current || !doc || !doc.body || doc.body.innerHTML.trim() === '') {
      iframe.srcdoc = htmlContent;
      lastHtmlRef.current = htmlContent;
      return;
    }

    try {
      const parser = new DOMParser();
      const newDoc = parser.parseFromString(htmlContent, 'text/html');

      const currentElements = Array.from(doc.querySelectorAll('[data-id]'));
      const newElements = Array.from(newDoc.querySelectorAll('[data-id]'));

      const currentIds = currentElements.map((el) => el.getAttribute('data-id'));
      const newIds = newElements.map((el) => el.getAttribute('data-id'));

      // Compare structure: length and order of IDs
      const structureMatches =
        currentIds.length === newIds.length &&
        currentIds.every((id, idx) => id === newIds[idx]);

      if (structureMatches && currentElements.length > 0) {
        // Patch each element if its outerHTML has changed
        newElements.forEach((newEl, idx) => {
          const currentEl = currentElements[idx];
          if (currentEl.outerHTML !== newEl.outerHTML) {
            // Focus Guard: If this element is the current focused element or contains it, do not replace it to preserve caret/focus
            if (doc.activeElement && (currentEl === doc.activeElement || currentEl.contains(doc.activeElement))) {
              return;
            }
            currentEl.outerHTML = newEl.outerHTML;
          }
        });

        // Sync <style> tag inside the <head>
        const currentStyle = doc.querySelector('head style');
        const newStyle = newDoc.querySelector('head style');
        if (currentStyle && newStyle && currentStyle.innerHTML !== newStyle.innerHTML) {
          currentStyle.innerHTML = newStyle.innerHTML;
        }

        // Sync body attributes
        const newBodyStyle = newDoc.body.getAttribute('style');
        if (doc.body.getAttribute('style') !== newBodyStyle) {
          doc.body.setAttribute('style', newBodyStyle || '');
        }

        const newBodyClass = newDoc.body.getAttribute('class');
        if (doc.body.getAttribute('class') !== newBodyClass) {
          doc.body.setAttribute('class', newBodyClass || '');
        }
      } else {
        // Fallback to full reload when structure differs
        iframe.srcdoc = htmlContent;
      }
    } catch (e) {
      console.warn('DOM patching failed, reloading iframe', e);
      iframe.srcdoc = htmlContent;
    }

    lastHtmlRef.current = htmlContent;
  }, [htmlContent]);

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

      window.parent.postMessage(
        {
          type: 'DROP_ELEMENT',
          blockType,
          targetId
        },
        '*'
      );
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
          title="Email Builder Canvas"
          sandbox="allow-same-origin allow-scripts"
          className="flex-1 border-none w-full h-full bg-[#f8fafc]"
          onLoad={handleIframeLoad}
        />
      </div>
    </main>
  );
};
