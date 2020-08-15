//How to switch inbetween windows

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
var By = webdriver.By;

driver.get('http://www.thetestroom.com/webapp');
//1. Open the link that opens new window (child window)
driver.findElement(By.css('a#footer_term')).click();

//2. invoke getAllWindows
driver.getAllWindowHandles().then(function getWindowHandles(allHandles){

    //4. create a parent variable that will save a reference to the parent window. This stores a current window that you are in control of.
    var parent = driver.getWindowHandle();

    driver.getTitle().then(function(text){
        console.log('Parent Window: ' + text);
    });

    //3. Switch to the chiold window  
    driver.switchTo().window(allHandles[allHandles.length - 1]);
    driver.findElement(webdriver.By.css('h1')).then (function (heading){
        heading.getText().then(function (text){
            console.log('Child Window: ' + text);
        });
    });

    //5. Now, let's switch to the parent window and print it's value.
    driver.switchTo().window(parent);
    driver.getTitle().then(function(text){
        console.log('Switched back to Parent Window: ' + text);
    });
});
