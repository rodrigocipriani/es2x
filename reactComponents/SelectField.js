var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var SelectFieldInput = function (_PureComponent) {
  _inherits(SelectFieldInput, _PureComponent);

  function SelectFieldInput() {
    _classCallCheck(this, SelectFieldInput);

    return _possibleConstructorReturn(this, (SelectFieldInput.__proto__ || Object.getPrototypeOf(SelectFieldInput)).apply(this, arguments));
  }

  _createClass(SelectFieldInput, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          value = _props.value,
          label = _props.label,
          data = _props.data;

      // {/*<SelectField { ...this.props } floatingLabelStyle={ style.label } floatingLabelText={ label } value={ value }>*/}
      //   {/*{data && data.map((item, key) => (*/}
      //     {/*<MenuItem { ...item } value={ item.value } primaryText={ item.text } key={ key }/>*/}
      //   {/*))}*/}
      // {/*</SelectField>*/}

      return React.createElement(
        'div',
        null,
        'fix select field'
      );
    }
  }]);

  return SelectFieldInput;
}(PureComponent);

var style = {
  label: {
    fontSize: '1.5em',
    color: '#666',
    left: 0
  }
};

SelectFieldInput.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }))
};

SelectFieldInput.defaultProps = {
  value: null,
  label: null,
  data: null
};

export default SelectFieldInput;