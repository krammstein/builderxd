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

  const highlightLine = (line: string) => {
    if (!line) return '';
    // Escape HTML tag angle brackets
    let escaped = line
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');

    // 1. Tag name highlight: e.g. <mj-section ...> or </mj-section>
    escaped = escaped.replace(
      /&lt;(\/?[a-zA-Z0-9:-]+)/g,
      '&lt;<span class="text-[#f43f5e] font-semibold">$1</span>'
    );

    // 2. Attributes: e.g. padding="20px"
    escaped = escaped.replace(
      /(\s)([a-zA-Z0-9:-]+)(=)/g,
      '$1<span class="text-[#fb923c]">$2</span>$3'
    );

    // 3. String values: e.g. "20px"
    escaped = escaped.replace(
      /("[^"]*")/g,
      '<span class="text-[#a3e635]">$1</span>'
    );

    // 4. Comments: e.g. <!-- comment -->
    escaped = escaped.replace(
      /(&lt;!--[\s\S]*?--&gt;)/g,
      '<span class="text-[#9ca3af] italic">$1</span>'
    );

    return escaped;
  };

  const code = activeTab === 'mjml' ? mjmlCode : htmlCode;
  const lines = code.split('\n');

  return (
    <div className={`bg-bg-panel border-t border-border-color flex flex-col absolute bottom-0 left-[344px] right-[300px] z-40 shadow-lg builder-code-drawer ${isOpen ? 'h-[300px]' : 'h-10'}`}>
      {/* Drawer Header */}
      <div className="h-10 px-4 flex items-center justify-between cursor-pointer bg-bg-hover shrink-0" onClick={onToggle}>
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Terminal size={16} className="text-primary shrink-0" />
          <h2 className="text-xs font-semibold shrink-0">{t('codeView')}</h2>
          <span className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded shrink-0 ${isClipped ? 'bg-red-500/15 text-danger' : 'bg-green-500/15 text-success'}`}>
            {htmlKbSize} KB
          </span>
          <span className="text-[11px] text-text-secondary truncate max-w-[200px] md:max-w-md hidden sm:inline">
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
            id="btn-copy-code"
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
          <div className="flex border-b border-border-color bg-bg-panel shrink-0">
            <button
              className={`bg-transparent border-none border-b-2 p-2 px-4 text-[11px] font-semibold cursor-pointer ${
                activeTab === 'mjml' ? 'border-b-primary text-primary' : 'border-b-transparent text-text-secondary'
              }`}
              onClick={() => setActiveTab('mjml')}
              id="tab-btn-mjml"
            >
              MJML
            </button>
            <button
              className={`bg-transparent border-none border-b-2 p-2 px-4 text-[11px] font-semibold cursor-pointer ${
                activeTab === 'html' ? 'border-b-primary text-primary' : 'border-b-transparent text-text-secondary'
              }`}
              onClick={() => setActiveTab('html')}
              id="tab-btn-html"
            >
              HTML
            </button>
          </div>

          {/* Code Container with line numbers and simple regex syntax highlighting */}
          <div className="flex-1 bg-[#0f172a] text-[#e2e8f0] overflow-auto p-4 flex font-mono text-xs select-text">
            {/* Line Numbers Column */}
            <div className="select-none text-right pr-3 border-r border-[#334155] text-[#64748b] shrink-0 flex flex-col font-mono text-xs">
              {lines.map((_, idx) => (
                <span key={idx} className="block h-5 leading-5 min-w-[24px]">{idx + 1}</span>
              ))}
            </div>
            {/* Highlighting Content Column */}
            <div className="pl-3 overflow-x-auto flex-1 flex flex-col font-mono text-xs">
              {lines.map((line, idx) => (
                <span
                  key={idx}
                  className="block h-5 leading-5 whitespace-pre"
                  dangerouslySetInnerHTML={{ __html: highlightLine(line) || '&nbsp;' }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
