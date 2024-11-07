import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:80/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/CI && CD Deployment!/);
});

test('working count button', async ({ page }) => {
  await page.goto('http://localhost:80/');

  const button = page.locator('button');

  await expect(button).toHaveText('count is 0');

  await button.click();
  await button.click();
  await button.click();

  await expect(button).toHaveText('count is 3');
});
