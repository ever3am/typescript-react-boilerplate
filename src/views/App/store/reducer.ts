 import * as constants from './constants';
import { combineReducers } from 'redux';
import { History } from 'history';
import { connectRouter } from 'connected-react-router';
import { AppActions } from './actions';

export interface AppState {
  name: string
}

const appState: AppState = {
  name: 'TypeScript React Boilerplate'
}

export const rootReducer = (state: AppState = appState, action: AppActions): AppState => {
  let newState;
  switch (action.type) {
    case constants.LOADING:
      newState = {...state};
    default:
      newState = state;
  }
  return newState;
}

export const createRootReducer = (history: History) => combineReducers({
  app: rootReducer,
  router: connectRouter(history)
});