module.exports = {
    // Add one album
    // 'Test Album: Add Album (Test 1)' : function (browser) {
    //     browser
    //         .url('https://project-7614141605200030275.firebaseapp.com')
    //         .waitForElementVisible('body', 2000)
    //         // Login
    //         .waitForElementVisible('div.header-writing.login', 2000)
    //         .click('div.header-writing.login')
    //         .waitForElementVisible('.hidden-login input[type=email]', 2000)
    //         .setValue('.hidden-login input[type=email]', 'testrunner@tekuma.io')
    //         .setValue('.hidden-login input[type=password]', 'password')
    //         .waitForElementVisible('button.login-button', 2000)
    //         .click('button.login-button')
    //         .pause(3000)
    //         // Assert Misc Album
    //         .waitForElementVisible('body', 3000)
    //         .waitForElementVisible('li.album.black:nth-child(1)', 3000)
    //         .assert.containsText('li.album.black:nth-child(1) > h3.album-name', 'Miscellaneous')
    //         // Add Album
    //         .waitForElementVisible('button.add-album', 2000)
    //         .click('button.add-album')
    //         .waitForElementVisible('li.album.black:nth-child(2)', 3000)
    //         .assert.containsText('li.album.black:nth-child(2) > h3.album-name', 'Untitled 1')
    //         // Clear Albums for next test
    //         .waitForElementVisible('li.album.black:nth-child(2) img.album-tool.delete', 3000)
    //         .click('li.album.black:nth-child(2) img.album-tool.delete')
    //         .waitForElementVisible('div.confirm-content', 30000)
    //         .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
    //         .click('div.confirm-content button.confirm-yes')
    //         .waitForElementNotPresent('li.album.black:nth-child(2)', 3000)
    //         // Log off
    //         .waitForElementVisible('button.hamburger', 3000)
    //         .click('button.hamburger')
    //         .waitForElementVisible('div.logout-button', 3000)
    //         .click('div.logout-button')
    //         .waitForElementVisible('div.tekuma-logo', 5000)
    //         .end();
    // },
    // 'Test Album: Add Album (Test 2)' : function (browser) {
    //     // Add two albums
    //     browser
    //         .url('https://project-7614141605200030275.firebaseapp.com')
    //         .waitForElementVisible('body', 2000)
    //         // Login
    //         .waitForElementVisible('div.header-writing.login', 2000)
    //         .click('div.header-writing.login')
    //         .waitForElementVisible('.hidden-login input[type=email]', 2000)
    //         .setValue('.hidden-login input[type=email]', 'testrunner@tekuma.io')
    //         .setValue('.hidden-login input[type=password]', 'password')
    //         .waitForElementVisible('button.login-button', 2000)
    //         .click('button.login-button')
    //         .pause(3000)
    //         // Assert Misc Album
    //         .waitForElementVisible('body', 3000)
    //         .waitForElementVisible('li.album.black:nth-child(1)', 3000)
    //         .assert.containsText('li.album.black:nth-child(1) > h3.album-name', 'Miscellaneous')
    //         // Add Albums
    //         .waitForElementVisible('button.add-album', 2000)
    //         .click('button.add-album')
    //         .click('button.add-album')
    //         .waitForElementVisible('li.album.black:nth-child(2)', 3000)
    //         .assert.containsText('li.album.black:nth-child(2) > h3.album-name', 'Untitled 1')
    //         .waitForElementVisible('li.album.black:nth-child(3)', 3000)
    //         .assert.containsText('li.album.black:nth-child(3) > h3.album-name', 'Untitled 2')
    //         // Clear Albums for next test
    //         .waitForElementVisible('li.album.black:nth-child(2) img.album-tool.delete', 3000)
    //         .click('li.album.black:nth-child(2) img.album-tool.delete')
    //         .waitForElementVisible('div.confirm-content', 30000)
    //         .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
    //         .click('div.confirm-content button.confirm-yes')
    //         .waitForElementNotPresent('li.album.black:nth-child(3)', 3000)
    //         .pause(1000)    // Allows time for album to be deleted
    //         .waitForElementVisible('li.album.black:nth-child(2) img.album-tool.delete', 3000)
    //         .click('li.album.black:nth-child(2) img.album-tool.delete')
    //         .waitForElementVisible('div.confirm-content', 30000)
    //         .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
    //         .click('div.confirm-content button.confirm-yes')
    //         .waitForElementNotPresent('li.album.black:nth-child(2)', 3000)
    //         // Log off
    //         .waitForElementVisible('button.hamburger', 3000)
    //         .click('button.hamburger')
    //         .waitForElementVisible('div.logout-button', 3000)
    //         .click('div.logout-button')
    //         .waitForElementVisible('div.tekuma-logo', 5000)
    //         .end();
    // },
    // 'Test Album: Delete Album (Test 1)' : function (browser) {
    //     // Add album and then delete it
    //     browser
    //         .url('https://project-7614141605200030275.firebaseapp.com')
    //         .waitForElementVisible('body', 2000)
    //         // Login
    //         .waitForElementVisible('div.header-writing.login', 2000)
    //         .click('div.header-writing.login')
    //         .waitForElementVisible('.hidden-login input[type=email]', 2000)
    //         .setValue('.hidden-login input[type=email]', 'testrunner@tekuma.io')
    //         .setValue('.hidden-login input[type=password]', 'password')
    //         .waitForElementVisible('button.login-button', 2000)
    //         .click('button.login-button')
    //         .pause(3000)
    //         // Assert Misc Album
    //         .waitForElementVisible('body', 3000)
    //         .waitForElementVisible('li.album.black:nth-child(1)', 3000)
    //         .assert.containsText('li.album.black:nth-child(1) > h3.album-name', 'Miscellaneous')
    //         // Add Album
    //         .waitForElementVisible('button.add-album', 2000)
    //         .click('button.add-album')
    //         .waitForElementVisible('li.album.black:nth-child(2)', 3000)
    //         .assert.containsText('li.album.black:nth-child(2) > h3.album-name', 'Untitled 1')
    //         // Delete Album
    //         .waitForElementVisible('li.album.black:nth-child(2) img.album-tool.delete', 3000)
    //         .click('li.album.black:nth-child(2) img.album-tool.delete')
    //         .waitForElementVisible('div.confirm-content', 30000)
    //         .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
    //         .click('div.confirm-content button.confirm-yes')
    //         .waitForElementNotPresent('li.album.black:nth-child(2)', 3000)
    //         // Log off
    //         .waitForElementVisible('button.hamburger', 3000)
    //         .click('button.hamburger')
    //         .waitForElementVisible('div.logout-button', 3000)
    //         .click('div.logout-button')
    //         .waitForElementVisible('div.tekuma-logo', 5000)
    //         .end();
    // },
    // 'Test Album: Delete Album (Test 2)' : function (browser) {
    //     // Add two albums, delete first one, and add another
    //     // Names should be in order: Miscellaneous, Untitled 2, Untitled 1
    //     browser
    //         .url('https://project-7614141605200030275.firebaseapp.com')
    //         .waitForElementVisible('body', 2000)
    //         // Login
    //         .waitForElementVisible('div.header-writing.login', 2000)
    //         .click('div.header-writing.login')
    //         .waitForElementVisible('.hidden-login input[type=email]', 2000)
    //         .setValue('.hidden-login input[type=email]', 'testrunner@tekuma.io')
    //         .setValue('.hidden-login input[type=password]', 'password')
    //         .waitForElementVisible('button.login-button', 2000)
    //         .click('button.login-button')
    //         .pause(3000)
    //         // Assert Misc Album
    //         .waitForElementVisible('body', 3000)
    //         .waitForElementVisible('li.album.black:nth-child(1)', 3000)
    //         .assert.containsText('li.album.black:nth-child(1) > h3.album-name', 'Miscellaneous')
    //         // Add albums
    //         .waitForElementVisible('button.add-album', 2000)
    //         .click('button.add-album')
    //         .click('button.add-album')
    //         .waitForElementVisible('li.album.black:nth-child(2)', 3000)
    //         .assert.containsText('li.album.black:nth-child(2) > h3.album-name', 'Untitled 1')
    //         .waitForElementVisible('li.album.black:nth-child(3)', 3000)
    //         .assert.containsText('li.album.black:nth-child(3) > h3.album-name', 'Untitled 2')
    //         .waitForElementVisible('li.album.black:nth-child(2) img.album-tool.delete', 3000)
    //         // Delete First Album
    //         .click('li.album.black:nth-child(2) img.album-tool.delete')
    //         .waitForElementVisible('div.confirm-content', 30000)
    //         .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
    //         .click('div.confirm-content button.confirm-yes')
    //         .waitForElementNotPresent('li.album.black:nth-child(3)', 3000)
    //         .pause(1000)
    //         // Add new album
    //         .click('button.add-album')
    //         // Assert correct name order
    //         .waitForElementVisible('li.album.black:nth-child(2)', 3000)
    //         .assert.containsText('li.album.black:nth-child(2) > h3.album-name', 'Untitled 2')
    //         .waitForElementVisible('li.album.black:nth-child(3)', 3000)
    //         .assert.containsText('li.album.black:nth-child(3) > h3.album-name', 'Untitled 1')
    //         // Clear Albums for next test
    //         .waitForElementVisible('li.album.black:nth-child(2) img.album-tool.delete', 3000)
    //         .click('li.album.black:nth-child(2) img.album-tool.delete')
    //         .waitForElementVisible('div.confirm-content', 30000)
    //         .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
    //         .click('div.confirm-content button.confirm-yes')
    //         .waitForElementNotPresent('li.album.black:nth-child(3)', 3000)
    //         .pause(1000)    // Allows time for album to be deleted
    //         .waitForElementVisible('li.album.black:nth-child(2) img.album-tool.delete', 3000)
    //         .click('li.album.black:nth-child(2) img.album-tool.delete')
    //         .waitForElementVisible('div.confirm-content', 30000)
    //         .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
    //         .click('div.confirm-content button.confirm-yes')
    //         .waitForElementNotPresent('li.album.black:nth-child(2)', 3000)
    //         // Log off
    //         .waitForElementVisible('button.hamburger', 3000)
    //         .click('button.hamburger')
    //         .waitForElementVisible('div.logout-button', 3000)
    //         .click('div.logout-button')
    //         .waitForElementVisible('div.tekuma-logo', 5000)
    //         .end();
    // },
    // 'Test Album: Edit Misc Album (Edit Artist)' : function (browser) {
    //     // Add artwork into Misc, and press edit button
    //     // Edit album artist and save
    //     // Check if artwork and album have new artist name
    //     browser
    //         .url('https://project-7614141605200030275.firebaseapp.com')
    //         .waitForElementVisible('body', 2000)
    //         // Login
    //         .waitForElementVisible('div.header-writing.login', 2000)
    //         .click('div.header-writing.login')
    //         .waitForElementVisible('.hidden-login input[type=email]', 2000)
    //         .setValue('.hidden-login input[type=email]', 'testrunner@tekuma.io')
    //         .setValue('.hidden-login input[type=password]', 'password')
    //         .waitForElementVisible('button.login-button', 2000)
    //         .click('button.login-button')
    //         .pause(3000)
    //         // Assert Misc Album
    //         .waitForElementVisible('body', 3000)
    //         .waitForElementVisible('li.album.black:nth-child(1)', 3000)
    //         .click('li.album.black:nth-child(1)')
    //         .waitForElementVisible('div.artwork-upload-box', 3000)
    //         // Upload Image
    //         .setValue('div.artwork-upload-box input[type=file]', require('path').resolve(__dirname + '/test_image.png'))
    //         .waitForElementVisible('article.dropzone-image-preview-container', 10000)
    //         .click('button.upload-dialog-button')
    //         // Edit Artist Name
    //         .pause(1000)    // Pause allows for time between upload and edit screen
    //         .waitForElementVisible('li.album.black:first-child img.album-tool.edit', 3000)
    //         .click('li.album.black:first-child div.album-tools img.album-tool.edit')
    //         .waitForElementVisible('div.edit-album-content', 3000)
    //         .setValue('div.edit-album-content input[type=text]#album-artist', 'Tekuma Artist')
    //         .click('button.edit-album-yes')
    //         .pause(1000)
    //         // Assert that changed for both artwork and album
    //         // First check Artwork
    //         .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
    //         .click('article.artwork img.artwork-tool.edit')
    //         .waitForElementVisible('div.edit-artwork-content input[type=text]#artwork-artist', 1000)
    //         .assert.value('div.edit-artwork-content input[type=text]#artwork-artist', 'Tekuma Artist')
    //         .click('button.edit-artwork-no')
    //         .pause(1000)
    //         // Then check Album
    //         .waitForElementVisible('li.album.black:first-child img.album-tool.edit', 3000)
    //         .click('li.album.black:first-child img.album-tool.edit')
    //         .waitForElementVisible('div.edit-album-content', 3000)
    //         .assert.value('input[type=text]#album-artist', 'Tekuma Artist')
    //         .click('button.edit-album-no')
    //         .pause(1000)
    //         // Delete Artwork
    //         .waitForElementVisible('article.artwork img.artwork-tool.delete', 1000)
    //         .click('article.artwork img.artwork-tool.delete')
    //         .waitForElementVisible('div.confirm-content', 30000)
    //         .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
    //         .click('div.confirm-content button.confirm-yes')
    //         .waitForElementNotPresent('div.artworks article.artwork', 3000)
    //         .pause(2000)
    //         // Log off
    //         .waitForElementVisible('button.hamburger', 3000)
    //         .click('button.hamburger')
    //         .waitForElementVisible('div.logout-button', 3000)
    //         .click('div.logout-button')
    //         .waitForElementVisible('div.tekuma-logo', 5000)
    //         .end();
    // },
    // 'Test Album: Edit Misc Album (Edit Year)' : function (browser) {
    //     // Add artwork into Misc, and press edit button
    //     // Edit album year and save
    //     // Check if artwork and album have new year
    //     browser
    //         .url('https://project-7614141605200030275.firebaseapp.com')
    //         .waitForElementVisible('body', 2000)
    //         // Login
    //         .waitForElementVisible('div.header-writing.login', 2000)
    //         .click('div.header-writing.login')
    //         .waitForElementVisible('.hidden-login input[type=email]', 2000)
    //         .setValue('.hidden-login input[type=email]', 'testrunner@tekuma.io')
    //         .setValue('.hidden-login input[type=password]', 'password')
    //         .waitForElementVisible('button.login-button', 2000)
    //         .click('button.login-button')
    //         .pause(3000)
    //         // Assert Misc Album
    //         .waitForElementVisible('body', 3000)
    //         .waitForElementVisible('li.album.black:nth-child(1)', 3000)
    //         .click('li.album.black:nth-child(1)')
    //         .waitForElementVisible('div.artwork-upload-box', 3000)
    //         // Upload Image
    //         .setValue('div.artwork-upload-box input[type=file]', require('path').resolve(__dirname + '/test_image.png'))
    //         .waitForElementVisible('article.dropzone-image-preview-container', 10000)
    //         .click('button.upload-dialog-button')
    //         // Edit Album Year
    //         .pause(1000)    // Pause allows for time between upload and edit screen
    //         .waitForElementVisible('li.album.black:first-child img.album-tool.edit', 3000)
    //         .click('li.album.black:first-child div.album-tools img.album-tool.edit')
    //         .waitForElementVisible('div.edit-album-content', 3000)
    //         .setValue('div.edit-album-content input[type=text]#album-year', '2013')
    //         .click('button.edit-album-yes')
    //         .pause(1000)
    //         // Assert that changed for both artwork and album
    //         // First check Artwork
    //         .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
    //         .click('article.artwork img.artwork-tool.edit')
    //         .waitForElementVisible('div.edit-artwork-content input[type=text]#artwork-year', 1000)
    //         .assert.value('div.edit-artwork-content input[type=text]#artwork-year', '2013')
    //         .click('button.edit-artwork-no')
    //         .pause(1000)
    //         // Then check Album
    //         .waitForElementVisible('li.album.black:first-child img.album-tool.edit', 3000)
    //         .click('li.album.black:first-child img.album-tool.edit')
    //         .waitForElementVisible('div.edit-album-content', 3000)
    //         .assert.value('input[type=text]#album-year', '2013')
    //         .click('button.edit-album-no')
    //         .pause(1000)
    //         // Delete Artwork
    //         .waitForElementVisible('article.artwork img.artwork-tool.delete', 1000)
    //         .click('article.artwork img.artwork-tool.delete')
    //         .waitForElementVisible('div.confirm-content', 30000)
    //         .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
    //         .click('div.confirm-content button.confirm-yes')
    //         .waitForElementNotPresent('div.artworks article.artwork', 3000)
    //         .pause(2000)
    //         // Log off
    //         .waitForElementVisible('button.hamburger', 3000)
    //         .click('button.hamburger')
    //         .waitForElementVisible('div.logout-button', 3000)
    //         .click('div.logout-button')
    //         .waitForElementVisible('div.tekuma-logo', 5000)
    //         .end();
    // },
    'Test Album: Edit Misc Album (Edit Tags)' : function (browser) {
        // Add artwork into Misc, and press edit button
        // Edit album year and save
        // Check if artwork and album have new year
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
            .click('li.album.black:nth-child(1)')
            .waitForElementVisible('div.artwork-upload-box', 3000)
            // Upload Image
            .setValue('div.artwork-upload-box input[type=file]', require('path').resolve(__dirname + '/test_image.png'))
            .waitForElementVisible('article.dropzone-image-preview-container', 10000)
            .click('button.upload-dialog-button')
            // Edit Tags
            .pause(1000)    // Pause allows for time between upload and edit screen
            .waitForElementVisible('li.album.black:first-child img.album-tool.edit', 3000)
            .click('li.album.black:first-child div.album-tools img.album-tool.edit')
            .waitForElementVisible('div.edit-album-content .ReactTags__tagInput input[type=text]', 3000)
            .setValue('div.edit-album-content .ReactTags__tagInput input[type=text]', 'tekuma')
            .keys(browser.Keys.ENTER, () => {
                browser
                    .click('button.edit-album-yes')
                    .waitForElementNotVisible('div.edit-album-content', 2000)
                    .pause(1000)
                    // Assert that changed for both artwork and album
                    // First check Artwork
                    .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
                    .click('article.artwork img.artwork-tool.edit')
                    .waitForElementVisible('div.edit-artwork-content div.artwork-edit-dialog li:nth-child(5)', 1000)
                    .assert.containsText('div.edit-artwork-content li:nth-child(5) div.ReactTags__tags div.ReactTags__selected span.ReactTags__tag', 'tekuma')
                    .click('button.edit-artwork-no')
                    .pause(1000)
                    // Then check Album
                    .waitForElementVisible('li.album.black:first-child img.album-tool.edit', 3000)
                    .click('li.album.black:first-child img.album-tool.edit')
                    .waitForElementVisible('div.edit-album-content div.ReactTags__tags div.ReactTags__selected span.ReactTags__tag', 3000)
                    .assert.value('div.edit-artwork-content div.ReactTags__tags div.ReactTags__selected span.ReactTags__tag', 'tekuma')
                    .click('button.edit-album-no')
                    .pause(1000)
                    // Delete Artwork
                    .waitForElementVisible('article.artwork img.artwork-tool.delete', 1000)
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

    }
    // 'Test Album: Edit Misc Album (Edit Description)' : function (browser) {
    //     // Add artwork into Misc, and press edit button
    //     // Edit album year and save
    //     // Check if artwork and album have new year
    //     browser
    //         .url('https://project-7614141605200030275.firebaseapp.com')
    //         .waitForElementVisible('body', 2000)
    //         // Login
    //         .waitForElementVisible('div.header-writing.login', 2000)
    //         .click('div.header-writing.login')
    //         .waitForElementVisible('.hidden-login input[type=email]', 2000)
    //         .setValue('.hidden-login input[type=email]', 'testrunner@tekuma.io')
    //         .setValue('.hidden-login input[type=password]', 'password')
    //         .waitForElementVisible('button.login-button', 2000)
    //         .click('button.login-button')
    //         .pause(3000)
    //         // Assert Misc Album
    //         .waitForElementVisible('body', 3000)
    //         .waitForElementVisible('li.album.black:nth-child(1)', 3000)
    //         .click('li.album.black:nth-child(1)')
    //         .waitForElementVisible('div.artwork-upload-box', 3000)
    //         // Upload Image
    //         .setValue('div.artwork-upload-box input[type=file]', require('path').resolve(__dirname + '/test_image.png'))
    //         .waitForElementVisible('article.dropzone-image-preview-container', 10000)
    //         .click('button.upload-dialog-button')
    //         // Edit Description
    //         .pause(1000)    // Pause allows for time between upload and edit screen
    //         .waitForElementVisible('li.album.black:first-child img.album-tool.edit', 3000)
    //         .click('li.album.black:first-child div.album-tools img.album-tool.edit')
    //         .waitForElementVisible('div.edit-album-content', 3000)
    //         .setValue('div.edit-album-content textarea#album-description', 'This is an album description.')
    //         .click('button.edit-album-yes')
    //         .pause(1000)
    //         // Assert that changed for both artwork and album
    //         // First check Artwork
    //         .waitForElementVisible('article.artwork img.artwork-tool.edit', 1000)
    //         .click('article.artwork img.artwork-tool.edit')
    //         .waitForElementVisible('div.edit-artwork-content  textarea#artwork-description', 1000)
    //         .assert.value('div.edit-artwork-content  textarea#artwork-description', 'This is an album description.')
    //         .click('button.edit-artwork-no')
    //         .pause(1000)
    //         // Then check Album
    //         .waitForElementVisible('li.album.black:first-child img.album-tool.edit', 3000)
    //         .click('li.album.black:first-child img.album-tool.edit')
    //         .waitForElementVisible('div.edit-album-content', 3000)
    //         .assert.value('input[type=text]#album-year', '2013')
    //         .click('button.edit-album-no')
    //         .pause(1000)
    //         // Delete Artwork
    //         .waitForElementVisible('article.artwork img.artwork-tool.delete', 1000)
    //         .click('article.artwork img.artwork-tool.delete')
    //         .waitForElementVisible('div.confirm-content', 30000)
    //         .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
    //         .click('div.confirm-content button.confirm-yes')
    //         .waitForElementNotPresent('div.artworks article.artwork', 3000)
    //         .pause(1000)
    //         // Log off
    //         .waitForElementVisible('button.hamburger', 3000)
    //         .click('button.hamburger')
    //         .waitForElementVisible('div.logout-button', 3000)
    //         .click('div.logout-button')
    //         .waitForElementVisible('div.tekuma-logo', 5000)
    //         .end();
    // }

};
