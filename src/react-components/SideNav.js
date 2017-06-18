import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const paddingLeft = 300;
const maxWidth    = 1200 + paddingLeft;
const styles      = {
  isFixed: {
    paddingLeft,
    maxWidth
  },
  sideMenuTitle: {
    paddingLeft: '10px',
    color      : '#333',
    textShadow : 'rgb(224, 224, 224) 1px 1px 0px'
  },
  SideNav: {
    maxWidth
  }
};

class SideNav extends PureComponent {

  // componentDidUpdate() {
  //     $('.button-collapse').sideNav();
  // }
  //
  // componentDidMount() {
  //     $(document).ready(() => {
  //         $('.button-collapse').sideNav();
  //     });
  // }

  render() {
    const {
            sideMenu, sideMenuTitle, sideMenuHeaderBg, avatarImg, avatarTitle, avatarSubTitle,
            isFixed, isMenuOpen, children, sideMenuFooter
          } = this.props;

    const isShowMenu = isMenuOpen && isFixed;

    return (
      <div
        className={ ['SideNav', (isShowMenu ? 'container' : '')].join(' ') }
        style={ Object.assign(isShowMenu ? styles.isFixed : {}, {}) }
      >
        {/* <a href="#"
         data-activates="slide-out"
         className="button-collapse
         waves-effect waves-light btn">Menu</a>*/}
        {children}

        <ul id='slide-out' className={ ['side-nav', (isShowMenu ? 'fixed' : '')].join(' ') }>
          <li>
            <div className='userView'>
              <img className='background background-cover' src={ sideMenuHeaderBg }/>
              <a href='#!user'>
                <img className='circle' src={ avatarImg }/>
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
