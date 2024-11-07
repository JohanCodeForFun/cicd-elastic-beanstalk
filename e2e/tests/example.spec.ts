import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:80/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/CI && CD Deployment!/);
});

test('working count button', async ({ page }) => {
  await page.goto('http://localhost:80/');

  const countButton = page.getByRole('button', { name: 'count is 0' });

  await expect(countButton).toHaveText('count is 0');

  await countButton.click();
  await countButton.click();
  await countButton.click();

  await expect(countButton).toHaveText('count is 3');
});
