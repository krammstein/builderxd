import { forwardRef } from 'react';
import App from './App';
import type { AppProps } from './App';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ErrorBoundary } from './components/ErrorBoundary';
import type { BlockNode, BlockType, DeviceMode } from './types';
import './index.css';

export type { BlockNode, BlockType, DeviceMode, AppProps };

export const BuilderXD = forwardRef<any, AppProps>((props, ref) => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <App {...props} ref={ref} />
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
});

export default BuilderXD;
