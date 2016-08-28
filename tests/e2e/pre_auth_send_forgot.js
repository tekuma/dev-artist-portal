module.exports = {
    'Test Forgot Password/Send Email' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .click('div.header-writing.login')
            .pause(300) // Wait for locker to open
            .click('li.solo-links.center')
            .waitForElementVisible('body', 2000)
            .setValue('#forgot-email', 'test@tekuma.io')
            .click('button.signup-button.forgot')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Password Reset Email sent to: test@tekuma.io')
            .end();
    }
};
