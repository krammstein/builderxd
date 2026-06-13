import { BlockNode, GlobalSettings } from '../types';
export declare const compileToMJML: (nodes: BlockNode[], settings?: GlobalSettings) => string;
export declare const compileToHTML: (nodes: BlockNode[], selectedId?: string | null, isMobile?: boolean, settings?: GlobalSettings) => string;
