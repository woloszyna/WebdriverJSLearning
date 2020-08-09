var BasePage = require("./base");
var webdriver = require('selenium-webdriver');
var BasePage = require('./base');
var By = webdriver.By;

class AdoptionPage extends BasePage{

    getLionAvailability() {
        driver.findElement(By.id('check_btn_01')).click();
    }
}
module.exports = new AdoptionPage();

