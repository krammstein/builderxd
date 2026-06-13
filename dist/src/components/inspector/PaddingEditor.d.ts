import { default as React } from 'react';
interface PaddingEditorProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}
export declare const PaddingEditor: React.FC<PaddingEditorProps>;
export {};
