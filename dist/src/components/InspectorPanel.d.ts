import { default as React } from 'react';
import { BlockNode } from '../types';
interface InspectorPanelProps {
    selectedNode: BlockNode | null;
    onUpdateProperties: (id: string, properties: Record<string, any>, isMobile: boolean) => void;
    onDeleteNode: (id: string) => void;
    readOnly?: boolean;
    onOpenAssetManager?: (currentUrl: string, onSelect: (url: string) => void) => void;
    onOpenVideoManager?: (currentUrl: string, onSelect: (url: string) => void) => void;
    googleFonts?: string[];
}
export declare const InspectorPanel: React.FC<InspectorPanelProps>;
export {};
