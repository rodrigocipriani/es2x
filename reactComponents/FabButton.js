var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { SpeedDial, SpeedDialItem } from 'react-mui-speeddial';

import AddCircle from 'material-ui-icons/AddCircle';
// import NavigationClose from 'material-ui-icons/Close';
// import NewPageIcon from 'material-ui-icons/NoteAdd';

var FabButton = function (_PureComponent) {
  _inherits(FabButton, _PureComponent);

  function FabButton() {
    _classCallCheck(this, FabButton);

    return _possibleConstructorReturn(this, (FabButton.__proto__ || Object.getPrototypeOf(FabButton)).apply(this, arguments));
  }

  _createClass(FabButton, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          color = _props.color,
          label = _props.label,
          onClick = _props.onClick,
          children = _props.children;


      var attrs = {
        color: color || 'blue',
        label: label || React.createElement('i', { className: 'fa fa-bars', 'aria-hidden': 'true' }),
        onClick: onClick || '#'
      };

      return React.createElement(
        'div',
        {
          className: 'SpeedDial',
          style: {
            position: 'absolute',
            bottom: 15,
            right: 15
          }
        },
        React.createElement(AddCircle, null)
      );
    }
  }]);

  return FabButton;
}(PureComponent);

FabButton.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.any,
    tabContent: PropTypes.any,
    onTouchTap: PropTypes.func
  })),
  color: PropTypes.string,
  label: PropTypes.any,
  onClick: PropTypes.any,
  children: PropTypes.any
};

FabButton.defaultProps = {
  color: null,
  label: null,
  onClick: null,
  children: React.createElement('li', null)
};

export default FabButton;