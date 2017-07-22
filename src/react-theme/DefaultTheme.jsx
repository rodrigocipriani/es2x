import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './normalize.css';
import './DefaultTheme.css';

// TODO: aqui está a única dependência com o materialize, tentar remover do projeto
import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css/dist/js/materialize.min';

// todo : remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

class DefaultTheme extends Component {

  render() {
    const { children } = this.props;

    return (
      <div className="DefaultTheme">
        <MuiThemeProvider muiTheme={ getMuiTheme() }>
          {children}
        </MuiThemeProvider>
      </div>
    );
  }
}

DefaultTheme.propTypes = {
  children: PropTypes.element
};

DefaultTheme.defaultProps = {
  children: null
};

export default DefaultTheme;
