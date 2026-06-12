import React, { useState, useEffect } from 'react';
import { Link2 } from 'lucide-react';

interface LinkInputProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const LinkInput: React.FC<LinkInputProps> = ({
  value = '',
  onChange,
  disabled = false,
}) => {
  const [type, setType] = useState<'url' | 'email' | 'tel' | 'anchor'>('url');
  const [rawText, setRawText] = useState('');

  // Parse initial type and value
  useEffect(() => {
    if (value.startsWith('mailto:')) {
      setType('email');
      setRawText(value.substring(7));
    } else if (value.startsWith('tel:')) {
      setType('tel');
      setRawText(value.substring(4));
    } else if (value.startsWith('#')) {
      setType('anchor');
      setRawText(value.substring(1));
    } else {
      setType('url');
      setRawText(value);
    }
  }, [value]);

  const handleTextChange = (text: string) => {
    setRawText(text);
    triggerChange(type, text);
  };

  const handleTypeChange = (newType: typeof type) => {
    setType(newType);
    triggerChange(newType, rawText);
  };

  const triggerChange = (linkType: typeof type, text: string) => {
    if (!text) {
      onChange('');
      return;
    }
    switch (linkType) {
      case 'email':
        onChange(`mailto:${text}`);
        break;
      case 'tel':
        onChange(`tel:${text}`);
        break;
      case 'anchor':
        onChange(`#${text}`);
        break;
      case 'url':
      default:
        onChange(text);
        break;
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center border border-border-color rounded-md px-2 py-1 bg-bg-hover">
        <Link2 size={14} className="text-text-muted mr-1.5 shrink-0" />
        <input
          type="text"
          value={rawText}
          onChange={(e) => handleTextChange(e.target.value)}
          disabled={disabled}
          placeholder={
            type === 'email' ? 'ejemplo@correo.com' :
            type === 'tel' ? '+34600112233' :
            type === 'anchor' ? 'nombre-seccion' :
            'https://ejemplo.com'
          }
          className="bg-transparent border-none text-text-primary text-xs outline-none w-full font-mono"
          id={`link-input-${value.replace(/[^a-zA-Z0-9]/g, '')}`}
        />
      </div>

      <div className="flex border border-border-color rounded-md overflow-hidden bg-bg-hover text-[10px] font-bold w-full select-none">
        {(['url', 'email', 'tel', 'anchor'] as const).map((t) => {
          const isActive = type === t;
          const label =
            t === 'url' ? 'Web' :
            t === 'email' ? 'Email' :
            t === 'tel' ? 'Tel' :
            'Ancla';

          return (
            <button
              key={t}
              type="button"
              disabled={disabled}
              onClick={() => handleTypeChange(t)}
              className={`flex-1 p-1 text-center cursor-pointer transition-all border-none outline-none ${
                isActive
                  ? 'bg-primary text-white'
                  : 'text-text-secondary hover:bg-bg-panel hover:text-text-primary'
              }`}
              id={`link-type-${t}`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
