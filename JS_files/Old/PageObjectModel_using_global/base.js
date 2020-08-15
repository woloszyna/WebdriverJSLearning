var webdriver = require('selenium-webdriver');
/*this.driver was moved up here, because we will introduce the global.driver,
allowing driver to be shared to all files that are going to be part of the test.
*/
var driver = new webdriver.Builder().forBrowser('chrome').build();
class BasePage{

        constructor() {
                global.driver = driver;
        }
    
        navigateToThePage() {
        /*
        We have removed all instances of this. 
        because now we use the global driver.
        */
        driver.get('http://www.thetestroom.com/webapp');
        } 
}

module.exports = BasePage;