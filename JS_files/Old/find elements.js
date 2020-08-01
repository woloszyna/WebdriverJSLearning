var webdriver = require ('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('https://library-app.firebaseapp.com');

    driver.findElement(By.css('input')).then(function(){
        console.log("\"Email\" text field identified");
    });//email text
    driver.findElement(By.className('btn-primary')).then(function(){
        console.log("\"Request invitation\" inactive button identified");
    });//Request invitation
    
    
    //driver.findElement(By.className('alert-success'));//alert after providing email
    driver.findElements(By.css('nav li')).then(function(array){
        console.log("Navigation bar idetified");
    });
    
    setTimeout(function () {driver.quit()}, 5000); //temp workaround, would not have the solution, applied the timeout instead
    //driver.quit();