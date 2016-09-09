// Libs
import React                        from 'react';
import ReactDOM                     from 'react-dom';
import firebase                     from 'firebase';
import uuid                         from 'node-uuid';
import {Tooltip, OverlayTrigger}    from 'react-bootstrap';
import update                       from 'react-addons-update';

// Files
import Albums                       from './Albums.jsx';
import Views             from '../../constants/Views';
import AlbumToggler                 from './AlbumToggler';
import SubmitAlbum  from '../review_albums/SubmitAlbum';

/**
 * TODO
 */
export default class ReviewAlbumManager extends React.Component {
    state = {
        albums    :{},
        uploads   :{},
        albumNames:[]
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("-----ReviewAlbumManager");
    }

    render() {
        if(this.props.managerIsOpen) {
            return this.openedManager();
        } else {
            return this.closedManager();
        }
    }

    componentDidMount() {
        console.log("+++++ReviewAlbumManager");

        if (this.props.user && this.props.user.albums) {
            let user       = this.props.user;
            let allAlbums  = user['albums'];

            let albums  = {};
            let uploads = allAlbums[0];

            let albumKeys  = Object.keys(allAlbums);
            let albumNames = ["Miscellaneous"];
            //NOTE 'i' starting at 1 to ignore uploads album
            for (let i = 1; i < albumKeys.length; i++) {
                let key = albumKeys[i];
                albumNames.push(allAlbums[key]['name']);
                albums[key] = allAlbums[key];
            }

            //Set albums to state
            this.setState({
                albums    :albums,
                uploads   :uploads,
                albumNames:albumNames
            });

        }

    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.user && nextProps.user.albums) {
            let user       = nextProps.user;
            let allAlbums  = user['albums'];

            let albums  = {};
            let uploads = allAlbums[0];

            let albumKeys  = Object.keys(allAlbums);
            let albumNames = ["Miscellaneous"];

            //NOTE 'i' starting at 1 to ignore uploads album
            for (let i = 1; i < albumKeys.length; i++) {
                let key = albumKeys[i];
                albumNames.push(allAlbums[key]['name']);
                albums[key] = allAlbums[key];
            }

            //Set albums to state
            this.setState({
                albums    : albums,
                uploads   : uploads,
                albumNames: albumNames
            });
        }
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount () {

    }

// ============= Flow Control ===============

    openedManager = () => {
        const messagesTooltip = (
            <Tooltip
                id="notifications-tooltip"
                className="tooltip">
                Notifications
            </Tooltip>
        );

        const removeTooltip = (
            <Tooltip
                id="remove-tooltip"
                className="tooltip">
                Remove
            </Tooltip>
        );

        let styleResponsive = {
            width   : 0.96 * (window.innerWidth * 0.25 - 40) - 70
        };

        let styleFixed = {
            width   : 210 * 0.96 - 70   // Album locker width caps at 210px. An album is 96% of the locker. The avatar is 70px
        };

        // ===== handle making albumsArray ===========
        let albumKeys = Object.keys(this.state.albums);
        let albumArray = [];

        for (let i = 0; i < albumKeys.length; i++) {
            let index = albumKeys[i];
            let thisName = this.state.albums[index]['name'];
            let artworks = this.state.albums[index]['submits'];
            albumArray.push({
                id: index,
                name: thisName,
                artworks: artworks
            });
        }


        return (

            <section
                className="album-manager review"
                style={{
                    height: window.innerHeight - 60,
                    left :  0
                }}>
                <AlbumToggler
                    height          ={window.innerHeight - 60}
                    float           ={"right"}
                    background      ={"#111111"}
                    managerIsOpen   ={this.props.managerIsOpen}
                    toggleManager   ={this.props.toggleManager} />

                <ul
                    style={{
                        height: window.innerHeight - 60
                    }}
                    className="album-locker">

                    <li onClick     ={this.props.changeAlbum.bind({}, "Impressions")}
                        className   ={(this.props.currentAlbum === "Impressions") ? "album review selected" : "album review"}>
                        <div className="album-avatar">
                            <div
                                style={{backgroundImage : 'url(assets/starry.jpg)'}}
                                className="avatar-container" />
                        </div>
                        <h3
                            className   ="album-name review"
                            style={(window.innerWidth * 0.25 > 250) ? styleResponsive : styleFixed} >
                            Impressions of a Crazy Man
                        </h3>
                        <div className="album-tools bottom">
                            <OverlayTrigger
                                placement   ="right"
                                overlay     ={messagesTooltip}>
                                <div>
                                    <img
                                        className   ="album-tool review"
                                        src         ='assets/images/icons/mail-white.svg'
                                    />
                                    <h5 className="album-tool message-count">1</h5>
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className="album-tools top">
                            <OverlayTrigger
                                placement   ="right"
                                overlay     ={removeTooltip}>
                                <div>
                                    <img
                                        className   ="album-tool"
                                        src         ='assets/images/icons/delete-white.svg'
                                    />
                                </div>
                            </OverlayTrigger>
                        </div>
                    </li>

                    {albumArray.map(album => {
                        return (
                            <Album
                                key                 ={album.id}
                                paths               ={this.props.paths}
                                album               ={album}
                                user                ={this.props.user}
                                thumbnail           ={this.props.thumbnail}
                                currentAlbum        ={this.props.currentAlbum}
                                changeAlbum         ={this.props.changeAlbum.bind(null, album.name)}
                                changeArtworkAlbum  ={this.props.changeArtworkAlbum}
                            />
                        );
                    })}
                </ul>
            </section>
        );
    }

