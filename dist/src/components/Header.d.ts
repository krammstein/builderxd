import { default as React } from 'react';
import { DeviceMode, FileManagerProvider, ESPIntegration, UIConfig } from '../types';
interface HeaderProps {
    deviceMode: DeviceMode;
    setDeviceMode: (mode: DeviceMode) => void;
    canUndo: boolean;
    canRedo: boolean;
    onUndo: () => void;
    onRedo: () => void;
    onImportClick: () => void;
    onExportClick: () => void;
    onSendTestClick: () => void;
    fileManagerProviders?: FileManagerProvider[];
    espIntegrations?: ESPIntegration[];
    onFileManagerClick?: (provider: FileManagerProvider) => void;
    onESPClick?: (integration: ESPIntegration) => void;
    uiConfig?: UIConfig;
}
export declare const Header: React.FC<HeaderProps>;
export {};
