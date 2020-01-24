'use strict';

const { until } = import('selenium-webdriver');

function Page(webdriver, url) {
    this.driver = webdriver;
    this.url = url;
};

Page.prototype.open = () => {
    this.driver.get(this.url);
    return this;
};

Page.prototype.waitFor = (locator, timeout) => {
    let waitTimeout = timeout || 20000;
    let driver = this.driver;
    return driver.wait(until.elementLocated(locator, waitTimeout))
};

module.exports = Page;
