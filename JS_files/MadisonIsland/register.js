var webdriver = require('selenium-webdriver');
var BasePage = require('./base');
var By = webdriver.By;

var currentDate = new Date();
var date = currentDate.getDate();
var month = currentDate.getMonth(); //Be careful! January is 0 not 1
var year = currentDate.getFullYear();
var time = currentDate.getTime();

//var dateString = date +(month + 1) + year + time;
var dateString = time;

class RegisterPage extends BasePage{

    registerAccount(){

        driver.findElement(By.css('input#firstname')).sendKeys('Tester');
        driver.findElement(By.css('input#middlename')).sendKeys('Mc');
        driver.findElement(By.css('input#lastname')).sendKeys('Test');
        driver.findElement(By.css('input#email_address')).sendKeys('testermctest'+dateString+'@email.com');
        driver.findElement(By.css('input#password')).sendKeys('Password123!');
        driver.findElement(By.css('input#confirmation')).sendKeys('Password123!');

        driver.findElement(By.css('form#form-validate button[type="submit"]')).click();
        return require('./regConfirmation')
    }
}
module.exports = new RegisterPage();