var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

class BasePage{

    constructor() {
        global.driver = driver;
    }

    navigateToHomePage() {
        driver.get('http://demo-store.seleniumacademy.com/');
    }

    tearDown() {
        driver.quit();
    }
}
module.exports = BasePage;