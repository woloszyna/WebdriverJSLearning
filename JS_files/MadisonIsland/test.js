var HomePage = require('./home');
//This Test was ran on macOs

HomePage.getHomePage();
var accessRegPage = HomePage.accessRegPage();
var accessRegConfirmation = accessRegPage.detailsForRegistration();
accessRegConfirmation.logOut();
accessRegConfirmation.tearDown();