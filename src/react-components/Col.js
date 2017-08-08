import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

class Col extends PureComponent {

  render() {
    const { children, xs, sm, md, lg, xl } = this.props;

    return (
      <Grid
        item
        xs={ xs }
        sm={ sm }
        md={ md }
        lg={ lg }
        xl={ xl }
      >
        {children}
      </Grid>
    );
  }
}
// xs, sm, md, lg, and xl.
Col.propTypes = {
  children: PropTypes.any,
  xs      : PropTypes.number,
  sm      : PropTypes.number,
  md      : PropTypes.number,
  lg      : PropTypes.number,
  xl      : PropTypes.number
};

Col.defaultProps = {
  children: null,
  xs      : 12,
  sm      : 12,
  md      : 12,
  lg      : 12,
  xl      : 12
};

export default Col;
