// Libs
import React from 'react';
import firebase            from 'firebase';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithClass,
    findRenderedDOMComponentWithClass,
    Simulate
} from 'react-addons-test-utils';
import TestBackend from 'react-dnd-test-backend';
import {DragDropContext} from 'react-dnd';
import assert from 'assert';

// Files
import ArtworksAlbumManager from '../app/components/album_manager/ArtworksAlbumManager';
import Albums from '../app/components/album_manager/Albums';
import AlbumToggler from '../app/components/album_manager/AlbumToggler';
import MiscAlbum from '../app/components/album_manager/MiscAlbum';
import Album from '../app/components/album_manager/Album';
import EditAlbumDialog from '../app/components/edit_album/EditAlbumDialog';
import EditMiscAlbumDialog from '../app/components/edit_misc/EditMiscAlbumDialog';
import confirm from '../app/components/confirm_dialog/ConfirmFunction';
import ItemTypes from '../app/constants/itemTypes';

let config = {
    apiKey: "AIzaSyCbhMwmZJCt_enKPajoKeeJe9YyRK6lYO8",
    authDomain: "project-7614141605200030275.firebaseapp.com",
    databaseURL: "https://project-7614141605200030275.firebaseio.com",
    storageBucket: "project-7614141605200030275.appspot.com",
};

firebase.initializeApp(config);

