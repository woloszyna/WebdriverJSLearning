var BasePage = require('./base');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;

class HomePage extends BasePage{

    accessMyAccount() {
        driver.findElement(By.css('#header > div > div.skip-links > div > a > span.label')).click();
        driver.findElement(By.css('#header-account > div > ul > li.first > a')).click();
        return require('./myaccount');
    }
}
module.exports = new HomePage();