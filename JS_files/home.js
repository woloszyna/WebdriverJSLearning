//Always call webdriver on top of every file
var webdriver = require('selenium-webdriver');
var driver;

//a class in JS
class HomePage{

    //constructor (something that gets executed every time that instance of a class gets created).
    //A good example of a constructor i using a driver, because it has to be called everytime
    constructor() {
        driver = new webdriver.Builder().forBrowser('chrome').build();
    }

    navigateToThePage() {
        driver.get('http://www.thetestroom.com/webapp');
    } 

}
module.exports = new HomePage;