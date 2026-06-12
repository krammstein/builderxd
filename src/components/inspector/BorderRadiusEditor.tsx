import React, { useState, useEffect } from 'react';
import { SliderWithInput } from './SliderWithInput';

interface BorderRadiusEditorProps {
  value: string | number;
  onChange: (value: string) => void;
  disabled?: boolean;
}

export const BorderRadiusEditor: React.FC<BorderRadiusEditorProps> = ({
  value = '0px',
  onChange,
  disabled = false,
}) => {
  const [useIndividual, setUseIndividual] = useState(false);
  const [corners, setCorners] = useState({ topLeft: 0, topRight: 0, bottomRight: 0, bottomLeft: 0 });

  // Parse CSS border-radius value
  useEffect(() => {
    const valStr = String(value);
    const parts = valStr.split(' ').map(p => parseInt(p) || 0);

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
      onChange(`${next.topLeft}px ${next.topRight}px ${next.bottomRight}px ${next.bottomLeft}px`);
    } else {
      const singleVal = Object.values(newCorners)[0] ?? 0;
      onChange(`${singleVal}px`);
    }
  };

  const handleToggle = () => {
    const nextIndividual = !useIndividual;
    setUseIndividual(nextIndividual);
    if (!nextIndividual) {
      onChange(`${corners.topLeft}px`);
    }
  };

  return (
    <div className="flex flex-col gap-3 bg-bg-hover border border-border-color rounded-lg p-3 w-full">
      <div className="flex items-center justify-between border-b border-border-color/30 pb-2 select-none">
        <span className="text-[10px] text-text-muted font-bold uppercase">Bordes Redondeados</span>
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

      {!useIndividual ? (
        <div className="flex flex-col gap-1">
          <label className="text-[10px] text-text-muted">Todas las esquinas</label>
          <SliderWithInput
            value={corners.topLeft}
            onChange={(val) => updateCorners({ topLeft: val, topRight: val, bottomRight: val, bottomLeft: val })}
            min={0}
            max={100}
            unit="px"
            disabled={disabled}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Superior Izquierda (Top-Left)</label>
            <SliderWithInput
              value={corners.topLeft}
              onChange={(val) => updateCorners({ topLeft: val })}
              min={0}
              max={100}
              unit="px"
              disabled={disabled}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Superior Derecha (Top-Right)</label>
            <SliderWithInput
              value={corners.topRight}
              onChange={(val) => updateCorners({ topRight: val })}
              min={0}
              max={100}
              unit="px"
              disabled={disabled}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Inferior Derecha (Bottom-Right)</label>
            <SliderWithInput
              value={corners.bottomRight}
              onChange={(val) => updateCorners({ bottomRight: val })}
              min={0}
              max={100}
              unit="px"
              disabled={disabled}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-[10px] text-text-muted">Inferior Izquierda (Bottom-Left)</label>
            <SliderWithInput
              value={corners.bottomLeft}
              onChange={(val) => updateCorners({ bottomLeft: val })}
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
