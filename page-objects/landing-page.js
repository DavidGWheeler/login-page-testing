'use strict';

const page = import('../model/page');
const FaceBookLoginPage = import('../login-page.js')

const FaceBookLandingPage = function(webdriver) {
    page.call(this, webdriver, 'https://www.facebook.com/');
}

FaceBookLandingPage.prototype = Object.create(page.prototype);
FaceBookLandingPage.prototype.constructor = FaceBookLandingPage;

FaceBookLandingPage.prototype.enterCredentials = user => {
    return this.driver

}
