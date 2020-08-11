var HomePage = require('./home');

HomePage.landingPage();
var register = HomePage.accessRegistrationPage();
var regConf = register.registerAccount();
regConf.logout();
HomePage.tearDown();
