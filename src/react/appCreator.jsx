import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import 'babel-polyfill';

const customHistory = createBrowserHistory();

export default (Routes, store, props = {}) => {
  const rootContainer = props.rootContainer || 'root';
  const isProduction = props.isProduction || true;

  ReactDOM.render(
    <Provider store={ store }>
      <Router history={ customHistory }>
        { isProduction ?
          <Routes/> :
          <div>
            <Routes/>
            {/* <div>Desenvolvimento</div>*/}
          </div> }
      </Router>
    </Provider>,
        document.getElementById(rootContainer)
    );
};
