import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Container extends PureComponent {
  render() {
    const { children } = this.props;

    return <div { ...this.props }>{children}</div>;
  }
}
Container.propTypes = {
  children: PropTypes.any
};

Container.defaultProps = {
  children: null
};

export default Container;