    closedManager = () => {
        const messagesTooltip = (
            <Tooltip
                id="notifications-tooltip"
                className="tooltip">
                Notifications
            </Tooltip>
        );

        const removeTooltip = (
            <Tooltip
                id="remove-tooltip"
                className="tooltip">
                Remove
            </Tooltip>
        );

        let styleResponsive = {
            width   : 0.96 * (window.innerWidth * 0.25 - 40) - 70
        };

        let styleFixed = {
            width   : 210 * 0.96 - 70   // Album locker width caps at 210px. An album is 96% of the locker. The avatar is 70px
        };

        return (
            <section
                className="album-manager review"
                style={{
                    height: window.innerHeight - 60,
                    left: -1 * document.getElementsByClassName('album-manager')[0].clientWidth + 40
                }}>
                <AlbumToggler
                    height          ={window.innerHeight - 60}
                    float           ={"right"}
                    background      ={"#111111"}
                    managerIsOpen   ={this.props.managerIsOpen}
                    toggleManager   ={this.props.toggleManager} />
                <ul
                    style={{
                        height: window.innerHeight - 60
                    }}
                    className="album-locker">
                    <li onClick     ={this.props.changeAlbum.bind({}, "Impressions")}
                        className   ={(this.props.currentAlbum === "Impressions") ? "album review selected" : "album review"}>
                        <div className="album-avatar">
                            <div
                                style={{backgroundImage : 'url(assets/starry.jpg)'}}
                                className="avatar-container" />
                        </div>
                        <h3
                            className   ="album-name review"
                            style={(window.innerWidth * 0.25 > 250) ? styleResponsive : styleFixed} >
                            Impressions of a Crazy Man
                        </h3>
                        <div className="album-tools bottom">
                            <OverlayTrigger
                                placement   ="right"
                                overlay     ={messagesTooltip}>
                                <div>
                                    <img
                                        className   ="album-tool review"
                                        src         ='assets/images/icons/mail-white.svg'
                                    />
                                    <h5 className="album-tool message-count">1</h5>
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className="album-tools top">
                            <OverlayTrigger
                                placement   ="right"
                                overlay     ={removeTooltip}>
                                <div>
                                    <img
                                        className   ="album-tool"
                                        src         ='assets/images/icons/delete-white.svg'
                                    />
                                </div>
                            </OverlayTrigger>
                        </div>
                    </li>
                    <li onClick     ={this.props.changeAlbum.bind({}, "Elephants")}
                        className   ={(this.props.currentAlbum === "Elephants") ? "album review selected" : "album review"}>
                        <div className="album-avatar">
                            <div
                                style={{backgroundImage : 'url(assets/elephant.jpg)'}}
                                className="avatar-container" />
                        </div>
                        <h3
                            className   ="album-name review"
                            style={(window.innerWidth * 0.3 > 250) ? styleResponsive : styleFixed} >
                            Elephants
                        </h3>
                        <div className="album-tools bottom">
                            <OverlayTrigger
                                placement   ="right"
                                overlay     ={messagesTooltip}>
                                <div>
                                    <img
                                        className   ="album-tool review"
                                        src         ='assets/images/icons/mail-white.svg'
                                    />
                                    <h5 className="album-tool message-count">0</h5>
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className="album-tools top">
                            <OverlayTrigger
                                placement   ="right"
                                overlay     ={removeTooltip}>
                                <div>
                                    <img
                                        className   ="album-tool"
                                        src         ='assets/images/icons/delete-white.svg'
                                    />
                                </div>
                            </OverlayTrigger>
                        </div>
                    </li>
                    <li onClick     ={this.props.changeAlbum.bind({}, "Sunsets")}
                        className   ={(this.props.currentAlbum === "Sunsets") ? "album review selected" : "album review"}>
                        <div className="album-avatar">
                            <div
                                style={{backgroundImage : 'url(assets/sunset.jpg)'}}
                                className="avatar-container" />
                        </div>
                        <h3
                            className   ="album-name review"
                            style={(window.innerWidth * 0.3 > 250) ? styleResponsive : styleFixed} >
                            Sunsets
                        </h3>
                        <div className="album-tools bottom">
                            <OverlayTrigger
                                placement   ="right"
                                overlay     ={messagesTooltip}>
                                <div>
                                    <img
                                        className   ="album-tool review"
                                        src         ='assets/images/icons/mail-white.svg'
                                    />
                                    <h5 className="album-tool message-count">0</h5>
                                </div>
                            </OverlayTrigger>
                        </div>
                        <div className="album-tools top">
                            <OverlayTrigger
                                placement   ="right"
                                overlay     ={removeTooltip}>
                                <div>
                                    <img
                                        className   ="album-tool"
                                        src         ='assets/images/icons/delete-white.svg'
                                    />
                                </div>
                            </OverlayTrigger>
                        </div>
                    </li>
                </ul>
            </section>
        );
    }
}

// ============= PropTypes ==============

ReviewAlbumManager.propTypes = {
    currentAlbum: React.PropTypes.string.isRequired,
    changeAlbum: React.PropTypes.func.isRequired,
    managerIsOpen: React.PropTypes.bool.isRequired,
    toggleManager: React.PropTypes.func.isRequired
};
