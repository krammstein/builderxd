import { default as React } from 'react';
interface LinkInputProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}
export declare const LinkInput: React.FC<LinkInputProps>;
export {};
