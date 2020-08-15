//How to switch inbetween windows
//https://youtu.be/VSpspcnQR4k?list=PL_noPv5wmuO-EPEktMdKcaScJ4e5TIgVn

var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.firefox()).build();
var By = webdriver.By;

driver.get('http://www.thetestroom.com/webapp');
//1. Open the link that will open new window (child window)
driver.findElement(By.css('a#footer_term')).click();

//2. invoke getAllWindows method to be able to store windows values
driver.getAllWindowHandles().then(function getWindowHandles(allHandles) {

    //3. create a parent variable that will save a reference to the parent window. 
    //This stores a current window that you are in control of.
    var parent = driver.getWindowHandle();

    driver.getTitle().then(function (text) {
        console.log('Parent Window: ' + text);
    });

    //4. Switch to the child window  
    driver.switchTo().window(allHandles[allHandles.length - 1]);
    
    //5. Store the current (child window) window as a child variable
    var child = driver.getWindowHandle();
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Child Window: ' + text);
        });
    });

    //6. Now, let's switch to the parent window and print it's value.
    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });

    //7. Now, let's switch to the child window and print it's value.
    driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    //8. Now, let's switch to the parent window and print it's value.
    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });

    //9. Now, let's switch to the child window and print it's value.
    driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    //10. Now, let's switch to the parent window and print it's value.
    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });

    //Few more tries
        driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
       driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });
           driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.switchTo().window(parent);
    driver.getTitle().then(function (text) {
        console.log('Switched back to Parent Window: ' + text);
    });


      driver.switchTo().window(child);
    driver.findElement(webdriver.By.css('h1')).then(function (heading) {
        heading.getText().then(function (text) {
            console.log('Switching to Child Window: ' + text);
        });
    });

    driver.quit();

});