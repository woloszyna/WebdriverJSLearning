var webdriver = require ('selenium-webdriver'),
    
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
    
driver.get('https://library-app.firebaseapp.com');
    
email = driver.findElement(By.css('input'));
button = driver.findElement(By.className('btn-primary'));
    
email.sendKeys('test1@email.com');

/*
Explicit custom wait conditions are implemented to particular expected condition (step of the app)
('wait until element is present, until element is active, etc).

In this instance, the driver will seek for particular element up to 10 seconds before calling an error.
There is a need to implement this to particular element BEFORE it is able to be located.

This is the custom condition, where the script is waiting for the element to have some CSS value before script will continue.
*/
driver.wait(function() {
    return button.getCssValue('opacity').then(function (result) {
        return result == 1;
    });
}, 10000);

button.click();

driver.wait(until.elementLocated(By.className('alert-success')), 5000);

message = driver.findElement(By.className('alert-success'));

message.getText().then(function (txt) {
    console.log("The text of the alert is: " + txt);
    
})

driver.quit();