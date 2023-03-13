/* eslint-disable object-curly-newline */
/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-case-declarations */
import {
  actionGetData,
  actionGetCharacterData,
  actionSetFetching
} from '../actions';

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
      const { id, name, status, type, gender, origin, image } = action.payload;
      const updatedActiveItem = {
        id,
        name,
        status,
        type,
        gender,
        origin: origin.name,
        image
      };
      return {
        ...state,
        activeItem: updatedActiveItem
      };

    case actionSetFetching.TYPE:
      return {
        ...state,
        isFetching: action.payload
      };
    default:
      return state;
  }
}
