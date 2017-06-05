import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SnackBarMsgs } from '../react-components';
import { DefaultTheme } from '../react-theme';
import bodyConnector from './bodyConnector';

class BodyContainer extends Component {

  render() {
    const { children, msgs } = this.props;

    return (
      <DefaultTheme>
        <div className='BodyContainer'>

          {children}

          <SnackBarMsgs msgs={ msgs }/>

        </div>
      </DefaultTheme>
    );
  }
}

BodyContainer.propTypes = {
  children         : PropTypes.element, // todo : Implementar apra ser element ou string
  msgs             : PropTypes.array
};

BodyContainer.defaultProps = {
  children         : null,
  msgs             : []
};

export default bodyConnector(BodyContainer);
