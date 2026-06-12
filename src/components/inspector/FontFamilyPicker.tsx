import React, { useState, useEffect } from 'react';
import { CustomSelect } from './CustomSelect';
import type { SelectOption } from './CustomSelect';
import { Search } from 'lucide-react';

interface FontFamilyPickerProps {
  value: string;
  onChange: (font: string) => void;
  disabled?: boolean;
  googleFonts?: string[];
}

const WEB_SAFE_FONTS = [
  'Arial',
  'Georgia',
  'Verdana',
  'Tahoma',
  'Times New Roman',
  'Courier New',
  'Trebuchet MS',
];

const DEFAULT_GOOGLE_FONTS = [
  'Inter',
  'Roboto',
  'Outfit',
  'Poppins',
  'Lato',
  'Montserrat',
  'Open Sans',
  'Nunito',
  'Raleway',
  'Playfair Display',
  'Merriweather',
  'Lora',
  'Oswald',
  'Roboto Condensed',
  'Source Sans Pro',
  'PT Sans',
  'Noto Sans',
  'Rubik',
  'Kanit',
  'Work Sans',
  'Quicksand',
];

export const FontFamilyPicker: React.FC<FontFamilyPickerProps> = ({
  value,
  onChange,
  disabled = false,
  googleFonts,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const activeGoogleFonts = googleFonts || DEFAULT_GOOGLE_FONTS;

  // Dynamically load Google Fonts stylesheet so the dropdown previews render correctly
  useEffect(() => {
    if (activeGoogleFonts.length === 0) return;
    const linkId = 'gfonts-picker-preview';
    let link = document.getElementById(linkId) as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.id = linkId;
      link.rel = 'stylesheet';
      document.head.appendChild(link);
    }
    const fontFamilies = activeGoogleFonts.map(f => f.replace(/\s+/g, '+')).join('|');
    link.href = `https://fonts.googleapis.com/css?family=${fontFamilies}&display=swap`;
  }, [activeGoogleFonts]);

  const allFonts = [
    ...WEB_SAFE_FONTS.map(f => ({ label: f, value: f, group: 'Web-safe' })),
    ...activeGoogleFonts.map(f => ({ label: f, value: f, group: 'Google Fonts' })),
  ];

  const filteredFonts = allFonts.filter(f =>
    f.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectOptions: SelectOption[] = filteredFonts.map(f => ({
    label: f.label,
    value: f.value,
    previewStyle: { fontFamily: f.value },
  }));

  const renderOption = (opt: SelectOption) => {
    return (
      <span style={{ fontFamily: opt.value }} className="text-xs">
        {opt.label}
      </span>
    );
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="flex items-center border border-border-color rounded-md px-2 py-1 bg-bg-hover">
        <Search size={14} className="text-text-muted mr-1 shrink-0" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          disabled={disabled}
          placeholder="Buscar fuente..."
          className="bg-transparent border-none text-text-primary text-xs outline-none w-full"
          id="font-search"
        />
      </div>
      <CustomSelect
        value={value}
        options={selectOptions.length > 0 ? selectOptions : [{ label: value, value }]}
        onChange={onChange}
        disabled={disabled}
        renderOption={renderOption}
      />
    </div>
  );
};

