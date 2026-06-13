import React, { useRef, useState, useEffect } from 'react';
import { BuilderXD } from 'builderxd';
import type { FileManagerProvider, UIConfig } from 'builderxd';
import 'builderxd/dist/builderxd.css';

export default function AdvancedImplementation() {
  const builderRef = useRef<any>(null);
  const [isSaving, setIsSaving] = useState(false);

  // 1. Initial Template (e.g. fetched from your database)
  const myExistingTemplate = `
    <mjml>
      <mj-body background-color="#f4f4f4">
        <mj-section background-color="#ffffff">
          <mj-column>
            <mj-text font-size="20px" color="#333333">Welcome back!</mj-text>
            <mj-button background-color="#4F46E5" href="https://example.com">Click Here</mj-button>
          </mj-column>
        </mj-section>
      </mj-body>
    </mjml>
  `;

  // 2. Custom File Manager (simulates uploading an image to an S3 bucket or similar API)
  const myFileManager: FileManagerProvider = {
    id: 'custom-aws-s3',
    name: 'My Cloud Storage',
    onUpload: async (file: File) => {
      console.log('Uploading file...', file.name);
      
      // Simulate API call delay
      await new Promise(res => setTimeout(res, 1500));
      
      // Return the public URL to the builder
      return `https://dummyimage.com/600x400/ccc/000.png&text=${encodeURIComponent(file.name)}`;
    }
  };

  // 3. Customize the Builder UI
  const myUIConfig: UIConfig = {
    showExport: false, // Hide the built-in export button (we have our own in the header)
    showImport: true,
    showThemeToggle: true,
    showLanguageToggle: true,
    showClearCanvas: true
  };

  const saveCampaign = async () => {
    if (!builderRef.current) return;
    
    setIsSaving(true);
    try {
      const html = builderRef.current.exportHTML();
      const mjml = builderRef.current.exportMJML();
      const json = builderRef.current.exportJSON(); // Internal tree structure

      // Send to your backend
      // await fetch('/api/campaigns/1', { method: 'POST', body: JSON.stringify({ html, mjml, json }) });
      
      console.log('Campaign successfully saved!');
      console.log(mjml);
    } catch (e) {
      console.error('Save failed', e);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: 'Inter, sans-serif' }}>
      
      <header style={{ padding: '15px 24px', backgroundColor: '#ffffff', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ margin: 0, fontSize: '18px', color: '#111827' }}>Advanced Editor</h1>
          <p style={{ margin: 0, fontSize: '12px', color: '#6b7280' }}>Autosaves every 5 minutes</p>
        </div>
        <button 
          onClick={saveCampaign} 
          disabled={isSaving}
          style={{ 
            padding: '8px 20px', 
            backgroundColor: isSaving ? '#9ca3af' : '#111827', 
            color: 'white', 
            border: 'none', 
            borderRadius: '6px', 
            cursor: isSaving ? 'not-allowed' : 'pointer',
            fontWeight: 500
          }}
        >
          {isSaving ? 'Saving...' : 'Save Campaign'}
        </button>
      </header>

      <main style={{ flex: 1, position: 'relative' }}>
        <BuilderXD 
          ref={builderRef} 
          initialTemplate={myExistingTemplate}
          mode="mjml"           {/* Locks editor to MJML mode and hides the HTML/MJML switcher */}
          fileManager={myFileManager}
          uiConfig={myUIConfig}
        />
      </main>

    </div>
  );
}
