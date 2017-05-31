import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Col extends Component {

  render() {
    const { children, sizes } = this.props;

    return <div className={ ['col', sizes].join(' ') }>{children}</div>;
  }
}

Col.propTypes = {
  children: PropTypes.any,
  sizes   : PropTypes.string
};

Col.defaultProps = {
  children: null,
  sizes   : ''
};

export default Col;
