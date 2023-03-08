/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
import axios from 'axios';
import { createPayloadAction } from '../utils/_helpers';

export const actionGetData = createPayloadAction('GET_ITEMS');

export const getRickyMortyData = (resource = 'character') => {
  return async (dispatch) => {
    let allData = [];
    let nextPage = 1;
    let response;

    do {
      response = await axios.get(
        `https://rickandmortyapi.com/api/${resource}?page=${nextPage}`
      );
      allData = allData.concat(response.data.results);
      nextPage++;
    } while (response.data.info.next !== null);

    dispatch(actionGetData(allData));
  };
};
