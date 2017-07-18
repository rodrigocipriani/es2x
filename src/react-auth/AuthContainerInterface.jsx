import { PureComponent } from 'react';
import PropTypes from 'prop-types';

class AuthContainerInterface extends PureComponent {

  render() {
    const { children, authNeeded, onRequireAuth, isAuthenticated } = this.props;

    if (authNeeded && !isAuthenticated) {
      onRequireAuth();
      return null;
    }
    return children;
  }
}

AuthContainerInterface.propTypes = {
  children       : PropTypes.any.isRequired,
  authNeeded     : PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  onRequireAuth  : PropTypes.func.isRequired
};

AuthContainerInterface.defaultProps = {
  children       : null,
  authNeeded     : null,
  isAuthenticated: null,
  onRequireAuth  : null
};

export default AuthContainerInterface;
