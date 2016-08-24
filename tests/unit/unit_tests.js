// Libs
import React from 'react';
// import FirebaseServer from 'firebase-server';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithClass,
    findRenderedDOMComponentWithClass,
    Simulate
} from 'react-addons-test-utils';
import TestBackend from 'react-dnd-test-backend';
import {DragDropContext} from 'react-dnd';
import assert from 'assert';

// Files
import App from '../app/App';

describe('Artist Portal Unit Tests', () => {
    let app;
    // before('Initializing Firebase Server', () => {
    //     new FirebaseServer(5000, 'localhost.firebaseio.test', {
    //         "_private" : {
    //             "onboarders" : {
    //               "0vNoup1X1vbBL7ENHBUZyBl3dd63" : {
    //                 "dob" : "",
    //                 "email" : "test@tekuma.io",
    //                 "gender_pronoun" : "",
    //                 "legal_name" : "Legal Name not provided",
    //                 "over_eighteen" : false,
    //                 "paypal" : ""
    //               }
    //             }
    //           },
    //           "public" : {
    //             "onboarders" : {
    //               "0vNoup1X1vbBL7ENHBUZyBl3dd63" : {
    //                 "albums" : [ {
    //                   "artist" : "",
    //                   "description" : "",
    //                   "name" : "Miscellaneous",
    //                   "year" : ""
    //                 } ],
    //                 "auth_provider" : "password",
    //                 "avatar" : "",
    //                 "bio" : "This is a test account for Tekuma",
    //                 "display_name" : "Tekuma",
    //                 "joined" : "2016-08-23T19:48:57.008Z",
    //                 "location" : "Cambridge, MA",
    //                 "portfolio" : "http://tekuma.io",
    //                 "social_media" : {
    //                   "behance" : "",
    //                   "facebook" : "",
    //                   "instagram" : "",
    //                   "pinterest" : "",
    //                   "twitter" : ""
    //                 }
    //               }
    //             }
    //           }
    //     });
    //
    //     let client = new Firebase('ws://test.firebase.localhost:5000');
    //
    //     client.on('value', (snapshot) => {
    //         console.log('Got value:', snapshot.val());
    //     });
    // });

    beforeEach('Create DOM', () => {
        app = renderIntoDocument(
            <App />
        );
    });

    it('Toggle Homepage Login Button: Landing Page', (done) => {
        // Timeout Wrapper of 500ms allows App to load to PreAuth Page
        // Instead of running test in Loading Screen
        setTimeout(() => {
            // Click Login Button on Header
            const loginButton = findRenderedDOMComponentWithClass(app, 'header-writing login');
            Simulate.click(loginButton);
            // Assert Screen has Shifted
            const shiftedScreen = scryRenderedDOMComponentsWithClass(app, 'pre-auth-main-wrapper open');
            assert.equal(shiftedScreen.length, 1);

            // Timeout Wrapper of 300ms allows for Locker Animation to end
            setTimeout(() => {
                // Click Login Button on Header
                Simulate.click(loginButton);
                // Assert Screen Moved Back to Normal
                const reshiftedScreen = scryRenderedDOMComponentsWithClass(app, 'pre-auth-main-wrapper open');
                assert.equal(reshiftedScreen.length, 0); // Class would not include open class tag
                done();
            }, 300);
        }, 500);
    });

    it('Toggle Homepage Login Button: Forgot Password Page', (done) => {
        // Timeout Wrapper of 500ms allows App to load to PreAuth Page
        // Instead of running test in Loading Screen
        setTimeout(() => {
            // Click Login Button on Header
            const loginButtonLanding = findRenderedDOMComponentWithClass(app, 'header-writing login');
            Simulate.click(loginButtonLanding);
            // Assert Screen has Shifted
            const shiftedScreenLanding = scryRenderedDOMComponentsWithClass(app, 'pre-auth-main-wrapper open');
            assert.equal(shiftedScreenLanding.length, 1);

            // Click Forgot Password Link
            const forgotPasswordLink = findRenderedDOMComponentWithClass(app, 'solo-links center');
            Simulate.click(forgotPasswordLink);

            // Click Login Button on Header
            const loginButtonForgot = findRenderedDOMComponentWithClass(app, 'header-writing login');
            Simulate.click(loginButtonForgot);
            // Assert Screen has Shifted
            const shiftedScreenForgot = scryRenderedDOMComponentsWithClass(app, 'pre-auth-main-wrapper open');
            assert.equal(shiftedScreenForgot.length, 1);

            // Timeout Wrapper of 300ms allows for Locker Animation to end
            setTimeout(() => {
                // Click Login Button on Header
                Simulate.click(loginButtonForgot);
                const reshiftedScreenForgot = scryRenderedDOMComponentsWithClass(app, 'pre-auth-main-wrapper open');
                // Assert Screen Moved Back to Normal
                assert.equal(reshiftedScreenForgot.length, 0); // Class would not include open class tag
                done();
            }, 300);
        }, 500);
    });

    it('Return to Homepage Button: Forgot Password Page', (done) => {
        // Timeout Wrapper of 500ms allows App to load to PreAuth Page
        // Instead of running test in Loading Screen
        setTimeout(() => {
            // Click Login Button on Header
            const loginButtonLanding = findRenderedDOMComponentWithClass(app, 'header-writing login');
            Simulate.click(loginButtonLanding);
            // Assert Screen has Shifted
            const shiftedScreenLanding = scryRenderedDOMComponentsWithClass(app, 'pre-auth-main-wrapper open');
            assert.equal(shiftedScreenLanding.length, 1);

            // Click Forgot Password Link
            const forgotPasswordLink = findRenderedDOMComponentWithClass(app, 'solo-links center');
            Simulate.click(forgotPasswordLink);

            // Click TEKUMA Logotype
            const returnHomepageButtonForgot = findRenderedDOMComponentWithClass(app, 'tekuma-logo');
            Simulate.click(returnHomepageButtonForgot);

            // Assert Back to Homepage
            const homePageLogo = scryRenderedDOMComponentsWithClass(app, 'artist-logo-wrapper');
            assert.equal(homePageLogo.length, 1);
            done();
        }, 500);
    });

    it('Toggle Homepage Login Button: Signup Page 1', (done) => {
        // Timeout Wrapper of 500ms allows App to load to PreAuth Page
        // Instead of running test in Loading Screen
        setTimeout(() => {
            // Write in Email
            const emailInput = findRenderedDOMComponentWithClass(app, 'register-email');
            emailInput.value = "test@tekuma.io";

            // Write in Password
            const passwordInput = findRenderedDOMComponentWithClass(app, 'register-password');
            passwordInput.value = "password";

            // Write in Confirm Password
            const confirmPasswordInput = findRenderedDOMComponentWithClass(app, 'register-confirm-password');
            confirmPasswordInput.value = "password";

            // Click Signup Button
            const signupButton = findRenderedDOMComponentWithClass(app, 'signup-button');
            Simulate.click(signupButton);

            // Click Login Button on Header
            const loginButtonSignupOne = findRenderedDOMComponentWithClass(app, 'header-writing login');
            Simulate.click(loginButtonSignupOne);

            // Assert Screen has Shifted
            const shiftedScreenSignupOne = scryRenderedDOMComponentsWithClass(app, 'pre-auth-main-wrapper open');
            assert.equal(shiftedScreenSignupOne.length, 1);

            // Timeout Wrapper of 300ms allows for Locker Animation to end
            setTimeout(() => {
                // Click Login Button on Header
                Simulate.click(loginButtonSignupOne);

                // Assert Screen Moved Back to Normal
                const reshiftedScreenSignupOne = scryRenderedDOMComponentsWithClass(app, 'pre-auth-main-wrapper open');
                assert.equal(reshiftedScreenSignupOne.length, 0); // Class would not include open class tag
                done();
            }, 300);
        }, 500);
    });

    it('Return to Homepage Button: Signup Page 1', (done) => {
        // Timeout Wrapper of 500ms allows App to load to PreAuth Page
        // Instead of running test in Loading Screen
        setTimeout(() => {
            // Write in Email
            const emailInput = findRenderedDOMComponentWithClass(app, 'register-email');
            emailInput.value = "test@tekuma.io";

            // Write in Password
            const passwordInput = findRenderedDOMComponentWithClass(app, 'register-password');
            passwordInput.value = "password";

            // Write in Confirm Password
            const confirmPasswordInput = findRenderedDOMComponentWithClass(app, 'register-confirm-password');
            confirmPasswordInput.value = "password";

            // Click Signup Button
            const signupButton = findRenderedDOMComponentWithClass(app, 'signup-button');
            Simulate.click(signupButton);

            // Click TEKUMA Logotype
            const returnHomepageButtonSignupOne = findRenderedDOMComponentWithClass(app, 'tekuma-logo');
            Simulate.click(returnHomepageButtonSignupOne);

            // Assert Back to Homepage
            const homePageLogo = scryRenderedDOMComponentsWithClass(app, 'artist-logo-wrapper');
            assert.equal(homePageLogo.length, 1);
            done();
        }, 500);
    });

    it('Toggle Homepage Login Button: Signup Page 2', (done) => {
        // Timeout Wrapper of 500ms allows App to load to PreAuth Page
        // Instead of running test in Loading Screen
        setTimeout(() => {
            // Write in Email
            const emailInput = findRenderedDOMComponentWithClass(app, 'register-email');
            emailInput.value = "test@tekuma.io";

            // Write in Password
            const passwordInput = findRenderedDOMComponentWithClass(app, 'register-password');
            passwordInput.value = "password";

            // Write in Confirm Password
            const confirmPasswordInput = findRenderedDOMComponentWithClass(app, 'register-confirm-password');
            confirmPasswordInput.value = "password";

            // Click Signup Button
            const signupButton = findRenderedDOMComponentWithClass(app, 'signup-button');
            Simulate.click(signupButton);

            // Click Skip Button on Signup Page 1
            const skipSignupOne = findRenderedDOMComponentWithClass(app, 'skip-link');
            Simulate.click(skipSignupOne);

            // Click Login Button on Header
            const loginButtonSignupOne = findRenderedDOMComponentWithClass(app, 'header-writing login');
            Simulate.click(loginButtonSignupOne);

            // Assert Screen has Shifted
            const shiftedScreenSignupOne = scryRenderedDOMComponentsWithClass(app, 'pre-auth-main-wrapper open');
            assert.equal(shiftedScreenSignupOne.length, 1);

            // Timeout Wrapper of 300ms allows for Locker Animation to end
            setTimeout(() => {
                // Click Login Button on Header
                Simulate.click(loginButtonSignupOne);

                // Assert Screen Moved Back to Normal
                const reshiftedScreenSignupOne = scryRenderedDOMComponentsWithClass(app, 'pre-auth-main-wrapper open');
                assert.equal(reshiftedScreenSignupOne.length, 0); // Class would not include open class tag
                done();
            }, 300);
        }, 500);
    });

    it('Return to Homepage Button: Signup Page 2', (done) => {
        // Timeout Wrapper of 500ms allows App to load to PreAuth Page
        // Instead of running test in Loading Screen
        setTimeout(() => {
            // Write in Email
            const emailInput = findRenderedDOMComponentWithClass(app, 'register-email');
            emailInput.value = "test@tekuma.io";

            // Write in Password
            const passwordInput = findRenderedDOMComponentWithClass(app, 'register-password');
            passwordInput.value = "password";

            // Write in Confirm Password
            const confirmPasswordInput = findRenderedDOMComponentWithClass(app, 'register-confirm-password');
            confirmPasswordInput.value = "password";

            // Click Signup Button
            const signupButton = findRenderedDOMComponentWithClass(app, 'signup-button');
            Simulate.click(signupButton);

            // Click Skip Button on Signup Page 1
            const skipSignupOne = findRenderedDOMComponentWithClass(app, 'skip-link');
            Simulate.click(skipSignupOne);

            // Click TEKUMA Logotype
            const returnHomepageButtonSignupOne = findRenderedDOMComponentWithClass(app, 'tekuma-logo');
            Simulate.click(returnHomepageButtonSignupOne);

            // Assert Back to Homepage
            const homePageLogo = scryRenderedDOMComponentsWithClass(app, 'artist-logo-wrapper');
            assert.equal(homePageLogo.length, 1);
            done();
        }, 500);
    });
});
