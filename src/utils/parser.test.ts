// @vitest-environment jsdom
import { describe, it, expect } from 'vitest';
import { parseTemplateToNodes } from './parser';

describe('Parser Unit Tests', () => {

  describe('Módulo D: Semantic Attributes', () => {
    it('should perfectly reconstruct a block via data-b-type and data-b-props', () => {
      const input = `<mj-section data-b-type="product_card" data-b-props="{&quot;title&quot;:&quot;My Product&quot;,&quot;price&quot;:&quot;$99&quot;}">
        <mj-text>Fallbacks</mj-text>
      </mj-section>`;
      
      const nodes = parseTemplateToNodes(input, 'mjml');
      expect(nodes.length).toBe(1);
      
      const node = nodes[0];
      expect(node.type).toBe('product_card');
      expect(node.properties.title).toBe('My Product');
      expect(node.properties.price).toBe('$99');
    });
  });

  describe('Módulo A: 100% MJML Standard Mapping', () => {
    it('should map <mj-section> and <mj-column> structurally', () => {
      const input = `<mj-section background-color="#000"><mj-column width="50%"></mj-column></mj-section>`;
      const nodes = parseTemplateToNodes(input, 'mjml');
      
      expect(nodes[0].type).toBe('section');
      expect(nodes[0].properties.backgroundColor).toBe('#000');
      expect(nodes[0].children?.[0].type).toBe('column');
      expect(nodes[0].children?.[0].properties.width).toBe('50%');
    });

    it('should map <mj-text> content', () => {
      const input = `<mj-text color="#fff">Hello</mj-text>`;
      const nodes = parseTemplateToNodes(input, 'mjml');
      
      expect(nodes[0].type).toBe('text');
      expect(nodes[0].properties.color).toBe('#fff');
      expect(nodes[0].properties.content).toBe('Hello');
    });

    it('should map <mj-image> url and alt', () => {
      const input = `<mj-image src="img.png" alt="Test" />`;
      const nodes = parseTemplateToNodes(input, 'mjml');
      
      expect(nodes[0].type).toBe('image');
      expect(nodes[0].properties.url).toBe('img.png');
      expect(nodes[0].properties.alt).toBe('Test');
    });

    it('should map <mj-button> content and url', () => {
      const input = `<mj-button href="https://go.com">Click Me</mj-button>`;
      const nodes = parseTemplateToNodes(input, 'mjml');
      
      expect(nodes[0].type).toBe('button');
      expect(nodes[0].properties.content).toBe('Click Me');
      expect(nodes[0].properties.url).toBe('https://go.com');
    });

    it('should map <mj-divider>', () => {
      const input = `<mj-divider border-color="#333" border-width="2px" />`;
      const nodes = parseTemplateToNodes(input, 'mjml');
      
      expect(nodes[0].type).toBe('divider');
      expect(nodes[0].properties.color).toBe('#333');
      expect(nodes[0].properties.thickness).toBe('2px');
    });

    it('should map <mj-spacer>', () => {
      const input = `<mj-spacer height="50px" />`;
      const nodes = parseTemplateToNodes(input, 'mjml');
      
      expect(nodes[0].type).toBe('spacer');
      expect(nodes[0].properties.height).toBe('50px');
    });

    it('should map <mj-social>', () => {
      const input = `<mj-social><mj-social-element name="facebook" href="#"></mj-social-element></mj-social>`;
      const nodes = parseTemplateToNodes(input, 'mjml');
      
      expect(nodes[0].type).toBe('social');
      expect(nodes[0].properties.networks[0].name).toBe('facebook');
    });

    it('should map <mj-accordion>', () => {
      const input = `<mj-accordion><mj-accordion-element><mj-accordion-title>T1</mj-accordion-title><mj-accordion-text>Desc</mj-accordion-text></mj-accordion-element></mj-accordion>`;
      const nodes = parseTemplateToNodes(input, 'mjml');
      
      expect(nodes[0].type).toBe('accordion');
      expect(nodes[0].properties.title).toBe('T1');
      expect(nodes[0].properties.content).toBe('Desc');
    });

    it('should map <mj-carousel>', () => {
      const input = `<mj-carousel><mj-carousel-image src="1.png"/><mj-carousel-image src="2.png"/></mj-carousel>`;
      const nodes = parseTemplateToNodes(input, 'mjml');
      
      expect(nodes[0].type).toBe('carousel');
      expect(nodes[0].properties.images).toBe('1.png,2.png');
    });

    it('should map <mj-navbar>', () => {
      const input = `<mj-navbar><mj-navbar-link href="/home">Home</mj-navbar-link></mj-navbar>`;
      const nodes = parseTemplateToNodes(input, 'mjml');
      
      expect(nodes[0].type).toBe('nav_menu');
      expect(nodes[0].properties.items[0].label).toBe('Home');
      expect(nodes[0].properties.items[0].url).toBe('/home');
    });

    it('should map <mj-wrapper>', () => {
      const input = `<mj-wrapper padding="10px"><mj-section></mj-section></mj-wrapper>`;
      const nodes = parseTemplateToNodes(input, 'mjml');
      
      expect(nodes[0].type).toBe('wrapper');
      expect(nodes[0].properties.padding).toBe('10px');
      expect(nodes[0].children?.[0].type).toBe('section');
    });

    it('should map <mj-group>', () => {
      const input = `<mj-group vertical-align="middle"><mj-column></mj-column></mj-group>`;
      const nodes = parseTemplateToNodes(input, 'mjml');
      
      expect(nodes[0].type).toBe('group');
      expect(nodes[0].properties.verticalAlign).toBe('middle');
      expect(nodes[0].children?.[0].type).toBe('column');
    });

    it('should map <mj-hero>', () => {
      const input = `<mj-hero mode="fixed-height" background-url="hero.jpg"><mj-text>Title</mj-text></mj-hero>`;
      const nodes = parseTemplateToNodes(input, 'mjml');
      
      expect(nodes[0].type).toBe('hero');
      expect(nodes[0].properties.mode).toBe('fixed-height');
      expect(nodes[0].properties.backgroundImageUrl).toBe('hero.jpg');
      expect(nodes[0].children?.[0].type).toBe('text');
    });

    it('should map <mj-table> into custom html content initially', () => {
      const input = `<mj-table><tr><td>Data</td></tr></mj-table>`;
      const nodes = parseTemplateToNodes(input, 'mjml');
      
      expect(nodes[0].type).toBe('table');
      expect(nodes[0].properties.htmlContent).toContain('<td>Data</td>');
    });

    it('should map <mj-raw> to custom_html', () => {
      const input = `<mj-raw><div>Custom</div></mj-raw>`;
      const nodes = parseTemplateToNodes(input, 'mjml');
      
      expect(nodes[0].type).toBe('custom_html');
      expect(nodes[0].properties.htmlContent).toContain('<div>Custom</div>');
    });
  });

});
