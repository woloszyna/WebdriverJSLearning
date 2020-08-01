var webdriver = require('selenium-webdriver');
const BasePage = require("./base");

var By = webdriver.By;
var driver;

class HomePage extends BasePage{

        clickOnAdoptionLink() {
        /*Because BasePage has an instance of the driver,
        this.method can be used, therefore below, this.driver is observed
        */
            this.driver.findElement(By.css('[name=nav_adopt]')).click();
        }

}
module.exports = new HomePage;