var HomePage = require('./home');

HomePage.openPage();
var adoptionPage = HomePage.clickOdAdoptionLink();
adoptionPage.getLionAvailability();
HomePage.closePage();