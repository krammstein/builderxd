import { default as React } from 'react';
interface LexicalEditorProps {
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
}
export declare const LexicalEditor: React.FC<LexicalEditorProps>;
export {};
