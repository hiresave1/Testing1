import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://connexions3.web.app/?businessid=6999&department=guestservices');
  await page.getByText('Select Room #').click();
  await page.getByText('Room 101').click();
  await page.getByRole('img', { name: 'Image' }).first().click();
  await page.locator('.relative > div > div > div:nth-child(2) > div:nth-child(2) > .ant-space-item > .bg-white').first().click();
  await page.getByRole('dialog').getByRole('button', { name: 'item added View Cart right' }).click();
  await page.locator('div').filter({ hasText: /^Bathing towels$/ }).
  click();
  await page.getByText('Items total').click();
  await page.getByPlaceholder('write your instruction').click();
  await page.getByPlaceholder('write your instruction').press('CapsLock');
  await page.getByPlaceholder('write your instruction').fill('H');
  await page.getByPlaceholder('write your instruction').press('CapsLock');
  await page.getByPlaceholder('write your instruction').fill('Hotel ');
  await page.getByPlaceholder('write your instruction').press('CapsLock');
  await page.getByPlaceholder('write your instruction').fill('Hotel R');
  await page.getByPlaceholder('write your instruction').press('CapsLock');
  await page.getByPlaceholder('write your instruction').fill('Hotel Room');
  await page.getByPlaceholder('write your instruction').click();
  await page.getByText('Add InstructionsHotel').click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('button', { name: 'Refresh' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Contact us' }).click();
  const page1 = await page1Promise;
  await page1.locator('html').click();
  await expect(page.getByRole('button', { name: 'Refresh' })).toBeVisible();
  await page.getByText('Order #').click();
  await page.getByRole('button', { name: 'Refresh' }).click();
  await page.getByText('/16/24, 4:02 PM').click();
  await page.getByText('Confirmed').click();
  await page.getByText('Completed').click();
  await page.getByText('RefreshPlaced07/16/24, 4:02').click();
  await page.getByText('Instructions').click();
});