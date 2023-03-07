// import { actionGetData } from '../actions/getRickyMortyData';

const initialState = {
  items: [],
  isFetching: true
};

export function rickmortyReducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'GET_ITEMS':
      return {
        ...state,
        items: action.payload.results
      };
    default:
      return state;
  }
}
