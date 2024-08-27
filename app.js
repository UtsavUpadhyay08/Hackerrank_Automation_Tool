const puppeteer = require("puppeteer");
const browserOpenPromise = puppeteer.launch({
    headless: false,
    slowMo: 50,
    defaultViewport: null
});

const SITE_LINK="https://www.hackerrank.com"
let page;

browserOpenPromise.then(function (browserContext) {
    let browserPage = browserContext.newPage();
    return browserPage;
})
    .then(function (newTab) {
        page = newTab;
        return page.goto(SITE_LINK);
    })
    .catch((err) => console.log(err));