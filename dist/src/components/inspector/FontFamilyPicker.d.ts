import { default as React } from 'react';
interface FontFamilyPickerProps {
    value: string;
    onChange: (font: string) => void;
    disabled?: boolean;
    googleFonts?: string[];
}
export declare const FontFamilyPicker: React.FC<FontFamilyPickerProps>;
export {};
