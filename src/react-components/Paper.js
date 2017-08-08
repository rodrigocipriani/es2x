import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

class PaperComponent extends PureComponent {

  render() {
    const { children, className, elevation } = this.props;

    const elevationProp = elevation || 0;

    return <Paper { ...className } elevation={ elevationProp } style={ { padding: 16 } }>{children}</Paper>;
  }
}

PaperComponent.propTypes = {
  children : PropTypes.any,
  elevation: PropTypes.number,
  className: PropTypes.string
};

PaperComponent.defaultProps = {
  children : null,
  elevation: null,
  className: ''
};

export default PaperComponent;
