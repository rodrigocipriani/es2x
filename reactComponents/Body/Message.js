var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Snackbar from 'material-ui/Snackbar';

var Message = function (_PureComponent) {
  _inherits(Message, _PureComponent);

  function Message() {
    _classCallCheck(this, Message);

    return _possibleConstructorReturn(this, (Message.__proto__ || Object.getPrototypeOf(Message)).apply(this, arguments));
  }

  _createClass(Message, [{
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props.message !== nextProps.message;
    }
  }, {
    key: 'render',
    value: function render() {
      var message = this.props.message;


      var messageText = null;
      if (message) {
        messageText = message;
        if (typeof messageText !== 'string') {
          messageText = messageText.text;
        }
      }
      var isOpenMessages = !!messageText;

      return React.createElement(
        'div',
        null,
        isOpenMessages && React.createElement(Snackbar, {
          open: isOpenMessages,
          message: messageText
        })
      );
    }
  }]);

  return Message;
}(PureComponent);

Message.propTypes = {
  message: PropTypes.any
};

Message.defaultProps = {
  message: null
};

export default Message;