import { default as React } from 'react';
interface CodeDrawerProps {
    mjmlCode: string;
    htmlCode: string;
    isOpen: boolean;
    onToggle: () => void;
}
export declare const CodeDrawer: React.FC<CodeDrawerProps>;
export {};
