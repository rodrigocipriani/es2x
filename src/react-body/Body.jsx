import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Body extends PureComponent {

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.children !== nextProps.children;
  }

  render() {
    const { children } = this.props;

    return (
      <div className='BodyContainer'>
        {children}
      </div>
    );
  }
}

Body.propTypes = {
  children: PropTypes.element, // todo : Implementar apra ser element ou string
};

Body.defaultProps = {
  children: null
};

export default Body;
