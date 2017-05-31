import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Row extends Component {

  render() {
    const { children, className, ...reactProps } = this.props;

    const classNameProps = className ? `${ className } row` : 'row';

    return <div { ...reactProps } className={ classNameProps }>{children}</div>;
  }
}

Row.propTypes = {
  children : PropTypes.object,
  className: PropTypes.string
};

Row.defaultProps = {
  children : null,
  className: ''
};

export default Row;
