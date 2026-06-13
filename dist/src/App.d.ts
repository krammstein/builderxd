import { default as React } from 'react';
import { BlockNode, FileManagerProvider, ESPIntegration, Language } from './types';
export interface AppProps {
    initialNodes?: BlockNode[];
    onSave?: (data: {
        nodes: BlockNode[];
        mjml: string;
        html: string;
    }) => void;
    onExport?: (data: {
        nodes: BlockNode[];
        mjml: string;
        html: string;
    }) => void;
    onTemplateChange?: (mjml: string, html: string) => void;
    /** Locks the editor language. When not set, language is controlled by the built-in toggle and localStorage. */
    lang?: Language;
    /** When defined, locks the editor to a single output format and hides the HTML/MJML switcher */
    mode?: 'mjml' | 'html';
    defaultMode?: 'mjml' | 'html';
    readOnly?: boolean;
    uiConfig?: {
        headerColor?: string;
        logoUrl?: string;
        showExportBtn?: boolean;
        showImport?: boolean;
        showExport?: boolean;
        showSendTest?: boolean;
        showThemeToggle?: boolean;
        showLanguageToggle?: boolean;
        showDeviceToggle?: boolean;
        showHistoryToggle?: boolean;
        showClearCanvas?: boolean;
        showTemplateModeToggle?: boolean;
        confirmClearPrompt?: string;
    };
    fileManagerProviders?: FileManagerProvider[];
    espIntegrations?: ESPIntegration[];
    theme?: {
        darkMode?: boolean;
        primaryColor?: string;
    };
    assetManagerComponent?: React.ReactNode;
    videoManagerComponent?: React.ReactNode;
    /** Reemplaza el modal de archivos nativo con uno personalizado (ej. EnigmaSuite) */
    fileManagerComponent?: React.ReactNode;
    googleFonts?: string[];
    ref?: React.Ref<any>;
}
export interface BuilderRef {
    getNodes: () => BlockNode[];
    setNodes: (nodes: BlockNode[]) => void;
    getHTML: () => string;
    getMJML: () => string;
    toggleDarkMode: () => void;
    importTemplate: (code: string, mode: 'mjml' | 'html') => void;
    exportTemplate: (format: 'mjml' | 'html' | 'zip') => Promise<string>;
    sendTest: (emails: string[]) => void;
}
declare const App: React.ForwardRefExoticComponent<Omit<AppProps, "ref"> & React.RefAttributes<BuilderRef>>;
export default App;
