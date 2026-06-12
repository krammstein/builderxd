import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check } from 'lucide-react';

export interface SelectOption {
  label: string;
  value: string;
  previewClass?: string;
  previewStyle?: React.CSSProperties;
}

interface CustomSelectProps {
  value: string;
  options: SelectOption[];
  onChange: (value: string) => void;
  disabled?: boolean;
  renderOption?: (option: SelectOption) => React.ReactNode;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  value,
  options,
  onChange,
  disabled = false,
  renderOption,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;
    if (!isOpen) {
      if (e.key === 'Enter' || e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        setIsOpen(true);
        const idx = options.findIndex(o => o.value === value);
        setFocusedIndex(idx >= 0 ? idx : 0);
      }
      return;
    }

    switch (e.key) {
      case 'Escape':
        setIsOpen(false);
        break;
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(prev => (prev + 1) % options.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(prev => (prev - 1 + options.length) % options.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < options.length) {
          onChange(options[focusedIndex].value);
          setIsOpen(false);
        }
        break;
    }
  };

  const handleSelect = (val: string) => {
    onChange(val);
    setIsOpen(false);
  };

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      tabIndex={disabled ? -1 : 0}
      className={`relative w-full outline-none focus:ring-1 focus:ring-primary rounded-md ${disabled ? 'opacity-55 pointer-events-none' : ''}`}
    >
      <button
        type="button"
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs cursor-pointer text-left outline-none hover:border-border-color/85"
        id={`select-trigger-${value}`}
      >
        <span style={selectedOption?.previewStyle} className={selectedOption?.previewClass}>
          {selectedOption ? selectedOption.label : 'Seleccionar...'}
        </span>
        <ChevronDown size={14} className="text-text-muted shrink-0 ml-1" />
      </button>

      {isOpen && (
        <ul
          className="absolute left-0 right-0 mt-1 max-h-60 overflow-y-auto bg-bg-panel border border-border-color rounded-md shadow-xl p-1 z-50 list-none m-0 animate-in fade-in slide-in-from-top-1 duration-100"
          id={`select-options-${value}`}
          role="listbox"
        >
          {options.map((opt, idx) => {
            const isSelected = opt.value === value;
            const isFocused = idx === focusedIndex;

            return (
              <li
                key={opt.value}
                onClick={() => handleSelect(opt.value)}
                onMouseEnter={() => setFocusedIndex(idx)}
                className={`flex items-center justify-between p-2 px-3 text-xs rounded-xs cursor-pointer select-none ${
                  isSelected ? 'bg-primary/10 text-primary font-semibold' : 'text-text-primary'
                } ${isFocused && !isSelected ? 'bg-bg-hover' : ''}`}
                role="option"
                aria-selected={isSelected}
              >
                {renderOption ? (
                  renderOption(opt)
                ) : (
                  <span style={opt.previewStyle} className={opt.previewClass}>
                    {opt.label}
                  </span>
                )}
                {isSelected && <Check size={14} className="text-primary shrink-0 ml-1" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
