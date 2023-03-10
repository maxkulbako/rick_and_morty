/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-case-declarations */
import { actionGetData, actionGetCharacterData } from '../actions';

const initialState = {
  items: [],
  activeItem: {},
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

    case actionGetCharacterData.TYPE:
      return {
        ...state,
        activeItem: action.payload
      };
    default:
      return state;
  }
}
