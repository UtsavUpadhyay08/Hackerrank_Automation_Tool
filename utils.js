module.exports.waitAndClick = function (selector, cPage) {
    return new Promise(function (resolve, reject) {
        let waitForSelectorPromise = cPage.waitForSelector(selector);
        waitForSelectorPromise.then(function () {
            return cPage.click(selector);
        })
            .then(function () {
                resolve();
            })
            .catch((err) => reject())
    });
}