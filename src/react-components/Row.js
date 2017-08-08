import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

class Row extends PureComponent {

  render() {
    const { children } = this.props;

    return <Grid style={ { flexGrow: 1 } } container>{children}</Grid>;
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
