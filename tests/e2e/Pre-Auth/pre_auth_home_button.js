module.exports = {
    'Test Home Button Redirects to Tekuma Homepage' : function (browser) {
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            .click('a[href="http://tekuma.io"]')
            .waitForElementVisible('body', 2000)
            .assert.urlEquals('http://tekuma.io/')
            .end();
    }
};
