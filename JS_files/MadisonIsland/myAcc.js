var webdriver = require('selenium-webdriver');
var BasePage = require('./base');
var By = webdriver.By;

class myAcc extends BasePage{
    clickOnLoginBtn() {
        driver.findElement(By.css('button#send2')).click();
    }
}
module.exports = new myAcc();