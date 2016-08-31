module.exports = {
    'Test Album: Add Artwork in Empty Miscellaneous (Click Artworks Box)' : function (browser) {
        // Add
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
    'Test Album: Add Artwork in Empty Miscellaneous (Click Plus Button on Header)' : function (browser) {
        // Add
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
            .setValue('header + div input[type=file]', require('path').resolve(__dirname + '/test_image_1.png'))
            .waitForElementVisible('article.dropzone-image-preview-container', 10000)
            .click('button.upload-dialog-button')
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
    'Test Album: Add Second Artwork in Miscellaneous (via Click)' : function (browser) {
        // Add
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
            // Upload first Image
            .setValue('div.artwork-upload-box input[type=file]', require('path').resolve(__dirname + '/test_image_1.png'))
            .waitForElementVisible('article.dropzone-image-preview-container', 10000)
            .click('button.upload-dialog-button')
            // Upload second Image
            .setValue('div.artworks.no-margin + input[type=file]', require('path').resolve(__dirname + '/test_image_2.jpg'))
            .waitForElementVisible('article.dropzone-image-preview-container', 10000)
            .click('button.upload-dialog-button')
            // Delete Artworks
            // Delete First Artwork
            .waitForElementVisible('article.artwork:nth-child(1) img.artwork-tool.delete', 1000)
            .pause(2000)
            .click('article.artwork:nth-child(1) img.artwork-tool.delete')
            .waitForElementVisible('div.confirm-content', 30000)
            .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
            .click('div.confirm-content button.confirm-yes')
            .waitForElementNotPresent('div.artworks article.artwork:nth-child(2)', 3000)
            // Delete Second Artwork
            .waitForElementVisible('article.artwork:nth-child(1) img.artwork-tool.delete', 1000)
            .pause(2000)
            .click('article.artwork:nth-child(1) img.artwork-tool.delete')
            .waitForElementVisible('div.confirm-content', 30000)
            .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
            .click('div.confirm-content button.confirm-yes')
            .waitForElementNotPresent('div.artworks article.artwork:nth-child(1)', 3000)
            .pause(2000)
            // Log off
            .waitForElementVisible('button.hamburger', 3000)
            .click('button.hamburger')
            .waitForElementVisible('div.logout-button', 3000)
            .click('div.logout-button')
            .waitForElementVisible('div.tekuma-logo', 5000)
            .end();
    },
    'Test Album: Add Artwork in Empty New Album (Click Artworks Box)' : function (browser) {
        // Add
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
            // Click New Album
            .click('li.album.black:nth-child(2)')
            // Upload Image
            .setValue('div.artwork-upload-box input[type=file]', require('path').resolve(__dirname + '/test_image_1.png'))
            .waitForElementVisible('article.dropzone-image-preview-container', 10000)
            .click('button.upload-dialog-button')
            // Delete Album
            .waitForElementVisible('li.album.black:nth-child(2) img.album-tool.delete', 3000)
            .pause(2000)
            .click('li.album.black:nth-child(2) img.album-tool.delete')
            .waitForElementVisible('div.confirm-content', 30000)
            .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
            .click('div.confirm-content button.confirm-yes')
            .waitForElementNotPresent('li.album.black:nth-child(2)', 3000)
            .pause(2000)
            // Log off
            .waitForElementVisible('button.hamburger', 3000)
            .click('button.hamburger')
            .waitForElementVisible('div.logout-button', 3000)
            .click('div.logout-button')
            .waitForElementVisible('div.tekuma-logo', 5000)
            .end();
    },
    'Test Album: Add Artwork in Empty New Album (Click Plus Button on Header)' : function (browser) {
        // Add
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
            // Click New Album
            .click('li.album.black:nth-child(2)')
            // Upload Image
            .setValue('header + div input[type=file]', require('path').resolve(__dirname + '/test_image_1.png'))
            .waitForElementVisible('article.dropzone-image-preview-container', 10000)
            .click('button.upload-dialog-button')
            // Delete Album
            .waitForElementVisible('li.album.black:nth-child(2) img.album-tool.delete', 3000)
            .pause(2000)
            .click('li.album.black:nth-child(2) img.album-tool.delete')
            .waitForElementVisible('div.confirm-content', 30000)
            .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
            .click('div.confirm-content button.confirm-yes')
            .waitForElementNotPresent('li.album.black:nth-child(2)', 3000)
            .pause(2000)
            // Log off
            .waitForElementVisible('button.hamburger', 3000)
            .click('button.hamburger')
            .waitForElementVisible('div.logout-button', 3000)
            .click('div.logout-button')
            .waitForElementVisible('div.tekuma-logo', 5000)
            .end();
    },
    'Test Album: Add Second Artwork in Empty New Album (via Click)' : function (browser) {
        // Add
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
            // Click New Album
            .click('li.album.black:nth-child(2)')
            // Upload first Image
            .setValue('div.artwork-upload-box input[type=file]', require('path').resolve(__dirname + '/test_image_1.png'))
            .waitForElementVisible('article.dropzone-image-preview-container', 10000)
            .click('button.upload-dialog-button')
            // Upload second Image
            .setValue('div.artworks.no-margin + input[type=file]', require('path').resolve(__dirname + '/test_image_2.jpg'))
            .waitForElementVisible('article.dropzone-image-preview-container', 10000)
            .click('button.upload-dialog-button')
            // Delete Album
            .waitForElementVisible('li.album.black:nth-child(2) img.album-tool.delete', 3000)
            .pause(2000)
            .click('li.album.black:nth-child(2) img.album-tool.delete')
            .waitForElementVisible('div.confirm-content', 30000)
            .waitForElementVisible('div.confirm-content button.confirm-yes', 1000)
            .click('div.confirm-content button.confirm-yes')
            .waitForElementNotPresent('li.album.black:nth-child(2)', 3000)
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
