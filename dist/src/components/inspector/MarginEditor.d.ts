import { default as React } from 'react';
interface MarginEditorProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}
export declare const MarginEditor: React.FC<MarginEditorProps>;
export {};
