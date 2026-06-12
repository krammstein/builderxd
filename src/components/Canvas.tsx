import React, { useEffect, useRef } from 'react';
import type { DeviceMode } from '../types';


interface CanvasProps {
  htmlContent: string;
  deviceMode: DeviceMode;
  onSelectNode: (id: string | null) => void;
}

export const Canvas: React.FC<CanvasProps> = ({
  htmlContent,
  deviceMode,
  onSelectNode
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Listen to postMessages from sandboxed iframe
  useEffect(() => {
    const handleIframeMessage = (event: MessageEvent) => {
      // Validate event type
      if (event.data && event.data.type === 'SELECT_ELEMENT') {
        onSelectNode(event.data.id);
      }
    };

    window.addEventListener('message', handleIframeMessage);
    return () => {
      window.removeEventListener('message', handleIframeMessage);
    };
  }, [onSelectNode]);

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

  return (
    <main className="builder-canvas-container">
      <div
        className="canvas-viewport"
        style={{
          width: getCanvasWidth(),
          maxWidth: '100%',
          transition: 'width 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <div className="canvas-header-info">
          <span className="canvas-resolution">
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
          className="canvas-iframe"
        />
      </div>
    </main>
  );
};