describe('ArtworksAlbumManager', () => {
    let managerComponent;
    let editAlbumDialog;
    let editMiscAlbumDialog;
    let user;
    let userPrivate;
    let currentAlbum;
    let uid;
    let currentEditAlbumInfo = {};
    let managerIsOpen = true;
    let editAlbumIsOpen = false;
    let editMiscAlbumIsOpen = false;

    before('Initialize Firebase', (done) => {
         firebase.auth().signInWithEmailAndPassword("test@tekuma.io", "password")
         .then((thisUser) => {
             uid   = firebase.auth().currentUser.uid;
             console.log("UID: ", uid);
             done();
         }).catch( (error) => {
             console.error("Firebase Authentication Failed", error);
             done();
         });
    });

    before('Initialize Firebase', (done) => {
        firebase.database().ref(`public/onboarders/${uid}`).on('value', (snapshot)=>{
             console.log("Hello, im in userPath");
             user = snapshot.val();
             console.log("user: ", user);
             console.log("FIREBASE: user info updated");
             done();
         }, (error) => {
             console.error("Getting User Info Failed", error);
             done();
        });
    });

    beforeEach('Create DOM', () => {

        let toggleManager = () => {
            managerIsOpen = !managerIsOpen;
        };

        let changeAlbum = (name) => {
            currentAlbum = name;
        };

        let toggleEditAlbumDialog = () => {
            editAlbumIsOpen = !editAlbumIsOpen;
        }

        let toggleEditMiscAlbumDialog = () => {
            editMiscAlbumIsOpen = !editMiscAlbumIsOpen;
        }

        const AlbumManagerContent = wrapInTestContext(ArtworksAlbumManager);

        managerComponent = renderIntoDocument(
            <AlbumManagerContent
                user                   ={user}
                uid                    ={uid}
                userPrivate            ={userPrivate}
                managerIsOpen          ={managerIsOpen}
                toggleManager          ={toggleManager}
                currentAlbum           ={currentAlbum}
                changeAlbum            ={changeAlbum}
                toggleEditAlbumDialog  ={toggleEditAlbumDialog}
                toggleEditMiscAlbumDialog  ={toggleEditMiscAlbumDialog}
                changeCurrentEditAlbum ={changeCurrentEditAlbum}
                />
        );

        editAlbumDialog = renderIntoDocument(
            <EditAlbumDialog
                user={user}
                editAlbumIsOpen={editAlbumIsOpen}
                toggleEditAlbumDialog={toggleEditAlbumDialog}
                updateAlbum={updateAlbum}
                currentEditAlbumInfo={currentEditAlbumInfo} />
        );

        editMiscAlbumDialog = renderIntoDocument(
            <EditMiscAlbumDialog
                user={user}
                editMiscAlbumIsOpen={editMiscAlbumIsOpen}
                toggleEditMiscAlbumDialog={toggleEditMiscAlbumDialog}
                updateAlbum={updateAlbum}
                currentEditAlbumInfo={currentEditAlbumInfo} />
        );
    });

    it('Assert Structure', () => {
        // Asserts basic structure of an albumless Album Manager
        // There should only be the Misc Album in the Manager

        const numAlbums = scryRenderedDOMComponentsWithClass(managerComponent, 'album black');
        assert.equal(numAlbums.length, 1); // The one is the Misc Album
    });

    it('Add Album: Test 1', () => {
        // Asserts whether an album can be added to the Album Manager
        // There should be two albums once an album is added
        // The album should have the name 'Untitled 1'

        let addAlbum = findRenderedDOMComponentWithClass(managerComponent, "add-album");
        Simulate.click(addAlbum);

        setTimeout(() => {
            const numAlbums = scryRenderedDOMComponentsWithClass(managerComponent, 'album black');
            assert.equal(numAlbums.length, 2); // One is the Misc Album, One is the New Album

            const newAlbum = numAlbums[1];
            const newAlbumName = findRenderedDOMComponentWithClass(newAlbum, 'album-name');
            assert.equal(newAlbumName, "Untitled 1");
        }, 500);
    });

    it('Add Album: Test 2', () => {
        // Asserts whether two albums can be added to the Album Manager
        // There should be three albums once an album is added
        // Album 1 should have the name 'Untitled 1'
        // Album 2 should have the name 'Untitled 2'

        let addAlbum = findRenderedDOMComponentWithClass(managerComponent, "add-album");
        Simulate.click(addAlbum);
        Simulate.click(addAlbum);

        setTimeout(() => {
            const numAlbums = scryRenderedDOMComponentsWithClass(managerComponent, 'album black');
            assert.equal(numAlbums.length, 3); // One is the Misc Album, One is the New Album

            const newAlbumOne = numAlbums[1];
            const newAlbumNameOne = findRenderedDOMComponentWithClass(newAlbumOne, 'album-name');
            assert.equal(newAlbumNameOne, "Untitled 1");

            const newAlbumTwo = numAlbums[2];
            const newAlbumNameTwo = findRenderedDOMComponentWithClass(newAlbumTwo, 'album-name');
            assert.equal(newAlbumNameTwo, "Untitled 2");
        }, 500);

    });
    //
    // it('Delete Album: Test 1', () => {
    //     // Asserts whether an album can be deleted
    //     // Album 1 should be deleted
    //
    //     let addAlbum = findRenderedDOMComponentWithClass(managerComponent, "add-album");
    //     Simulate.click(addAlbum);
    //     let numAlbums = scryRenderedDOMComponentsWithClass(managerComponent, 'album black');
    //     assert.equal(numAlbums.length, 2); // One is the Misc Album, One is the New Album
    //
    //     const toDelete = numAlbums[1];
    //     const deleteAlbum = findRenderedDOMComponentWithClass(toDelete, 'album-tool delete');
    //     Simulate.click(deleteAlbum);
    //
    //     numAlbums = scryRenderedDOMComponentsWithClass(managerComponent, 'album black');
    //     assert.equal(numAlbums.length, 1); // The one is the Misc Album
    // });
    //
    // it('Delete Album: Test 2', () => {
    //     // Asserts whether an album can be deleted
    //     // Album 1 should be deleted
    //     // Album 2 should remain, with name 'Untitled 2'
    //
    //     let addAlbum = findRenderedDOMComponentWithClass(managerComponent, "add-album");
    //     Simulate.click(addAlbum);
    //     Simulate.click(addAlbum);
    //     let numAlbums = scryRenderedDOMComponentsWithClass(managerComponent, 'album black');
    //     assert.equal(numAlbums.length, 3); // One is the Misc Album, One is the New Album
    //
    //     const toDelete = numAlbums[1];
    //     const deleteAlbum = findRenderedDOMComponentWithClass(toDelete, 'album-tool delete');
    //     Simulate.click(deleteAlbum);
    //
    //     numAlbums = scryRenderedDOMComponentsWithClass(managerComponent, 'album black');
    //     assert.equal(numAlbums.length, 2); // The one is the Misc Album, the other is album two.
    //
    //     const albumTwo = numAlbums[1];
    //     const albumTwoName = findRenderedDOMComponentWithClass(albumTwo, 'album-name');
    //     assert.equal(albumTwoName, "Untitled 2");
    // });
    //
    // it('Delete Album: Test 3', () => {
    //     // Asserts whether an album can be deleted
    //     // Album 1 should be deleted
    //     // Album 2 should remain, with name 'Untitled 2'
    //     // A third album should be added with the name 'Untitled 1'
    //
    //     let addAlbum = findRenderedDOMComponentWithClass(managerComponent, "add-album");
    //     Simulate.click(addAlbum);
    //     Simulate.click(addAlbum);
    //     let numAlbums = scryRenderedDOMComponentsWithClass(managerComponent, 'album black');
    //     assert.equal(numAlbums.length, 3); // One is the Misc Album, One is the New Album
    //
    //     const toDelete = numAlbums[1];
    //     const deleteAlbum = findRenderedDOMComponentWithClass(toDelete, 'album-tool delete');
    //     Simulate.click(deleteAlbum);
    //
    //     Simulate.click(addAlbum);
    //     numAlbums = scryRenderedDOMComponentsWithClass(managerComponent, 'album black');
    //     assert.equal(numAlbums.length, 3); // The one is the Misc Album, the other is album two, the other is album three.
    //
    //     const albumTwo = numAlbums[1];
    //     const albumTwoName = findRenderedDOMComponentWithClass(albumTwo, 'album-name');
    //     assert.equal(albumTwoName, "Untitled 2");
    //
    //     const albumThree = numAlbums[2];
    //     const albumThreeName = findRenderedDOMComponentWithClass(albumThree, 'album-name');
    //     assert.equal(albumThreeName, "Untitled 1");
    // });
    //
    //
    // it('Edit Album', () => {
    //
    // });

    after('Initialize Firebase', (done) => {
        firebase.auth().signOut().then(() => {
          console.log("User signed out");
          done();
        }, (error) => {
          console.error(error);
          done();
        });
    });
});

