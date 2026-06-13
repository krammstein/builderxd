import { default as React } from 'react';
interface NumberStepperProps {
    value: number | string;
    onChange: (value: string) => void;
    min?: number;
    max?: number;
    step?: number;
    unit?: string;
    allowedUnits?: string[];
    disabled?: boolean;
}
export declare const NumberStepper: React.FC<NumberStepperProps>;
export {};
