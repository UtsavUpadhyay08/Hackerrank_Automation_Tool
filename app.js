const puppeteer = require("puppeteer");
const { waitAndClick, questionSolver } = require("./utils");
const { answerObj } = require("./codes");

const SITE_LINK = "https://www.hackerrank.com/auth/login";
const email = process.env.USER_EMAIL;
const password = process.env.USER_PASSWORD;
let page;

(async () => {
    try {
        const browser = await puppeteer.launch({
            headless: false,
            defaultViewport: null
        });

        page = await browser.newPage();
        await page.goto(SITE_LINK);

        await page.waitForSelector("input[type='text']");
        await page.type("input[type='text']", "yidoton361@kwalah.com");

        await page.waitForSelector("input[type='password']");
        await page.type("input[type='password']", "yidoton361@kwalah.com");

        await page.click('button[data-hr-focus-item="private"]');

        await waitAndClick('a[data-attr1="algorithms"]', page);

        await waitAndClick('input[value="warmup"]', page, {
            delay: 1000
        });

        await new Promise(r => setTimeout(r, 3000));

        const challenges = await page.$$(".ui-btn.ui-btn-normal.primary-cta.ui-btn-line-primary.ui-btn-styled", {
            delay: 3000
        });

        if (challenges.length > 0) {
            await questionSolver(page, challenges[0], answerObj.answers[0]);
        }

        // To solve all challenges
        // await Promise.all(challenges.map((challenge, index) => 
        //     questionSolver(page, challenge, answerObj.answers[index])
        // ));

    } catch (err) {
        console.log(err);
    }
})();