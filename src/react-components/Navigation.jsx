import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { Card, CardMedia } from 'material-ui/Card';
import Card, { CardActions, CardHeader, CardContent, CardMedia } from 'material-ui/Card';
import Sidebar from 'react-sidebar';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import './Navigation.css';


const LARGE_SCREEN_WIDTH = 933;
const MENU_WIDTH         = 300;

class Navigation extends PureComponent {

  constructor(props) {
    super(props);

    const isLargeScreen = screen.width >= LARGE_SCREEN_WIDTH;

    this.state = {
      isLargeScreen,
      isOpen: isLargeScreen,
      width : 0
    };
  }

  handleToggle = () => this.setState({ isOpen: !this.state.isOpen });

  handleClose = () => this.setState({ isOpen: false });

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

  render() {
    const {
      children,
      topMenuTitle,
      sideMenu,
      avatarImg,
      avatarTitle,
      avatarSubTitle,
      sideMenuHeaderBg,
      sideMenuFooter
    } = this.props;
    const { isOpen, isLargeScreen } = this.state;

    return (
      <div className='Navigation'>
        <AppBar
          className='app-bar'
          // title={ topMenuTitle }
          // onLeftIconButtonTouchTap={ this.handleToggle }
          style={ isOpen && isLargeScreen ? style.appBarMenuOpen : {} }
        />
        <Sidebar
          sidebar={
            <div style={ { width: MENU_WIDTH } }>
              <Card>
                <CardMedia
                  style={ { height: 150 } }
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
                >
                  {/* <img role='presentation' className='background-cover' src={ sideMenuHeaderBg }/>*/}
                </CardMedia>
              </Card>
              <div style={ { position: 'absolute', bottom: 0, width: '100%' } }>
                <div style={ { width: '100%', textAlign: 'right' } }>{sideMenuFooter}</div>
              </div>

              {sideMenu}
            </div>
          }
          docked={ isLargeScreen && isOpen }
          sidebarClassName='NavigationSideBar'
          open={ isOpen }
          onSetOpen={ state => this.setState({ isOpen: state }) }
        >
          <div className='app-content'>
            { children }
          </div>
        </Sidebar>
      </div>
    );
  }
}

const style = {
  contentMenuOpen: {
    paddingLeft: MENU_WIDTH,
  },
  appBarMenuOpen: {
    left: MENU_WIDTH,
  }
};

Navigation.propTypes = {
  children        : PropTypes.element,
  showNavigation  : PropTypes.bool,
  sideMenu        : PropTypes.any,
  topMenuTitle    : PropTypes.any,
  sideMenuTitle   : PropTypes.any,
  sideMenuFooter  : PropTypes.any,
  sideMenuHeaderBg: PropTypes.string,
  avatarImg       : PropTypes.string,
  avatarTitle     : PropTypes.string,
  avatarSubTitle  : PropTypes.string
};

Navigation.defaultProps = {
  children        : null,
  showNavigation  : false,
  topMenuTitle    : '',
  sideMenuTitle   : '',
  sideMenuFooter  : null,
  sideMenu        : null,
  sideMenuHeaderBg: '',
  avatarImg       : '',
  avatarTitle     : '',
  avatarSubTitle  : ''
};

export default Navigation;
