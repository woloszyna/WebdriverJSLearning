var HomePage = require('./home');


HomePage.accessLandingPage();
var accessRegPage = HomePage.accessRegPage();
var registerUser = accessRegPage.registerUser();
registerUser.logOut();
HomePage.tearDown();