function wrapInTestContext(DecoratedComponent) {
    @DragDropContext(TestBackend)
    class TestContextContainer extends React.Component {
        render() {
            return <DecoratedComponent {...this.props} />;
        }
    }
    return TestContextContainer;
}

function changeCurrentEditAlbum(id) {
    console.log("Entered changeCurrentEditAlbum");
    const thisUID = firebase.auth().currentUser.uid;
    let path = `public/onboarders/${thisUID}/albums/${id}`;
    let albumRef = firebase.database().ref(path);
    albumRef.once("value", (snapshot) => {
        let data = snapshot.val();
        data["id"] = id;

        currentEditAlbumInfo = data;
    }, null, this);
}

function updateAlbum(id, data) {
    const thisUID = firebase.auth().currentUser.uid;
    let thisAlbumRef = firebase.database().ref(`public/onboarders/${thisUID}/albums/${id}`);

    // Change the name of associated artworks if album changed
    if(data['name'] != user.albums[id]['name']) {
        // Change the name of associated artworks
        if (user.albums[id]['artworks']) {
            // change the album field for each artwork object
            let artLength = Object.keys(user.albums[id]['artworks']).length;
            for (let i = 0; i < artLength; i++) {
                let thisArtKey = user.albums[id]['artworks'][i];
                let artworkRef =firebase.database().ref(`public/onboarders/${thisUID}/artworks/${thisArtKey}`);
                artworkRef.transaction((node) => {
                    node['album'] = data['name'];
                    return node;
                });
            }
        }
    }

    // Change the artist of associated artworks if album changed
    if(data['artist'] && data['artist'] != user.albums[id]['artist']) {
        // Change the name of associated artworks
        if (user.albums[id]['artworks']) {
            // change the artist field for each artwork object
            let artLength = Object.keys(user.albums[id]['artworks']).length;
            for (let i = 0; i < artLength; i++) {
                let thisArtKey = user.albums[id]['artworks'][i];
                let artworkRef =firebase.database().ref(`public/onboarders/${thisUID}/artworks/${thisArtKey}`);
                artworkRef.transaction((node) => {
                    node['artist'] = data['artist'];
                    return node;
                });
            }
        }
    }

    // Change the year of associated artworks if album changed
    if(data['year'] && data['year'] != user.albums[id]['year']) {
        // Change the name of associated artworks
        if (user.albums[id]['artworks']) {
            // change the artist field for each artwork object
            let artLength = Object.keys(user.albums[id]['artworks']).length;
            for (let i = 0; i < artLength; i++) {
                let thisArtKey = user.albums[id]['artworks'][i];
                let artworkRef =firebase.database().ref(`public/onboarders/${thisUID}/artworks/${thisArtKey}`);
                artworkRef.transaction((node) => {
                    node['year'] = data['year'];
                    return node;
                });
            }
        }
    }

    // Change the tags of associated artworks if album changed
    if(data['tags'] && data['tags'] != user.albums[id]['tags']) {
        // Change the name of associated artworks
        if (user.albums[id]['artworks']) {
            // change the artist field for each artwork object
            let artLength = Object.keys(user.albums[id]['artworks']).length;
            for (let i = 0; i < artLength; i++) {
                let thisArtKey = user.albums[id]['artworks'][i];
                let artworkRef =firebase.database().ref(`public/onboarders/${thisUID}/artworks/${thisArtKey}`);
                artworkRef.transaction((node) => {
                    let albumTagsLength = data['tags'].length;

                    let tagInArtwork = false;

                    // Loops through all album tags
                    for (let i = 0; i < albumTagsLength; i++) {
                        tagInArtwork = false;
                        let artworkTagsLength = 0

                        if (node['tags']) {
                            artworkTagsLength = Object.keys(node['tags']).length;

                            // Loops through all artwork tags
                            for (let j = 0; j < artworkTagsLength; j++) {
                                if (data['tags'][i]['text'] == node['tags'][j]['text']) {
                                    tagInArtwork = true;
                                    break;
                                }
                            }
                        }

                        if (!tagInArtwork && artworkTagsLength > 0) {
                            // Entered if already has tags field
                            let newTag = {
                                id: artworkTagsLength + 1,
                                text: data['tags'][i]['text']
                            };
                            node['tags'][artworkTagsLength] = newTag;
                        } else if (!tagInArtwork) {
                            // Entered if doesn't have tags field
                            let newTag = {
                                id: 1,
                                text: data['tags'][i]['text']
                            };
                            node['tags'] = {0 : newTag};
                        }
                    }

                    console.log("Here is the modified artwork: ", node);

                    return node;
                });
            }
        }
    }

    // Change the description of associated artworks if album changed
    if(data['description'] && data['description'] != user.albums[id]['description']) {
        // Change the name of associated artworks
        if (user.albums[id]['artworks']) {
            // change the artist field for each artwork object
            let artLength = Object.keys(user.albums[id]['artworks']).length;
            for (let i = 0; i < artLength; i++) {
                let thisArtKey = user.albums[id]['artworks'][i];
                let artworkRef =firebase.database().ref(`public/onboarders/${thisUID}/artworks/${thisArtKey}`);
                artworkRef.transaction((node) => {
                    node['description'] = data['description'];
                    return node;
                });
            }
        }
    }

    // If current album was this album, change its name
    if (currentAlbum == user.albums[id]['name']) {
        this.changeAlbum(data.name);
    }

    // Update Album
    thisAlbumRef.update(data).then( () => {
        if (id == 0){
            this.toggleEditMiscAlbumDialog();
        } else {
            this.toggleEditAlbumDialog();
        }
    });
}
