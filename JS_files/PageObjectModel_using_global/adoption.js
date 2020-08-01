const BasePage = require("./base");
var webdriver = require('selenium-webdriver');
var By = webdriver.By;

class adoptionPage extends BasePage{

    getLionAvailability() {
        driver.findElement(By.id('check_btn_01')).click();
    }
}

module.exports = new adoptionPage;