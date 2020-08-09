var HomePage = require('./home');

HomePage.mainPage();
var myAccount = HomePage.accessMyAccount();
myAccount.clickOnLoginBtn();
HomePage.tearDown();