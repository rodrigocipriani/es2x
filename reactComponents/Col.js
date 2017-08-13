var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';

var Col = function (_PureComponent) {
  _inherits(Col, _PureComponent);

  function Col() {
    _classCallCheck(this, Col);

    return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
  }

  _createClass(Col, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          xs = _props.xs,
          sm = _props.sm,
          md = _props.md,
          lg = _props.lg,
          xl = _props.xl;


      return React.createElement(
        Grid,
        {
          item: true,
          xs: xs,
          sm: sm,
          md: md,
          lg: lg,
          xl: xl
        },
        children
      );
    }
  }]);

  return Col;
}(PureComponent);
// xs, sm, md, lg, and xl.


Col.propTypes = {
  children: PropTypes.any,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number
};

Col.defaultProps = {
  children: null,
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12
};

export default Col;