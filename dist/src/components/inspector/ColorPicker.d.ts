import { default as React } from 'react';
interface ColorPickerProps {
    value: string;
    onChange: (color: string) => void;
    allowAlpha?: boolean;
    presets?: string[];
    disabled?: boolean;
}
export declare const ColorPicker: React.FC<ColorPickerProps>;
export {};
