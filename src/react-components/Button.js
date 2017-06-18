import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {

  render() {
    const { children } = this.props;

    return <button className='waves-effect waves-light btn' { ...this.props }>{children}</button>;
  }
}

Button.propTypes = {
  children: PropTypes.any
};

Button.defaultProps = {
  children: ''
};
