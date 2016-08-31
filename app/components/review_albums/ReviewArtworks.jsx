// Libs
import React                        from 'react';
import ReactDOM                     from 'react-dom';
import firebase                     from 'firebase';

// Files
import ReviewArtwork from '../artwork_manager/ReviewArtwork';
import Views             from '../../constants/Views';

/**
 * TODO
 */
export default class ReviewArtworks extends React.Component {
    state = {
        albumIndex : null,
        submits : []
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("-----ReviewArtworks");
    }

    render() {
        let styleManagerClosed = {
            left: 40,
            width: window.innerWidth * 0.25 + 236 - 40, // 25vw (Album Manager) + 236px (Artworks) + - 40 (AlbumToggler)
            height: window.innerHeight - 60
        };

        let styleManagerOpen = {
            width: 236,
            height: window.innerHeight - 60
        };

        let styleLargeScreen = {
            width: window.innerWidth * 0.25 + 236 - 400, // 25vw (Album Manager) + 236px (Artworks) + - 400 (ReviewAlbumManager),
            height: window.innerHeight - 60,
            left: 400
        };

        let styleSmallScreen = {
            width: 236,
            height: window.innerHeight - 60
        };

        let fixedWidth = {
            width: 236,
            height: window.innerHeight - 60
        };

        return (
            <section
                style={this.props.managerIsOpen ?
                            (window.innerWidth * 0.25 > 400) ?
                                styleLargeScreen :
                                (window.innerWidth * 0.25 > 250) ?
                                    styleManagerOpen :
                                    (window.innerWidth > 410) ?
                                        styleSmallScreen :
                                        fixedWidth
                                : styleManagerClosed}
                className="review-artworks">

                <ReviewArtwork />
                {this.props.submits.map(submit => {
                    return (
                        <ReviewArtwork
                            submit = {submit}
                             />
                    );
                })}

            </section>
        );
    }
    /* use mapping
    {albumArray.map(album => {
        return (
            <Album
                key                 ={album.id}
                paths               ={this.props.paths}
                album               ={album}
                user                ={this.props.user}
                thumbnail           ={this.props.thumbnail}
                onEdit              ={this.props.onEdit.bind(null, album.id)}
                onDelete            ={this.props.onDelete.bind(null, album.id)}
                onMove              ={this.moveAlbum}
                currentAlbum        ={this.props.currentAlbum}
                changeAlbum         ={this.props.changeAlbum.bind(null, album.name)}
                changeArtworkAlbum  ={this.props.changeArtworkAlbum}
                onSubmit            ={this.props.submitAlbum} />
        );
    })}
     */
    componentDidMount() {
        console.log("+++++ReviewArtworks");

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount () {
    }

    // ============= Methods ================


}

// ============= PropTypes ==============

ReviewArtworks.propTypes = {
    managerIsOpen: React.PropTypes.bool.isRequired
};
