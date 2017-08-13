var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import DefaultTheme from './DefaultTheme';
import Body from './Body';
import Message from './Message';

var BodyContainer = function (_PureComponent) {
  _inherits(BodyContainer, _PureComponent);

  function BodyContainer(props) {
    _classCallCheck(this, BodyContainer);

    var _this = _possibleConstructorReturn(this, (BodyContainer.__proto__ || Object.getPrototypeOf(BodyContainer)).call(this, props));

    _this.handleToggle = function () {
      return _this.setState({ open: !_this.state.open });
    };

    _this.state = { open: false };
    return _this;
  }

  _createClass(BodyContainer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          message = _props.message;


      return React.createElement(
        DefaultTheme,
        null,
        React.createElement(
          'div',
          { className: 'BodyContainer' },
          React.createElement(
            Body,
            null,
            children
          ),
          React.createElement(Message, { message: message })
        )
      );
    }
  }]);

  return BodyContainer;
}(PureComponent);

BodyContainer.propTypes = {
  children: PropTypes.element, // todo : Implementar apra ser element ou string
  message: PropTypes.any
};

BodyContainer.defaultProps = {
  children: null,
  message: null
};

export default BodyContainer;