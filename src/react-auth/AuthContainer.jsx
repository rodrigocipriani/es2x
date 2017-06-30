import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class AuthContainer extends PureComponent {

  render() {
    const { children, authNeeded, onRequireAuth, isLogged } = this.props;

    if (authNeeded && !isLogged) {
      onRequireAuth();
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
