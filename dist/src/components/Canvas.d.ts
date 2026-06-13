import { default as React } from 'react';
import { DeviceMode, BlockType } from '../types';
interface CanvasProps {
    htmlContent: string;
    deviceMode: DeviceMode;
    onSelectNode: (id: string | null) => void;
    onDropElement?: (blockType: BlockType, targetId: string | null) => void;
    onDeleteNode?: (id: string) => void;
    onCloneNode?: (id: string) => void;
    onUpdateNodeContent?: (id: string, content: string, propName?: string) => void;
    onUpdateNodeProperties?: (id: string, properties: Record<string, any>) => void;
    onDoubleClickImage?: (id: string) => void;
}
export declare const Canvas: React.FC<CanvasProps>;
export {};
