var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var TextField = function (_PureComponent) {
  _inherits(TextField, _PureComponent);

  function TextField() {
    _classCallCheck(this, TextField);

    return _possibleConstructorReturn(this, (TextField.__proto__ || Object.getPrototypeOf(TextField)).apply(this, arguments));
  }

  _createClass(TextField, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          sizes = _props.sizes,
          label = _props.label,
          type = _props.type;


      return React.createElement(
        'div',
        { className: ['input-field', sizes].join(' ') },
        React.createElement('input', _extends({}, this.props, { id: name, type: type, className: 'validate' })),
        React.createElement(
          'label',
          { htmlFor: name },
          label
        )
      );
    }
  }]);

  return TextField;
}(PureComponent);

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  sizes: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string
};

TextField.defaultProps = {
  name: null,
  sizes: '',
  label: '',
  type: 'text'
};

export default TextField;