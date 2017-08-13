var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { storeActionTypes } from './';

var storeCreator = function storeCreator(reducers, props) {
  var isProduction = props.isProduction,
      showLoggers = props.showLoggers;
  var loggerOptions = props.loggerOptions;

  var reducersObj = combineReducers(reducers);
  if (showLoggers !== undefined) {
    loggerOptions = _extends({}, loggerOptions, { predicate: function predicate() {
        return showLoggers;
      } });
  }
  var loggerMiddleware = createLogger(loggerOptions);

  var store = isProduction ? createStore(reducersObj, applyMiddleware(thunkMiddleware)) : createStore(reducersObj, compose(applyMiddleware(thunkMiddleware, loggerMiddleware), window.devToolsExtension ? window.devToolsExtension() : function (f) {
    return f;
  }));

  // https://github.com/reactjs/react-redux/releases/tag/v2.0.0
  // Hot reloading reducers is now explicit (#80)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(reducersObj, function () {
      store.replaceReducer(reducersObj);
    });
  }

  /**
   * todo: Maybe that's not the better way
   * */
  store.createAssyncAction = function (type, promise, args) {
    store.dispatch({
      type: type,
      pending: true
    });

    promise.then(function (result) {
      store.dispatch(_extends({
        type: type,
        payload: result.data || result,
        complete: true
      }, args));
    }).catch(function (err) {
      store.dispatch(_extends({
        type: type,
        payload: err,
        error: true
      }, args));
      store.dispatch(_extends({
        type: storeActionTypes.REQUEST_ERROR,
        payload: { type: type, message: err.msg, error: err }
      }, args));
    });
  };

  return store;
};

export default storeCreator;