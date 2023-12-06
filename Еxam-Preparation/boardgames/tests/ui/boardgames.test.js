const { test, expect } = require('@playwright/test');

test('Check boardgames page', async ({ page }) => {
    await page.goto('https://gorges-exam-preparation.onrender.com/collection');
    const list = await page.$('ul');
    expect(list).toBeFalsy();
  });
  