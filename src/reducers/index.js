import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rickmortyReducer } from './rickmortyReducer';

const rootReducer = combineReducers({
  rickandmorty: rickmortyReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
