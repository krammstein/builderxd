import { default as React } from 'react';
interface VisibilityToggleProps {
    desktop: boolean;
    mobile: boolean;
    onChange: (desktop: boolean, mobile: boolean) => void;
    disabled?: boolean;
}
export declare const VisibilityToggle: React.FC<VisibilityToggleProps>;
export {};
