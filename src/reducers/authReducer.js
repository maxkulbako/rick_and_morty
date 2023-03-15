/* eslint-disable no-case-declarations */
import { actionAuthLogin, actionAuthLogout } from '../actions/actionAuth';

const initialState = {
  activeUser: null
};

export function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionAuthLogin.TYPE:
      return {
        ...state,
        activeUser: {
          ...state.activeUser,
          name: action.payload.displayName,
          picture: action.payload.photoURL
        }
      };

    case actionAuthLogout.TYPE:
      return {
        ...state,
        activeUser: null
      };
    default:
      return state;
  }
}
