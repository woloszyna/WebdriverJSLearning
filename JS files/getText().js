//This is going to show how to get text from  the elements when they are visible in CSS

const { Options } = require('selenium-webdriver/chrome');

var webdriver = require ('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('https://library-app.firebaseapp.com');

    driver.findElement(By.css('input'));//email textfield
    driver.findElement(By.className('btn-primary')).getText().then(function(txt){
        console.log("the text of the button is \""  + txt+"\"")
    });
        //Request invitation button
    driver.findElements(By.css('nav li')) //the navigation top bar
    //this part is listing all elements
    .then(function(elements){
        elements.map(function(el){
            el.getText().then(function(txt){
                console.log("thext of the navbar element is "+ txt);
            })           
        })
    })
    //up to here

    setTimeout(function () {driver.quit()}, 5000); //temp workaround, would not have the solution, applied the timeout instead
    //driver.close();



  /*
Notes to take:
- Placeholder text does not count as a text, the text has to be visible (name of a button, name of the field, mesages, etc)
- 
  */