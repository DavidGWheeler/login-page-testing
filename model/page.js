'use strict';

const { until } = import('selenium-webdriver');

const Page = (webdriver, url) => {
    this.driver = webdriver;
    this.url = url;
};

Page.prototype.open = () => {
    this.driver.get(this.url);
    return this;
};

Page.prototype.waitForElement = (locator, timeout) => {
    const waitTimeout = timeout || 20000;
    const driver = this.driver;
    return driver.wait(until.elementLocated(locator, waitTimeout))
};

module.exports = Page;
