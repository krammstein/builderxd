import { test, expect } from '@playwright/test';

test.describe('LexicalEditor cursor behavior', () => {
  test('cursor advances forward when typing in the rich text editor', async ({ page }) => {
    await page.goto('/');
    await page.waitForTimeout(2000);

    // Click the Layers tab
    await page.locator('#tab-btn-layers').click();
    await page.waitForTimeout(300);

    // Click the first "Texto Libre" layer item
    const textLayer = page.getByText('Texto Libre', { exact: true }).first();
    await textLayer.click();
    await page.waitForTimeout(500);

    // Focus the contenteditable
    const editable = page.locator('.lexical-content [contenteditable]');
    await editable.waitFor({ state: 'visible', timeout: 5000 });
    await editable.focus();
    await page.waitForTimeout(300);

    // Select all and delete to clear existing content
    await page.keyboard.press('Control+a');
    await page.waitForTimeout(200);
    await page.keyboard.press('Delete');
    await page.waitForTimeout(300);

    // Type "hola"
    await page.keyboard.type('hola');
    await page.waitForTimeout(300);

    // Verify content is just "hola"
    const textContent = await editable.textContent();
    expect(textContent?.trim()).toBe('hola');

    // Verify cursor is at end of the typed text (offset 4)
    const focusOffset = await page.evaluate(() => {
      const sel = window.getSelection();
      return sel?.focusOffset ?? -1;
    });
    expect(focusOffset).toBe(4);

    // Type more text
    await page.keyboard.type(' mundo');
    await page.waitForTimeout(300);

    // Verify full content
    const fullText = await editable.textContent();
    expect(fullText?.trim()).toBe('hola mundo');

    // Verify cursor advanced to end
    const finalOffset = await page.evaluate(() => {
      const sel = window.getSelection();
      return sel?.focusOffset ?? -1;
    });
    expect(finalOffset).toBe(10);
  });
});
