import React from 'react';
import { AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';

interface AlignButtonGroupProps {
  value: 'left' | 'center' | 'right' | 'justify';
  options?: Array<'left' | 'center' | 'right' | 'justify'>;
  onChange: (align: 'left' | 'center' | 'right' | 'justify') => void;
  disabled?: boolean;
}

export const AlignButtonGroup: React.FC<AlignButtonGroupProps> = ({
  value,
  options = ['left', 'center', 'right', 'justify'],
  onChange,
  disabled = false,
}) => {
  const getIcon = (opt: string) => {
    switch (opt) {
      case 'left': return <AlignLeft size={16} />;
      case 'center': return <AlignCenter size={16} />;
      case 'right': return <AlignRight size={16} />;
      case 'justify': return <AlignJustify size={16} />;
      default: return null;
    }
  };

  return (
    <div className="flex border border-border-color rounded-md overflow-hidden bg-bg-hover w-max">
      {options.map((opt) => {
        const isActive = value === opt;
        return (
          <button
            key={opt}
            type="button"
            disabled={disabled}
            onClick={() => onChange(opt)}
            className={`p-2 px-3 flex items-center justify-center cursor-pointer transition-all border-none outline-none disabled:opacity-50 ${
              isActive
                ? 'bg-primary text-white font-bold'
                : 'text-text-secondary hover:bg-bg-panel hover:text-text-primary'
            }`}
            title={`Alineación ${opt}`}
            id={`align-btn-${opt}`}
          >
            {getIcon(opt)}
          </button>
        );
      })}
    </div>
  );
};
