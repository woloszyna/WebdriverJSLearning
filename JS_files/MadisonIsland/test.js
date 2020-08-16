var HomePage = require('./home');

HomePage.accessHomePage();
var registerProcess = HomePage.navigateToRegPage();
var accessRegConfirmPage = registerProcess.createAccount();
var logOut = accessRegConfirmPage.logOut();
