// Libs
import React            from 'react';
import Dialog           from 'material-ui/Dialog';
import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Files
import ConfirmButton    from '../confirm_dialog/ConfirmButton';


/**
 * TODO
 */
export default class SubmitAlbumDialog extends React.Component {
    //NOTE: Class left with incomplete code-styling for efficency

    componentWillMount() {
        console.log("-----SubmitAlbumDialog");
    }

    render() {
        const actions = [
              <ConfirmButton
                label="Close"
                className="confirm-edit-profile"
                onClick={this.props.closeSubmitAlbumDialog}
              />
        ];

        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <Dialog
                        actions={actions}
                        modal={false}
                        open={this.props.submitAlbumDialogIsOpen}
                        actionsContainerClassName="confirm-actions"
                        bodyClassName="confirm-body" >
                            Your album has been submitted to Tekuma and is pending review
                    </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }

    componentDidMount() {
        console.log("+++++SubmitAlbumDialog");
    }
}

// ============= PropTypes ==============

SubmitAlbumDialog.propTypes = {
    closeSubmitAlbumDialog: React.PropTypes.func.isRequired,
    submitAlbumDialogIsOpen: React.PropTypes.bool.isRequired
};
