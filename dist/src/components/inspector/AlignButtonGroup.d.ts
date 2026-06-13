import { default as React } from 'react';
interface AlignButtonGroupProps {
    value: 'left' | 'center' | 'right' | 'justify';
    options?: Array<'left' | 'center' | 'right' | 'justify'>;
    onChange: (align: 'left' | 'center' | 'right' | 'justify') => void;
    disabled?: boolean;
}
export declare const AlignButtonGroup: React.FC<AlignButtonGroupProps>;
export {};
