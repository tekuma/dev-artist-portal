// Libs
import React from 'react';
import firebase            from 'firebase';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithClass,
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
    let component;
    let thisUID;
    let userPath;
    let userPrivatePath;
    let user;
    let userPrivate;


    beforeEach(() => {
        // toggleEditAlbumDialog,
        // toggleEditMiscAlbumDialog,
        // changeCurrentEditAlbum,

        firebase.auth().signInWithEmailAndPassword("test@tekuma.io", "password")
        .then(() => {
            console.log(">Password Auth successful for:", thisUser.displayName);
            thisUID   = firebase.auth().currentUser.uid;
            userPath = `public/onboarders/${thisUID}`;
            userPrivatePath = `_private/onboarders/${thisUID}`;

            firebase.database().ref(userPath).on('value', (snapshot)=>{
                user = snapshot.val()
                console.log("FIREBASE: user info updated");

            }, (error)=>{
                console.error(error);

            });

            firebase.database().ref(userPrivatePath).on('value', (snapshot)=>{
                userPrivate = snapshot.val()

            }, (error)=>{
                console.error(error);

            });
        }).catch( (error) => {
            console.error(error);
        });

        let managerIsOpen = true,
        currentAlbum = "Miscellaneous";

        let toggleManager = () => {
            managerIsOpen = !managerIsOpen
        };

        let changeAlbum = (name) => {
            currentAlbum = name;
        };

        const AlbumManagerContent = wrapInTestContext(ArtworksAlbumManager);

        component = renderIntoDocument(
            <AlbumManagerContent
                user                   ={user}
                userPrivate            ={userPrivate}
                managerIsOpen          ={managerIsOpen}
                toggleManager          ={toggleManager}
                currentAlbum           ={currentAlbum}
                changeAlbum            ={changeAlbum}
                />
        );
    });

    it('Assert Structure', () => {
        const rootElement = scryRenderedDOMComponentsWithClass(component, 'album-manager artworks-manager')

        const MiscAlbum = scryRenderedDOMComponentsWithClass(component, 'album black uploads');
        const numAlbums = scryRenderedDOMComponentsWithClass(component, 'album black');

        assert.equal(MiscAlbum.length, 1);
        assert.equal(numAlbums.length, 1); // The one is the Misc Album
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
