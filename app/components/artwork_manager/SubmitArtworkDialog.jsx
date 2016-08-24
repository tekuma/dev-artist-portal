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
export default class SubmitArtworkDialog extends React.Component {
    //NOTE: Class left with incomplete code-styling for efficency

    render() {
        const actions = [
              <ConfirmButton
                label="Close"
                className="confirm-edit-profile"
                onClick={this.props.closeSubmitArtworkDialog}
              />
        ];

        return (
            <div>
                <MuiThemeProvider muiTheme={getMuiTheme()}>
                    <Dialog
                        actions={actions}
                        modal={false}
                        open={this.props.submitArtworkDialogIsOpen}
                        actionsContainerClassName="confirm-actions"
                        bodyClassName="confirm-body" >
                            Your artwork has been submitted to Tekuma and is pending review
                    </Dialog>
                </MuiThemeProvider>
            </div>
        );
    }
}

// ============= PropTypes ==============

SubmitArtworkDialog.propTypes = {
    closeSubmitArtworkDialog: React.PropTypes.func.isRequired,
    submitArtworkDialogIsOpen: React.PropTypes.bool.isRequired
};
