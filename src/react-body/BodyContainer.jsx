import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { SnackBarMsgs } from '../react-components';
import { DefaultTheme } from '../react-theme';
import bodyConnector from './bodyConnector';

class BodyContainer extends Component {

  componentWillReceiveProps(nextProps) {
    const usuario = nextProps.usuario;
    if (usuario === null) {
      nextProps.callbackNotLogged();
    }
  }

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
  msgs             : PropTypes.array,
  usuario          : PropTypes.object,
  callbackNotLogged: PropTypes.func,
};

BodyContainer.defaultProps = {
  children         : null,
  msgs             : [],
  usuario          : null,
  callbackNotLogged: () => {},
};

export default bodyConnector(BodyContainer);
