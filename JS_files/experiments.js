var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
var By = webdriver.By;


driver.get('https://www.thetestroom.com/webapp/');
driver.findElement(By.css('a#footer_term')).click();

driver.getAllWindowHandles().then(function getWindowHandles(allHandles) {
   
    var parent = driver.getWindowHandle();

    

    driver.findElement(By.css('table#table1 td.content > h1')).then(function (title) {
        title.getText().then(function (text) {
            console.log('this is the parent page with the title of: ' + text);
        });
    });
    

    driver.switchTo().window(allHandles[allHandles.length - 1]);

    var child = driver.getWindowHandle();

    driver.findElement(By.css('h1')).then(function (title) {
        title.getText().then(function (text) {
            console.log('This is the Childpage with the neame of: ' + text);
        });
    });


});