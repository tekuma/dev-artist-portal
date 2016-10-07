// Libs
import React                 from 'react';
import firebase              from 'firebase';
import TransitionGroup       from 'react-addons-transition-group';
//Files
import PostAuthHeader        from '../headers/PostAuthHeader';
import ArtworksAlbumManager  from '../album_manager/ArtworksAlbumManager';
import SubmitAlbumManager    from '../album_manager/SubmitAlbumManager';
import SubmitArtworkManager  from '../gallery/SubmitArtworkManager';
import SubmitArtworkInfo     from '../gallery/SubmitArtworkInfo';
import SubmitArtworks        from '../gallery/SubmitArtworks';
import ArtworkManager        from '../artwork_manager/ArtworkManager';
import EditProfile           from '../edit_profile/EditProfile';
import Views                 from '../../constants/Views';


export default class PortalMain extends React.Component {
    state = {
        submits      : [],
        currentSubmit: 0
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
        this.getSubmitIDs().then((ids)=>{
            this.getSubmitObjects(ids).then( (submits)=>{
                this.setState({
                    submits: submits
                });
            });
        })
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
                        paths                     ={this.props.paths}
                        user                      ={this.props.user}
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
                <SubmitArtworkManager
                    currentAlbum       ={this.props.currentAlbum}
                    changeAlbum        ={this.props.changeAlbum}
                    managerIsOpen      ={this.props.managerIsOpen}
                    user               = {this.props.user}
                    paths              = {this.props.paths}
                    currentAlbum       ={this.props.currentAlbum}
                    changeAlbum        ={this.props.changeAlbum}
                    changeArtworkAlbum ={this.props.changeArtworkAlbum}
                    submits            ={this.state.submits}
                    changeSubmit  ={this.changeSubmit}
                    toggleManager      ={this.props.toggleManager} />
                <SubmitArtworkInfo
                    currentSubmitIndex={this.state.currentSubmit}
                    submits={this.state.submits}
                    togglePublish={this.togglePublish}
                    />
                <div
                    onClick     ={this.props.toggleNav}
                    onTouchTap  ={this.props.toggleNav}
                    className   ={this.props.navIsOpen ? "site-overlay open" : "site-overlay"} />
            </div>
        );
    }

    // ============= Methods ===============

    changeSubmit = (index) => {
        this.setState({currentSubmit:index});
    }

    togglePublish = (submitID,currentState) => {
        let path = `submits/${submitID}`;
        firebase.database().ref(path).transaction((snapshot)=>{
            let snapState = snapshot.published;
            snapshot['published'] = !snapState;
            return snapshot;
        });
    }

    rerender = () => {
        this.setState({});
    }

    getSubmitIDs = () => {
        setTimeout( ()=>{
            let submits = this.props.user.submits
            console.log(submits);
            return
        }, 500);
    }

    getSubmitObjects = (ids) => {
        console.log("input", ids);
        return new Promise((resolve, reject)=>{
            let retlst = [];
            for (var i = 0; i < ids.length; i++) {
                let id = ids[i];
                console.log(id);
                let submitPath = `submits/${id}`;
                firebase.database().ref(submitPath).once('value', (snapshot)=>{
                    let submit = snapshot.val();
                    retlst.push(submit);
                }, (error)=>{
                    console.log(error);
                }, this)
            }
            setTimeout( ()=>{
                // FIXME use better code than timeout to wait for async for-loop
                // wait for database snapshots to return
                // console.log("============");
                // console.log(">Submits:::", retlst);
                resolve(retlst);
            }, 1000);
        });
    }


}

// ============= PropTypes ==============

PortalMain.propTypes = {
    thumbnail: React.PropTypes.func.isRequired,
    user: React.PropTypes.object.isRequired,
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
