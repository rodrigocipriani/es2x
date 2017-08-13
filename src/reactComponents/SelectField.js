import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SelectFieldInput extends PureComponent {

  render() {
    const { value, label, data } = this.props;

      // {/*<SelectField { ...this.props } floatingLabelStyle={ style.label } floatingLabelText={ label } value={ value }>*/}
      //   {/*{data && data.map((item, key) => (*/}
      //     {/*<MenuItem { ...item } value={ item.value } primaryText={ item.text } key={ key }/>*/}
      //   {/*))}*/}
      // {/*</SelectField>*/}
    return (
      <div>fix select field</div>

    );
  }
}

const style = {
  label: {
    fontSize: '1.5em',
    color   : '#666',
    left    : 0,
  },
};

SelectFieldInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  data : PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    text : PropTypes.string.isRequired,
  }))
};

SelectFieldInput.defaultProps = {
  value: null,
  label: null,
  data : null
};

export default SelectFieldInput;
