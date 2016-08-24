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
            .pause(3000)
    },
    'Test Invalid Email Error' : function (browser) {
        browser
            .setValue('input[type=email]#register-email', 'testrunner')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'The email address you supplied is invalid')
            .pause(3000)
    },
    'Test No Password and Password Dont Match' : function (browser) {
        browser
            .setValue('input[type=email]#register-email', 'testrunner@tekuma.io')
            .setValue('input[type=password]#register-password', '')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please choose a password')
            .pause(3000)
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Passwords do not match')
            .pause(3000)
    },
    'Test No Con' : function (browser) {
        browser
            .setValue('input[type=password]#register-password', 'password')
            .setValue('input[type=password]#register-confirm-password', '')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please confirm your password')
            .pause(3000)
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Passwords do not match')
            .pause(3000)
    },
};
