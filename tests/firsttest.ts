import {chromium} from '@playwright/test';


//Async 
(async () => {

    //Creating the browser instance
    const browser = await chromium.launch({
        headless: false

    });

    //Browser Instance
    const browserInstance = await browser.newContext();

    //Page
    const page = await browserInstance.newPage();

    //navigate google
    await page.goto("http://eaapp.somee.com");

    // await page.locator("a[id='loginLink']", {hasText: 'Login'}).click();

    //or
    // await page.click("a[id='loginLink']");

    //or
    //CSS Selector
    //await page.locator("#loginLink").click();

    //or with XPath
    //await page.click("//a[@id='loginLink']");
    // await page.click("a:has-text('Logins')");
    //await page.click("text=Login");

    //
    await page.locator('"text=Login", "text=Logon"');

    

    await browser.close();
})();

