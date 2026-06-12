import React, { useState, useRef, useEffect } from 'react';

interface SliderWithInputProps {
  value: number | string;
  onChange: (value: string) => void;
  min?: number;
  max?: number;
  step?: number;
  unit?: string; // fallback default unit
  allowedUnits?: string[];
  disabled?: boolean;
}

const parseCssValue = (val: string | number | undefined, defaultUnit = 'px') => {
  if (val === undefined || val === null) return { value: 0, unit: defaultUnit };
  const s = String(val).trim();
  const num = parseFloat(s);
  if (isNaN(num)) return { value: 0, unit: defaultUnit };
  const unit = s.replace(String(num), '').trim() || defaultUnit;
  return { value: num, unit };
};

export const SliderWithInput: React.FC<SliderWithInputProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  unit = 'px',
  allowedUnits = ['px', 'em', 'rem', '%'],
  disabled = false,
}) => {
  const { value: numericValue, unit: activeUnit } = parseCssValue(value, unit);
  const [showUnitMenu, setShowUnitMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowUnitMenu(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(`${Number(e.target.value)}${activeUnit}`);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) {
      onChange(`${Math.max(min, Math.min(max, val))}${activeUnit}`);
    } else if (e.target.value === '') {
      onChange(`0${activeUnit}`);
    }
  };

  return (
    <div className="flex items-center gap-3 w-full">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={numericValue}
        onChange={handleSliderChange}
        disabled={disabled}
        className="flex-1 h-1 bg-border-color rounded-lg appearance-none cursor-pointer accent-primary disabled:opacity-50"
        id="slider-range"
      />
      <div className="flex items-center border border-border-color rounded-md bg-bg-hover px-2 py-1 shrink-0 w-[85px]">
        <input
          type="text"
          value={numericValue}
          onChange={handleInputChange}
          disabled={disabled}
          className="bg-transparent border-none text-text-primary text-right text-xs font-semibold w-full outline-none mr-1"
          id="slider-num-input"
        />
        
        <div className="relative shrink-0 border-l border-border-color/50 pl-1.5 flex items-center select-none" ref={menuRef}>
          <button
            type="button"
            disabled={disabled}
            onClick={() => setShowUnitMenu(!showUnitMenu)}
            className="bg-transparent border-none text-[9px] text-text-muted font-bold cursor-pointer hover:text-text-primary uppercase flex items-center gap-0.5"
          >
            {activeUnit} <span className="text-[6px]">▼</span>
          </button>
          {showUnitMenu && (
            <div className="absolute right-0 top-full mt-1 bg-bg-panel border border-border-color rounded-md shadow-lg z-[999] flex flex-col min-w-[55px] overflow-hidden">
              {allowedUnits.map((u) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => {
                    onChange(`${numericValue}${u}`);
                    setShowUnitMenu(false);
                  }}
                  className={`px-2 py-1.5 text-[10px] text-left hover:bg-bg-hover cursor-pointer border-none bg-transparent ${
                    u === activeUnit ? 'text-primary font-bold bg-primary/10' : 'text-text-secondary'
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

