const waitAndClick = async function (selector, cPage) {
    try {
        await cPage.waitForSelector(selector);
        await cPage.click(selector);
    } catch (err) {
        throw err;
    }
};

module.exports.questionSolver = async function (page, question, answer) {
    try {
        await question.click();
        await waitAndClick('.monaco-editor.no-user-select.showUnused.showDeprecated.vs', page);
        await waitAndClick('input.checkbox-input', page);
        await page.waitForSelector('textarea[id="input-1"]');
        await page.type('textarea[id="input-1"]', answer, {
            delay: 0
        });
        await page.keyboard.down("Control");
        await page.keyboard.press("A", {
            delay: 1000
        });
        await page.keyboard.press("X", {
            delay: 1000
        });
        await waitAndClick('.monaco-editor.no-user-select.showUnused.showDeprecated.vs', page);
        await page.keyboard.press("A", {
            delay: 1000
        });
        await page.keyboard.press("V", {
            delay: 1000
        });
        await page.keyboard.up("Control");
        await waitAndClick('button.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled', page);
    } catch (err) {
        throw err;
    }
};

module.exports.waitAndClick = waitAndClick;