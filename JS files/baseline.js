//This is the baseline script to  start with

var webdriver = require ('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('https://library-app.firebaseapp.com');

    driver.findElement(By.css('input'))//email text
    driver.findElement(By.className('btn-primary'));//Request invitation
    
    
    //driver.findElement(By.className('alert-success'));//alert after providing email
    driver.findElements(By.css('nav li'));
    

    //setTimeout(function () {driver.quit()}, 5000); //temp workaround, would not have the solution, applied the timeout instead
    //driver.sleep(10000);
    driver.quit();