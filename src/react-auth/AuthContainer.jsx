import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class AuthContainer extends PureComponent {

  isLoggedTest = () => {
    return false;
  };

  render() {
    const { children, authNeeded, onRequireAuth, isLogged } = this.props;

    if (authNeeded) {
      if (isLogged) {
        return children;
      }
      onRequireLogin();
      return null;
    }
    return children;
  }
}

AuthContainer.propTypes = {
  children      : PropTypes.any,
  authNeeded    : PropTypes.bool,
  isLogged      : PropTypes.bool,
  onRequireAuth: PropTypes.func
};

AuthContainer.defaultProps = {
  children      : null,
  authNeeded    : false,
  isLogged      : false,
  onRequireAuth: () => {}
};

export default AuthContainer;
