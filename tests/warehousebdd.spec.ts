import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {

    //navigate google
    await page.goto("https://www.thewarehouse.co.nz/", { waitUntil: 'domcontentloaded' });

});

test.describe.parallel("Test Navigation of Warehouse website", async () => {

    test("To Navigate to lounge page", async ({ page, browserName }) => {

        test.skip(browserName === 'firefox', 'The firefox browser does not support the feature');

        await test.step("Hovering over category root", async () => {

            await page.locator("data-test-id=category-root").hover();
            await page.locator('.mega-menu-wrapper >> #category-homegarden').first().hover();
        });


        await test.step("Clicking on lounge link", async () => {
            await page.locator('a[role="menuitem"]:has-text("Lounge")').click();


            await expect(await page.locator(".title")).toHaveText("Lounge");

            await expect(page).toHaveTitle("Lounge Suite - Lounge Couches | The Warehouse");
        });
    });


    test("To Navigate to Car Electronics page", async ({ page, browserName }, testInfo) => {

        test.slow(browserName === 'webkit', 'The browser does not support the feature');

        await test.step("Hovering over category root", async () => {

            await page.locator("data-test-id=category-root").hover();
            await page.locator('.mega-menu-wrapper >> #category-autodiy').first().hover();
        });


        await test.step("Clicking on lounge link", async () => {
            await page.locator('a[role="menuitem"]:has-text("Car Electronics")').click();

            //slow test
            await expect(await page.locator(".title")).toHaveText("Car Electronics");
        });

    });


});


test.afterEach(async ({ page }, testInfo) => {

    await page.screenshot({ path: `screenshots/${testInfo.title.trim()}.png` });

});








