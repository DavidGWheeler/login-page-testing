'use strict';

const {Builder, By, until} = require('selenium-webdriver');
let driver;

const getDriver = function() {
    const driver = new Builder().forBrowser('chrome').build();
};

module.exports.getDriver = getDriver;
