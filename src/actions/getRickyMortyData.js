import axios from 'axios';
import { createPayloadAction } from '../utils/_helpers';

export const actionGetData = createPayloadAction('GET_ITEMS');

export const getRickyMortyData = (resource = 'character') => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/${resource}`
    );
    dispatch(actionGetData(response.data));
  };
};
