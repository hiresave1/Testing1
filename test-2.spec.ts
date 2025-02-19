import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://theconnexions.co.in/');
  await page.goto('https://connexions2.web.app/');
  await page.getByPlaceholder('Enter number').click();
  await page.getByPlaceholder('Enter number').fill('9742169182');
  await page.getByText('Login to your Account*').click();
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('hotelmore89!');
  await page.locator('div').filter({ hasText: /^Remember me$/ }).nth(4).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Business Overview' }).click();
  await page.getByRole('link', { name: 'Orders' }).click();
  await page.locator('div').filter({ hasText: /^#9909 Details$/ }).getByRole('button').click();
  await page.getByLabel('close', { exact: true }).locator('svg').click();
  await page.locator('div').filter({ hasText: /^#4169 Details$/ }).getByRole('button').click();
  await page.getByText('Confirmed').click();
  await page.locator('.ant-drawer-extra > div').click();
  await page.getByRole('main').locator('div').filter({ hasText: 'Placed 0 min(s) ago#4169 DetailsguestservicesRoom #101Bathing towels x1' }).getByRole('button').nth(3).click();
  await page.getByText('Confirm with Notes').click();
  await page.getByPlaceholder('Add additional notes (').click();
  await page.getByPlaceholder('Add additional notes (').press('CapsLock');
  await page.getByPlaceholder('Add additional notes (').fill('T');
  await page.getByPlaceholder('Add additional notes (').press('CapsLock');
  await page.getByPlaceholder('Add additional notes (').fill('Towels');
  await page.getByRole('button', { name: 'Mark as In-Progress' }).click();
  await page.getByRole('button', { name: 'Mark Completed' }).first().click();
  await page.locator('div').filter({ hasText: /^#4169 Details$/ }).getByRole('button').click();
  await page.getByLabel('close', { exact: true }).locator('svg').click();
  await page.getByRole('button', { name: 'download Export' }).click();
  await page.getByRole('link', { name: 'Business Overview' }).click();
  await page.getByRole('link', { name: 'View Report right' }).first().click();
  await page.getByRole('button', { name: 'down', exact: true }).click();
  await page.getByText('Confirmed').click();
});