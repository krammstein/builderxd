import React from 'react';
import {
  Type,
  Image,
  Square,
  Minus,
  MoveVertical,
  Share2,
  Layout,
  Columns,
  Video,
  Code,
  Clock,
  Menu,
  Images,
  Star,
  FileText,
  User,
  ShoppingBag
} from 'lucide-react';
import type { BlockType, TemplateMode } from '../types';

export interface ComponentConfig {
  type: BlockType;
  label: string;
  icon: React.ReactNode;
  allowedModes: TemplateMode[];
}

export const componentRegistry: ComponentConfig[] = [
  { type: 'section', label: 'Sección', icon: <Layout size={24} />, allowedModes: ['mjml'] },
  { type: 'column', label: 'Columna', icon: <Columns size={24} />, allowedModes: ['mjml'] },
  { type: 'heading', label: 'Título', icon: <Type size={24} />, allowedModes: ['html', 'mjml'] },
  { type: 'paragraph', label: 'Párrafo', icon: <FileText size={24} />, allowedModes: ['html', 'mjml'] },
  { type: 'text', label: 'Texto Libre', icon: <Type size={24} />, allowedModes: ['html', 'mjml'] },
  { type: 'image', label: 'Imagen', icon: <Image size={24} />, allowedModes: ['html', 'mjml'] },
  { type: 'button', label: 'Botón', icon: <Square size={24} />, allowedModes: ['html', 'mjml'] },
  { type: 'divider', label: 'Divisor', icon: <Minus size={24} />, allowedModes: ['html', 'mjml'] },
  { type: 'spacer', label: 'Espaciador', icon: <MoveVertical size={24} />, allowedModes: ['html', 'mjml'] },
  { type: 'social', label: 'Redes', icon: <Share2 size={24} />, allowedModes: ['html', 'mjml'] },
  { type: 'video', label: 'Vídeo', icon: <Video size={24} />, allowedModes: ['html', 'mjml'] },
  { type: 'custom_html', label: 'HTML', icon: <Code size={24} />, allowedModes: ['html', 'mjml'] },
  { type: 'countdown', label: 'Contador', icon: <Clock size={24} />, allowedModes: ['mjml'] },
  { type: 'accordion', label: 'Acordeón', icon: <Menu size={24} />, allowedModes: ['mjml'] },
  { type: 'carousel', label: 'Carrusel', icon: <Images size={24} />, allowedModes: ['mjml'] },
  { type: 'icon', label: 'Icono', icon: <Star size={24} />, allowedModes: ['html', 'mjml'] },
  { type: 'nav_menu', label: 'Menú Nav', icon: <Menu size={24} />, allowedModes: ['html', 'mjml'] },
  { type: 'image_text', label: 'Img + Texto', icon: <FileText size={24} />, allowedModes: ['html', 'mjml'] },
  { type: 'product_card', label: 'Producto', icon: <ShoppingBag size={24} />, allowedModes: ['html', 'mjml'] },
  { type: 'quote', label: 'Cita', icon: <User size={24} />, allowedModes: ['html', 'mjml'] }
];
