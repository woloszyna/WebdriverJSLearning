var webdriver = require ('selenium-webdriver'),
    
    By = webdriver.By,
    until = webdriver.until;

var driver = new webdriver.Builder().forBrowser('chrome').build();
    
driver.get('https://library-app.firebaseapp.com');
    
email = driver.findElement(By.css('input'));
button = driver.findElement(By.className('btn-primary'));
    
email.sendKeys('test1@email.com');
button.click();
    
message = driver.findElement(By.className('alert-success'));
//You would expect the test failing here as the code is quicker than the application and the message would not yet be visible on page
//when the element is searched for.
message.getText().then(function (txt) {
    console.log("The text of the alert is: " + txt);
    
})

driver.quit();