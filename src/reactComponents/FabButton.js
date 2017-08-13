import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
// import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';

import AddCircle from 'material-ui-icons/AddCircle';
import Add from 'material-ui-icons/Add';
// import NavigationClose from 'material-ui-icons/Close';
// import NewPageIcon from 'material-ui-icons/NoteAdd';

const styleSheet = createStyleSheet(theme => ({
  button: {
    margin  : theme.spacing.unit,
    position: 'absolute',
    bottom  : 0,
    right   : 0
  },
}));

class FabButton extends PureComponent {

  render() {
    const { options, color, label, onClick, children, effect, position, method, classes } = this.props;

    const attrs = {
      color  : color || 'blue',
      label  : label || <i className='fa fa-bars' aria-hidden='true'/>,
      onClick: onClick || '#'
    };

    return (
      <Button fab color='primary' aria-label='add' className={ classes.button }>
        <Add/>
      </Button>
    );
  }
}

FabButton.propTypes = {
  effect  : PropTypes.string,
  position: PropTypes.string,
  method  : PropTypes.string,

  options: PropTypes.arrayOf(PropTypes.shape(
    {
      label     : PropTypes.any,
      tabContent: PropTypes.any,
      onTouchTap: PropTypes.func
    }
  )),
  color   : PropTypes.string,
  label   : PropTypes.any,
  onClick : PropTypes.any,
  children: PropTypes.any
};

FabButton.defaultProps = {
  effect  : 'zoomin',
  position: 'br',
  method  : 'hover',
  color   : null,
  label   : null,
  onClick : null,
  children: <li/>
};

export default withStyles(styleSheet)(FabButton);
