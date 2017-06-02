import { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import authConnector from './authConnector';

class AutenticatedContainer extends PureComponent {

    constructor(props) {
        super(props);
        props.requestLoggedUser();
    }

    componentDidMount() {
        this.testIsLogado();
    }

    testIsLogado = () => {
        if (this.props.isLogged) {
            this.props.callbackIsLogged();
        } else {
            this.props.callbackNotLogged();
        }
    };

    render() {
        const { children, isLogged, isProtectedTest, onProtectedTest } = this.props;

        if (isProtectedTest() && !isLogged) {
            if (isLogged !== null) {
                onProtectedTest();
            }
            return null;
        }
        return children;
    }
}

AutenticatedContainer.propTypes = {
    children         : PropTypes.element, // todo : Implementar apra ser element ou string
    isLogged         : PropTypes.bool,
    callbackIsLogged : PropTypes.func,
    callbackNotLogged: PropTypes.func,
    requestLoggedUser: PropTypes.func,
    isProtectedTest  : PropTypes.func,
    onProtectedTest  : PropTypes.func
};

AutenticatedContainer.defaultProps = {
    children         : null,
    isLogged         : null,
    callbackIsLogged : null,
    callbackNotLogged: null,
    requestLoggedUser: null,
    isProtectedTest  : null,
    onProtectedTest  : {}
};

export default (AutenticatedContainer);
// export default authConnector(AutenticatedContainer);
