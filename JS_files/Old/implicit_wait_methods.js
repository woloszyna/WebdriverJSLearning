var webdriver = require ('selenium-webdriver'),
    
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
    
driver.get('https://library-app.firebaseapp.com');

//Implementation of implicit wait
driver.manage().setTimeouts({ implicit: 3000 });
/*
In this instance, the driver will wait up to 5 seconds to call for an error. No need  to implement this to every line of code.
Just input it once and it applies for the whole class.

Implicit wait is only implemented to the overall condition ('wait until something happens). This might not be very effective.
Therefore explicit waits might help.
*/

    
email = driver.findElement(By.css('input'));
button = driver.findElement(By.className('btn-primary'));
    
email.sendKeys('test1@email.com');
button.click();

    
message = driver.findElement(By.className('alert-success'));

message.getText().then(function (txt) {
    console.log("The text of the alert is: " + txt);
    
})

driver.quit();