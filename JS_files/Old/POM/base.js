var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();

class BasePage {

    constructor() {
        global.driver = driver;
    }

    openPage() {
        driver.get('http://thetestroom.com/webapp');
    }

    closePage() {
        driver.quit();
    }
}
module.exports = BasePage;