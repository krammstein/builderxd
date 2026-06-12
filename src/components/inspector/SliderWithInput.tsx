import React from 'react';

interface SliderWithInputProps {
  value: number | string;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  disabled?: boolean;
}

export const SliderWithInput: React.FC<SliderWithInputProps> = ({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  disabled = false,
}) => {
  const numericValue = typeof value === 'number' ? value : parseInt(value) || 0;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
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
      <div className="flex items-center border border-border-color rounded-md bg-bg-hover px-2 py-1 shrink-0 w-16">
        <input
          type="text"
          value={numericValue}
          onChange={handleInputChange}
          disabled={disabled}
          className="bg-transparent border-none text-text-primary text-right text-xs font-semibold w-full outline-none"
          id="slider-num-input"
        />
        {unit && (
          <span className="text-[10px] text-text-muted font-bold select-none ml-1">{unit}</span>
        )}
      </div>
    </div>
  );
};
