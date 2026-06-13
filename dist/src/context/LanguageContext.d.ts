import { default as React } from 'react';
import { Language, TranslationDict } from '../types';
interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: keyof TranslationDict) => string;
}
export declare const LanguageProvider: React.FC<{
    children: React.ReactNode;
    initialLang?: Language;
}>;
export declare const useTranslation: () => LanguageContextType;
export {};
