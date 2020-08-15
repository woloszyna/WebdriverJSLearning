var webdriver = require('selenium-webdriver');
var BasePage = require('./base');
var By = webdriver.By;

class RegistrationPage extends BasePage{

    registerUser(){

        var date = new Date();
        var time = date.getTime();

        driver.findElement(By.css('input#firstname')).sendKeys('Tester');
        driver.findElement(By.css('input#middlename')).sendKeys('Mc');
        driver.findElement(By.css('input#lastname')).sendKeys('Test');
        driver.findElement(By.css('input#email_address')).sendKeys(time+'@email.com');
        driver.findElement(By.css('input#password')).sendKeys(time);
        driver.findElement(By.css('input#confirmation')).sendKeys(time);

        driver.findElement(By.css('form#form-validate span > span')).click();
        return require('./regConfirmation');
    }

}
module.exports = new RegistrationPage();