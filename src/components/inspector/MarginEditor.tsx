import React, { useState, useEffect, useRef } from 'react';
import { Link2, Link2Off } from 'lucide-react';
import { SliderWithInput } from './SliderWithInput';

interface MarginEditorProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const detectUnit = (val: string, defaultUnit = 'px') => {
  const match = val.match(/[a-zA-Z%]+/);
  return match ? match[0] : defaultUnit;
};

export const MarginEditor: React.FC<MarginEditorProps> = ({
  value = '0px',
  onChange,
  disabled = false,
}) => {
  const [isLinked, setIsLinked] = useState(true);
  const [margin, setMargin] = useState({ top: 0, right: 0, bottom: 0, left: 0 });
  const [showUnitMenu, setShowUnitMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const activeUnit = detectUnit(value, 'px');
  const allowedUnits = ['px', 'em', 'rem', '%'];

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowUnitMenu(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  useEffect(() => {
    const parts = value.split(' ').map(p => parseFloat(p) || 0);
    let top = 0, right = 0, bottom = 0, left = 0;

    if (parts.length === 1) {
      top = right = bottom = left = parts[0];
    } else if (parts.length === 2) {
      top = bottom = parts[0];
      right = left = parts[1];
    } else if (parts.length === 3) {
      top = parts[0];
      right = left = parts[1];
      bottom = parts[2];
    } else if (parts.length === 4) {
      [top, right, bottom, left] = parts;
    }

    setMargin({ top, right, bottom, left });
    if (top === right && right === bottom && bottom === left) {
      setIsLinked(true);
    } else {
      setIsLinked(false);
    }
  }, [value]);

  const updateMargin = (sides: Partial<typeof margin>) => {
    const next = { ...margin, ...sides };
    setMargin(next);

    if (isLinked) {
      const updatedValue = Object.values(sides)[0] ?? 0;
      const allVal = `${updatedValue}${activeUnit}`;
      onChange(allVal);
    } else {
      const valStr = `${next.top}${activeUnit} ${next.right}${activeUnit} ${next.bottom}${activeUnit} ${next.left}${activeUnit}`;
      onChange(valStr);
    }
  };

  const handleToggleLinked = () => {
    setIsLinked(!isLinked);
    if (!isLinked) {
      const topVal = margin.top;
      onChange(`${topVal}${activeUnit}`);
    }
  };

  const handleUnitChange = (newUnit: string) => {
    if (isLinked) {
      onChange(`${margin.top}${newUnit}`);
    } else {
      onChange(`${margin.top}${newUnit} ${margin.right}${newUnit} ${margin.bottom}${newUnit} ${margin.left}${newUnit}`);
    }
    setShowUnitMenu(false);
  };

  return (
    <div className="flex flex-col gap-3 bg-bg-hover border border-border-color rounded-lg p-3 w-full">
      <div className="flex items-center justify-between border-b border-border-color/30 pb-2 select-none">
        <span className="text-[10px] text-text-muted font-bold uppercase">Margen (Margin)</span>
        
        <div className="flex items-center gap-2">
          {/* Unit selector dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              disabled={disabled}
              onClick={() => setShowUnitMenu(!showUnitMenu)}
              className="bg-bg-panel border border-border-color text-[10px] text-text-muted font-bold px-1.5 py-0.5 rounded-sm cursor-pointer hover:text-text-primary uppercase flex items-center gap-0.5 outline-none"
            >
              {activeUnit} <span className="text-[6px]">▼</span>
            </button>
            {showUnitMenu && (
              <div className="absolute right-0 top-full mt-1 bg-bg-panel border border-border-color rounded-md shadow-lg z-[999] flex flex-col min-w-[55px] overflow-hidden">
                {allowedUnits.map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => handleUnitChange(u)}
                    className={`px-2 py-1 text-[10px] text-left hover:bg-bg-hover cursor-pointer border-none bg-transparent ${
                      u === activeUnit ? 'text-primary font-bold bg-primary/10' : 'text-text-secondary'
                    }`}
                  >
                    {u}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            disabled={disabled}
            onClick={handleToggleLinked}
            className={`p-1 rounded-sm cursor-pointer transition-all border-none outline-none ${
              isLinked ? 'bg-primary/15 text-primary' : 'text-text-muted hover:text-text-primary'
            }`}
            title={isLinked ? 'Valores vinculados' : 'Valores independientes'}
            id="margin-link-btn"
          >
            {isLinked ? <Link2 size={14} /> : <Link2Off size={14} />}
          </button>
        </div>
      </div>

      {isLinked ? (
        <div className="flex flex-col gap-1">
          <label className="text-[10px] text-text-muted">Todos los lados</label>
          <SliderWithInput
            value={margin.top}
            onChange={(val) => updateMargin({ top: parseFloat(val), right: parseFloat(val), bottom: parseFloat(val), left: parseFloat(val) })}
            min={0}
            max={100}
            unit={activeUnit}
            disabled={disabled}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Arriba (Top)</label>
            <SliderWithInput
              value={margin.top}
              onChange={(val) => updateMargin({ top: parseFloat(val) })}
              min={0}
              max={100}
              unit={activeUnit}
              disabled={disabled}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Derecha (Right)</label>
            <SliderWithInput
              value={margin.right}
              onChange={(val) => updateMargin({ right: parseFloat(val) })}
              min={0}
              max={100}
              unit={activeUnit}
              disabled={disabled}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Abajo (Bottom)</label>
            <SliderWithInput
              value={margin.bottom}
              onChange={(val) => updateMargin({ bottom: parseFloat(val) })}
              min={0}
              max={100}
              unit={activeUnit}
              disabled={disabled}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Izquierda (Left)</label>
            <SliderWithInput
              value={margin.left}
              onChange={(val) => updateMargin({ left: parseFloat(val) })}
              min={0}
              max={100}
              unit={activeUnit}
              disabled={disabled}
            />
          </div>
        </div>
      )}
    </div>
  );
};
