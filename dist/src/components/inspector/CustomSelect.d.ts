import { default as React } from 'react';
export interface SelectOption {
    label: string;
    value: string;
    previewClass?: string;
    previewStyle?: React.CSSProperties;
}
interface CustomSelectProps {
    value: string;
    options: SelectOption[];
    onChange: (value: string) => void;
    disabled?: boolean;
    renderOption?: (option: SelectOption) => React.ReactNode;
}
export declare const CustomSelect: React.FC<CustomSelectProps>;
export {};
