var webdriver = require('selenium-webdriver');

class BasePage{

        constructor() {
        /*
        When the base page is created, the driver normally cannot be shared.
        This can be resolved, when we add 'this.' to the driver.
        This automatically creates a var instance of the driver, and initialises it.
        There no need to instatiate the var driver outside of constructor method.
        */
        this.driver = new webdriver.Builder().forBrowser('chrome').build();
        //driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
        }
    
        navigateToThePage() {
        this.driver.get('http://www.thetestroom.com/webapp');
        } 
}

module.exports = BasePage;