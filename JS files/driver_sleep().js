var webdriver = require ('selenium-webdriver'),
    
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
    
driver.get('https://library-app.firebaseapp.com');
    
email = driver.findElement(By.css('input'));
button = driver.findElement(By.className('btn-primary'));
    
email.sendKeys('test1@email.com');
button.click();

/*
Implementation of driver.sleep(miliseconds) pauses the script for the time, allowing elements to populate.
This is not recommended method in delivered tests as it can add minutes to the execution script.
It should only be used when in development. Then for the final version of the code use other wait methods (e.g. implicit waits).
*/
driver.sleep(3000);
    
message = driver.findElement(By.className('alert-success'));

message.getText().then(function (txt) {
    console.log("The text of the alert is: " + txt);
    
})

driver.quit();