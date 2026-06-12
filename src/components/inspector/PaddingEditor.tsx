import React, { useState, useEffect } from 'react';
import { Link2, Link2Off } from 'lucide-react';

interface PaddingEditorProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const PaddingEditor: React.FC<PaddingEditorProps> = ({
  value = '10px',
  onChange,
  disabled = false,
}) => {
  const [isLinked, setIsLinked] = useState(true);
  const [padding, setPadding] = useState({ top: 10, right: 10, bottom: 10, left: 10 });

  // Parse CSS padding string to 4 numbers
  useEffect(() => {
    const parts = value.split(' ').map(p => parseInt(p) || 0);
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

    setPadding({ top, right, bottom, left });
    // If all sides are equal, default to linked
    if (top === right && right === bottom && bottom === left) {
      setIsLinked(true);
    } else {
      setIsLinked(false);
    }
  }, [value]);

  const updatePadding = (sides: Partial<typeof padding>) => {
    const next = { ...padding, ...sides };
    setPadding(next);

    if (isLinked) {
      // Find the updated key and apply to all
      const updatedValue = Object.values(sides)[0] ?? 0;
      const allVal = `${updatedValue}px`;
      onChange(allVal);
    } else {
      const valStr = `${next.top}px ${next.right}px ${next.bottom}px ${next.left}px`;
      onChange(valStr);
    }
  };

  const handleToggleLinked = () => {
    setIsLinked(!isLinked);
    if (!isLinked) {
      // Link elements - make all equal to Top
      const topVal = padding.top;
      onChange(`${topVal}px`);
    }
  };

  return (
    <div className="flex flex-col gap-3 bg-bg-hover border border-border-color rounded-lg p-3 w-full">
      <div className="flex items-center justify-between border-b border-border-color/30 pb-2">
        <span className="text-[10px] text-text-muted font-bold uppercase">Espaciado (Padding)</span>
        <button
          type="button"
          disabled={disabled}
          onClick={handleToggleLinked}
          className={`p-1 rounded-sm cursor-pointer transition-all border-none outline-none ${
            isLinked ? 'bg-primary/15 text-primary' : 'text-text-muted hover:text-text-primary'
          }`}
          title={isLinked ? 'Valores vinculados' : 'Valores independientes'}
          id="pad-link-btn"
        >
          {isLinked ? <Link2 size={14} /> : <Link2Off size={14} />}
        </button>
      </div>

      {isLinked ? (
        <div className="flex flex-col gap-1">
          <label className="text-[10px] text-text-muted">Todos los lados</label>
          <div className="flex items-center border border-border-color rounded-md px-2 py-1 bg-bg-panel w-20">
            <input
              type="number"
              value={padding.top}
              onChange={(e) => updatePadding({ top: parseInt(e.target.value) || 0 })}
              disabled={disabled}
              className="bg-transparent border-none text-text-primary font-semibold text-xs w-full outline-none"
              id="pad-all-input"
            />
            <span className="text-[10px] text-text-muted font-bold select-none ml-1">px</span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Arriba (Top)</label>
            <div className="flex items-center border border-border-color rounded-md px-2 py-1 bg-bg-panel">
              <input
                type="number"
                value={padding.top}
                onChange={(e) => updatePadding({ top: parseInt(e.target.value) || 0 })}
                disabled={disabled}
                className="bg-transparent border-none text-text-primary font-semibold text-xs w-full outline-none"
                id="pad-top-input"
              />
              <span className="text-[10px] text-text-muted font-bold select-none ml-1">px</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Derecha (Right)</label>
            <div className="flex items-center border border-border-color rounded-md px-2 py-1 bg-bg-panel">
              <input
                type="number"
                value={padding.right}
                onChange={(e) => updatePadding({ right: parseInt(e.target.value) || 0 })}
                disabled={disabled}
                className="bg-transparent border-none text-text-primary font-semibold text-xs w-full outline-none"
                id="pad-right-input"
              />
              <span className="text-[10px] text-text-muted font-bold select-none ml-1">px</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Abajo (Bottom)</label>
            <div className="flex items-center border border-border-color rounded-md px-2 py-1 bg-bg-panel">
              <input
                type="number"
                value={padding.bottom}
                onChange={(e) => updatePadding({ bottom: parseInt(e.target.value) || 0 })}
                disabled={disabled}
                className="bg-transparent border-none text-text-primary font-semibold text-xs w-full outline-none"
                id="pad-bottom-input"
              />
              <span className="text-[10px] text-text-muted font-bold select-none ml-1">px</span>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Izquierda (Left)</label>
            <div className="flex items-center border border-border-color rounded-md px-2 py-1 bg-bg-panel">
              <input
                type="number"
                value={padding.left}
                onChange={(e) => updatePadding({ left: parseInt(e.target.value) || 0 })}
                disabled={disabled}
                className="bg-transparent border-none text-text-primary font-semibold text-xs w-full outline-none"
                id="pad-left-input"
              />
              <span className="text-[10px] text-text-muted font-bold select-none ml-1">px</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
