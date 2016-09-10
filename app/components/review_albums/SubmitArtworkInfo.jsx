// Libs
import React                        from 'react';
import ReactDOM                     from 'react-dom';
import firebase                     from 'firebase';

// Files
import Views             from '../../constants/Views';

/**
 * TODO
 */
export default class SubmitAlbumBanner extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        console.log("-----ReviewAlbumBanner");
    }

    render() {
        const submit     = this.props.submits[this.props.currentSubmitIndex];
        
        const dateObj    = new Date(Date.parse(submit.submit_date));
        const submitDate = dateObj.toDateString();

        //FIXME TODO  make image display
        let url = `url(${submit.fullsize_url})`;
        let previewStyle = {
            // backgroundImage: 'url(assets/starry.jpg)',
            backgroundImage: url
        }

        let infoStyle = {
            height: window.innerHeight - 60,
            width: window.innerWidth * 0.75 - 236
        }

        let artworkStatusStyleLarge = {
            height: window.innerHeight - 60 - 285
        }

        let artworkStatusStyleMedium = {
            height: window.innerHeight - 60 - 397
        }

        let artworkStatusStyleSmall = {
            height: window.innerHeight - 60 - 147
        }


        return (
                <section
                    className="review-artwork-banner"
                    style={infoStyle}
                    >
                    <div className="review-artwork-info">
                        <div className="album-banner-preview-wrapper">
                            <div
                                style={previewStyle}
                                className="album-banner-preview" />
                        </div>
                        <div className="album-banner-details-wrapper">
                            <div className="album-banner-details">
                                <div className="album-banner-title">
                                    {submit.title}
                                </div>
                                <div className="album-banner-artist">
                                    {submit.artist}
                                </div>
                                <div className="album-banner-date">
                                    {submit.year}
                                </div>
                            </div>
                        </div>
                        <div className="album-banner-description-wrapper">
                            <p className="album-banner-description">
                                {submit.description}
                            </p>
                            <h5 className="album-banner-tags-heading">Tags:</h5>
                            <p className="album-banner-tags">
                                TODO TODO TODO
                            </p>
                        </div>
                    </div>
                    <div
                        style={window.innerHeight > 1280 ?
                                artworkStatusStyleLarge :
                                window.innerHeight > 990 ?
                                    artworkStatusStyleMedium :
                                    artworkStatusStyleSmall
                                }
                        className="review-artwork-status">
                        <div className="status-wrapper">
                            <h3 className="status-heading">
                                Date Submitted
                            </h3>
                            <div className="status-info-wrapper center">
                                <p>{submitDate}</p>
                            </div>
                        </div>
                        <div className="status-wrapper">
                            <h3 className="status-heading">
                                Status
                            </h3>
                            <div className="status-info-wrapper center">
                                <div className="review-status">
                                    <h4>
                                        {submit.status}
                                    </h4>
                                </div>
                            </div>
                        </div>
                        <div className="status-wrapper">
                            <h3 className="status-heading">
                                Message
                            </h3>
                            <div className="status-info-wrapper">
                            <p>{submit.message}</p>
                            </div>
                        </div>
                        <div className="status-wrapper">
                            <h3 className="status-heading">
                                Publish to Discover
                            </h3>
                            <div className="status-info-wrapper center">
                                <input id="publish-button"
                                       className="button slide-square inactive"
                                       type="checkbox"
                                       onChange={this.props.togglePublish(submit.submit_id, submit.published)}
                                       checked={submit.published}/>

                                <label htmlFor="publish-button"></label>
                            </div>
                        </div>
                    </div>
                </section>
        );
    }

    componentDidMount() {
        console.log("+++++ReviewAlbumBanner");
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount () {
    }


}
