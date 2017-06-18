import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Row extends PureComponent {

  render() {
    const { children, className, ...reactProps } = this.props;

    const classNameProps = className ? `${ className } row` : 'row';

    return <div { ...reactProps } className={ classNameProps }>{children}</div>;
  }
}

Row.propTypes = {
  children : PropTypes.any,
  className: PropTypes.string
};

Row.defaultProps = {
  children : null,
  className: ''
};

export default Row;
