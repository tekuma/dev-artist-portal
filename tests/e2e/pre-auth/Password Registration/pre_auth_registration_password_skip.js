module.exports = {
    'Test Skip Email Registration: Step 1 (Enter Email/Password Combo)' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .setValue('input[type=email]#register-email', 'test@tekuma.io')
            .setValue('input[type=password]#register-password', 'password')
            .setValue('input[type=password]#register-confirm-password', 'password')
            .waitForElementVisible('button.signup-button', 1000)
            .click('button.signup-button')
    },

    'Test Skip Email Registration: Step 2 (Skip Artist Details 1)' : function (browser) {
        browser
            .waitForElementVisible('li.skip-link', 2000)
            .click('li.skip-link')
    },

    'Test Full Email Registration: Step 3 (Skip Artist Details 2)' : function (browser) {
        browser
            .waitForElementVisible('li.skip-link', 2000)
            .click('li.skip-link')
            .pause(2000)
    },

    'Test Full Email Registration: Step 4 (Confirm Details in Profile Page)' : function (browser) {
        browser
            .waitForElementVisible('button.hamburger', 3000)
            .click('button.hamburger')
            .pause(400)
            .waitForElementVisible('li.nav-item.Profile', 2000)
            .click('li.nav-item.Profile')
            .expect.element('article.edit-accordion > div:nth-child(3) > div > div').to.have.css('background-image').which.equals('url("https://project-7614141605200030275.firebaseapp.com/assets/images/default-avatar.png")');

        browser
            .assert.containsText('article.edit-accordion > div:nth-child(1) > h3', 'Unset')
            .assert.containsText('article.edit-accordion > div:nth-child(5) > h3', 'Unset')
            .assert.containsText('article.edit-accordion > div:nth-child(7) > h3', 'Unset')
            .assert.containsText('article.edit-accordion > div:nth-child(9) > h3', 'Unset')
            .assert.containsText('article.edit-accordion > div:nth-child(11) > h3', 'Unset')
            .waitForElementVisible('div.edit-profile-private', 2000)
            .click('div.edit-profile-private')
            .assert.containsText('article.edit-accordion > div:nth-child(1) > h3', 'Legal Name not provided')
            .assert.containsText('article.edit-accordion > div:nth-child(3) > h3', 'test@tekuma.io')
            .end();
    }
};
