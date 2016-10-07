// Libs
import React                        from 'react';
import ReactDOM                     from 'react-dom';
import firebase                     from 'firebase';
import uuid                         from 'node-uuid';
import {Tooltip, OverlayTrigger}    from 'react-bootstrap';
import update                       from 'react-addons-update';
// Files
import Views                        from '../../constants/Views';
import AlbumToggler                 from '../album_manager/AlbumToggler';

/**
 * TODO
 */
export default class SubmitArtworkManager extends React.Component {
    state = {
        uploads   :{},
        albumNames:[],
        albumArray:[]
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("-----SubmitAlbumManager");
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

                    {this.props.submits.map(submit => {
                        return (
                            <SubmitArtwork
                                submitIndex = {this.props.submits.indexOf(submit)}
                                submit = {submit}
                                changeSubmit={this.props.changeSubmit}
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

        ///   THIS IS WHERE YOU LEFT OFF
        ///   ==========================
        ///   -- Get this SubmitsArtworkManager working
        ///   -- remove the middle interface
        ///   -- clean up any old code
        ///   --
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
                    toggleManager   ={this.props.toggleManager}
                />
                <ul
                    style={{

                    }}
                    className="album-locker">

                    {this.state.albumArray.map(album => {
                        return (
                            <SubmitAlbum
                                key                 ={album.id}
                                paths               ={this.props.paths}
                                album               ={album}
                                user                ={this.props.user}
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
}

// ============= PropTypes ==============

SubmitArtworkManager.propTypes = {
    currentAlbum : React.PropTypes.string.isRequired,
    changeAlbum  : React.PropTypes.func.isRequired,
    managerIsOpen: React.PropTypes.bool.isRequired,
    toggleManager: React.PropTypes.func.isRequired
};
