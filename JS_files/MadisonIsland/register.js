var webdriver = require('selenium-webdriver');
var BasePage = require('./base');
var By = webdriver.By;
var getTime = new Date();
var timestamp = getTime.getTime();

class RegistrationPage extends BasePage{
    detailsForRegistration() {
        
        driver.findElement(By.css('input#firstname')).sendKeys('Tester');
        driver.findElement(By.css('input#middlename')).sendKeys('Mc');
        driver.findElement(By.css('input#lastname')).sendKeys('Test');
        driver.findElement(By.css('input#email_address')).sendKeys(timestamp+'@email.com');
        driver.findElement(By.css('input#password')).sendKeys(timestamp);
        driver.findElement(By.css('input#confirmation')).sendKeys(timestamp);
        

        driver.findElement(By.css('form#form-validate span > span')).click();
        return require('./regConfirmation');
        
    }

}
module.exports = new RegistrationPage();