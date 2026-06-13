import { default as React } from 'react';
type Theme = 'light' | 'dark';
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}
export declare const ThemeProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useTheme: () => ThemeContextType;
export {};
