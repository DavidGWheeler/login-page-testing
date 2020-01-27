'use strict';

let user;

class Credentials {
    constructor(username, email, password, phone) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

};

const getUserCredentials = () => {
    if(user) {
        return user;
    } else {
        getNewUser();
        return user;
    }
};

const getNewUser = (username, email, password) => {
    let user = new Credentials(
        username = username || `Test User${Math.floor(Math.random() * (100 - 1))}1`,
        email = email || `testUser${Math.floor(Math.random() * (100 - 1))}1@gmail.com`,
        password = password || 'PasswordTst123'
    );
    return user;
};
