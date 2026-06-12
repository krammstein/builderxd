import React, { useState, useEffect, useRef } from 'react';
import { SliderWithInput } from './SliderWithInput';

interface BorderRadiusEditorProps {
  value: string | number;
  onChange: (value: string) => void;
  disabled?: boolean;
}

const detectUnit = (val: string | number, defaultUnit = 'px') => {
  const s = String(val);
  const match = s.match(/[a-zA-Z%]+/);
  return match ? match[0] : defaultUnit;
};

export const BorderRadiusEditor: React.FC<BorderRadiusEditorProps> = ({
  value = '0px',
  onChange,
  disabled = false,
}) => {
  const [useIndividual, setUseIndividual] = useState(false);
  const [corners, setCorners] = useState({ topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0 });
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

  // Parse CSS border-radius value
  useEffect(() => {
    const valStr = String(value);
    const parts = valStr.split(' ').map(p => parseFloat(p) || 0);

    let tl = 0, tr = 0, br = 0, bl = 0;
    if (parts.length === 1) {
      tl = tr = br = bl = parts[0];
    } else if (parts.length === 2) {
      tl = br = parts[0];
      tr = bl = parts[1];
    } else if (parts.length === 3) {
      tl = parts[0];
      tr = bl = parts[1];
      br = parts[2];
    } else if (parts.length === 4) {
      [tl, tr, br, bl] = parts;
    }

    setCorners({ topLeft: tl, topRight: tr, bottomRight: br, bottomLeft: bl });
    if (tl === tr && tr === br && br === bl) {
      setUseIndividual(false);
    } else {
      setUseIndividual(true);
    }
  }, [value]);

  const updateCorners = (newCorners: Partial<typeof corners>) => {
    const next = { ...corners, ...newCorners };
    setCorners(next);

    if (useIndividual) {
      onChange(`${next.topLeft}${activeUnit} ${next.topRight}${activeUnit} ${next.bottomRight}${activeUnit} ${next.bottomLeft}${activeUnit}`);
    } else {
      const singleVal = Object.values(newCorners)[0] ?? 0;
      onChange(`${singleVal}${activeUnit}`);
    }
  };

  const handleToggle = () => {
    const nextIndividual = !useIndividual;
    setUseIndividual(nextIndividual);
    if (!nextIndividual) {
      onChange(`${corners.topLeft}${activeUnit}`);
    }
  };

  const handleUnitChange = (newUnit: string) => {
    if (useIndividual) {
      onChange(`${corners.topLeft}${newUnit} ${corners.topRight}${newUnit} ${corners.bottomRight}${newUnit} ${corners.bottomLeft}${newUnit}`);
    } else {
      onChange(`${corners.topLeft}${newUnit}`);
    }
    setShowUnitMenu(false);
  };

  return (
    <div className="flex flex-col gap-3 bg-bg-hover border border-border-color rounded-lg p-3 w-full">
      <div className="flex items-center justify-between border-b border-border-color/30 pb-2 select-none">
        <span className="text-[10px] text-text-muted font-bold uppercase">Bordes Redondeados</span>
        
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

          <label className="flex items-center gap-1.5 cursor-pointer text-[10px] text-text-muted font-semibold">
            <input
              type="checkbox"
              checked={useIndividual}
              onChange={handleToggle}
              disabled={disabled}
              className="rounded text-primary focus:ring-primary h-3.5 w-3.5 border-border-color"
              id="br-individual-checkbox"
            />
            <span>Personalizar esquinas</span>
          </label>
        </div>
      </div>

      {!useIndividual ? (
        <div className="flex flex-col gap-1">
          <label className="text-[10px] text-text-muted">Todas las esquinas</label>
          <SliderWithInput
            value={corners.topLeft}
            onChange={(val) => updateCorners({ topLeft: parseFloat(val), topRight: parseFloat(val), bottomRight: parseFloat(val), bottomLeft: parseFloat(val) })}
            min={0}
            max={100}
            unit={activeUnit}
            disabled={disabled}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Superior Izquierda (Top-Left)</label>
            <SliderWithInput
              value={corners.topLeft}
              onChange={(val) => updateCorners({ topLeft: parseFloat(val) })}
              min={0}
              max={100}
              unit={activeUnit}
              disabled={disabled}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Superior Derecha (Top-Right)</label>
            <SliderWithInput
              value={corners.topRight}
              onChange={(val) => updateCorners({ topRight: parseFloat(val) })}
              min={0}
              max={100}
              unit={activeUnit}
              disabled={disabled}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Inferior Derecha (Bottom-Right)</label>
            <SliderWithInput
              value={corners.bottomRight}
              onChange={(val) => updateCorners({ bottomRight: parseFloat(val) })}
              min={0}
              max={100}
              unit={activeUnit}
              disabled={disabled}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Inferior Izquierda (Bottom-Left)</label>
            <SliderWithInput
              value={corners.bottomLeft}
              onChange={(val) => updateCorners({ bottomLeft: parseFloat(val) })}
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
