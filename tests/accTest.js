const { chromium } = require('playwright');
const path = require('path');

const APP_URL = 'http://localhost:3000';
const WEATHER_URL = 'https://api.openweathermap.org/';


(async () => {
    const browser = await chromium.launch({ headless: false, slowMo: 50 });
    const page = await browser.newPage();
    console.log('Browser version: ', browser.version());

    //Subscribe to 'request' and 'response' events.
    // page.on('request', request => {
    //     console.log('>>', request.method(), request.url())
    // });
    // page.on('response', response => {
    //     console.log('  <<', response.status(), response.url())
    // });

    await page.route('**/data/2.5/*', async (route) => {
        const start = Date.now();
        console.log(`Start: ${new Date().toISOString()}`);
        while(start + 15000 > Date.now()) { };
        
        await route.continue();
        console.log(`End: ${new Date().toISOString()}`);
    });

    await page.goto(APP_URL);

    await page.fill('css=#zip-code', '08902');
    await page.click('css=#zip-submit');

    await page.screenshot({ path: `.${path.sep}output${path.sep}${Date.now()}.png` });
    await browser.close();
})();