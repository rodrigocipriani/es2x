import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class FabButton extends PureComponent {

  render() {
    const { color, label, onClick, children } = this.props;

    const attrs = {
      color  : color || 'blue',
      label  : label || <i className='fa fa-bars' aria-hidden='true'/>,
      onClick: onClick || '#'
    };

    return (
      <div onClick={ onClick } className='fixed-action-btn' style={ { zIndex: '9999' } }>
        <a className={ ['btn-floating btn-large ', attrs.color].join(' ') }>
          {attrs.label}
        </a>
        <ul>
          {children}
        </ul>
      </div>
    );
  }
}

FabButton.propTypes = {
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

class FabButtonOption extends PureComponent {

  render() {
    const { color, onClick, tooltip, tooltipPosition, tooltipDelay, children } = this.props;

    const attrs = {
      color          : color || 'blue',
      onClick        : onClick || '#',
      tooltip        : tooltip || '',
      tooltipDelay   : tooltipDelay || '50',
      tooltipPosition: tooltipPosition || 'left'
    };

    return (

      <li>
        <a
          onClick={ attrs.onClick }
          className={ ['waves-effect waves-light btn-floating tooltipped', attrs.color].join(' ') }
          data-position={ attrs.tooltipPosition }
          data-delay={ attrs.tooltipDelay }
          data-tooltip={ attrs.tooltip }
        >
          {children}
        </a>
      </li>
    );
  }
}

FabButtonOption.propTypes = {
  color          : PropTypes.string,
  tooltip        : PropTypes.any,
  tooltipDelay   : PropTypes.any,
  tooltipPosition: PropTypes.any,
  onClick        : PropTypes.any,
  children       : PropTypes.any
};

FabButtonOption.defaultProps = {
  color          : null,
  tooltip        : null,
  tooltipDelay   : null,
  tooltipPosition: null,
  onClick        : null,
  children       : <div/>
};

export { FabButton, FabButtonOption };
