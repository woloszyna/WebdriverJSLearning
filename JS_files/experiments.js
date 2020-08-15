var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
var By = webdriver.By;



driver.get('http://www.thetestroom.com/webapp');
driver.findElement(By.css('a#footer_term')).click();

driver.getAllWindowHandles().then(function getWindowHandles(allHandles) {

    var parent = driver.getWindowHandle();

    driver.getTitle().then(function (text) {
        console.log('this is parent window: ' + text);
    });

    driver.switchTo().window(allHandles[allHandles.length - 1]);
    var child = driver.getWindowHandle();

    driver.findElement(webdriver.By.css('h1')).then(function (header) {
        header.getText().then(function (text) {
            console.log('this is child window: ' + text);
        });
    })
});