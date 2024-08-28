const puppeteer = require("puppeteer");
const { waitAndClick, questionSolver } = require("./utils");
const { answerObj } = require("./codes");
const browserOpenPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null
});

const SITE_LINK="https://www.hackerrank.com/auth/login"
const email = process.env.USER_EMAIL;
const password = process.env.USER_PASSWORD;
let page;

browserOpenPromise.then(function (browserContext) {
    const browserPage = browserContext.newPage();
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
    .then(function () {
        return waitAndClick('a[data-attr1="algorithms"]', page);
    })
    .then(function () {
        return waitAndClick('input[value="warmup"]', page, { delay: 1000 });
    })
    .then(function () {
        return new Promise(r => setTimeout(r, 3000));
    })
    .then(function () {
        const challenges = page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled", { delay: 3000 });
        return challenges;
    })
    .then(function (challenges) {
        // console.log(challenges.length);
        return questionSolver(page, challenges[0], answerObj.answers[0]);
    })
    // .then(function (challenges) {                                    //For whole of the challenges array
    //     return Promise.all(challenges.map((challenge, index) => 
    //         questionSolver(page, challenge, answerObj.answers[index])
    //     ));
    // })
    .catch((err) => console.log(err));