export type BlockType =
  | 'section'
  | 'column'
  | 'text'
  | 'image'
  | 'button'
  | 'divider'
  | 'spacer'
  | 'social'
  | 'video'
  | 'custom_html'
  | 'countdown'
  | 'accordion'
  | 'carousel'
  | 'icon'
  | 'nav_menu'
  | 'image_text'
  | 'product_card'
  | 'quote';

export interface BlockNode {
  id: string;
  type: BlockType;
  properties: Record<string, any>;
  mobileProperties?: Record<string, any>;
  children?: BlockNode[];
}

export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export type Language = 'es' | 'en';

export interface TranslationDict {
  title: string;
  mode: string;
  responsive: string;
  import: string;
  export: string;
  sendTest: string;
  undo: string;
  redo: string;
  components: string;
  layers: string;
  properties: string;
  mobileOverrides: string;
  codeView: string;
  gmailWarning: string;
  gmailOk: string;
  addBlock: string;
  deleteBlock: string;
  moveUp: string;
  moveDown: string;
  themeLight: string;
  themeDark: string;
  noElementSelected: string;
  textProperties: string;
  buttonProperties: string;
  imageProperties: string;
  spacingProperties: string;
  generalSettings: string;
  content: string;
  color: string;
  backgroundColor: string;
  fontSize: string;
  align: string;
  padding: string;
  url: string;
  altText: string;
  borderRadius: string;
  thickness: string;
  height: string;
  searchComponents: string;
  testEmailSent: string;
  enterTestEmails: string;
  close: string;
  send: string;
  exportSuccess: string;
  importTitle: string;
  importPlaceholder: string;
  load: string;
  invalidJSON: string;
  templateType: string;
  componentText: string;
  componentImage: string;
  componentButton: string;
  componentDivider: string;
  componentSpacer: string;
  componentSocial: string;
  componentSection: string;
  componentColumn: string;
  componentVideo: string;
  componentCustomHtml: string;
  componentCountdown: string;
  componentAccordion: string;
  componentCarousel: string;
}

export interface FileManagerProvider {
  id: string;
  name: string;
  icon?: string;
  authType?: 'oauth' | 'apikey' | 'none';
  onAuth?: () => Promise<void>;
  onBrowse?: (path?: string) => Promise<any>;
  onUpload?: (file: any, path?: string) => Promise<any>;
}

export interface ESPIntegration {
  id: string;
  name: string;
  onPush?: (html: string, mjml: string) => Promise<any>;
  onPull?: (templateId: string) => Promise<any>;
}
