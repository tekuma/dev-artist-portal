// Libs
import React             from 'react';
import firebase          from 'firebase';
import TransitionGroup   from 'react-addons-transition-group';


//Files
import PostAuthHeader        from '../headers/PostAuthHeader';
import ArtworksAlbumManager  from '../album_manager/ArtworksAlbumManager';
import ReviewAlbumManager    from '../album_manager/ReviewAlbumManager';
import ReviewArtworkInfo     from '../review_albums/ReviewArtworkInfo';
import ReviewArtworks        from '../review_albums/ReviewArtworks';
import ArtworkManager        from '../artwork_manager/ArtworkManager';
import EditProfile           from '../edit_profile/EditProfile';
import Views                 from '../../constants/Views';


export default class PortalMain extends React.Component {
    state = {
    };

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("-----PortalMain");
    }

    render() {
        switch (this.props.currentAppLayout) {
            case Views.ARTWORKS:
                return this.goToArtworkManager();

            case Views.PROFILE:
                return this.goToEditProfile();

            case Views.REVIEW:
                return this.goToSubmissions();
        }
    }

    componentDidMount() {
        console.log("+++++PortalMain");
        window.addEventListener("resize", this.rerender);
    }

    componentWillReceiveProps(nextProps) {
        //TODO
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.rerender);
    }

// ============= Flow Control ===============

    goToArtworkManager = () => {
        return (
            <div className={this.props.navIsOpen ? "main-wrapper open" : "main-wrapper"}>
                <PostAuthHeader
                    setUploadedFiles ={this.props.setUploadedFiles}
                    changeAppLayout  ={this.props.changeAppLayout}
                    searchArtistUID  ={this.props.searchArtistUID}
                    />
                <ArtworksAlbumManager
                    thisUID                ={this.props.thisUID}
                    paths                  ={this.props.paths}
                    thumbnail              ={this.props.thumbnail}
                    user                   ={this.props.user}
                    userPrivate            ={this.props.userPrivate}
                    managerIsOpen          ={this.props.managerIsOpen}
                    toggleManager          ={this.props.toggleManager}
                    currentAlbum           ={this.props.currentAlbum}
                    changeAlbum            ={this.props.changeAlbum}
                    toggleEditAlbumDialog  ={this.props.toggleEditAlbumDialog}
                    toggleEditMiscAlbumDialog={this.props.toggleEditMiscAlbumDialog}
                    changeCurrentEditAlbum ={this.props.changeCurrentEditAlbum}
                    changeArtworkAlbum     ={this.props.changeArtworkAlbum}
                    submitAlbum            ={this.props.submitAlbum}
                    />
                <ArtworkManager
                    paths                    ={this.props.paths}
                    thumbnail                ={this.props.thumbnail}
                    deleteArtwork            ={this.props.deleteArtwork}
                    submitArtwork            ={this.props.submitArtwork}
                    user                     ={this.props.user}
                    currentAlbum             ={this.props.currentAlbum}
                    changeAlbum              ={this.props.changeAlbum}
                    toggleEditArtworkDialog  ={this.props.toggleEditArtworkDialog}
                    changeCurrentEditArtwork ={this.props.changeCurrentEditArtwork}
                    changeAppLayout          ={this.props.changeAppLayout}
                    managerIsOpen            ={this.props.managerIsOpen}
                    setUploadedFiles         ={this.props.setUploadedFiles}
                    />
                <div
                    onClick     ={this.props.toggleNav}
                    onTouchTap  ={this.props.toggleNav}
                    className   ={this.props.navIsOpen ? "site-overlay open" : "site-overlay"} />
            </div>
        );
    }

    goToEditProfile = () => {
        return (
            <div className={this.props.navIsOpen ? "main-wrapper open" : "main-wrapper"}>
                <PostAuthHeader
                    setUploadedFiles={this.props.setUploadedFiles}
                    changeAppLayout={this.props.changeAppLayout} />
                <div className="edit-profile-layout">
                    <EditProfile
                        user                      ={this.props.user}
                        userPrivate               ={this.props.userPrivate}
                        thumbnail                 ={this.props.thumbnail}
                        editPublicUserInfo        ={this.props.editPublicUserInfo}
                        editPrivateUserInfo       ={this.props.editPrivateUserInfo}
                        toggleDeleteAccountDialog ={this.props.toggleDeleteAccountDialog}
                        toggleVerifyEmailDialog   ={this.props.toggleVerifyEmailDialog}
                        />
                </div>
                <div
                    onClick     ={this.props.toggleNav}
                    onTouchTap  ={this.props.toggleNav}
                    className   ={this.props.navIsOpen ? "site-overlay open" : "site-overlay"} />
            </div>
        );
    }

    goToSubmissions = () => {
        return (
            <div className={this.props.navIsOpen ? "main-wrapper open" : "main-wrapper"}>
                <PostAuthHeader
                    setUploadedFiles ={this.props.setUploadedFiles}
                    changeAppLayout  ={this.props.changeAppLayout}
                    />
                <ReviewAlbumManager
                    currentAlbum       ={this.props.currentAlbum}
                    changeAlbum        ={this.props.changeAlbum}
                    managerIsOpen   ={this.props.managerIsOpen}
                    toggleManager   ={this.props.toggleManager} />
                <TransitionGroup>
                    <ReviewArtworks
                        managerIsOpen   ={this.props.managerIsOpen}/>
                </TransitionGroup>
                <TransitionGroup>
                    <ReviewArtworkInfo />
                </TransitionGroup>
                <div
                    onClick     ={this.props.toggleNav}
                    onTouchTap  ={this.props.toggleNav}
                    className   ={this.props.navIsOpen ? "site-overlay open" : "site-overlay"} />
            </div>
        );
    }

    // ============= Methods ===============

    rerender = () => {
        this.setState({});
    }
}

// ============= PropTypes ==============

PortalMain.propTypes = {
    thumbnail: React.PropTypes.func.isRequired,
    user: React.PropTypes.object.isRequired,
    userPrivate: React.PropTypes.object.isRequired,
    toggleNav: React.PropTypes.func.isRequired,
    navIsOpen: React.PropTypes.bool.isRequired,
    deleteArtwork: React.PropTypes.func.isRequired,
    submitArtwork: React.PropTypes.func.isRequired,
    submitAlbum: React.PropTypes.func.isRequired,
    toggleEditArtworkDialog: React.PropTypes.func.isRequired,
    toggleEditMiscAlbumDialog: React.PropTypes.func.isRequired,
    changeCurrentEditArtwork: React.PropTypes.func.isRequired,
    changeCurrentEditAlbum: React.PropTypes.func.isRequired,
    toggleManager: React.PropTypes.func.isRequired,
    managerIsOpen: React.PropTypes.bool.isRequired,
    changeAppLayout: React.PropTypes.func.isRequired,
    currentAlbum: React.PropTypes.string.isRequired,
    changeAlbum: React.PropTypes.func.isRequired,
    setUploadedFiles: React.PropTypes.func.isRequired,
    editPublicUserInfo: React.PropTypes.func.isRequired,
    editPrivateUserInfo: React.PropTypes.func.isRequired,
    toggleDeleteAccountDialog: React.PropTypes.func.isRequired,
    toggleVerifyEmailDialog: React.PropTypes.func.isRequired,
    changeArtworkAlbum: React.PropTypes.func.isRequired
};
