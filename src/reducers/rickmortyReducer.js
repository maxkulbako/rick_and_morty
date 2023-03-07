import { actionGetData } from '../actions/getRickyMortyData';

const initialState = {
  items: [],
  isFetching: true
};

export function rickmortyReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionGetData.TYPE:
      return {
        ...state,
        items: action.payload.results
      };
    default:
      return state;
  }
}
