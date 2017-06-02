import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class AuthContainer extends PureComponent {

  testIsLogado = () => {
    if (true) {
      this.props.callbackIsLogged();
    } else {
      this.props.callbackNotLogged();
    }
  };

  render() {
    const { children, authNeededTest, callbackRequireLogin } = this.props;

    if (authNeededTest) {
      if (this.testIsLogado) {
        return children;
      }
      callbackRequireLogin();
      return null;
    }
    return children;
  }
}

AuthContainer.propTypes = {
  children            : PropTypes.any, // todo : Implementar apra ser element ou string
  authNeededTest      : PropTypes.func,
  callbackIsLogged    : PropTypes.func,
  callbackNotLogged   : PropTypes.func,
  callbackRequireLogin: PropTypes.func
};

AuthContainer.defaultProps = {
  children         : null,
  authNeededTest   : null,
  callbackIsLogged : null,
  callbackNotLogged: null
};

export default AuthContainer;
