var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { Card, CardMedia } from 'material-ui/Card';
import Card, { CardActions, CardHeader, CardContent, CardMedia } from 'material-ui/Card';
import Sidebar from 'react-sidebar';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

var LARGE_SCREEN_WIDTH = 933;
var MENU_WIDTH = 300;

var styleSheet = createStyleSheet({
  root: {
    marginTop: 0,
    width: '100%'
  },
  flex: {
    flex: 1
  }
});

var Navigation = function (_PureComponent) {
  _inherits(Navigation, _PureComponent);

  function Navigation(props) {
    _classCallCheck(this, Navigation);

    var _this = _possibleConstructorReturn(this, (Navigation.__proto__ || Object.getPrototypeOf(Navigation)).call(this, props));

    _this.handleToggle = function () {
      return _this.setState({ isOpen: !_this.state.isOpen });
    };

    _this.handleClose = function () {
      return _this.setState({ isOpen: false });
    };

    var isLargeScreen = screen.width >= LARGE_SCREEN_WIDTH;

    _this.state = {
      isLargeScreen: isLargeScreen,
      isOpen: isLargeScreen,
      width: 0
    };
    return _this;
  }

  _createClass(Navigation, [{
    key: 'render',


    // utilizar metodos abaixo caso queira controlar onResize
    // componentWillMount() {
    //   this.updateDimensions();
    // }
    // componentDidMount() {
    //   window.addEventListener('resize', this.updateDimensions);
    // }
    //
    // componentWillUnmount() {
    //   window.removeEventListener('resize', this.updateDimensions);
    // }
    //
    // updateDimensions() {
    //   console.log('loucura loucura', screen.width);
    //   // this.setState({ width: screen.width });
    // }

    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          topMenuTitle = _props.topMenuTitle,
          sideMenu = _props.sideMenu,
          avatarImg = _props.avatarImg,
          avatarTitle = _props.avatarTitle,
          avatarSubTitle = _props.avatarSubTitle,
          sideMenuHeaderBg = _props.sideMenuHeaderBg,
          sideMenuFooter = _props.sideMenuFooter,
          classes = _props.classes;
      var _state = this.state,
          isOpen = _state.isOpen,
          isLargeScreen = _state.isLargeScreen;


      return React.createElement(
        'div',
        { className: 'Navigation' },
        React.createElement(
          AppBar,
          { position: 'static' },
          React.createElement(
            Toolbar,
            null,
            React.createElement(
              IconButton,
              { color: 'contrast', 'aria-label': 'Menu', onClick: this.handleToggle },
              React.createElement(MenuIcon, null)
            ),
            React.createElement(
              Typography,
              { type: 'title', color: 'inherit', className: classes.flex },
              'Title'
            ),
            React.createElement(
              Button,
              { color: 'contrast' },
              'Login'
            )
          )
        ),
        React.createElement(
          Sidebar,
          {
            sidebar: React.createElement(
              'div',
              { style: { width: MENU_WIDTH } },
              React.createElement(
                Card,
                null,
                React.createElement(CardMedia, {
                  style: { height: 150 }
                  // overlayContentStyle={ { height: '100%', verticalAlign: 'bottom' } }
                  // overlayStyle={ {
                  //   background        : `url(${ sideMenuHeaderBg })`,
                  //   backgroundPosition: 'center',
                  //   backgroundSize    : 'cover'
                  // } }
                  // overlay={
                  //   <div className='avatarInfo'>
                  //     <Avatar src={ avatarImg }/>
                  //     <br/>
                  //     <a href='#!name'><span className='white-text name'>{avatarTitle}</span></a>
                  //     <br/>
                  //     <a href='#!email'><span className='white-text email'>{avatarSubTitle}</span></a>
                  //   </div>
                  // }
                })
              ),
              React.createElement(
                'div',
                { style: { position: 'absolute', bottom: 0, width: '100%' } },
                React.createElement(
                  'div',
                  { style: { width: '100%', textAlign: 'right' } },
                  sideMenuFooter
                )
              ),
              sideMenu
            ),
            docked: isLargeScreen && isOpen,
            sidebarClassName: 'NavigationSideBar',
            open: isOpen,
            onSetOpen: function onSetOpen(state) {
              return _this2.setState({ isOpen: state });
            }
          },
          React.createElement(
            'div',
            { className: 'app-content' },
            children
          )
        )
      );
    }
  }]);

  return Navigation;
}(PureComponent);

var style = {
  contentMenuOpen: {
    paddingLeft: MENU_WIDTH
  },
  appBarMenuOpen: {
    left: MENU_WIDTH
  }
};

Navigation.propTypes = {
  children: PropTypes.element,
  showNavigation: PropTypes.bool,
  sideMenu: PropTypes.any,
  topMenuTitle: PropTypes.any,
  sideMenuTitle: PropTypes.any,
  sideMenuFooter: PropTypes.any,
  sideMenuHeaderBg: PropTypes.string,
  avatarImg: PropTypes.string,
  avatarTitle: PropTypes.string,
  avatarSubTitle: PropTypes.string
};

Navigation.defaultProps = {
  children: null,
  showNavigation: false,
  topMenuTitle: '',
  sideMenuTitle: '',
  sideMenuFooter: null,
  sideMenu: null,
  sideMenuHeaderBg: '',
  avatarImg: '',
  avatarTitle: '',
  avatarSubTitle: ''
};

export default withStyles(styleSheet)(Navigation);