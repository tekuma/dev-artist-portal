module.exports = {
    'Test No Legal Name Error' : function (browser) {
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
            .click('li.skip-link')
            // Enter Signup Page Two
            .setValue('textarea.bio', 'Hello, this is an End-2-End Test!')
            .setValue('input[type=text]#register-location', 'Boston, MA')
            .setValue('input[type=text]#register-portfolio', 'http://tekuma.io')
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', "To make use of Tekuma's services, we require your legal name.")
    },
    'Test No Bio Error' : function (browser) {
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
            .click('li.skip-link')
            // Enter Signup Page Two
            .setValue('input[type=text]#register-legalname', 'Tekuma.io')
            .setValue('input[type=text]#register-location', 'Boston, MA')
            .setValue('input[type=text]#register-portfolio', 'http://tekuma.io')
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please enter a bio.')
    },
    'Test No Location Error' : function (browser) {
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
            .click('li.skip-link')
            // Enter Signup Page Two
            .setValue('input[type=text]#register-legalname', 'Tekuma.io')
            .setValue('textarea.bio', 'Hello, this is an End-2-End Test!')
            .setValue('input[type=text]#register-portfolio', 'http://tekuma.io')
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please enter your current city of residence.')
    },
    'Test No Portfolio Error' : function (browser) {
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
            .click('li.skip-link')
            // Enter Signup Page Two
            .setValue('input[type=text]#register-legalname', 'Tekuma.io')
            .setValue('textarea.bio', 'Hello, this is an End-2-End Test!')
            .setValue('input[type=text]#register-location', 'Boston, MA')
            .click('button.signup-button')
            .waitForElementVisible('div.registration-error span', 1000)
            .assert.containsText('div.registration-error span', 'Please specify a portfolio or website URL.')
            .end();
    }
};
