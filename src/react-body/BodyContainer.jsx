import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
// import { SnackBarMsgs } from '../react-components';
import { DefaultTheme } from '../react-theme';

class BodyContainer extends PureComponent {

  render() {
    const { children, message } = this.props;

    let messageText = null;
    if (message) {
      messageText = message;
      if (typeof messageText !== 'string') {
        messageText = messageText.text;
      }
    }
    const isOpenMessages = !!messageText;

    return (
      <DefaultTheme>
        <div className='BodyContainer'>

          {children}

          {/* <SnackBarMsgs msgs={ messages }/>*/}
          {isOpenMessages &&
          <Snackbar
            open={ isOpenMessages }
            message={ messageText }
            // autoHideDuration={ 4000 }
            // onRequestClose={ this.handleRequestClose }
          />
          }
        </div>
      </DefaultTheme>
    );
  }
}

BodyContainer.propTypes = {
  children: PropTypes.element, // todo : Implementar apra ser element ou string
  message : PropTypes.any
};

BodyContainer.defaultProps = {
  children: null,
  message : null
};

export default BodyContainer;
