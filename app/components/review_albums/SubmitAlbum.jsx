// Libs
import React                        from 'react';
import ReactDOM                     from "react-dom";
import {DragSource, DropTarget}     from 'react-dnd';
import {Tooltip, OverlayTrigger}    from 'react-bootstrap';

// Files
import ItemTypes                    from '../../constants/itemTypes';

// ============= Drag and Drop ===============


/**
 * TODO
 */
export default class Album extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("-----SubmitAlbum");
    }

    render() {
        let thumbnail = "../../assets/images/icons/new-album.svg";
        let artworkID;

        // ====== SETTING AVATAR IMAGE ======



        // ==================================



        let styleResponsive = {
            width   : 0.96 * (window.innerWidth * 0.3 - 40)
        };

        let styleFixed = {
            width   : 210 * 0.96   // Album locker width caps at 210px. An album is 96% of the locker. The avatar is 70px
        };

        return (
            <li
                onClick     ={this.props.changeAlbum}
                className   ={(this.props.currentAlbum === this.props.album.name) ? "album black selected" : "album black"}>
                <h3
                    style={(window.innerWidth * 0.3 > 250) ? styleResponsive : styleFixed}
                    className   ="review-album-name" >
                    {this.props.album.name}
                </h3>
            </li>
        );
    }

    componentDidMount() {
        console.log("+++++SubmitAlbum");
    }
}
