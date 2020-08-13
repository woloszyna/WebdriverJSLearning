var webdriver = require('selenium-webdriver');
var BasePage = require('./base');
var By = webdriver.By;


class RegistrationConfirmationPage{

    logOut(){
        driver.findElement(By.css('header#header div.skip-links > div > a > span.label')).click();
        driver.findElement(By.css('div#header-account li.last > a')).click();
        return require('./home');
    }

}
module.exports = new RegistrationConfirmationPage();