var homePage = require('./home');

homePage.navigateToThePage();
var adoptionPage = homePage.clickOnAdoptionLink();
adoptionPage.getLionAvailability();