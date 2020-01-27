'use strict';

import FB, { Facebook, FacebookApiException } from 'fb';
const FB = new Facebook(options);
const page = import('../model/page');
const FaceBookProfileLanding = import('./profile-landing-page');

FB.getLoginStatus(function(response) {
    if (response.status === 'connected') {
        let accessToken = response.authResponse.accessToken;
    };
});
