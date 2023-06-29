import {chromium} from '@playwright/test';


//Async 
(async () => {

    //Creating the browser instance
    const browser = await chromium.launch({
        headless: false,
        devtools: true

    });

    //Browser Instance
    const browserInstance = await browser.newContext({
        recordVideo: {
            dir: 'video/'
        },
    });

    //Page
    const page = await browserInstance.newPage();

    //navigate google
    await page.goto("https://www.thewarehouse.co.nz/", {waitUntil: 'domcontentloaded'});

    //hover
    await page.locator("data-test-id=category-root").hover();
    await page.locator('.mega-menu-wrapper >> #category-homegarden').hover();

    await page.locator('a[role="menuitem"]:has-text("Lounge")').click();

    await browser.close();
})();

