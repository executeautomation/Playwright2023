import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to http://eaapp.somee.com/
  await page.goto('/');

  // Click text=Login
  await page.locator('text=Login').click();
  await expect(page).toHaveURL('/Account/Login');

  // Fill input[name="UserName"]
  await page.locator('input[name="UserName"]').fill('admin');

  // Fill input[name="Password"]
  await page.locator('input[name="Password"]').fill('password');

  // Click text=Log in
  await page.locator('text=Log in').click();
  await expect(page).toHaveURL('/');

  // Click text=Employee List
  await page.locator('text=Employee List').click();
  await expect(page).toHaveURL('/Employee');

  // Click text=Edit >> nth=0
  await page.locator('text=Edit').nth(3).click();

  // Fill input[name="Salary"]
  await page.locator('input[name="Salary"]').fill('18000');

  // Click text=Save
  await page.locator('text=Save').click();

  // Click text=Log off
  await page.locator('text=Log off').click();
  await expect(page).toHaveURL('/');

});

test('New version of Playwright with locator strategy', async ({ page }) => {
  await page.goto('http://eaapp.somee.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByLabel('UserName').click();
  await page.getByLabel('UserName').fill('admin');
  await page.getByLabel('UserName').press('Tab');
  await page.getByLabel('Password').fill('password');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Employee List' }).click();
  await page.getByRole('link', { name: 'Create New' }).click();
  await page.getByLabel('Name').click();
  await page.getByLabel('Name').fill('Jacob');
  await page.getByLabel('Name').press('Tab');
  await page.getByLabel('Salary').fill('2000');
  await page.getByLabel('Salary').press('Tab');
  await page.getByLabel('DurationWorked').fill('120');
  await page.getByLabel('DurationWorked').press('Tab');
  await page.getByLabel('Grade').fill('10');
  await page.getByLabel('Grade').press('Tab');
  await page.getByLabel('Email').fill('jacob@jacob.com');
  await page.getByRole('button', { name: 'Create' }).click();
});