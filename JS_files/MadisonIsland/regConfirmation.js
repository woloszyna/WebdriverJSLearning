var webdriver = require('selenium-webdriver');
var BasePage = require('./base');
var By = webdriver.By;

class RegConfirmationPage extends BasePage{

    verifyAccountRegistered() {
        driver.findElement(By.css()).then(function (successMessge) {
            successMessge.getText().then(function (print) {
                console.log(print);
            });
        });
    }

    logOut() {
        driver.findElement(By.css('header#header div.skip-links > div > a > span.label')).click();
        driver.findElement(By.css('div#header-account li.last > a')).click();

    }

}
module.exports = new RegConfirmationPage();