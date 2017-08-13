var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';

var PaperComponent = function (_PureComponent) {
  _inherits(PaperComponent, _PureComponent);

  function PaperComponent() {
    _classCallCheck(this, PaperComponent);

    return _possibleConstructorReturn(this, (PaperComponent.__proto__ || Object.getPrototypeOf(PaperComponent)).apply(this, arguments));
  }

  _createClass(PaperComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          elevation = _props.elevation;


      var elevationProp = elevation || 0;

      return React.createElement(
        Paper,
        _extends({}, className, { elevation: elevationProp, style: { padding: 16 } }),
        children
      );
    }
  }]);

  return PaperComponent;
}(PureComponent);

PaperComponent.propTypes = {
  children: PropTypes.any,
  elevation: PropTypes.number,
  className: PropTypes.string
};

PaperComponent.defaultProps = {
  children: null,
  elevation: null,
  className: ''
};

export default PaperComponent;