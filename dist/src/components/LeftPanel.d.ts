import { default as React } from 'react';
import { BlockType, BlockNode, UIConfig, TemplateMode } from '../types';
interface LeftPanelProps {
    onAddComponent: (type: BlockType) => void;
    nodes: BlockNode[];
    selectedId: string | null;
    onSelectNode: (id: string | null) => void;
    onDeleteNode: (id: string) => void;
    onMoveNode: (id: string, direction: 'up' | 'down') => void;
    readOnly?: boolean;
    templateMode?: TemplateMode;
    setTemplateMode?: (mode: TemplateMode) => void;
    /** When defined externally via the `mode` prop, the switcher is hidden */
    fixedMode?: 'mjml' | 'html';
    onClearCanvas?: () => void;
    uiConfig?: UIConfig;
}
export declare const LeftPanel: React.FC<LeftPanelProps>;
export {};
