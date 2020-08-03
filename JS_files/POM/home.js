var webdriver = require('selenium-webdriver');
var driver;

class homePage{

    constructor() {
        driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
    }

    openPage() {
        
        driver.get('https://www.wp.pl/');

    }

    closePage() {
        
        driver.quit();

    }

}

module.exports = new homePage();