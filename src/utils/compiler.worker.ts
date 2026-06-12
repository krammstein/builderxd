import { compileToMJML, compileToHTML } from './compiler';

// Web Worker event listener
self.onmessage = (e: MessageEvent) => {
  const { nodes, selectedId, isMobile } = e.data;
  
  try {
    const mjml = compileToMJML(nodes);
    const html = compileToHTML(nodes, selectedId, isMobile);
    
    // Send compiled output back to main thread
    self.postMessage({
      success: true,
      mjml,
      html
    });
  } catch (error: any) {
    self.postMessage({
      success: false,
      error: error.message || 'Error compiling template'
    });
  }
};
export {};
