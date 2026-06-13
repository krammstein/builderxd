import { default as React } from 'react';
import { BlockType, TemplateMode, TranslationDict } from '../types';
export interface ComponentConfig {
    type: BlockType;
    label: string;
    icon: React.ReactNode;
    allowedModes: TemplateMode[];
}
/** Returns the component registry with localized labels.
 *  Pass the `t` function from `useTranslation()` to get translated labels. */
export declare const getComponentRegistry: (t: (key: keyof TranslationDict) => string) => ComponentConfig[];
/** @deprecated Use getComponentRegistry(t) instead */
export declare const componentRegistry: ComponentConfig[];
