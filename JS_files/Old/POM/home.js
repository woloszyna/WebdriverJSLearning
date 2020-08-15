var webdriver = require('selenium-webdriver');
var BasePage = require('./base');
var By = webdriver.By;
class HomePage extends BasePage{

    clickOdAdoptionLink() {
        driver.findElement(By.css('[name=nav_adopt]')).click();
        return require('./adoption');
    }
}
module.exports = new HomePage();