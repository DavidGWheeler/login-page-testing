'use strict';

import {Builder, By, until} from "selenium-webdriver";
let driver;

const getDriver = () => {
    if (driver) {
        return driver;
    } else {
        buildDriver();
        return driver;
    }
};

const buildDriver = () => {
    switch(process.env.PLATFORM) {
        case 'FIREFOX':
            return new Builder().forBrowser("firefox").build();
        default:
            return new Builder().forBrowser("chrome").build();
    }
};

module.exports.getDriver = getDriver;
