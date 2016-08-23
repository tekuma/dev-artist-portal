module.exports = {
    'Test Full Email Registration: Step 1 (Enter Email/Password Combo)' : function (browser) {
        browser
            .url('http://artist.tekuma.io')
            .waitForElementVisible('body', 2000)
            .setValue('input[type=text]#register-email', 'test@tekuma.io')
            .setValue('input[type=text]#register-password', 'password')
            .setValue('input[type=text]#register-confirm-password', 'password')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
            .pause(1000)
    },

    'Test Full Email Registration: Step 2 (Artist Details 1)' : function (browser) {
        browser
            .waitForElementVisible('body', 2000)
            .setValue('input[type=file]', require('path').resolve(__dirname + '/test_image.png'))
            .setValue('input[type=text]#register-displayname', 'Tekuma Test')
            .click('select#register-dob-month')
            .pause(1000)
            .click('option[value="01"]')
            .setValue('input[type=text]#register-dob-day', '1')
            .setValue('input[type=text]#register-dob-year', '1990')
            .click('input[type=radio]#register-he')
            .pause(1000)
            .click('button.signup-button')
            .pause(1000)
    },

    'Test Full Email Registration: Step 3 (Artist Details 2)' : function (browser) {
        browser
            .waitForElementVisible('body', 2000)
            .setValue('input[type=text]#register-legalname', 'Tekuma.io')
            .setValue('textarea.bio', 'Hello, this is an End-2-End Test!')
            .setValue('input[type=text]#register-location', 'Boston, MA')
            .setValue('input[type=text]#register-portfolio', 'http://tekuma.io')
            .click('button.signup-button')
            .pause(1000)

    },

    'Test Full Email Registration: Step 4 (Confirm Details in Profile Page)' : function (browser) {
        browser
            .click('button.hamburger')
            .click('li[title="Edit Profile"]')
            .assert.containsText('article.edit-accordion > div:nth-child(1) > h3', 'Tekuma Test')
            .expect.element('article.edit-accordion > div:nth-child(2) > div').to.not.have.css('background-image').which.equals('url("assets/images/default-avatar.png")')
            .assert.containsText('article.edit-accordion > div:nth-child(3) > h3', 'Hello, this is an End-2-End Test!')
            .assert.containsText('article.edit-accordion > div:nth-child(4) > h3', 'Boston, MA')
            .assert.containsText('article.edit-accordion > div:nth-child(5) > h3', 'http://tekuma.io')
            .assert.containsText('article.edit-accordion > div:nth-child(6) > h3', 'Unset')
            .click('div.edit-profile.private')
            .pause(1000)
            .assert.containsText('article.edit-accordion > div:nth-child(1) > h3', 'Tekuma.io')
            .assert.containsText('article.edit-accordion > div:nth-child(2) > h3', 'test@tekuma.io')
            .end();
    }
};
