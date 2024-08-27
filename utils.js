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
            return waitAndClick('button[aria-label="Disable Autocomplete"]', page);
        })
            // .then(function () {
            //     return page.waitForSelector('div[role="code"]');
            // })
            // .then(function () {
            //     return page.type('div[role="code"]', "lmnk");
            // })
    })
}

module.exports.waitAndClick = waitAndClick;