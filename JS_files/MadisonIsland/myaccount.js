var BasePage = require('./base');
var webdriver = require('selenium-webdriver');
var By = webdriver.By;

class myAccount extends BasePage{

    clickOnLoginBtn() {
        driver.findElement(By.name('send')).click();
    }

}
module.exports = new myAccount();