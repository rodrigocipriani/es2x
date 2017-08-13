
var reducerCreator = function reducerCreator(initialState, actionsMap) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var fn = actionsMap[action.type];
    return fn ? fn(state, action) : state;
  };
};

export default reducerCreator;