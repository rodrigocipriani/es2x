import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class TextField extends PureComponent {

  render() {
    const { name, sizes, label, type } = this.props;

    return (
      <div className={ ['input-field', sizes].join(' ') }>
        <input { ...this.props } id={ name } type={ type } className='validate'/>
        <label htmlFor={ name }>{label}</label>
      </div>
    );
  }
}

TextField.propTypes = {
  name : PropTypes.string.isRequired,
  sizes: PropTypes.string,
  label: PropTypes.string,
  type : PropTypes.string
};

TextField.defaultProps = {
  name : null,
  sizes: '',
  label: '',
  type : 'text'
};

export default TextField;
