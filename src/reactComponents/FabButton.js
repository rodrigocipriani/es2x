import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';

import AddCircle from 'material-ui-icons/AddCircle';
// import NavigationClose from 'material-ui-icons/Close';
// import NewPageIcon from 'material-ui-icons/NoteAdd';

class FabButton extends PureComponent {

  render() {
    const { options, color, label, onClick, children } = this.props;

    const attrs = {
      color  : color || 'blue',
      label  : label || <i className='fa fa-bars' aria-hidden='true'/>,
      onClick: onClick || '#'
    };

    return (
      <div
        className='SpeedDial'
        style={ {
          position: 'absolute',
          bottom  : 15,
          right   : 15
        } }
      >
      <AddCircle/>

        {/* <SpeedDial*/}
        {/* className='fab'*/}
        {/* fabContentOpen={*/}
        {/* '<ContentAdd/>'*/}
        {/* }*/}
        {/* fabContentClose={*/}
        {/* '<NavigationClose/>'*/}
        {/* }*/}
        {/* >*/}
        {/* {options.map((option, key) => {*/}
        {/* return (<SpeedDialItem*/}
        {/* key={ key }*/}
        {/* label={ option.label }*/}
        {/* fabContent={ option.fabContent }*/}
        {/* onTouchTap={ option.onTouchTap }*/}
        {/* />);*/}
        {/* })}*/}

        {/* <SpeedDialItem*/}
        {/* label='new page'*/}
        {/* fabContent={ '<NewPageIcon/>' }*/}
        {/* onTouchTap={ this.startNewPage }*/}
        {/* />*/}

        {/* </SpeedDial>*/}
      </div>
    );
  }
}

FabButton.propTypes = {
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
  color   : null,
  label   : null,
  onClick : null,
  children: <li/>
};

export default FabButton;
