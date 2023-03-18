import { actionSignIn, actionSignOut } from "../actions";

const initialState = {
  user: {},
};

export function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionSignIn.TYPE:
      return {
        ...state,
        user: action.payload,
      };

    case actionSignOut.TYPE:
      return {
        ...state,
        user: {},
      };
    default:
      return state;
  }
}
