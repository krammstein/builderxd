import { describe, it, expect } from 'vitest';
import { compileToMJML, compileToHTML } from './compiler';
import type { BlockNode } from '../types';

describe('Compiler Unit Tests', () => {
  const dummyNode: BlockNode = {
    id: 'test-1',
    type: 'text',
    properties: {
      content: 'Hello World',
      color: '#ff0000',
      fontFamily: 'Roboto'
    },
    mobileProperties: {
      color: '#00ff00'
    }
  };

  const nestedNodes: BlockNode[] = [
    {
      id: 'sec-1',
      type: 'section',
      properties: { backgroundColor: '#ffffff' },
      children: [
        {
          id: 'col-1',
          type: 'column',
          properties: { width: '100%' },
          children: [dummyNode]
        }
      ]
    }
  ];

  const globalSettings = {
    title: 'Special Promo',
    previewText: 'Hurry up! Special promo inside!',
    globalFontFamily: 'Open Sans',
    globalBackgroundColor: '#eeeeee',
    globalTextColor: '#333333',
    breakpoint: '480px'
  };

  describe('compileToMJML', () => {
    it('should generate empty base MJML structure when no nodes are passed', () => {
      const result = compileToMJML([]);
      expect(result).toContain('<mjml>');
      expect(result).toContain('<mj-head>');
      expect(result).toContain('<mj-body>');
      expect(result).toContain('</mjml>');
    });

    it('should inject Google Fonts in mj-head if used in nodes', () => {
      const result = compileToMJML([dummyNode]);
      expect(result).toContain('<mj-font name="Roboto" href="https://fonts.googleapis.com/css?family=Roboto" />');
    });

    it('should compile basic nodes into MJML tags', () => {
      const result = compileToMJML([dummyNode]);
      expect(result).toContain('<mj-text');
      expect(result).toContain('color="#ff0000"');
      expect(result).toContain('font-family="Roboto"');
      expect(result).toContain('>Hello World</mj-text>');
    });

    it('should correctly handle nested children rendering', () => {
      const result = compileToMJML(nestedNodes);
      expect(result).toContain('<mj-section background-color="#ffffff"');
      expect(result).toContain('<mj-column width="100%"');
      expect(result).toContain('>Hello World</mj-text>');
    });

    it('Módulo D: should inject data-b-type and data-b-props semantic attributes in MJML', () => {
      const result = compileToMJML([dummyNode]);
      expect(result).toContain('data-b-type="text"');
      expect(result).toContain('data-b-props="{&quot;content&quot;:&quot;Hello World&quot;,&quot;color&quot;:&quot;#ff0000&quot;,&quot;fontFamily&quot;:&quot;Roboto&quot;}"');
    });

    it('Global Settings: should inject <mj-title>, <mj-preview>, fonts and backgrounds when provided', () => {
      const result = compileToMJML([dummyNode], globalSettings);
      expect(result).toContain('<mj-title>Special Promo</mj-title>');
      expect(result).toContain('<mj-preview>Hurry up! Special promo inside!</mj-preview>');
      expect(result).toContain('<mj-font name="Open Sans"');
      expect(result).toContain('<mj-breakpoint width="480px" />');
      expect(result).toContain('font-family="Open Sans"');
      expect(result).toContain('color="#333333"');
      expect(result).toContain('<mj-body background-color="#eeeeee">');
    });
  });

  describe('compileToHTML', () => {
    it('should generate a valid HTML5 document', () => {
      const result = compileToHTML([], null, false);
      expect(result).toContain('<!DOCTYPE html>');
      expect(result).toContain('<html lang="es">');
      expect(result).toContain('</body>');
    });

    it('should inject Google Fonts correctly in HTML head', () => {
      const result = compileToHTML([dummyNode], null, false);
      expect(result).toContain('<link href="https://fonts.googleapis.com/css2?family=Roboto');
    });

    it('should apply default desktop styles', () => {
      const result = compileToHTML([dummyNode], null, false);
      expect(result).toContain('color: #ff0000;');
    });

    it('should apply mobile styles override when isMobile is true', () => {
      const result = compileToHTML([dummyNode], null, true);
      expect(result).toContain('color: #00ff00;');
    });

    it('should mark the selected element with a specific CSS class', () => {
      const result = compileToHTML([dummyNode], 'test-1', false);
      expect(result).toContain('builder-element-selected');
    });

    it('Módulo D: should inject data-b-type and data-b-props in HTML attributes', () => {
      const result = compileToHTML([dummyNode], null, false);
      expect(result).toContain('data-b-type="text"');
      expect(result).toContain('data-b-props="{&quot;content&quot;:&quot;Hello World&quot;,&quot;color&quot;:&quot;#ff0000&quot;,&quot;fontFamily&quot;:&quot;Roboto&quot;}"');
    });

    it('Global Settings: should apply title, preview text and fonts when provided', () => {
      const result = compileToHTML([dummyNode], null, false, globalSettings);
      expect(result).toContain('<title>Special Promo</title>');
      expect(result).toContain('<div style="display: none; max-height: 0px; overflow: hidden;">Hurry up! Special promo inside!</div>');
      expect(result).toContain('<link href="https://fonts.googleapis.com/css2?family=Open+Sans');
      expect(result).toContain('background-color: #eeeeee;');
      expect(result).toContain('font-family: Open Sans, system-ui, sans-serif;');
      expect(result).toContain('color: #333333;');
    });
  });
});
