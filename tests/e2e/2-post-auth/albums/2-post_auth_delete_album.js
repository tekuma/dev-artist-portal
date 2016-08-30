module.exports = {
    'Test Album: Delete Album (Test 1)' : function (browser) {
        // Add album and then delete it
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            // Login
            .waitForElementVisible('div.header-writing.login', 2000)
            .click('div.header-writing.login')
            .waitForElementVisible('.hidden-login input[type=email]', 2000)
            .setValue('.hidden-login input[type=email]', 'testrunner@tekuma.io')
            .setValue('.hidden-login input[type=password]', 'password')
            .waitForElementVisible('button.login-button', 2000)
            .click('button.login-button')
            .pause(3000)
            // Assert Misc Album
            .waitForElementVisible('body', 3000)
            .waitForElementVisible('li.album.black:nth-child(1)', 3000)
            .assert.containsText('li.album.black:nth-child(1) > h3.album-name', 'Miscellaneous')
            // Add Album
            .waitForElementVisible('button.add-album', 2000)
            .click('button.add-album')
            .waitForElementVisible('li.album.black:nth-child(2)', 3000)
            .assert.containsText('li.album.black:nth-child(2) > h3.album-name', 'Untitled 1')
            // Delete Album
            .waitForElementVisible('li.album.black:nth-child(2) img.album-tool.delete', 3000)
            .click('li.album.black:nth-child(2) img.album-tool.delete')
            .waitForElementVisible('div.confirm-content', 30000)
            .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
            .click('div.confirm-content button.confirm-yes')
            .waitForElementNotPresent('li.album.black:nth-child(2)', 3000)
            // Log off
            .waitForElementVisible('button.hamburger', 3000)
            .click('button.hamburger')
            .waitForElementVisible('div.logout-button', 3000)
            .click('div.logout-button')
            .waitForElementVisible('div.tekuma-logo', 5000)
            .end();
    },
    'Test Album: Delete Album (Test 2)' : function (browser) {
        // Add two albums, delete first one, and add another
        // Names should be in order: Miscellaneous, Untitled 2, Untitled 1
        browser
            .url('https://project-7614141605200030275.firebaseapp.com')
            .waitForElementVisible('body', 2000)
            // Login
            .waitForElementVisible('div.header-writing.login', 2000)
            .click('div.header-writing.login')
            .waitForElementVisible('.hidden-login input[type=email]', 2000)
            .setValue('.hidden-login input[type=email]', 'testrunner@tekuma.io')
            .setValue('.hidden-login input[type=password]', 'password')
            .waitForElementVisible('button.login-button', 2000)
            .click('button.login-button')
            .pause(3000)
            // Assert Misc Album
            .waitForElementVisible('body', 3000)
            .waitForElementVisible('li.album.black:nth-child(1)', 3000)
            .assert.containsText('li.album.black:nth-child(1) > h3.album-name', 'Miscellaneous')
            // Add albums
            .waitForElementVisible('button.add-album', 2000)
            .click('button.add-album')
            .click('button.add-album')
            .waitForElementVisible('li.album.black:nth-child(2)', 3000)
            .assert.containsText('li.album.black:nth-child(2) > h3.album-name', 'Untitled 1')
            .waitForElementVisible('li.album.black:nth-child(3)', 3000)
            .assert.containsText('li.album.black:nth-child(3) > h3.album-name', 'Untitled 2')
            .waitForElementVisible('li.album.black:nth-child(2) img.album-tool.delete', 3000)
            // Delete First Album
            .click('li.album.black:nth-child(2) img.album-tool.delete')
            .waitForElementVisible('div.confirm-content', 30000)
            .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
            .click('div.confirm-content button.confirm-yes')
            .waitForElementNotPresent('li.album.black:nth-child(3)', 3000)
            .pause(1000)
            // Add new album
            .click('button.add-album')
            // Assert correct name order
            .waitForElementVisible('li.album.black:nth-child(2)', 3000)
            .assert.containsText('li.album.black:nth-child(2) > h3.album-name', 'Untitled 2')
            .waitForElementVisible('li.album.black:nth-child(3)', 3000)
            .assert.containsText('li.album.black:nth-child(3) > h3.album-name', 'Untitled 1')
            // Clear Albums for next test
            .waitForElementVisible('li.album.black:nth-child(2) img.album-tool.delete', 3000)
            .click('li.album.black:nth-child(2) img.album-tool.delete')
            .waitForElementVisible('div.confirm-content', 30000)
            .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
            .click('div.confirm-content button.confirm-yes')
            .waitForElementNotPresent('li.album.black:nth-child(3)', 3000)
            .pause(1000)    // Allows time for album to be deleted
            .waitForElementVisible('li.album.black:nth-child(2) img.album-tool.delete', 3000)
            .click('li.album.black:nth-child(2) img.album-tool.delete')
            .waitForElementVisible('div.confirm-content', 30000)
            .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
            .click('div.confirm-content button.confirm-yes')
            .waitForElementNotPresent('li.album.black:nth-child(2)', 3000)
            // Log off
            .waitForElementVisible('button.hamburger', 3000)
            .click('button.hamburger')
            .waitForElementVisible('div.logout-button', 3000)
            .click('div.logout-button')
            .waitForElementVisible('div.tekuma-logo', 5000)
            .end();
    }
};
