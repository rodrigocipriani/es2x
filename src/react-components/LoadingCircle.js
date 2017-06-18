import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

/**
 Props:
 size: small, big
 */
class LoadingCircle extends PureComponent {

  render() {
    return (
      <div className={ `preloader-wrapper ${ this.props.size } active` }>
        <div className='spinner-layer spinner-blue-only'>
          <div className='circle-clipper left'>
            <div className='circle'/>
          </div>
          <div className='gap-patch'>
            <div className='circle'/>
          </div>
          <div className='circle-clipper right'>
            <div className='circle'/>
          </div>
        </div>
      </div>
    );
  }
}

LoadingCircle.propTypes = {
  size: PropTypes.string
};

LoadingCircle.defaultProps = {
  size: ''
};

export default LoadingCircle;
