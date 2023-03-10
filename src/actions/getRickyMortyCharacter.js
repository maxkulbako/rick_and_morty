import axios from 'axios';
import { createPayloadAction } from '../utils/_helpers';

export const actionGetCharacterData = createPayloadAction('GET_CHARACTER');

export const getRickyMortyCharacter = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    dispatch(actionGetCharacterData(response.data));
  };
};
