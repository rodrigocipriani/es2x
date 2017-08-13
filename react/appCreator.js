import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { BrowserRouter as Router } from 'react-router-dom';
import 'babel-polyfill';
import { whyDidYouUpdate } from 'why-did-you-update';
// const { whyDidYouUpdate } = require('why-did-you-update');
var customHistory = createBrowserHistory();

export default (function (App, store) {
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var rootContainer = props.rootContainer || 'root';
  var isProduction = props.isProduction !== null ? props.isProduction : true;
  var isWhyDidYouUpdate = props.whyDidYouUpdate !== null ? props.whyDidYouUpdate : true;

  if (!isProduction && isWhyDidYouUpdate) {
    whyDidYouUpdate(React);
  }

  ReactDOM.render(React.createElement(
    Provider,
    { store: store },
    React.createElement(
      Router,
      { history: customHistory },
      isProduction ? React.createElement(App, null) : React.createElement(
        'div',
        null,
        React.createElement(App, null)
      )
    )
  ), document.getElementById(rootContainer));
});