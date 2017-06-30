import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';
// import { SnackBarMsgs } from '../react-components';
import { DefaultTheme } from '../react-theme';
import Body from './Body';
import Message from './Message';

class BodyContainer extends PureComponent {

  render() {
    const { children, message } = this.props;

    return (
      <DefaultTheme>
        <div className='BodyContainer'>

          <Body>{children}</Body>
          <Message message={ message }/>
        </div>
      </DefaultTheme>
    );
  }
}

BodyContainer.propTypes = {
  children: PropTypes.element, // todo : Implementar apra ser element ou string
  message : PropTypes.any,
};

BodyContainer.defaultProps = {
  children: null,
  message : null,
};

export default BodyContainer;
