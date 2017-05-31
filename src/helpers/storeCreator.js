import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';


const storeCreator = (reducersAttr, props) => {
  const { isProduction, showLoggers } = props;
  let { loggerOptions } = props;
  const reducers = combineReducers(reducersAttr);
  if (showLoggers !== undefined) {
    loggerOptions = { ...loggerOptions, predicate: () => showLoggers };
  }
  const loggerMiddleware = createLogger(loggerOptions);

  const store = isProduction ?
      createStore(
          reducers,
          applyMiddleware(thunkMiddleware)
      )
      :
      createStore(
          reducers,
          compose(
              applyMiddleware(
                  thunkMiddleware,
                  loggerMiddleware
              ),
              window.devToolsExtension ? window.devToolsExtension() : f => f
          )
      );

  // https://github.com/reactjs/react-redux/releases/tag/v2.0.0
  // Hot reloading reducers is now explicit (#80)
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(reducers, () => {
      store.replaceReducer(reducers);
    });
  }

  return store;
};

export default storeCreator;
