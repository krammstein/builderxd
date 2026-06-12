import React from 'react';
import { useTranslation } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import type { DeviceMode, Language } from '../types';
import {
  Monitor,
  Tablet,
  Smartphone,
  Undo2,
  Redo2,
  Download,
  Upload,
  Send,
  Globe,
  Sun,
  Moon,
  Sparkles
} from 'lucide-react';

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
}

export const Header: React.FC<HeaderProps> = ({
  deviceMode,
  setDeviceMode,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onImportClick,
  onExportClick,
  onSendTestClick
}) => {
  const { t, language, setLanguage } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="h-[60px] bg-bg-panel border-b border-border-color flex items-center justify-between px-5 z-50 shadow-sm">
      {/* Title & Brand */}
      <div className="flex items-center gap-2.5">
        <div className="flex items-center gap-2">
          <Sparkles size={20} className="text-primary" />
          <h1 className="text-lg font-bold tracking-tight text-text-primary">{t('title')}</h1>
        </div>
        <span className="bg-primary/15 text-primary font-mono text-[11px] font-semibold px-1.5 py-0.5 rounded uppercase">dev</span>
      </div>

      {/* Responsive Selector */}
      <div className="flex bg-bg-hover p-1 rounded-lg border border-border-color">
        <button
          onClick={() => setDeviceMode('desktop')}
          className={`bg-transparent border-none p-1.5 px-3 rounded-md cursor-pointer flex items-center justify-center transition-all hover:text-text-primary ${
            deviceMode === 'desktop' ? 'bg-bg-panel text-primary shadow-xs border border-border-color/10' : 'text-text-secondary'
          }`}
          title="Desktop"
        >
          <Monitor size={18} />
        </button>
        <button
          onClick={() => setDeviceMode('tablet')}
          className={`bg-transparent border-none p-1.5 px-3 rounded-md cursor-pointer flex items-center justify-center transition-all hover:text-text-primary ${
            deviceMode === 'tablet' ? 'bg-bg-panel text-primary shadow-xs border border-border-color/10' : 'text-text-secondary'
          }`}
          title="Tablet"
        >
          <Tablet size={18} />
        </button>
        <button
          onClick={() => setDeviceMode('mobile')}
          className={`bg-transparent border-none p-1.5 px-3 rounded-md cursor-pointer flex items-center justify-center transition-all hover:text-text-primary ${
            deviceMode === 'mobile' ? 'bg-bg-panel text-primary shadow-xs border border-border-color/10' : 'text-text-secondary'
          }`}
          title="Mobile"
        >
          <Smartphone size={18} />
        </button>
      </div>

      {/* Controls & Actions */}
      <div className="flex items-center gap-4">
        {/* History */}
        <div className="flex border-r border-border-color pr-3 gap-1">
          <button
            onClick={onUndo}
            disabled={!canUndo}
            className="bg-transparent border border-border-color text-text-secondary p-2 rounded-md cursor-pointer flex items-center justify-center transition-all hover:bg-bg-hover hover:text-text-primary disabled:opacity-40 disabled:cursor-not-allowed"
            title={t('undo')}
          >
            <Undo2 size={16} />
          </button>
          <button
            onClick={onRedo}
            disabled={!canRedo}
            className="bg-transparent border border-border-color text-text-secondary p-2 rounded-md cursor-pointer flex items-center justify-center transition-all hover:bg-bg-hover hover:text-text-primary disabled:opacity-40 disabled:cursor-not-allowed"
            title={t('redo')}
          >
            <Redo2 size={16} />
          </button>
        </div>

        {/* Multiplayer Avatars */}
        <div className="flex items-center -space-x-2">
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-bg-panel cursor-default bg-pink-500">JD</div>
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-bg-panel cursor-default bg-cyan-500">AL</div>
          <div className="w-7 h-7 rounded-full flex items-center justify-center text-[8px] font-bold border-2 border-bg-panel cursor-default bg-text-muted text-bg-panel">+1</div>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="bg-transparent border border-border-color text-text-secondary p-2 rounded-md cursor-pointer flex items-center justify-center transition-all hover:bg-bg-hover hover:text-text-primary"
          title="Toggle Theme"
        >
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Language Selector */}
        <div className="flex items-center bg-bg-hover border border-border-color rounded-md p-1 px-2 gap-1">
          <Globe size={14} className="text-text-secondary" />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="bg-transparent border-none text-text-primary text-xs font-semibold cursor-pointer outline-none"
          >
            <option value="es" className="dark:bg-bg-panel">ES</option>
            <option value="en" className="dark:bg-bg-panel">EN</option>
          </select>
        </div>

        {/* Operations */}
        <div className="flex gap-2">
          <button
            onClick={onImportClick}
            className="border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-all bg-bg-hover text-text-primary border border-border-color hover:bg-border-color/50"
          >
            <Upload size={14} />
            <span>{t('import')}</span>
          </button>
          <button
            onClick={onExportClick}
            className="border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-all bg-primary hover:bg-primary-hover text-white"
          >
            <Download size={14} />
            <span>{t('export')}</span>
          </button>
          <button
            onClick={onSendTestClick}
            className="border-none p-2 px-3.5 rounded-md text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-all bg-accent-color text-white hover:opacity-90"
          >
            <Send size={14} />
            <span>{t('sendTest')}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
