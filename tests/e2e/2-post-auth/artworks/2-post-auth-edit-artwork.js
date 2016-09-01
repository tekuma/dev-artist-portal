module.exports = {
    'Test Artwork: Edit Title' : function (browser) {
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
            // Upload Image
            .setValue('div.artwork-upload-box input[type=file]', require('path').resolve(__dirname + '/test_image_1.png'))
            .waitForElementVisible('article.dropzone-image-preview-container', 10000)
            .click('button.upload-dialog-button')
            // Edit Artwork Title
            .pause(1000)    // Pause allows for time between upload and edit screen
            .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
            .click('article.artwork img.artwork-tool.edit')
            .waitForElementVisible('div.edit-artwork-content input[type=text]#artwork-title', 1000)
            .clearValue('div.edit-album-content input[type=text]#artwork-title')
            .setValue('div.edit-album-content input[type=text]#artwork-title', 'New Title')
            .click('button.edit-album-yes')
            .pause(1000)
            // Assert that changed artwork
            .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
            .click('article.artwork img.artwork-tool.edit')
            .waitForElementVisible('div.edit-artwork-content input[type=text]#artwork-title', 1000)
            .assert.value('div.edit-artwork-content input[type=text]#artwork-title', 'New Title')
            .click('button.edit-artwork-no')
            .pause(1000)
            // Delete Artwork
            .waitForElementVisible('article.artwork img.artwork-tool.delete', 1000)
            .pause(2000)
            .click('article.artwork img.artwork-tool.delete')
            .waitForElementVisible('div.confirm-content', 30000)
            .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
            .click('div.confirm-content button.confirm-yes')
            .waitForElementNotPresent('div.artworks article.artwork', 3000)
            .pause(2000)
            // Log off
            .waitForElementVisible('button.hamburger', 3000)
            .click('button.hamburger')
            .waitForElementVisible('div.logout-button', 3000)
            .click('div.logout-button')
            .waitForElementVisible('div.tekuma-logo', 5000)
            .end();
    },
    'Test Artwork: Edit Artist' : function (browser) {
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
            // Upload Image
            .setValue('div.artwork-upload-box input[type=file]', require('path').resolve(__dirname + '/test_image_1.png'))
            .waitForElementVisible('article.dropzone-image-preview-container', 10000)
            .click('button.upload-dialog-button')
            // Edit Artwork Artist
            .pause(1000)    // Pause allows for time between upload and edit screen
            .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
            .click('article.artwork img.artwork-tool.edit')
            .waitForElementVisible('div.edit-artwork-content input[type=text]#artwork-artist', 1000)
            .clearValue('div.edit-album-content input[type=text]#artwork-artist')
            .setValue('div.edit-album-content input[type=text]#artwork-artist', 'New Artist')
            .click('button.edit-album-yes')
            .pause(1000)
            // Assert that changed artwork
            .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
            .click('article.artwork img.artwork-tool.edit')
            .waitForElementVisible('div.edit-artwork-content input[type=text]#artwork-artist', 1000)
            .assert.value('div.edit-artwork-content input[type=text]#artwork-artist', 'New Artist')
            .click('button.edit-artwork-no')
            .pause(1000)
            // Delete Artwork
            .waitForElementVisible('article.artwork img.artwork-tool.delete', 1000)
            .pause(2000)
            .click('article.artwork img.artwork-tool.delete')
            .waitForElementVisible('div.confirm-content', 30000)
            .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
            .click('div.confirm-content button.confirm-yes')
            .waitForElementNotPresent('div.artworks article.artwork', 3000)
            .pause(2000)
            // Log off
            .waitForElementVisible('button.hamburger', 3000)
            .click('button.hamburger')
            .waitForElementVisible('div.logout-button', 3000)
            .click('div.logout-button')
            .waitForElementVisible('div.tekuma-logo', 5000)
            .end();
    },
    'Test Album: Edit Album' : function (browser) {
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
            // Upload Image
            .setValue('div.artwork-upload-box input[type=file]', require('path').resolve(__dirname + '/test_image_1.png'))
            .waitForElementVisible('article.dropzone-image-preview-container', 10000)
            .click('button.upload-dialog-button')
            // Add Album
            .waitForElementVisible('button.add-album', 2000)
            .click('button.add-album')
            .waitForElementVisible('li.album.black:nth-child(2)', 3000)
            // Edit Artwork Album
            .pause(1000)    // Pause allows for time between upload and edit screen
            .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
            .click('article.artwork img.artwork-tool.edit')
            .waitForElementVisible('div.edit-artwork-content select.edit-artwork-select', 1000)
            .click('div.edit-artwork-content select.edit-artwork-select')
            .click('option[value="Untitled 1"]')
            .click('button.edit-album-yes')
            .pause(1000)
            // Assert that artwork in new album
            .waitForElementVisible('li.album.black:nth-child(2)', 3000)
            .click('li.album.black:nth-child(2)')
            .waitForElementVisible('article.artwork', 1000)
            .assert.containsText('article.artwork h3.artwork-name', 'test_image_1')
            .pause(1000)
            // Clear Albums for next test
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
    'Test Artwork: Edit Year' : function (browser) {
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
            // Upload Image
            .setValue('div.artwork-upload-box input[type=file]', require('path').resolve(__dirname + '/test_image_1.png'))
            .waitForElementVisible('article.dropzone-image-preview-container', 10000)
            .click('button.upload-dialog-button')
            // Edit Artwork Year
            .pause(1000)    // Pause allows for time between upload and edit screen
            .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
            .click('article.artwork img.artwork-tool.edit')
            .waitForElementVisible('div.edit-artwork-content input[type=text]#artwork-year', 1000)
            .clearValue('div.edit-album-content input[type=text]#artwork-year')
            .setValue('div.edit-album-content input[type=text]#artwork-year', '2013')
            .click('button.edit-album-yes')
            .pause(1000)
            // Assert that changed artwork
            .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
            .click('article.artwork img.artwork-tool.edit')
            .waitForElementVisible('div.edit-artwork-content input[type=text]#artwork-year', 1000)
            .assert.value('div.edit-artwork-content input[type=text]#artwork-year', '2013')
            .click('button.edit-artwork-no')
            .pause(1000)
            // Delete Artwork
            .waitForElementVisible('article.artwork img.artwork-tool.delete', 1000)
            .pause(2000)
            .click('article.artwork img.artwork-tool.delete')
            .waitForElementVisible('div.confirm-content', 30000)
            .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
            .click('div.confirm-content button.confirm-yes')
            .waitForElementNotPresent('div.artworks article.artwork', 3000)
            .pause(2000)
            // Log off
            .waitForElementVisible('button.hamburger', 3000)
            .click('button.hamburger')
            .waitForElementVisible('div.logout-button', 3000)
            .click('div.logout-button')
            .waitForElementVisible('div.tekuma-logo', 5000)
            .end();
    },
    'Test Artwork: Edit Tags (One Tag)' : function (browser) {
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
            // Upload Image
            .setValue('div.artwork-upload-box input[type=file]', require('path').resolve(__dirname + '/test_image_1.png'))
            .waitForElementVisible('article.dropzone-image-preview-container', 10000)
            .click('button.upload-dialog-button')
            // Edit Tags
            .pause(1000)    // Pause allows for time between upload and edit screen
            .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
            .click('article.artwork img.artwork-tool.edit')
            .waitForElementVisible('div.edit-artwork-content .ReactTags__tagInput input[type=text]', 1000)
            .setValue('div.edit-album-content .ReactTags__tagInput input[type=text]', 'tekuma')
            .keys(browser.Keys.ENTER, () => {
                browser
                    .click('button.edit-album-yes')
                    .pause(1000)
                    // Assert that changed tag for artwork
                    .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
                    .click('article.artwork img.artwork-tool.edit')
                    .waitForElementVisible('div.edit-artwork-content div.ReactTags__tags span.ReactTags__tag:first-child', 1000)
                    .assert.containsText('div.edit-artwork-content div.ReactTags__tags span.ReactTags__tag:first-child', 'tekuma')
                    .click('button.edit-artwork-no')
                    .pause(1000)
                    // Delete Artwork
                    .waitForElementVisible('article.artwork img.artwork-tool.delete', 1000)
                    .pause(2000)
                    .click('article.artwork img.artwork-tool.delete')
                    .waitForElementVisible('div.confirm-content', 30000)
                    .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
                    .click('div.confirm-content button.confirm-yes')
                    .waitForElementNotPresent('div.artworks article.artwork', 3000)
                    .pause(2000)
                    // Log off
                    .waitForElementVisible('button.hamburger', 3000)
                    .click('button.hamburger')
                    .waitForElementVisible('div.logout-button', 3000)
                    .click('div.logout-button')
                    .waitForElementVisible('div.tekuma-logo', 5000)
                    .end();
            });
    },
    'Test Artwork: Edit Tags (Two Tags)' : function (browser) {
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
            // Upload Image
            .setValue('div.artwork-upload-box input[type=file]', require('path').resolve(__dirname + '/test_image_1.png'))
            .waitForElementVisible('article.dropzone-image-preview-container', 10000)
            .click('button.upload-dialog-button')
            // Edit Tags
            .pause(1000)    // Pause allows for time between upload and edit screen
            .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
            .click('article.artwork img.artwork-tool.edit')
            .waitForElementVisible('div.edit-artwork-content .ReactTags__tagInput input[type=text]', 1000)
            .setValue('div.edit-album-content .ReactTags__tagInput input[type=text]', 'tekuma')
            .keys(browser.Keys.ENTER, () => {
                browser
                    .setValue('div.edit-album-content .ReactTags__tagInput input[type=text]', 'art')
                    .keys(browser.Keys.ENTER, () => {
                        browser
                            .click('button.edit-album-yes')
                            .waitForElementNotVisible('div.edit-artwork-content', 2000)
                            .pause(1000)
                            // Assert that changed tags for artwork
                            .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
                            .click('article.artwork img.artwork-tool.edit')
                            .waitForElementVisible('div.edit-artwork-content div.ReactTags__tags span.ReactTags__tag:first-child', 1000)
                            .assert.containsText('div.edit-artwork-content div.ReactTags__tags span.ReactTags__tag:first-child', 'tekuma')
                            .waitForElementVisible('div.edit-artwork-content div.ReactTags__tags span.ReactTags__tag:nth-child(2)', 1000)
                            .assert.containsText('div.edit-artwork-content div.ReactTags__tags span.ReactTags__tag:nth-child(2)', 'art')
                            .click('button.edit-artwork-no')
                            .pause(1000)
                            // Delete Artwork
                            .waitForElementVisible('article.artwork img.artwork-tool.delete', 1000)
                            .pause(2000)
                            .click('article.artwork img.artwork-tool.delete')
                            .waitForElementVisible('div.confirm-content', 30000)
                            .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
                            .click('div.confirm-content button.confirm-yes')
                            .waitForElementNotPresent('div.artworks article.artwork', 3000)
                            .pause(2000)
                            // Log off
                            .waitForElementVisible('button.hamburger', 3000)
                            .click('button.hamburger')
                            .waitForElementVisible('div.logout-button', 3000)
                            .click('div.logout-button')
                            .waitForElementVisible('div.tekuma-logo', 5000)
                            .end();
                    });
            });
    },
    'Test Artwork: Edit Description' : function (browser) {
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
            // Upload Image
            .setValue('div.artwork-upload-box input[type=file]', require('path').resolve(__dirname + '/test_image_1.png'))
            .waitForElementVisible('article.dropzone-image-preview-container', 10000)
            .click('button.upload-dialog-button')
            // Edit Artwork Description
            .pause(1000)    // Pause allows for time between upload and edit screen
            .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
            .click('article.artwork img.artwork-tool.edit')
            .waitForElementVisible('div.edit-artwork-content textarea#artwork-description', 1000)
            .setValue('div.edit-album-content textarea#artwork-description', 'This is an artwork description.')
            .click('button.edit-album-yes')
            .pause(1000)
            // Assert that changed artwork description
            .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
            .click('article.artwork img.artwork-tool.edit')
            .waitForElementVisible('div.edit-artwork-content textarea#artwork-description', 1000)
            .assert.value('div.edit-artwork-content textarea#artwork-description', 'This is an artwork description.')
            .click('button.edit-artwork-no')
            .pause(1000)
            // Delete Artwork
            .waitForElementVisible('article.artwork img.artwork-tool.delete', 1000)
            .pause(2000)
            .click('article.artwork img.artwork-tool.delete')
            .waitForElementVisible('div.confirm-content', 30000)
            .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
            .click('div.confirm-content button.confirm-yes')
            .waitForElementNotPresent('div.artworks article.artwork', 3000)
            .pause(2000)
            // Log off
            .waitForElementVisible('button.hamburger', 3000)
            .click('button.hamburger')
            .waitForElementVisible('div.logout-button', 3000)
            .click('div.logout-button')
            .waitForElementVisible('div.tekuma-logo', 5000)
            .end();
    }
};
