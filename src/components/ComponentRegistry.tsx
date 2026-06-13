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
  ShoppingBag,
  Table,
  Box,
  LayoutTemplate,
  Sliders,
  Grid,
  AlignHorizontalSpaceBetween,
  LayoutGrid
} from 'lucide-react';
import type { BlockType, TemplateMode, TranslationDict } from '../types';

export interface ComponentConfig {
  type: BlockType;
  label: string;
  icon: React.ReactNode;
  allowedModes: TemplateMode[];
}

/** Returns the component registry with localized labels.
 *  Pass the `t` function from `useTranslation()` to get translated labels. */
export const getComponentRegistry = (t: (key: keyof TranslationDict) => string): ComponentConfig[] => [
  { type: 'section',      label: t('componentSection'),     icon: <Layout size={24} />,                       allowedModes: ['mjml'] },
  { type: 'column',       label: t('componentColumn'),      icon: <Columns size={24} />,                      allowedModes: ['mjml'] },
  { type: 'heading',      label: t('componentHeading'),     icon: <Type size={24} />,                         allowedModes: ['html', 'mjml'] },
  { type: 'paragraph',    label: t('componentParagraph'),   icon: <FileText size={24} />,                     allowedModes: ['html', 'mjml'] },
  { type: 'text',         label: t('componentText'),        icon: <Type size={24} />,                         allowedModes: ['html', 'mjml'] },
  { type: 'image',        label: t('componentImage'),       icon: <Image size={24} />,                        allowedModes: ['html', 'mjml'] },
  { type: 'button',       label: t('componentButton'),      icon: <Square size={24} />,                       allowedModes: ['html', 'mjml'] },
  { type: 'divider',      label: t('componentDivider'),     icon: <Minus size={24} />,                        allowedModes: ['html', 'mjml'] },
  { type: 'spacer',       label: t('componentSpacer'),      icon: <MoveVertical size={24} />,                 allowedModes: ['html', 'mjml'] },
  { type: 'social',       label: t('componentSocial'),      icon: <Share2 size={24} />,                       allowedModes: ['html', 'mjml'] },
  { type: 'video',        label: t('componentVideo'),       icon: <Video size={24} />,                        allowedModes: ['html', 'mjml'] },
  { type: 'custom_html',  label: t('componentCustomHtml'),  icon: <Code size={24} />,                         allowedModes: ['html', 'mjml'] },
  { type: 'countdown',    label: t('componentCountdown'),   icon: <Clock size={24} />,                        allowedModes: ['mjml'] },
  { type: 'accordion',    label: t('componentAccordion'),   icon: <Menu size={24} />,                         allowedModes: ['mjml'] },
  { type: 'carousel',     label: t('componentCarousel'),    icon: <Images size={24} />,                       allowedModes: ['mjml'] },
  { type: 'icon',         label: t('componentIcon'),        icon: <Star size={24} />,                         allowedModes: ['html', 'mjml'] },
  { type: 'nav_menu',     label: t('componentNavMenu'),     icon: <Menu size={24} />,                         allowedModes: ['html', 'mjml'] },
  { type: 'image_text',   label: t('componentImageText'),   icon: <FileText size={24} />,                     allowedModes: ['html', 'mjml'] },
  { type: 'product_card', label: t('componentProductCard'), icon: <ShoppingBag size={24} />,                  allowedModes: ['html', 'mjml'] },
  { type: 'quote',        label: t('componentQuote'),       icon: <User size={24} />,                         allowedModes: ['html', 'mjml'] },
  { type: 'table',        label: t('componentTable'),       icon: <Table size={24} />,                        allowedModes: ['html'] },
  { type: 'wrapper',      label: t('componentWrapper'),     icon: <Box size={24} />,                          allowedModes: ['mjml'] },
  { type: 'group',        label: t('componentGroup'),       icon: <Columns size={24} />,                      allowedModes: ['mjml'] },
  { type: 'hero',         label: t('componentHero'),        icon: <LayoutTemplate size={24} />,               allowedModes: ['mjml'] },
  { type: 'slider',       label: t('componentSlider'),      icon: <Sliders size={24} />,                      allowedModes: ['html'] },
  { type: 'gallery',      label: t('componentGallery'),     icon: <Grid size={24} />,                         allowedModes: ['html'] },
  { type: 'flex_layout',  label: t('componentFlexLayout'),  icon: <AlignHorizontalSpaceBetween size={24} />,  allowedModes: ['html'] },
  { type: 'grid_layout',  label: t('componentGridLayout'),  icon: <LayoutGrid size={24} />,                   allowedModes: ['html'] },
];

/** @deprecated Use getComponentRegistry(t) instead */
export const componentRegistry = getComponentRegistry((key) => key as string);
