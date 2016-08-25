module.exports = {
    'Test Login: No Email Error' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .click('div.header-writing.login')
            .waitForElementVisible('.hidden-login input[type=password]', 2000)
            .setValue('.hidden-login input[type=password]', 'password')
            .click('button.login-button')
            .waitForElementVisible('.hidden-login-wrapper div.registration-error span', 2000)
            .assert.containsText('.hidden-login-wrapper div.registration-error span', 'Please enter an email address.')
    },
    'Test Login: Invalid Email Error' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .click('div.header-writing.login')
            .waitForElementVisible('.hidden-login input[type=email]', 2000)
            .setValue('.hidden-login input[type=email]', 'test')
            .click('button.login-button')
            .waitForElementVisible('.hidden-login-wrapper div.registration-error span', 1000)
            .assert.containsText('.hidden-login-wrapper div.registration-error span', 'The email address you supplied is invalid.')
    },
    'Test Login: No Password Error' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .click('div.header-writing.login')
            .waitForElementVisible('.hidden-login input[type=email]', 2000)
            .setValue('.hidden-login input[type=email]', 'test@tekuma.io')
            .click('button.login-button')
            .waitForElementVisible('.hidden-login-wrapper div.registration-error span', 1000)
            .assert.containsText('.hidden-login-wrapper div.registration-error span', 'Please enter your password.')
    },
    'Test Login: User Doesnt Exist Error' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .click('div.header-writing.login')
            .waitForElementVisible('.hidden-login input[type=email]', 2000)
            .setValue('.hidden-login input[type=email]', 'invalid@tekuma.io')
            .setValue('.hidden-login input[type=password]', 'password')
            .click('button.login-button')
            .waitForElementVisible('.hidden-login-wrapper div.registration-error span', 1000)
            .assert.containsText('.hidden-login-wrapper div.registration-error span', 'There is no user record corresponding to this identifier. The user may have been deleted.')
    },
    'Test Login: Invalid Email/Password Error' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .click('div.header-writing.login')
            .waitForElementVisible('.hidden-login input[type=email]', 2000)
            .setValue('.hidden-login input[type=email]', 'test@tekuma.io')
            .setValue('.hidden-login input[type=password]', 'wrongpassword')
            .click('button.login-button')
            .waitForElementVisible('.hidden-login-wrapper div.registration-error span', 1000)
            .assert.containsText('.hidden-login-wrapper div.registration-error span', 'The password is invalid or the user does not have a password.')
    },
    'Test Login: Successful Login' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .click('div.header-writing.login')
            .waitForElementVisible('.hidden-login input[type=email]', 2000)
            .setValue('.hidden-login input[type=email]', 'test@tekuma.io')
            .setValue('.hidden-login input[type=password]', 'password')
            .click('button.login-button')
            .pause(2000)
            .waitForElementVisible('body', 3000)
            .click('button.hamburger')
            .pause(400)
            .click('li.nav-item.Profile')
            .expect.element('article.edit-accordion > div:nth-child(3) > div > div').to.have.css('background-image').which.equals('url("https://project-7614141605200030275.firebaseapp.com/assets/images/default-avatar.png")');

        browser
            .assert.containsText('article.edit-accordion > div:nth-child(1) > h3', 'Unset')
            .assert.containsText('article.edit-accordion > div:nth-child(5) > h3', 'Unset')
            .assert.containsText('article.edit-accordion > div:nth-child(7) > h3', 'Unset')
            .assert.containsText('article.edit-accordion > div:nth-child(9) > h3', 'Unset')
            .assert.containsText('article.edit-accordion > div:nth-child(11) > h3', 'Unset')
            .click('div.edit-profile-private')
            .assert.containsText('article.edit-accordion > div:nth-child(1) > h3', 'Legal Name not provided')
            .assert.containsText('article.edit-accordion > div:nth-child(3) > h3', 'test@tekuma.io')
            .end();
    }
};
