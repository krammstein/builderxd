import React, { useRef } from 'react';
import { BuilderXD } from 'builderxd';
import 'builderxd/dist/builderxd.css';

export default function BasicImplementation() {
  const builderRef = useRef<any>(null);

  const handleSave = () => {
    if (builderRef.current) {
      // Get the exported strings
      const html = builderRef.current.exportHTML();
      const mjml = builderRef.current.exportMJML();
      
      console.log('--- SAVED HTML ---');
      console.log(html);
      console.log('--- SAVED MJML ---');
      console.log(mjml);
      
      alert('Template saved! Check the console.');
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: 'sans-serif' }}>
      
      {/* Custom Navbar for your application */}
      <header style={{ padding: '15px 20px', backgroundColor: '#1e1e2f', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ margin: 0 }}>My Email Campaign</h2>
        <button 
          onClick={handleSave} 
          style={{ padding: '8px 16px', backgroundColor: '#4F46E5', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Save & Export
        </button>
      </header>

      {/* BuilderXD takes the remaining height */}
      <main style={{ flex: 1, position: 'relative' }}>
        <BuilderXD ref={builderRef} />
      </main>

    </div>
  );
}
