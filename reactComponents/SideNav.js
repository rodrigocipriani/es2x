var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

var SideNav = function (_PureComponent) {
  _inherits(SideNav, _PureComponent);

  function SideNav() {
    _classCallCheck(this, SideNav);

    return _possibleConstructorReturn(this, (SideNav.__proto__ || Object.getPrototypeOf(SideNav)).apply(this, arguments));
  }

  _createClass(SideNav, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          sideMenu = _props.sideMenu,
          sideMenuTitle = _props.sideMenuTitle,
          sideMenuHeaderBg = _props.sideMenuHeaderBg,
          avatarImg = _props.avatarImg,
          avatarTitle = _props.avatarTitle,
          avatarSubTitle = _props.avatarSubTitle,
          isFixed = _props.isFixed,
          isMenuOpen = _props.isMenuOpen,
          children = _props.children,
          sideMenuFooter = _props.sideMenuFooter;


      var isShowMenu = isMenuOpen && isFixed;

      return React.createElement(
        'div',
        { className: 'SideNav' },
        React.createElement(
          'div',
          {
            className: [isShowMenu ? 'container isMenuVisible' : ''].join(' ')
          },
          children,
          React.createElement(
            'ul',
            { id: 'slide-out', className: ['side-nav', isShowMenu ? 'fixed' : ''].join(' ') },
            React.createElement(
              'li',
              null,
              React.createElement(
                'div',
                { className: 'userView' },
                React.createElement('img', { role: 'presentation', className: 'background background-cover', src: sideMenuHeaderBg }),
                React.createElement(
                  'a',
                  { href: '#!user' },
                  React.createElement('img', { alt: 'User Avatar Image', className: 'circle', src: avatarImg })
                ),
                React.createElement(
                  'a',
                  { href: '#!name' },
                  React.createElement(
                    'span',
                    { className: 'white-text name' },
                    avatarTitle
                  )
                ),
                React.createElement(
                  'a',
                  { href: '#!email' },
                  React.createElement(
                    'span',
                    { className: 'white-text email' },
                    avatarSubTitle
                  )
                )
              ),
              React.createElement(
                'div',
                { style: { position: 'absolute', bottom: 50, width: '100%' } },
                React.createElement(
                  'div',
                  { style: { width: '100%', textAlign: 'right' } },
                  sideMenuFooter
                )
              )
            ),
            React.createElement(
              'li',
              { className: 'white' },
              React.createElement(
                'a',
                { style: { fontSize: '1.5em' } },
                sideMenuTitle
              )
            ),
            React.createElement(
              'li',
              null,
              sideMenu
            )
          )
        )
      );
    }
  }]);

  return SideNav;
}(PureComponent);

SideNav.propTypes = {
  children: PropTypes.any,
  sideMenu: PropTypes.any,
  sideMenuTitle: PropTypes.any,
  sideMenuFooter: PropTypes.any,
  sideMenuHeaderBg: PropTypes.string,
  avatarImg: PropTypes.string,
  avatarTitle: PropTypes.string,
  avatarSubTitle: PropTypes.string,
  isMenuOpen: PropTypes.bool,
  isFixed: PropTypes.bool
};

SideNav.defaultProps = {
  modoApresentacao: false,
  children: React.createElement(
    'div',
    null,
    'Carregando...'
  ),
  sideMenuTitle: '',
  sideMenuFooter: null,
  sideMenu: null,
  sideMenuHeaderBg: '',
  avatarImg: '',
  avatarTitle: '',
  avatarSubTitle: '',
  isMenuOpen: true,
  isFixed: true
};

export default SideNav;