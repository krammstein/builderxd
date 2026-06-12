import React, { useState, useEffect, useRef } from 'react';
import { Pipette } from 'lucide-react';

interface ColorPickerProps {
  value: string;
  onChange: (color: string) => void;
  allowAlpha?: boolean;
  presets?: string[];
  disabled?: boolean;
}

export const ColorPicker: React.FC<ColorPickerProps> = ({
  value = '#ffffff',
  onChange,
  allowAlpha = true,
  presets = ['#ffffff', '#000000', '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#4f46e5', '#f59e0b'],
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hueRef = useRef<HTMLDivElement>(null);
  const alphaRef = useRef<HTMLDivElement>(null);

  // Parsing helper to keep HSVA internally
  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 1, a: 1 });

  // Convert HEX/RGBA to HSVA
  useEffect(() => {
    const parsed = parseColor(value);
    setHsva(parsed);
  }, [value]);

  // Click outside listener
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

  // Render Saturation & Value canvas
  useEffect(() => {
    if (!isOpen || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // Draw base color gradient (Hue)
    ctx.fillStyle = `hsl(${hsva.h}, 100%, 50%)`;
    ctx.fillRect(0, 0, width, height);

    // White to transparent gradient (Saturation)
    const whiteGrad = ctx.createLinearGradient(0, 0, width, 0);
    whiteGrad.addColorStop(0, 'rgba(255,255,255,1)');
    whiteGrad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = whiteGrad;
    ctx.fillRect(0, 0, width, height);

    // Black to transparent gradient (Value/Brightness)
    const blackGrad = ctx.createLinearGradient(0, height, 0, 0);
    blackGrad.addColorStop(0, 'rgba(0,0,0,1)');
    blackGrad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = blackGrad;
    ctx.fillRect(0, 0, width, height);
  }, [isOpen, hsva.h]);

  const parseColor = (colorStr: string) => {
    let r = 255, g = 255, b = 255, a = 1;
    if (colorStr.startsWith('#')) {
      const hex = colorStr.substring(1);
      if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
      } else if (hex.length === 6) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
      } else if (hex.length === 8) {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
        a = parseInt(hex.substring(6, 8), 16) / 255;
      }
    } else if (colorStr.startsWith('rgba') || colorStr.startsWith('rgb')) {
      const match = colorStr.match(/\d+(\.\d+)?/g);
      if (match) {
        r = parseInt(match[0]);
        g = parseInt(match[1]);
        b = parseInt(match[2]);
        if (match[3]) a = parseFloat(match[3]);
      }
    }
    return rgbToHsva(r, g, b, a);
  };

  const rgbToHsva = (r: number, g: number, b: number, a: number) => {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s = 0, v = max;
    const d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max !== min) {
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    return { h: Math.round(h * 360), s, v, a };
  };

  const hsvaToRgba = (h: number, s: number, v: number, a: number) => {
    let r = 0, g = 0, b = 0;
    const i = Math.floor((h / 360) * 6);
    const f = (h / 360) * 6 - i;
    const p = v * (1 - s);
    const q = v * (1 - f * s);
    const t = v * (1 - (1 - f) * s);
    switch (i % 6) {
      case 0: r = v; g = t; b = p; break;
      case 1: r = q; g = v; b = p; break;
      case 2: r = p; g = v; b = t; break;
      case 3: r = p; g = q; b = v; break;
      case 4: r = t; g = p; b = v; break;
      case 5: r = v; g = p; b = q; break;
    }
    return {
      r: Math.round(r * 255),
      g: Math.round(g * 255),
      b: Math.round(b * 255),
      a
    };
  };

  const rgbaToHex = (r: number, g: number, b: number, a: number) => {
    const toHex = (n: number) => n.toString(16).padStart(2, '0');
    if (a < 1) {
      return `#${toHex(r)}${toHex(g)}${toHex(b)}${toHex(Math.round(a * 255))}`;
    }
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  };

  const triggerChange = (h: number, s: number, v: number, a: number) => {
    const rgba = hsvaToRgba(h, s, v, a);
    const val = a < 1 ? `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a.toFixed(2)})` : rgbaToHex(rgba.r, rgba.g, rgba.b, rgba.a);
    onChange(val);
  };

  const handleCanvasMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (disabled || !canvasRef.current) return;
    const update = (evt: MouseEvent) => {
      const rect = canvasRef.current!.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (evt.clientX - rect.left) / rect.width));
      const y = Math.max(0, Math.min(1, (evt.clientY - rect.top) / rect.height));
      const newS = x;
      const newV = 1 - y;
      setHsva(prev => {
        const next = { ...prev, s: newS, v: newV };
        triggerChange(next.h, next.s, next.v, next.a);
        return next;
      });
    };
    update(e.nativeEvent);
    const mouseMove = (evt: MouseEvent) => update(evt);
    const mouseUp = () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseup', mouseUp);
    };
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', mouseUp);
  };

  const handleHueMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !hueRef.current) return;
    const update = (evt: MouseEvent) => {
      const rect = hueRef.current!.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (evt.clientX - rect.left) / rect.width));
      const newH = Math.round(x * 360);
      setHsva(prev => {
        const next = { ...prev, h: newH };
        triggerChange(next.h, next.s, next.v, next.a);
        return next;
      });
    };
    update(e.nativeEvent);
    const mouseMove = (evt: MouseEvent) => update(evt);
    const mouseUp = () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseup', mouseUp);
    };
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', mouseUp);
  };

  const handleAlphaMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disabled || !alphaRef.current) return;
    const update = (evt: MouseEvent) => {
      const rect = alphaRef.current!.getBoundingClientRect();
      const x = Math.max(0, Math.min(1, (evt.clientX - rect.left) / rect.width));
      const newA = parseFloat(x.toFixed(2));
      setHsva(prev => {
        const next = { ...prev, a: newA };
        triggerChange(next.h, next.s, next.v, next.a);
        return next;
      });
    };
    update(e.nativeEvent);
    const mouseMove = (evt: MouseEvent) => update(evt);
    const mouseUp = () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseup', mouseUp);
    };
    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseup', mouseUp);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    onChange(rawVal);
  };

  const currentRgba = hsvaToRgba(hsva.h, hsva.s, hsva.v, hsva.a);

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="flex gap-2 w-full items-center">
        <button
          type="button"
          disabled={disabled}
          onClick={() => setIsOpen(!isOpen)}
          className="w-9 h-9 rounded-md border border-border-color shrink-0 cursor-pointer overflow-hidden flex items-center justify-center relative focus:ring-1 focus:ring-primary outline-none disabled:opacity-50"
          style={{
            background: `linear-gradient(to right, ${value}, ${value}), repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 50% / 8px 8px`
          }}
          title="Seleccionar color"
          id={`cp-btn-${value.replace(/[^a-zA-Z0-9]/g, '')}`}
        >
          <Pipette size={14} className="mix-blend-difference text-white opacity-80" />
        </button>
        <input
          type="text"
          value={value}
          onChange={handleInputChange}
          disabled={disabled}
          placeholder="#ffffff"
          className="bg-bg-hover border border-border-color text-text-primary p-2 px-3 rounded-md text-xs outline-none transition-all focus:border-primary w-full font-mono disabled:opacity-55"
          id={`cp-input-${value.replace(/[^a-zA-Z0-9]/g, '')}`}
        />
      </div>

      {isOpen && (
        <div className="absolute right-0 top-11 bg-bg-panel border border-border-color rounded-lg shadow-xl p-3 z-50 flex flex-col gap-3 w-56 animate-in fade-in slide-in-from-top-2 duration-150">
          {/* Canvas area */}
          <canvas
            ref={canvasRef}
            width={200}
            height={120}
            onMouseDown={handleCanvasMouseDown}
            className="cursor-crosshair rounded-md border border-border-color/30"
          />

          {/* Hue slider */}
          <div className="flex flex-col gap-1">
            <span className="text-[10px] text-text-muted font-medium uppercase">Tono</span>
            <div
              ref={hueRef}
              onMouseDown={handleHueMouseDown}
              className="h-3.5 rounded-full relative cursor-pointer border border-border-color/30 overflow-visible"
              style={{
                background: 'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)'
              }}
            >
              <div
                className="absolute top-0 w-3.5 h-3.5 rounded-full bg-white border border-gray-400 shadow-md transform -translate-x-1/2"
                style={{ left: `${(hsva.h / 360) * 100}%` }}
              />
            </div>
          </div>

          {/* Alpha slider */}
          {allowAlpha && (
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-text-muted font-medium uppercase">Opacidad ({Math.round(hsva.a * 100)}%)</span>
              <div
                ref={alphaRef}
                onMouseDown={handleAlphaMouseDown}
                className="h-3.5 rounded-full relative cursor-pointer border border-border-color/30 overflow-visible"
                style={{
                  background: `linear-gradient(to right, rgba(${currentRgba.r},${currentRgba.g},${currentRgba.b},0) 0%, rgba(${currentRgba.r},${currentRgba.g},${currentRgba.b},1) 100%), repeating-conic-gradient(#ccc 0% 25%, #fff 0% 50%) 50% / 8px 8px`
                }}
              >
                <div
                  className="absolute top-0 w-3.5 h-3.5 rounded-full bg-white border border-gray-400 shadow-md transform -translate-x-1/2"
                  style={{ left: `${hsva.a * 100}%` }}
                />
              </div>
            </div>
          )}

          {/* Presets */}
          <div className="flex flex-col gap-1.5 border-t border-border-color/30 pt-2">
            <span className="text-[10px] text-text-muted font-medium uppercase">Paleta</span>
            <div className="grid grid-cols-5 gap-1.5">
              {presets.map((preset, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => onChange(preset)}
                  className="h-6 w-full rounded-md border border-border-color/30 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  style={{ backgroundColor: preset }}
                  title={preset}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
