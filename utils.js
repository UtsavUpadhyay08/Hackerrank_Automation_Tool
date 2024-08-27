module.exports.waitAndClick = function (selector, cPage) {
    return new Promise(function (resolve, reject) {
        let waitForSelectorPromise = cPage.waitForSeletor(selector);
        waitForSelectorPromise.then(function () {
            return cPage.click(selector);
        })
            .then(function () {
                resolve();
            })
            .catch((err) => reject())
    });
}