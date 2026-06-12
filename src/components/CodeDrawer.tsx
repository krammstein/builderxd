import React, { useState } from 'react';
import { useTranslation } from '../context/LanguageContext';
import { Terminal, Copy, Check, ChevronUp, ChevronDown } from 'lucide-react';

interface CodeDrawerProps {
  mjmlCode: string;
  htmlCode: string;
  isOpen: boolean;
  onToggle: () => void;
}

export const CodeDrawer: React.FC<CodeDrawerProps> = ({
  mjmlCode,
  htmlCode,
  isOpen,
  onToggle
}) => {
  const { t } = useTranslation();
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
    <div className={`bg-bg-panel border-t border-border-color flex flex-col absolute bottom-0 left-[300px] right-[300px] z-40 shadow-lg builder-code-drawer ${isOpen ? 'h-[300px]' : 'h-10'}`}>
      {/* Drawer Header */}
      <div className="h-10 px-4 flex items-center justify-between cursor-pointer bg-bg-hover" onClick={onToggle}>
        <div className="flex items-center gap-2 flex-1">
          <Terminal size={16} />
          <h2 className="text-xs font-semibold">{t('codeView')}</h2>
          <span className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded ${isClipped ? 'bg-red-500/15 text-danger' : 'bg-green-500/15 text-success'}`}>
            {htmlKbSize} KB
          </span>
          <span className="text-[11px] text-text-secondary truncate max-w-[200px] md:max-w-md">
            {isClipped ? t('gmailWarning') : t('gmailOk')}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
            className="bg-transparent border-none text-text-secondary p-1 cursor-pointer rounded hover:bg-border-color hover:text-text-primary flex items-center justify-center"
            title="Copiar código"
          >
            {copied ? <Check size={14} className="text-success" /> : <Copy size={14} />}
          </button>
          <button className="bg-transparent border-none text-text-secondary p-1 cursor-pointer rounded hover:bg-border-color hover:text-text-primary flex items-center justify-center">
            {isOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
          </button>
        </div>
      </div>

      {/* Drawer Content */}
      {isOpen && (
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex border-b border-border-color bg-bg-panel">
            <button
              className={`bg-transparent border-none border-b-2 p-2 px-4 text-[11px] font-semibold cursor-pointer ${
                activeTab === 'mjml' ? 'border-b-primary text-primary' : 'border-b-transparent text-text-secondary'
              }`}
              onClick={() => setActiveTab('mjml')}
            >
              MJML
            </button>
            <button
              className={`bg-transparent border-none border-b-2 p-2 px-4 text-[11px] font-semibold cursor-pointer ${
                activeTab === 'html' ? 'border-b-primary text-primary' : 'border-b-transparent text-text-secondary'
              }`}
              onClick={() => setActiveTab('html')}
            >
              HTML
            </button>
          </div>

          <div className="flex-1 bg-code-bg overflow-auto p-4">
            <pre className="margin-0">
              <code className="font-mono text-xs text-code-text whitespace-pre-wrap break-all bg-transparent p-0">{activeTab === 'mjml' ? mjmlCode : htmlCode}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
};
