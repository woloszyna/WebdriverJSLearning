var HomePage = require('./home');

HomePage.navigateToHomePage();
var accessMyAcc = HomePage.clickOnMyAccount();
accessMyAcc.clickOnLoginBtn();
//HomePage.tearDown();