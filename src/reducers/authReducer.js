import { actionAuthSignIn, actionAuthSignUp } from '../actions/actionAuth';

const initialState = {
  activeUser: {
    id: null,
    name: null,
    token: null
  }
};

export function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionAuthSignIn.TYPE:
      return {
        ...state,
        activeUser: {
          ...state.activeUser,
          id: action.payload.uid,
          name: action.payload.displayName,
          token: action.payload.accessToken
        }
      };

    case actionAuthSignUp.TYPE:
      return {
        ...state,
        activeUser: {
          ...state.activeUser,
          id: null,
          name: null,
          token: null
        }
      };
    default:
      return state;
  }
}
