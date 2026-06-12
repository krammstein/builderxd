import React from 'react';
import App from './App';
import type { AppProps } from './App';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import type { BlockNode, BlockType, DeviceMode } from './types';
import './index.css';


export type { BlockNode, BlockType, DeviceMode, AppProps };

export const BuilderXD: React.FC<AppProps> = (props) => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <App {...props} />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default BuilderXD;
