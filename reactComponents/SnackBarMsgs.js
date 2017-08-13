var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var css = {
  fixBotton: {
    position: 'absolute',
    width: '100%',
    bottom: '0px',
    zIndex: 9999
  }
};

// todo - implementar que no onmousehover o contador de tempo fica parado e a msg não fecha

var SnackBarMsgs = function (_PureComponent) {
  _inherits(SnackBarMsgs, _PureComponent);

  function SnackBarMsgs() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SnackBarMsgs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SnackBarMsgs.__proto__ || Object.getPrototypeOf(SnackBarMsgs)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      counter: 0,
      msgs: []
    }, _this.snackMsgs = function () {
      var retorno = _this.state.msgs.map(function (msg, key) {
        return React.createElement(Snack, {
          key: msg.uuid, uuid: msg.uuid, type: msg.type, text: msg.texto,
          handleClose: _this.handleSnackClose,
          closeTime: _this.props.closeTimer
        });
      });

      return retorno;
    }, _this.handleSnackClose = function (uuid) {
      // retorna a mensagem fechada
      _this.props.onClose(_this.state.msgs.filter(function (msg) {
        return msg.uuid === uuid;
      })[0]);
      // retira a mensagem da lista
      return _this.state.msgs.filter(function (msg) {
        return msg.uuid !== uuid;
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SnackBarMsgs, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var newMsgs = nextProps.msgs.map(function (msg, key) {
        msg.type = msg.tipo || 'info';
        msg.uuid = msg.uuid || new Date().getTime() + key;
        return msg;
      });
      this.setState({ msgs: this.state.msgs.concat(newMsgs) });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'row', style: css.fixBotton },
        React.createElement(
          'div',
          { className: 'col s12 center-align' },
          this.snackMsgs()
        )
      );
    }
  }]);

  return SnackBarMsgs;
}(PureComponent);

SnackBarMsgs.propTypes = {
  // children: PropTypes.object,
  msgs: PropTypes.array.isRequired,
  closeTimer: PropTypes.number,
  onClose: PropTypes.func
};
SnackBarMsgs.defaultProps = {
  // children: null,
  msgs: [],
  closeTimer: 5,
  onClose: null
};

var Snack = function (_PureComponent2) {
  _inherits(Snack, _PureComponent2);

  function Snack(props) {
    _classCallCheck(this, Snack);

    var _this2 = _possibleConstructorReturn(this, (Snack.__proto__ || Object.getPrototypeOf(Snack)).call(this, props));

    _this2.state = {
      counter: 0
    };
    _this2.timer = null;

    _this2.initCounter = function () {
      _this2.timer = setInterval(function () {
        _this2.setState({ counter: _this2.state.counter + 1 });
      }, 1000);
    };

    _this2.close = function () {
      _this2.stopTimer();
      _this2.setState({ counter: 9999 });
    };

    _this2.initCounter();
    return _this2;
  }

  _createClass(Snack, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.stopTimer();
    }
  }, {
    key: 'stopTimer',
    value: function stopTimer() {
      clearInterval(this.timer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var counter = this.state.counter;
      var _props = this.props,
          type = _props.type,
          text = _props.text,
          closeTime = _props.closeTime,
          uuid = _props.uuid,
          handleClose = _props.handleClose;


      if (counter >= closeTime) {
        this.stopTimer();
        handleClose(uuid);
        return null;
      }

      var style = [];
      style.info = {
        textClass: 'white-text',
        cardClass: 'grey darken-1'
      };
      style.success = {
        textClass: 'white-text',
        cardClass: 'green darken-2'
      };
      style.warning = {
        textClass: 'grey-text text-darken-4',
        cardClass: 'orange lighten-2'
      };
      style.danger = {
        textClass: 'white-text',
        cardClass: 'deep-orange darken-4'
      };

      // todo : trocar o ok por button
      return React.createElement(
        'div',
        {
          className: ['card-panel center-align', style[type].cardClass].join(' '),
          style: {
            padding: 10,
            width: '80%',
            margin: '0 auto',
            marginTop: 5,
            maxWidth: 400,
            position: 'relative'
          }
        },
        React.createElement(
          'span',
          { className: style[type].textClass },
          text
        ),
        React.createElement(
          'a',
          {
            onClick: function onClick() {
              return _this3.close();
            }, href: 'javascript:', style: { position: 'absolute', right: 15 },
            className: [style[type].textClass].join(' ')
          },
          'OK'
        )
      );
    }
  }]);

  return Snack;
}(PureComponent);

Snack.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  closeTime: PropTypes.number,
  uuid: PropTypes.number,
  handleClose: PropTypes.func.isRequired
};
Snack.defaultProps = {
  type: 'info',
  text: '',
  closeTime: 5,
  uuid: null,
  handleClose: {}
};


export default SnackBarMsgs;