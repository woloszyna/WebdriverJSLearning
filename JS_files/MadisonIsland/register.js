var webdriver = require('selenium-webdriver');
var BasePage = require('./base');
var By = webdriver.By;
var date = new Date();
var timestamp = date.getTime();
var emailPrefix = timestamp;
var password = timestamp;

class RegistrationPage extends BasePage{

    createAccount() {
        driver.findElement(By.css('input#firstname')).sendKeys('Tester');
        driver.findElement(By.css('input#middlename')).sendKeys('Mc');
        driver.findElement(By.css('input#lastname')).sendKeys('Test');
        driver.findElement(By.css('input#email_address')).sendKeys(emailPrefix+'@email.com');
        driver.findElement(By.css('input#password')).sendKeys(password);
        driver.findElement(By.css('input#confirmation')).sendKeys(password);

        driver.findElement(By.css('form#form-validate span > span')).click();
        return require('./regConfirmation');
    }

}
module.exports = new RegistrationPage();