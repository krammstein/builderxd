import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface NumberStepperProps {
  value: number | string;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  disabled?: boolean;
}

export const NumberStepper: React.FC<NumberStepperProps> = ({
  value,
  onChange,
  min = 0,
  max = 1000,
  step = 1,
  unit = '',
  disabled = false,
}) => {
  const numericValue = typeof value === 'number' ? value : parseInt(value) || 0;

  const handleDecrement = () => {
    if (disabled) return;
    const next = Math.max(min, numericValue - step);
    onChange(next);
  };

  const handleIncrement = () => {
    if (disabled) return;
    const next = Math.min(max, numericValue + step);
    onChange(next);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val)) {
      onChange(Math.max(min, Math.min(max, val)));
    } else if (e.target.value === '') {
      onChange(0);
    }
  };

  return (
    <div className="flex items-center border border-border-color rounded-md overflow-hidden bg-bg-hover w-full max-w-[200px]">
      <button
        type="button"
        disabled={disabled || numericValue <= min}
        onClick={handleDecrement}
        className="p-2 px-3 border-none bg-transparent hover:bg-bg-panel text-text-secondary cursor-pointer transition-all disabled:opacity-30 outline-none flex items-center justify-center"
        id="stepper-dec"
      >
        <Minus size={14} />
      </button>
      <input
        type="text"
        value={numericValue}
        onChange={handleInputChange}
        disabled={disabled}
        className="bg-transparent border-none text-text-primary text-center text-xs font-semibold w-full outline-none py-2"
        id="stepper-input"
      />
      {unit && (
        <span className="text-[10px] text-text-muted font-bold select-none pr-2 shrink-0">{unit}</span>
      )}
      <button
        type="button"
        disabled={disabled || numericValue >= max}
        onClick={handleIncrement}
        className="p-2 px-3 border-none bg-transparent hover:bg-bg-panel text-text-secondary cursor-pointer transition-all disabled:opacity-30 outline-none flex items-center justify-center"
        id="stepper-inc"
      >
        <Plus size={14} />
      </button>
    </div>
  );
};
