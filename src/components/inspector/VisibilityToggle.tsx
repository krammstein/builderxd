import React from 'react';
import { Monitor, Smartphone } from 'lucide-react';

interface VisibilityToggleProps {
  desktop: boolean;
  mobile: boolean;
  onChange: (desktop: boolean, mobile: boolean) => void;
  disabled?: boolean;
}

export const VisibilityToggle: React.FC<VisibilityToggleProps> = ({
  desktop,
  mobile,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="flex flex-col gap-2 bg-bg-hover border border-border-color rounded-lg p-3 w-full">
      <span className="text-[10px] text-text-muted font-bold uppercase">Visibilidad por Dispositivo</span>
      <div className="flex gap-2">
        <button
          type="button"
          disabled={disabled}
          onClick={() => onChange(!desktop, mobile)}
          className={`flex-1 flex items-center justify-center gap-1.5 p-2 rounded-md border text-xs font-semibold cursor-pointer transition-all ${
            desktop
              ? 'bg-primary/10 text-primary border-primary/20'
              : 'bg-bg-panel text-text-muted border-border-color'
          }`}
          id="toggle-vis-desktop"
        >
          <Monitor size={14} />
          <span>Escritorio: {desktop ? 'ON' : 'OFF'}</span>
        </button>

        <button
          type="button"
          disabled={disabled}
          onClick={() => onChange(desktop, !mobile)}
          className={`flex-1 flex items-center justify-center gap-1.5 p-2 rounded-md border text-xs font-semibold cursor-pointer transition-all ${
            mobile
              ? 'bg-primary/10 text-primary border-primary/20'
              : 'bg-bg-panel text-text-muted border-border-color'
          }`}
          id="toggle-vis-mobile"
        >
          <Smartphone size={14} />
          <span>Móvil: {mobile ? 'ON' : 'OFF'}</span>
        </button>
      </div>
    </div>
  );
};
