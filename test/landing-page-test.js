'use strict';


const getDriver = require('../helpers/driver');
const FaceBookLandingPage = require('../page-objects/landing-page');

describe('Facebook landing Page', function() {
    let driver;
    let landingPage = new FaceBookLandingPage(driver);

    this.timeout(15000);

    test.before(() => {
        driver = getDriver();
    });

    test.after(() => {
        if(driver) {
            return driver.quit();
        }
    });

    test.it('should have the expected title', () => {
        landingPage.get();
        let pageTitle = landingPage.getTitle();
        expect(pageTitle).to.equal('Facebook - Log In or Sign Up');
    });
});
