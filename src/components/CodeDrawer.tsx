import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Terminal, Copy, Check, ChevronUp, ChevronDown } from 'lucide-react';

interface CodeDrawerProps {
  mjmlCode: string;
  htmlCode: string;
}

export const CodeDrawer: React.FC<CodeDrawerProps> = ({ mjmlCode, htmlCode }) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<'mjml' | 'html'>('mjml');
  const [copied, setCopied] = useState(false);

  const htmlByteSize = new Blob([htmlCode]).size;
  const htmlKbSize = (htmlByteSize / 1024).toFixed(2);
  const isClipped = htmlByteSize > 102400; // 100 KB limit (approx 102 KB)

  const handleCopy = () => {
    const codeToCopy = activeTab === 'mjml' ? mjmlCode : htmlCode;
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`builder-code-drawer ${isOpen ? 'open' : 'collapsed'}`}>
      {/* Drawer Header */}
      <div className="drawer-header" onClick={() => setIsOpen(!isOpen)}>
        <div className="header-title">
          <Terminal size={16} />
          <h2>{t('codeView')}</h2>
          <span className={`size-badge ${isClipped ? 'warning' : 'success'}`}>
            {htmlKbSize} KB
          </span>
          <span className="size-status">
            {isClipped ? t('gmailWarning') : t('gmailOk')}
          </span>
        </div>

        <div className="header-actions">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
            className="copy-btn"
            title="Copiar código"
          >
            {copied ? <Check size={14} className="success-icon" /> : <Copy size={14} />}
          </button>
          <button className="toggle-btn">
            {isOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </button>
        </div>
      </div>

      {/* Drawer Content */}
      {isOpen && (
        <div className="drawer-content">
          <div className="drawer-tabs">
            <button
              className={`drawer-tab ${activeTab === 'mjml' ? 'active' : ''}`}
              onClick={() => setActiveTab('mjml')}
            >
              MJML
            </button>
            <button
              className={`drawer-tab ${activeTab === 'html' ? 'active' : ''}`}
              onClick={() => setActiveTab('html')}
            >
              HTML
            </button>
          </div>

          <div className="code-viewer">
            <pre>
              <code>{activeTab === 'mjml' ? mjmlCode : htmlCode}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
