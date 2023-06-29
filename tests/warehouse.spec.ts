import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {

    //navigate google
    await page.goto("https://www.thewarehouse.co.nz/", { waitUntil: 'domcontentloaded' });

});

test("Navigating to Launge of Warehouse website", async ({ page }) => {
    //hover
    await page.getByTestId("category-root").hover();

    const homegarden = await page
        .getByRole('list')
        .filter({ hasText: 'Winter Shopping Clothing, Shoes & Accessories' })
        .getByRole('link', { name: 'Home, Garden & Appliances' }).first();
    
    await homegarden.hover();
    
    await expect.soft(homegarden).toHaveId("category-homegarden");

    await page.getByRole('menuitem', { name: 'Lounge' }).click();

    await expect.soft(homegarden).not.toBeVisible();
    await expect.soft(homegarden).toBeHidden();

    await expect.soft(page.getByRole('heading', { name: 'Lounge' })).toHaveText("Lounge");
    await expect.soft(page).toHaveTitle("Lounge Suite - Lounge Couches | The Warehouse");

});

test("Navigating to Launge of Warehouse website - 2", async ({ page }) => {
    //hover

    await page.locator("data-test-id=category-root").hover();
    await page.locator('.mega-menu-wrapper >> #category-homegarden').first().hover();

    // await expect.soft(page.locator('.mega-menu-wrapper >> #category-homegarden')).toHaveAttribute("data-targets", "#mega-menu-category-homegarden");
    //await expect.soft(page.locator('.mega-menu-wrapper >> #category-homegarden')).toHaveId("category-homegarden");

    await page.locator('a[role="menuitem"]:has-text("Lounge")').click();
    await expect(page.locator('.mega-menu-wrapper >> #category-homegarden').first()).not.toBeVisible();

    await expect(page.locator('.mega-menu-wrapper >> #category-homegarden').first()).toBeHidden();

    await expect(await page.locator(".title")).toHaveText("Lounge");

    await expect(page).toHaveTitle("Lounge Suite - Lounge Couches | The Warehouse");


});


test.afterEach(async ({ page }) => {
    await page.screenshot({ path: 'screenshots/warehouse.png' });

});



