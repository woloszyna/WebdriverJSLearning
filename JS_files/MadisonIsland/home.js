var webdriver = require('selenium-webdriver');
var BasePage = require("./base");
var By = webdriver.By;


class HomePage extends BasePage{

    clickOnMyAccount() {
        driver.findElement(By.css('header#header div.skip-links > div > a > span.label')).click();
        driver.findElement(By.css('div#header-account li.first > a')).click();
        return require('./myAcc');
    }
}
module.exports = new HomePage();