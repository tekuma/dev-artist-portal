// Libs
import React from 'react';
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

describe('ArtworksAlbumManager', () => {
    let component;

    beforeEach(() => {
        // toggleEditAlbumDialog,
        // toggleEditMiscAlbumDialog,
        // changeCurrentEditAlbum,
        let user = {
            albums : {
                0: {
                    artist: "",
                    description: "",
                    name: "Miscellaneous",
                    year: ""
                }
            },
            auth_provider: "google",
            avatar: "",
            bio: "",
            display_name: "Untitled Artist",
            location: "",
            portfolio: "",
            social_media: {
                behance: "",
                facebook: "",
                instagram: "",
                pinterest: "",
                twitter: ""
            }
        },
        userPrivate = {
            dob: "",
            email: "fake@gmail.com",
            gender_pronoun: "",
            legal_name: "",
            over_eighteen: false,
            paypal: ""
        },
        managerIsOpen = true,
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
