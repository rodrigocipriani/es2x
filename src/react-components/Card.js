import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Card extends PureComponent {

  render() {
    const { children, className, title, actions } = this.props;

    return (
      <div className={ ['card', className].join(' ') }>
        <div className='card-content'>
          <span className='card-title'>{title}</span>
          {children}
        </div>
        <div className='card-action'>
          {actions}
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  children : PropTypes.any,
  className: PropTypes.string,
  title    : PropTypes.string,
  actions  : PropTypes.any
};

Card.defaultProps = {
  children : null,
  className: '',
  title    : '',
  actions  : ''
};

export default Card;
