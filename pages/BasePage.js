let timeOut = 30000;

class BasePage {

    enterText(element, value) {
        browser.waitForVisible(element, timeOut);
        browser.setValue(element, value);
    }

    clickOn(element) {
        browser.waitForVisible(element, timeOut);
        browser.click(element);
    }

    getTextFromWeb(element) {
        browser.waitForVisible(element, timeOut);
        return browser.getText(element);
    }
}

module.exports = BasePage;