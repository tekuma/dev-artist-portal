module.exports = {
    'Test Full Email Registration: Step 1 (Enter Email/Password Combo)' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .setValue('input[type=email]#register-email', 'testrunner@tekuma.io')
            .setValue('input[type=password]#register-password', 'password')
            .setValue('input[type=password]#register-confirm-password', 'password')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
    },

    'Test Full Email Registration: Step 2 (Artist Details 1)' : function (browser) {
        browser
            .waitForElementVisible('body', 2000)
            .setValue('input[type=file]', require('path').resolve(__dirname + '/test_image.png'))
            .setValue('input[type=text]#register-displayname', 'Tekuma Test')
            .waitForElementVisible('select#register-dob-month', 2000)
            .click('select#register-dob-month')
            .click('option[value="01"]')
            .setValue('input[type=number]#register-dob-day', '1')
            .setValue('input[type=number]#register-dob-year', '1990')
            .waitForElementVisible('input[type=radio]#register-he', 2000)
            .click('input[type=radio]#register-he')
            .click('button.signup-button')
    },

    'Test Full Email Registration: Step 3 (Artist Details 2)' : function (browser) {
        browser
            .waitForElementVisible('body', 2000)
            .setValue('input[type=text]#register-legalname', 'Tekuma.io')
            .setValue('textarea.bio', 'Hello, this is an End-2-End Test!')
            .setValue('input[type=text]#register-location', 'Boston, MA')
            .setValue('input[type=text]#register-portfolio', 'http://tekuma.io')
            .waitForElementVisible('button.signup-button', 2000)
            .click('button.signup-button')
            .pause(2000)
    },

    'Test Full Email Registration: Step 4 (Confirm Details in Profile Page)' : function (browser) {
        browser
            .waitForElementVisible('button.hamburger', 3000)
            .click('button.hamburger')
            .pause(400)
            .waitForElementVisible('li.nav-item.Profile', 2000)
            .click('li.nav-item.Profile')
            .pause(2000) // We need to pause so that Avatar can load
            .waitForElementVisible('article.edit-accordion > div:nth-child(3) > div > div', 2000)
            .expect.element('article.edit-accordion > div:nth-child(3) > div > div').to.have.css('background-image').which.does.not.equal('url("https://project-7614141605200030275.firebaseapp.com/assets/images/default-avatar.png")');

        browser
            .assert.containsText('article.edit-accordion > div:nth-child(1) > h3', 'Tekuma Test')
            .assert.containsText('article.edit-accordion > div:nth-child(5) > h3', 'Hello, this is an End-2-End Test!')
            .assert.containsText('article.edit-accordion > div:nth-child(7) > h3', 'Boston, MA')
            .assert.containsText('article.edit-accordion > div:nth-child(9) > h3', 'http://tekuma.io')
            .assert.containsText('article.edit-accordion > div:nth-child(11) > h3', 'Unset')
            .click('div.edit-profile-private')
            .assert.containsText('article.edit-accordion > div:nth-child(1) > h3', 'Tekuma.io')
            .assert.containsText('article.edit-accordion > div:nth-child(3) > h3', 'testrunner@tekuma.io')
            .end();
    }
};
