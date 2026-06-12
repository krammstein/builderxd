import React, { createContext, useContext, useState } from 'react';
import type { Language, TranslationDict } from '../types';


const translations: Record<Language, TranslationDict> = {
  es: {
    title: 'BuilderXD',
    mode: 'Modo de Edición',
    responsive: 'Vista Adaptable',
    import: 'Importar',
    export: 'Exportar',
    sendTest: 'Envío de Prueba',
    undo: 'Deshacer',
    redo: 'Rehacer',
    components: 'Componentes',
    layers: 'Árbol de Capas',
    properties: 'Propiedades',
    mobileOverrides: 'Ajustes Móvil',
    codeView: 'Consola de Código',
    gmailWarning: '⚠️ ¡Atención! El HTML supera los 102 KB. Gmail recortará este correo.',
    gmailOk: '✅ Tamaño de HTML optimizado (< 102 KB). Seguro para Gmail.',
    addBlock: 'Agregar bloque',
    deleteBlock: 'Eliminar',
    moveUp: 'Subir',
    moveDown: 'Bajar',
    themeLight: 'Claro',
    themeDark: 'Oscuro',
    noElementSelected: 'Selecciona un elemento para editar sus propiedades',
    textProperties: 'Propiedades de Texto',
    buttonProperties: 'Propiedades de Botón',
    imageProperties: 'Propiedades de Imagen',
    spacingProperties: 'Espaciado y Márgenes',
    generalSettings: 'Ajustes Generales',
    content: 'Contenido',
    color: 'Color de texto',
    backgroundColor: 'Color de fondo',
    fontSize: 'Tamaño de fuente',
    align: 'Alineación',
    padding: 'Relleno (Padding)',
    url: 'Enlace (URL)',
    altText: 'Texto alternativo (Alt)',
    borderRadius: 'Borde redondeado',
    thickness: 'Grosor',
    height: 'Altura',
    searchComponents: 'Buscar componentes...',
    testEmailSent: 'Correo de prueba enviado con éxito a:',
    enterTestEmails: 'Ingresa los correos de prueba (separados por coma):',
    close: 'Cerrar',
    send: 'Enviar',
    exportSuccess: 'Plantilla exportada correctamente.',
    importTitle: 'Importar plantilla (JSON / MJML)',
    importPlaceholder: 'Pega el JSON de la estructura o el código MJML aquí...',
    load: 'Cargar',
    invalidJSON: 'El código JSON ingresado no es válido.',
    templateType: 'Tipo de plantilla',
    componentText: 'Texto Enriquecido',
    componentImage: 'Imagen',
    componentButton: 'Botón de Acción',
    componentDivider: 'Línea Divisora',
    componentSpacer: 'Espaciador',
    componentSocial: 'Redes Sociales',
    componentSection: 'Sección',
    componentColumn: 'Columna'
  },
  en: {
    title: 'BuilderXD',
    mode: 'Editing Mode',
    responsive: 'Responsive View',
    import: 'Import',
    export: 'Export',
    sendTest: 'Send Test',
    undo: 'Undo',
    redo: 'Redo',
    components: 'Components',
    layers: 'Layers Tree',
    properties: 'Properties',
    mobileOverrides: 'Mobile Settings',
    codeView: 'Code Console',
    gmailWarning: '⚠️ Warning! HTML size exceeds 102 KB. Gmail will clip this email.',
    gmailOk: '✅ HTML size optimized (< 102 KB). Safe for Gmail.',
    addBlock: 'Add block',
    deleteBlock: 'Delete',
    moveUp: 'Move Up',
    moveDown: 'Move Down',
    themeLight: 'Light',
    themeDark: 'Dark',
    noElementSelected: 'Select an element to edit its properties',
    textProperties: 'Text Properties',
    buttonProperties: 'Button Properties',
    imageProperties: 'Image Properties',
    spacingProperties: 'Spacing & Padding',
    generalSettings: 'General Settings',
    content: 'Content',
    color: 'Text Color',
    backgroundColor: 'Background Color',
    fontSize: 'Font Size',
    align: 'Alignment',
    padding: 'Padding',
    url: 'Link (URL)',
    altText: 'Alternative text (Alt)',
    borderRadius: 'Border Radius',
    thickness: 'Thickness',
    height: 'Height',
    searchComponents: 'Search components...',
    testEmailSent: 'Test email sent successfully to:',
    enterTestEmails: 'Enter test emails (comma separated):',
    close: 'Close',
    send: 'Send',
    exportSuccess: 'Template exported successfully.',
    importTitle: 'Import Template (JSON / MJML)',
    importPlaceholder: 'Paste structure JSON or MJML code here...',
    load: 'Load',
    invalidJSON: 'The entered JSON code is invalid.',
    templateType: 'Template Type',
    componentText: 'Rich Text',
    componentImage: 'Image Element',
    componentButton: 'Action Button',
    componentDivider: 'Divider Line',
    componentSpacer: 'Spacer Block',
    componentSocial: 'Social Networks',
    componentSection: 'Section Container',
    componentColumn: 'Column Layout'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationDict) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('builderxd_lang');
    return (saved === 'es' || saved === 'en' ? saved : 'es') as Language;
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('builderxd_lang', lang);
  };

  const t = (key: keyof TranslationDict): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
