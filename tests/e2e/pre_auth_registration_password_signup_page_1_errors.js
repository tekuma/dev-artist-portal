module.exports = {
    'Test No Display Name Error' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .setValue('input[type=email]#register-email', 'testrunner@tekuma.io')
            .setValue('input[type=password]#register-password', 'password')
            .setValue('input[type=password]#register-confirm-password', 'password')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
            .waitForElementVisible('body', 2000)
            .click('select#register-dob-month')
            .click('option[value="01"]')
            .setValue('input[type=number]#register-dob-day', '1')
            .setValue('input[type=number]#register-dob-year', '1990')
            .click('input[type=radio]#register-he')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please choose a password')
    }
};
