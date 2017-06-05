import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
// import { SnackBarMsgs } from '../react-components';
import { DefaultTheme } from '../react-theme';

class BodyContainer extends Component {

  render() {
    const { children, messages } = this.props;

    console.log('$$$$ messages', messages);

    const isOpemMessages = messages && messages.length > 0;

    return (
      <DefaultTheme>
        <div className='BodyContainer'>

          {children}

          {/* <SnackBarMsgs msgs={ messages }/>*/}
          <Snackbar
            open={ isOpemMessages }
            message={ messages[0] }
            autoHideDuration={ 4000 }
            // onRequestClose={ this.handleRequestClose }
          />

        </div>
      </DefaultTheme>
    );
  }
}

BodyContainer.propTypes = {
  children: PropTypes.element, // todo : Implementar apra ser element ou string
  messages: PropTypes.array
};

BodyContainer.defaultProps = {
  children: null,
  messages: []
};

export default BodyContainer;
