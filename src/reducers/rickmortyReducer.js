/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-case-declarations */
import { actionGetData } from '../actions/getRickyMortyData';

const initialState = {
  items: [],
  isFetching: true
};

export function rickmortyReducer(state = initialState, action = {}) {
  switch (action.type) {
    case actionGetData.TYPE:
      const sortedItems = action.payload.sort((a, b) =>
        a.name.localeCompare(b.name)
      );
      return {
        ...state,
        items: sortedItems
      };
    default:
      return state;
  }
}
