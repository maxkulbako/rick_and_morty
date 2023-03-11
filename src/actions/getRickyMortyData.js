/* eslint-disable no-console */
/* eslint-disable no-plusplus */
import axios from 'axios';
import { createPayloadAction } from '../utils/_helpers';
import { actionSetFetching } from './setFetching';

export const actionGetData = createPayloadAction('GET_ITEMS');

export const getRickyMortyData = (resource = 'character') => {
  return async (dispatch) => {
    dispatch(actionSetFetching(true));
    try {
      const response = await axios.get(
        `https://rickandmortyapi.com/api/${resource}`
      );
      const { info } = response.data;

      const promises = [];
      for (let i = 2; i <= info.pages; i++) {
        promises.push(
          axios.get(`https://rickandmortyapi.com/api/${resource}?page=${i}`)
        );
      }

      const results = await Promise.all(promises);
      const allData = results.reduce(
        (acc, res) => acc.concat(res.data.results),
        response.data.results
      );

      dispatch(actionGetData(allData));
    } catch (error) {
      console.error(error);
    }
  };
};
