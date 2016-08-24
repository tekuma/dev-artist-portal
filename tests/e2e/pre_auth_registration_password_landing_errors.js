module.exports = {
    'Test No Email Error' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .setValue('input[type=password]#register-password', 'password')
            .setValue('input[type=password]#register-confirm-password', 'password')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please enter an email address')
    },
    'Test Invalid Email Error' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .setValue('input[type=email]#register-email', 'testrunner')
            .setValue('input[type=password]#register-password', 'password')
            .setValue('input[type=password]#register-confirm-password', 'password')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'The email address you supplied is invalid')
    },
    'Test No Password and Password Dont Match' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .setValue('input[type=email]#register-email', 'testrunner@tekuma.io')
            .setValue('input[type=password]#register-password', '')
            .setValue('input[type=password]#register-confirm-password', 'password')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please choose a password')
            .pause(4000)    // Each message shows for 3 secs. Message will have changed 1s later
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Passwords do not match')
    },
    'Test No Confirm Password and Password Dont Match' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .setValue('input[type=email]#register-email', 'testrunner@tekuma.io')
            .setValue('input[type=password]#register-password', 'password')
            .setValue('input[type=password]#register-confirm-password', '')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please confirm your password')
            .pause(4000)    // Each message shows for 3 secs. Message will have changed 1s later
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Passwords do not match')
    }
};
