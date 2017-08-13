var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var Title = function (_PureComponent) {
  _inherits(Title, _PureComponent);

  function Title() {
    _classCallCheck(this, Title);

    return _possibleConstructorReturn(this, (Title.__proto__ || Object.getPrototypeOf(Title)).apply(this, arguments));
  }

  _createClass(Title, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          priority = _props.priority;


      switch (priority) {
        case 1:
          return React.createElement(
            'h1',
            null,
            children
          );
        case 2:
          return React.createElement(
            'h2',
            null,
            children
          );
        case 3:
          return React.createElement(
            'h3',
            null,
            children
          );
        case 4:
          return React.createElement(
            'h4',
            null,
            children
          );
        case 5:
          return React.createElement(
            'h5',
            null,
            children
          );
        case 6:
          return React.createElement(
            'h6',
            null,
            children
          );
        default:
          return React.createElement(
            'h3',
            null,
            children
          );
      }
    }
  }]);

  return Title;
}(PureComponent);

Title.propTypes = {
  children: PropTypes.any,
  priority: PropTypes.number
};

Title.defaultProps = {
  children: null,
  priority: 3
};

export default Title;