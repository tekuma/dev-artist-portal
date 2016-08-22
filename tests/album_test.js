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
    let uid = "BAR6XW6SHddhZ5X9UHLRKdC4AUj2";
    let currentEditAlbumInfo = {};
    let editAlbumIsOpen = false;
    let editMiscAlbumIsOpen = false;

    beforeEach('Intialize Firebase', () => {
         let userPath = `public/onboarders/BAR6XW6SHddhZ5X9UHLRKdC4AUj2`;
         firebase.database().ref(userPath).on('value', (snapshot)=>{
             console.log("Hello, im in userPath");
             user = snapshot.val();
             console.log("FIREBASE: user info updated");

             let toggleManager = () => {
                 managerIsOpen = !managerIsOpen
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
             done();
         }, (error) => {
             done();
             console.error(error);
        });
    });

    it('Assert Structure', () => {
        const numAlbums = scryRenderedDOMComponentsWithClass(managerComponent, 'album black');
        assert.equal(numAlbums.length, 1); // The one is the Misc Album
    });

    it('Add Album', () => {
        let addAlbum = findRenderedDOMComponentWithClass(managerComponent, "add-album");
        Simulate.click(addAlbum);
        const numAlbums = scryRenderedDOMComponentsWithClass(managerComponent, 'album black');
        assert.equal(numAlbums.length, 2); // One is the Misc Album, One is the New Album
    });

    it('Delete Album', () => {
        let numAlbums = scryRenderedDOMComponentsWithClass(managerComponent, 'album black');
        assert.equal(numAlbums.length, 2); // One is the Misc Album, One is the New Album

        const newAlbum = scryRenderedDOMComponentsWithClass(managerComponent, 'album black')[1];
        const deleteAlbum = findRenderedDOMComponentWithClass(newAlbum, 'album-tool delete');
        Simulate.click(deleteAlbum);

        numAlbums = scryRenderedDOMComponentsWithClass(managerComponent, 'album black');
        assert.equal(numAlbums.length, 1); // The one is the Misc Album
    });

    // it('Edit Album', () => {
    //
    // });
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
