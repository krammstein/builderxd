import { default as React } from 'react';
interface DateTimePickerProps {
    value: string;
    onChange: (value: string) => void;
    showTime?: boolean;
    minDate?: string;
    disabled?: boolean;
}
export declare const DateTimePicker: React.FC<DateTimePickerProps>;
export {};
