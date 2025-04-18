import { test, expect } from '@playwright/test';

test('login page', async ({ page }) => {
    await page.goto('https://practicetestautomation.com/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Practice', exact: true }).click();
  await page.getByRole('link', { name: 'Test Login Page' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
})