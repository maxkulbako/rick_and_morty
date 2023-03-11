import axios from 'axios';
import { createPayloadAction } from '../utils/_helpers';
import { actionSetFetching } from './setFetching';

export const actionGetCharacterData = createPayloadAction('GET_CHARACTER');

export const getRickyMortyCharacter = (id) => {
  return async (dispatch) => {
    dispatch(actionSetFetching(true));
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    dispatch(actionGetCharacterData(response.data));
  };
};
