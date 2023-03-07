/* eslint-disable import/no-cycle */
/* eslint-disable import/no-extraneous-dependencies */
import axios from 'axios';
// import { createPayloadAction } from '../utils/_helpers';

export const actionGetData = (items) => ({ type: 'GET_ITEMS', payload: items });

export const getRickyMortyData = (resource = 'character') => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/${resource}`
    );
    dispatch(actionGetData(response.data));
  };
};
