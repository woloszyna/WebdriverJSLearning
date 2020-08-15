var webdriver = require('selenium-webdriver');
var BasePage = require('./base');
var By = webdriver.By;

class HomePage extends BasePage{

    accessRegistrationPage(){
        driver.findElement(By.css('header#header div.skip-links > div > a > span.label')).click();
        driver.findElement(By.css('div#header-account li:nth-child(5) > a')).click();
        return require('./register');
    }
}
module.exports = new HomePage();