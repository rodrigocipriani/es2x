var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card, { CardActions, CardHeader, CardContent } from 'material-ui/Card';

var CardComponent = function (_PureComponent) {
  _inherits(CardComponent, _PureComponent);

  function CardComponent() {
    _classCallCheck(this, CardComponent);

    return _possibleConstructorReturn(this, (CardComponent.__proto__ || Object.getPrototypeOf(CardComponent)).apply(this, arguments));
  }

  _createClass(CardComponent, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          title = _props.title,
          actions = _props.actions,
          subheader = _props.subheader,
          avatar = _props.avatar,
          showExpandableButton = _props.showExpandableButton,
          actAsExpander = _props.actAsExpander;


      return React.createElement(
        Card,
        null,
        React.createElement(CardHeader, {
          title: React.createElement(
            'div',
            null,
            title
          ),
          subheader: subheader,
          avatar: avatar
          // actAsExpander={ actAsExpander }
          // showExpandableButton={ showExpandableButton }
        }),
        React.createElement(
          CardContent,
          null,
          children
        ),
        React.createElement(
          CardActions,
          null,
          actions
        )
      );
    }
  }]);

  return CardComponent;
}(PureComponent);

CardComponent.propTypes = {
  children: PropTypes.any,
  title: PropTypes.any,
  subheader: PropTypes.any,
  avatar: PropTypes.any,
  actions: PropTypes.any,
  showExpandableButton: PropTypes.bool,
  actAsExpander: PropTypes.bool
};

CardComponent.defaultProps = {
  children: null,
  title: null,
  subheader: null,
  avatar: null,
  actions: '',
  showExpandableButton: false,
  actAsExpander: false
};

export default CardComponent;