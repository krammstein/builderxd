/**
 * AdvancedImplementation.tsx
 *
 * Demonstrates:
 * - `mode="mjml"` → locks the editor to MJML output and hides the HTML/MJML switcher
 * - `initialTemplate` → pre-loads an MJML template (e.g. fetched from your database)
 * - `FileManagerProvider` → connects a custom image uploader (e.g. AWS S3)
 * - `uiConfig` → hides the built-in Export button (replaced by a custom Save button)
 * - ref methods → getHTML(), getMJML(), getNodes() for exporting data
 */
import React, { useRef, useState } from 'react';
import { BuilderXD } from 'builderxd';
import type { FileManagerProvider, UIConfig } from 'builderxd';
import 'builderxd/dist/builderxd.css';

// ─── Example: template fetched from your backend ─────────────────────────────
const savedTemplate = `
<mjml>
  <mj-body background-color="#f4f4f4">
    <mj-section background-color="#ffffff" padding="30px 20px">
      <mj-column>
        <mj-text font-size="24px" font-weight="800" color="#111827" align="center">
          Welcome back! 👋
        </mj-text>
        <mj-text font-size="15px" color="#6b7280" align="center">
          We have some exciting news for you.
        </mj-text>
        <mj-button background-color="#4F46E5" href="https://example.com" border-radius="6px">
          See what's new
        </mj-button>
      </mj-column>
    </mj-section>
  </mj-body>
</mjml>
`;

// ─── Custom image uploader (swap this for your real S3/Cloudinary logic) ─────
const myFileManager: FileManagerProvider = {
  id: 'my-s3-uploader',
  name: 'My Cloud Storage',
  onUpload: async (file: File) => {
    console.log(`Uploading "${file.name}" to cloud storage...`);

    // Simulate an upload delay
    await new Promise(res => setTimeout(res, 1200));

    // Return the public URL of the uploaded image
    return `https://dummyimage.com/600x400/6366f1/ffffff.png&text=${encodeURIComponent(file.name)}`;
  }
};

// ─── UI Config: hide built-in export (we use our own Save button) ─────────────
const myUIConfig: UIConfig = {
  showExport: false,
  showImport: true,
  showThemeToggle: true,
  showLanguageToggle: true,
  showClearCanvas: true
};

// ─── Component ────────────────────────────────────────────────────────────────
export default function AdvancedImplementation() {
  const builderRef = useRef<any>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<string | null>(null);

  const saveCampaign = async () => {
    if (!builderRef.current) return;
    setIsSaving(true);

    try {
      const mjml    = builderRef.current.getMJML();
      const html    = builderRef.current.getHTML();
      const nodes   = builderRef.current.getNodes();

      // ── Send to your backend ──────────────────────────────────────────────
      // await fetch('/api/campaigns/42', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ mjml, html, nodes })
      // });
      // ─────────────────────────────────────────────────────────────────────

      console.log('MJML:', mjml);
      console.log('HTML:', html);
      console.log('Nodes:', nodes);

      setLastSaved(new Date().toLocaleTimeString());
    } catch (err) {
      console.error('Save failed:', err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', fontFamily: 'Inter, system-ui, sans-serif' }}>

      {/* Header */}
      <header style={{
        padding: '0 24px',
        height: '56px',
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #e5e7eb',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexShrink: 0
      }}>
        <div>
          <span style={{ fontWeight: 700, fontSize: '15px', color: '#111827' }}>
            Campaign Editor
          </span>
          {lastSaved && (
            <span style={{ marginLeft: '12px', fontSize: '12px', color: '#9ca3af' }}>
              Last saved at {lastSaved}
            </span>
          )}
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
            fontWeight: 600,
            fontSize: '13px',
            transition: 'background-color 0.2s'
          }}
        >
          {isSaving ? 'Saving…' : 'Save Campaign'}
        </button>
      </header>

      {/* Editor — locked to MJML mode via the `mode` prop */}
      <main style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <BuilderXD
          ref={builderRef}
          mode="mjml"                    // 🔒 Locks to MJML — hides the HTML/MJML switcher
          lang="en"                      // 🌐 Locks UI language to English — hides the language toggle
          initialTemplate={savedTemplate} // Pre-loads template from your DB
          fileManager={myFileManager}     // Custom image uploader
          uiConfig={myUIConfig}           // Custom UI visibility
        />
      </main>

    </div>
  );
}
