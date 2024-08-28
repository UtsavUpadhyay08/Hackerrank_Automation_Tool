const waitAndClick = function (selector, cPage) {
    return new Promise(function (resolve, reject) {
        const waitForSelectorPromise = cPage.waitForSelector(selector);
        waitForSelectorPromise.then(function () {
            return cPage.click(selector);
        })
            .then(function () {
                resolve();
            })
            .catch((err) => reject())
    });
}

module.exports.questionSolver = function (page, question, answer) {
    return new Promise(function (resolve, reject) {
        const questionCLickPromise = question.click();
        questionCLickPromise.then(function () {
            return waitAndClick('.monaco-editor.no-user-select.showUnused.showDeprecated.vs', page);
        })
            .then(function () {
                return waitAndClick('input.checkbox-input', page);
            })
            .then(function () {
                return page.waitForSelector('textarea[id="input-1"]');
            })
            .then(function () {
                return page.type('textarea[id="input-1"]', answer);
            })
            .then(function () {
                return page.keyboard.down("Control");
            })
            .then(function () {
                return page.keyboard.press("A");
            })
            .then(function () {
                return page.keyboard.press("X");
            })
            .then(function () {
                return waitAndClick('.monaco-editor.no-user-select.showUnused.showDeprecated.vs', page);
            })
            .then(function () {
                return page.keyboard.down("Control");
            })
            .then(function () {
                return page.keyboard.press("A");
            })
            .then(function () {
                return page.keyboard.press("V");
            })
            .then(function () {
                return waitAndClick('button.ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled', page);
            })
            .then(function () {
                resolve();
            })
            .catch((err) => reject())
    })
}

module.exports.waitAndClick = waitAndClick;