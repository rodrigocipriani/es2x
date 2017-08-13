import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

class PaperComponent extends PureComponent {

  render() {
    const { children, className, elevation, padding, backgroundColor } = this.props;

    const elevationProp = elevation || 0;

    return (
      <Paper
        { ...className }
        elevation={ elevationProp }
        style={ { padding, backgroundColor } }
      >

        {children}
      </Paper>
    );
  }
}

PaperComponent.propTypes = {
  children       : PropTypes.any,
  elevation      : PropTypes.number,
  padding        : PropTypes.number,
  backgroundColor: PropTypes.string,
  className      : PropTypes.string
};

PaperComponent.defaultProps = {
  children       : null,
  elevation      : null,
  padding        : 16,
  backgroundColor: 'transparent',
  className      : ''
};

export default PaperComponent;
