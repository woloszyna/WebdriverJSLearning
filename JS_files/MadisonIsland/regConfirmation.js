var webdriver = require('selenium-webdriver');
var BasePage = require('./base');
var By = webdriver.By;

class RegIstrationConfirmationPage extends BasePage{

    logOut() {

        driver.findElement(By.css('header#header div.skip-links > div > a > span.label')).click();
        driver.findElement(By.css('div#header-account li.last > a')).click();
    
    }

}
module.exports = new RegIstrationConfirmationPage();