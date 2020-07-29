var webdriver = require('selenium-webdriver'),
    
    { describe, it, after, before, beforeEach, afterEach } = require ('selenium-webdriver/testing');

    By = webdriver.By,    
    assert = require('assert'),//call this if you want to use node js
    until = webdriver.until;
    var driver;
    
describe('Chrome assertions scenarios', function(){   
    this.timeout(50000);
    beforeEach(function () {    
        //start new browser and open the website before each scenario
        driver = new webdriver.Builder().forBrowser('chrome').build();
        driver.get('https://library-app.firebaseapp.com');
        driver.manage().window().maximize();
    });

    afterEach(function(){
        driver.quit();
    });

    it('changes opacity when email being showed', function(){
        var button = driver.findElement(By.className('btn-primary'));
        driver.findElement(By.css('input')).sendKeys('test1@email.com');
        return button.getCssValue('opacity').then(function(result){
            assert(result === '1', "Opacity of " + result + " detected");

        /*
        in basic assertion, call for
        .then(function(xxx){
        assert(xxx === '1');
        })
        when asserting if value is <blah>
        */

            });
    });

   it('displays alert', function () {
        var button = driver.findElement(By.className('btn-primary'));
        driver.findElement(By.css('input')).sendKeys('test1@email.com');
        button.click();
        driver.wait(until.elementLocated(By.css('.alert-success')), 5000);
        var message = driver.findElements(By.css('.alert-success')).then(function (result){
            assert(result.length === 1, result.length + " alert-success found");
        
        /*
        in basic assertion, call for
        .then(function(xxx){
        assert(xxx.length === 1);
        })
        when asserting if only x element(s) is returned

        REMEMBER if asserting xxx.length, you have to use findElements (because you want to count the lenght from the array).
        */
            
        });
    });

    it('shows navigation bar', function(){
        driver.findElements(By.css('nav')).then(function (result) {
            assert(result.length === 1, result.length + " navbars found");
        });
    });
})