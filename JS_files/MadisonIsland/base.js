var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();

class BasePage{
    constructor(){
        global.driver = driver;
    }

    accessLandingPage(){
        driver.get('http://demo-store.seleniumacademy.com/');
    }

    tearDown(){
        driver.quit();
    }

}
module.exports = BasePage;
//test