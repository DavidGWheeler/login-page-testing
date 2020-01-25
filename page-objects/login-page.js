'use strict';

import FB, { Facebook, FacebookApiException } from 'fb';
const fb = new Facebook(options);
const page = import('../model/page');
const FaceBookProfileLanding = import('./profile-landing-page');

fb.getLoginStatus(function(response) {
    if (response.status === 'connnected') {
        let accessToken = response.authResponse.accessToken;
    }
});
