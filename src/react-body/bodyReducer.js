import { reducerCreator } from 'es2x/helpers';
import { bodyActionTypes } from './bodyActionTypes';

const initialState = {
  msgs: []
};

const actionsMap = {

  [bodyActionTypes.APP_NEW_MESSAGE]: (state, action) => {
    const mensagens = action.error.response ? action.error.response.data.mensagens : null;
    const errors = mensagens || [];

    return { ...state, msgs: errors };
  },
};

export default reducerCreator(initialState, actionsMap);
