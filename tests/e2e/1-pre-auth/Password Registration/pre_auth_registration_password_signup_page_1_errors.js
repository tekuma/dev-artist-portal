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
            // Enter Signup Page One
            .waitForElementVisible('body', 2000)
            .setValue('input[type=file]', require('path').resolve(__dirname + '/test_image.png'))
            .click('select#register-dob-month')
            .click('option[value="01"]')
            .setValue('input[type=number]#register-dob-day', '1')
            .setValue('input[type=number]#register-dob-year', '1990')
            .waitForElementVisible('input[type=radio]#register-he', 2000)
            .click('input[type=radio]#register-he')
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please enter a display name.')
            .end();
    },
    'Test No Avatar Error' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .setValue('input[type=email]#register-email', 'testrunner@tekuma.io')
            .setValue('input[type=password]#register-password', 'password')
            .setValue('input[type=password]#register-confirm-password', 'password')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
            // Enter Signup Page One
            .waitForElementVisible('body', 2000)
            .setValue('input[type=text]#register-displayname', 'Tekuma Test')
            .waitForElementVisible('select#register-dob-month', 2000)
            .click('select#register-dob-month')
            .click('option[value="01"]')
            .setValue('input[type=number]#register-dob-day', '1')
            .setValue('input[type=number]#register-dob-year', '1990')
            .waitForElementVisible('input[type=radio]#register-he', 2000)
            .click('input[type=radio]#register-he')
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please upload an avatar.')
            .end();
    },
    'Test No Day Error' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .setValue('input[type=email]#register-email', 'testrunner@tekuma.io')
            .setValue('input[type=password]#register-password', 'password')
            .setValue('input[type=password]#register-confirm-password', 'password')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
            // Enter Signup Page One
            .waitForElementVisible('body', 2000)
            .setValue('input[type=text]#register-displayname', 'Tekuma Test')
            .setValue('input[type=file]', require('path').resolve(__dirname + '/test_image.png'))
            .waitForElementVisible('select#register-dob-month', 2000)
            .click('select#register-dob-month')
            .click('option[value="01"]')
            .setValue('input[type=number]#register-dob-year', '1990')
            .waitForElementVisible('input[type=radio]#register-he', 2000)
            .click('input[type=radio]#register-he')
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please enter a valid day of the month.')
            .end();
    },
    'Test Invalid Day Error' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .setValue('input[type=email]#register-email', 'testrunner@tekuma.io')
            .setValue('input[type=password]#register-password', 'password')
            .setValue('input[type=password]#register-confirm-password', 'password')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
            // Enter Signup Page One
            .waitForElementVisible('body', 2000)
            .setValue('input[type=text]#register-displayname', 'Tekuma Test')
            .setValue('input[type=file]', require('path').resolve(__dirname + '/test_image.png'))
            .waitForElementVisible('select#register-dob-month', 2000)
            .click('select#register-dob-month')
            .click('option[value="01"]')
            .setValue('input[type=number]#register-dob-day', '100')
            .setValue('input[type=number]#register-dob-year', '1990')
            .waitForElementVisible('input[type=radio]#register-he', 2000)
            .click('input[type=radio]#register-he')
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please enter a valid day of the month.')
            .end();
    },
    'Test No Month Error' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .setValue('input[type=email]#register-email', 'testrunner@tekuma.io')
            .setValue('input[type=password]#register-password', 'password')
            .setValue('input[type=password]#register-confirm-password', 'password')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
            // Enter Signup Page One
            .waitForElementVisible('body', 2000)
            .setValue('input[type=text]#register-displayname', 'Tekuma Test')
            .setValue('input[type=file]', require('path').resolve(__dirname + '/test_image.png'))
            .setValue('input[type=number]#register-dob-day', '1')
            .setValue('input[type=number]#register-dob-year', '1990')
            .waitForElementVisible('input[type=radio]#register-he', 2000)
            .click('input[type=radio]#register-he')
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please enter a valid month.')
            .end();
    },
    'Test Invalid Year Error: Not 4 Characters' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .setValue('input[type=email]#register-email', 'testrunner@tekuma.io')
            .setValue('input[type=password]#register-password', 'password')
            .setValue('input[type=password]#register-confirm-password', 'password')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
            // Enter Signup Page One
            .waitForElementVisible('body', 2000)
            .setValue('input[type=text]#register-displayname', 'Tekuma Test')
            .setValue('input[type=file]', require('path').resolve(__dirname + '/test_image.png'))
            .waitForElementVisible('select#register-dob-month', 2000)
            .click('select#register-dob-month')
            .click('option[value="01"]')
            .setValue('input[type=number]#register-dob-day', '1')
            .setValue('input[type=number]#register-dob-year', '19')
            .waitForElementVisible('input[type=radio]#register-he', 2000)
            .click('input[type=radio]#register-he')
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please enter a valid year.')
            .end();
    },
    'Test Invalid Year Error: In Future' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .setValue('input[type=email]#register-email', 'testrunner@tekuma.io')
            .setValue('input[type=password]#register-password', 'password')
            .setValue('input[type=password]#register-confirm-password', 'password')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
            // Enter Signup Page One
            .waitForElementVisible('body', 2000)
            .setValue('input[type=text]#register-displayname', 'Tekuma Test')
            .setValue('input[type=file]', require('path').resolve(__dirname + '/test_image.png'))
            .waitForElementVisible('select#register-dob-month', 2000)
            .click('select#register-dob-month')
            .click('option[value="01"]')
            .setValue('input[type=number]#register-dob-day', '1')
            .setValue('input[type=number]#register-dob-year', '9999')
            .waitForElementVisible('input[type=radio]#register-he', 2000)
            .click('input[type=radio]#register-he')
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please enter a valid year.')
            .end();
    },
    'Test No Gender Error' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .setValue('input[type=email]#register-email', 'testrunner@tekuma.io')
            .setValue('input[type=password]#register-password', 'password')
            .setValue('input[type=password]#register-confirm-password', 'password')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
            // Enter Signup Page One
            .waitForElementVisible('body', 2000)
            .setValue('input[type=text]#register-displayname', 'Tekuma Test')
            .setValue('input[type=file]', require('path').resolve(__dirname + '/test_image.png'))
            .waitForElementVisible('select#register-dob-month', 2000)
            .click('select#register-dob-month')
            .click('option[value="01"]')
            .setValue('input[type=number]#register-dob-day', '1')
            .setValue('input[type=number]#register-dob-year', '1990')
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please indicate your preferred gender pronoun.')
            .end();
    }
};