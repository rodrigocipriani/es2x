import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';


class Container extends PureComponent {
  render() {
    const { children, elevation, className } = this.props;

    return <Paper className={ className } elevation={ elevation }>{children}</Paper>;
  }
}
Container.propTypes = {
  children : PropTypes.any,
  className: PropTypes.any,
  elevation: PropTypes.number
};

Container.defaultProps = {
  children : null,
  className: null,
  elevation: 1
};

export default Container;
