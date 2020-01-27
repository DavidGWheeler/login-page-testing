'use strict';

const page = require('../model/page');

function FaceBookLandingPage(webdriver) {
    page.get(this, webdriver, 'https://www.facebook.com/');
}

FaceBookLandingPage.prototype = Object.create(page.prototype);
FaceBookLandingPage.prototype.constructor = FaceBookLandingPage;

FaceBookLandingPage.prototype.enterCredentials = user => {
    this.driver.findElement(By.id('email')).sendKeys(`${user.email}`)
    this.driver.findElement(By.id('password')).sendKeys(`${user.password}`)
};

FaceBookLandingPage.prototype.clickLogInButton = () => {
    this.driver.findElement(By.id('u_0_2'))
};

module.exports = FaceBookLandingPage;
