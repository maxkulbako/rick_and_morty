import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rickmortyReducer } from './rickmortyReducer';
import { authReducer } from './authReducer';

const rootReducer = combineReducers({
  rickandmorty: rickmortyReducer,
  auth: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk, logger));
