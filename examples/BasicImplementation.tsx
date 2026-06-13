/**
 * BasicImplementation.tsx
 *
 * The simplest possible integration of BuilderXD.
 * Mounts the editor and uses a ref to export the result.
 */
import React, { useRef } from 'react';
import { BuilderXD } from 'builderxd';
import 'builderxd/dist/builderxd.css';

export default function BasicImplementation() {
  const builderRef = useRef<any>(null);

  const handleSave = () => {
    if (!builderRef.current) return;

    const html = builderRef.current.getHTML();
    const mjml = builderRef.current.getMJML();

    console.log('--- HTML ---');
    console.log(html);
    console.log('--- MJML ---');
    console.log(mjml);

    alert('Template saved! Check the console.');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: 'sans-serif' }}>

      {/* Custom header for your app */}
      <header style={{
        padding: '15px 20px',
        backgroundColor: '#1e1e2f',
        color: '#fff',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <h2 style={{ margin: 0, fontSize: '16px' }}>My Email Campaign</h2>
        <button
          onClick={handleSave}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4F46E5',
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
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
