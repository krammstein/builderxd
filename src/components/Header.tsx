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
    <header className="builder-header">
      {/* Title & Brand */}
      <div className="header-brand">
        <div className="brand-logo">
          <Sparkles size={20} className="brand-icon" />
          <h1>{t('title')}</h1>
        </div>
        <span className="branch-badge">dev</span>
      </div>

      {/* Responsive Selector */}
      <div className="header-device-selector">
        <button
          onClick={() => setDeviceMode('desktop')}
          className={`device-btn ${deviceMode === 'desktop' ? 'active' : ''}`}
          title="Desktop"
        >
          <Monitor size={18} />
        </button>
        <button
          onClick={() => setDeviceMode('tablet')}
          className={`device-btn ${deviceMode === 'tablet' ? 'active' : ''}`}
          title="Tablet"
        >
          <Tablet size={18} />
        </button>
        <button
          onClick={() => setDeviceMode('mobile')}
          className={`device-btn ${deviceMode === 'mobile' ? 'active' : ''}`}
          title="Mobile"
        >
          <Smartphone size={18} />
        </button>
      </div>

      {/* Controls & Actions */}
      <div className="header-actions">
        {/* History */}
        <div className="history-group">
          <button
            onClick={onUndo}
            disabled={!canUndo}
            className="action-btn"
            title={t('undo')}
          >
            <Undo2 size={16} />
          </button>
          <button
            onClick={onRedo}
            disabled={!canRedo}
            className="action-btn"
            title={t('redo')}
          >
            <Redo2 size={16} />
          </button>
        </div>

        {/* Multiplayer Avatars (Visual mock) */}
        <div className="multiplayer-avatars">
          <div className="avatar user-1">JD</div>
          <div className="avatar user-2">AL</div>
          <div className="avatar user-more">+1</div>
        </div>

        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="action-btn" title="Toggle Theme">
          {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        {/* Language Selector */}
        <div className="language-selector">
          <Globe size={14} className="globe-icon" />
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="lang-select"
          >
            <option value="es">ES</option>
            <option value="en">EN</option>
          </select>
        </div>

        {/* Operations */}
        <div className="ops-group">
          <button onClick={onImportClick} className="btn btn-secondary">
            <Upload size={14} />
            <span>{t('import')}</span>
          </button>
          <button onClick={onExportClick} className="btn btn-primary">
            <Download size={14} />
            <span>{t('export')}</span>
          </button>
          <button onClick={onSendTestClick} className="btn btn-accent">
            <Send size={14} />
            <span>{t('sendTest')}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
