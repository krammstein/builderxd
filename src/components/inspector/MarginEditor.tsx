import React, { useState, useEffect } from 'react';
import { Link2, Link2Off } from 'lucide-react';
import { SliderWithInput } from './SliderWithInput';

interface MarginEditorProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const MarginEditor: React.FC<MarginEditorProps> = ({
  value = '0px',
  onChange,
  disabled = false,
}) => {
  const [isLinked, setIsLinked] = useState(true);
  const [margin, setMargin] = useState({ top: 0, right: 0, bottom: 0, left: 0 });

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
      const topVal = margin.top;
      onChange(`${topVal}px`);
    }
  };

  return (
    <div className="flex flex-col gap-3 bg-bg-hover border border-border-color rounded-lg p-3 w-full">
      <div className="flex items-center justify-between border-b border-border-color/30 pb-2 select-none">
        <span className="text-[10px] text-text-muted font-bold uppercase">Margen (Margin)</span>
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

      {isLinked ? (
        <div className="flex flex-col gap-1">
          <label className="text-[10px] text-text-muted">Todos los lados</label>
          <SliderWithInput
            value={margin.top}
            onChange={(val) => updateMargin({ top: val, right: val, bottom: val, left: val })}
            min={0}
            max={100}
            unit="px"
            disabled={disabled}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Arriba (Top)</label>
            <SliderWithInput
              value={margin.top}
              onChange={(val) => updateMargin({ top: val })}
              min={0}
              max={100}
              unit="px"
              disabled={disabled}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Derecha (Right)</label>
            <SliderWithInput
              value={margin.right}
              onChange={(val) => updateMargin({ right: val })}
              min={0}
              max={100}
              unit="px"
              disabled={disabled}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Abajo (Bottom)</label>
            <SliderWithInput
              value={margin.bottom}
              onChange={(val) => updateMargin({ bottom: val })}
              min={0}
              max={100}
              unit="px"
              disabled={disabled}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Izquierda (Left)</label>
            <SliderWithInput
              value={margin.left}
              onChange={(val) => updateMargin({ left: val })}
              min={0}
              max={100}
              unit="px"
              disabled={disabled}
            />
          </div>
        </div>
      )}
    </div>
  );
};
