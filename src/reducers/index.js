import { combineReducers, applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rickmortyReducer } from './rickmortyReducer';

const rootReducer = combineReducers({
  rickandmarty: rickmortyReducer
});

export const store = createStore(rootReducer, applyMiddleware(logger, thunk));
