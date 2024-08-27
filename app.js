const puppeteer = require("puppeteer");
const browserOpenPromise = puppeteer.launch({
    headless: false,
    slowMo: 25,
    defaultViewport: null
});

const SITE_LINK="https://www.hackerrank.com/auth/login"
const email = process.env.USER_EMAIL;
const password = process.env.USER_PASSWORD;
let page;

browserOpenPromise.then(function (browserContext) {
    let browserPage = browserContext.newPage();
    return browserPage;
})
    .then(function (newTab) {
        page = newTab;
        return page.goto(SITE_LINK);
    })
    .then(function () {
        return page.waitForSelector("input[type='text']");
    })
    .then(function () {
        return page.type("input[type='text']", "yidoton361@kwalah.com");
    })
    .then(function () {
        return page.waitForSelector("input[type='password']");
    })
    .then(function () {
        return page.type("input[type='password']", "yidoton361@kwalah.com");
    })
    .then(function () {
        return page.click('button[data-hr-focus-item="private"]');
    })
    .catch((err) => console.log(err));