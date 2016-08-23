// Libs
import React from 'react';
import firebase            from 'firebase';
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
    beforeEach('Create DOM', () => {
        app = renderIntoDocument(
            <App />
        );
    });

    it('Toggle Homepage Login Button: Landing Page', (done) => {
        // Timeout Wrapper of 500ms allows App to load to PreAuth Page
        // Instead of running test in Loading Screen
        setTimeout(() => {
            const loginButton = findRenderedDOMComponentWithClass(app, 'header-writing login');
            Simulate.click(loginButton);
            const shiftedScreen = scryRenderedDOMComponentsWithClass(app, 'pre-auth-main-wrapper open');
            assert.equal(shiftedScreen.length, 1);

            // Timeout Wrapper of 300ms allows for Locker Animation to end
            setTimeout(() => {
                Simulate.click(loginButton);
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
            const loginButtonLanding = findRenderedDOMComponentWithClass(app, 'header-writing login');
            Simulate.click(loginButtonLanding);
            const shiftedScreenLanding = scryRenderedDOMComponentsWithClass(app, 'pre-auth-main-wrapper open');
            assert.equal(shiftedScreenLanding.length, 1);

            const forgotPasswordLink = findRenderedDOMComponentWithClass(app, 'solo-links center');
            Simulate.click(forgotPasswordLink);

            const loginButtonForgot = findRenderedDOMComponentWithClass(app, 'header-writing login');
            Simulate.click(loginButtonForgot);
            const shiftedScreenForgot = scryRenderedDOMComponentsWithClass(app, 'pre-auth-main-wrapper open');
            assert.equal(shiftedScreenForgot.length, 1);

            // Timeout Wrapper of 300ms allows for Locker Animation to end
            setTimeout(() => {
                Simulate.click(loginButtonForgot);
                const reshiftedScreenForgot = scryRenderedDOMComponentsWithClass(app, 'pre-auth-main-wrapper open');
                assert.equal(reshiftedScreenForgot.length, 0); // Class would not include open class tag
                done();
            }, 300);
        }, 500);
    });

    // DO HOMESCREEN BY PRESSING TEKUMA NEXT
});
