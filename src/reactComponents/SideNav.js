import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SideNav extends PureComponent {

  render() {
    const {
            sideMenu, sideMenuTitle, sideMenuHeaderBg, avatarImg, avatarTitle, avatarSubTitle,
            isFixed, isMenuOpen, children, sideMenuFooter
          } = this.props;

    const isShowMenu = isMenuOpen && isFixed;

    return (
      <div className='SideNav'>
        <div
          className={ [
            (isShowMenu ? 'container isMenuVisible' : '')
          ].join(' ') }
        >
          {/* <a href="#"
           data-activates="slide-out"
           className="button-collapse
           waves-effect waves-light btn">Menu</a>*/}
          {children}

          <ul id='slide-out' className={ ['side-nav', (isShowMenu ? 'fixed' : '')].join(' ') }>
            <li>
              <div className='userView'>
                <img role='presentation' className='background background-cover' src={ sideMenuHeaderBg }/>
                <a href='#!user'>
                  <img alt="User Avatar Image" className='circle' src={ avatarImg }/>
                </a>
                <a href='#!name'><span className='white-text name'>{avatarTitle}</span></a>
                <a href='#!email'><span className='white-text email'>{avatarSubTitle}</span></a>
              </div>
              <div style={ { position: 'absolute', bottom: 50, width: '100%' } }>
                <div style={ { width: '100%', textAlign: 'right' } }>{sideMenuFooter}</div>
              </div>
            </li>
            <li className='white'><a style={ { fontSize: '1.5em' } }>{sideMenuTitle}</a></li>
            <li>
              {sideMenu}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

SideNav.propTypes = {
  children        : PropTypes.any,
  sideMenu        : PropTypes.any,
  sideMenuTitle   : PropTypes.any,
  sideMenuFooter  : PropTypes.any,
  sideMenuHeaderBg: PropTypes.string,
  avatarImg       : PropTypes.string,
  avatarTitle     : PropTypes.string,
  avatarSubTitle  : PropTypes.string,
  isMenuOpen      : PropTypes.bool,
  isFixed         : PropTypes.bool
};

SideNav.defaultProps = {
  modoApresentacao: false,
  children        : <div>Carregando...</div>,
  sideMenuTitle   : '',
  sideMenuFooter  : null,
  sideMenu        : null,
  sideMenuHeaderBg: '',
  avatarImg       : '',
  avatarTitle     : '',
  avatarSubTitle  : '',
  isMenuOpen      : true,
  isFixed         : true
};

export default SideNav;
