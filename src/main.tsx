import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

const mockFileManagerProviders = [
  {
    id: 'google-drive',
    name: 'Google Drive',
    icon: 'google-drive',
    authType: 'oauth' as const,
    onAuth: async () => {
      alert('Autenticado en Google Drive con éxito.');
    },
    onBrowse: async (path?: string) => {
      console.log('Browsing path:', path);
      await new Promise((resolve) => setTimeout(resolve, 800));
      
      if (!path || path === '/' || path === '') {
        return [
          { id: '1', name: 'Templates', type: 'dir' as const },
          { id: '2', name: 'Images', type: 'dir' as const },
          { id: '3', name: 'logo.png', type: 'file' as const }
        ];
      }
      if (path.includes('Templates')) {
        return [
          {
            id: '4',
            name: 'newsletter-2026.json',
            type: 'file' as const,
            content: JSON.stringify([
              {
                id: 'sec-1',
                type: 'section',
                properties: { backgroundColor: '#4F46E5', padding: '30px 10px' },
                children: [
                  {
                    id: 'col-1-1',
                    type: 'column',
                    properties: { width: '100%', padding: '10px' },
                    children: [
                      {
                        id: 'txt-1-1-1',
                        type: 'text',
                        properties: {
                          content: '<h1 style="margin: 0; font-size: 26px; color: #ffffff; text-align: center;">BOLETÍN MENSUAL</h1>',
                          color: '#ffffff',
                          fontSize: '18px',
                          align: 'center',
                          padding: '10px'
                        }
                      }
                    ]
                  }
                ]
              }
            ])
          }
        ];
      }
      if (path.includes('Images')) {
        return [
          { id: '5', name: 'banner-hero.jpg', type: 'file' as const },
          { id: '6', name: 'avatar-user.png', type: 'file' as const }
        ];
      }
      return [];
    },
    onUpload: async (file: File, path?: string) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return `https://storage.googleapis.com/builderxd-bucket${path || ''}/${file.name}`;
    }
  }
];

const mockESPIntegrations = [
  {
    id: 'mailchimp',
    name: 'Mailchimp',
    onPush: async (html: string, mjml: string) => {
      console.log('Pushing to Mailchimp:', { html, mjml });
      await new Promise((resolve) => setTimeout(resolve, 1500));
      return { success: true };
    },
    onPull: async (templateId: string) => {
      console.log('Pulling template from Mailchimp:', templateId);
      await new Promise((resolve) => setTimeout(resolve, 1200));
      return {
        html: '<div>Pull content</div>',
        nodes: [
          {
            id: 'sec-pulled',
            type: 'section',
            properties: { backgroundColor: '#10B981', padding: '25px 10px' },
            children: [
              {
                id: 'col-pulled-1',
                type: 'column',
                properties: { width: '100%', padding: '10px' },
                children: [
                  {
                    id: 'txt-pulled-1-1',
                    type: 'text',
                    properties: {
                      content: '<h2 style="margin:0; text-align:center; color:#ffffff;">Plantilla Importada (' + templateId + ')</h2><p style="margin:5px 0 0; text-align:center; color:#ffffff;">Cargada con éxito desde Mailchimp</p>',
                      color: '#ffffff',
                      fontSize: '16px',
                      align: 'center',
                      padding: '10px'
                    }
                  }
                ]
              }
            ]
          }
        ]
      };
    }
  }
];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <App
          fileManagerProviders={mockFileManagerProviders}
          espIntegrations={mockESPIntegrations}
        />
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);


