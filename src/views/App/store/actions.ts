import * as constants from './constants';

export interface LoadingAction {
  type: constants.LOADING
};

export type AppActions = LoadingAction;

export function loading (): AppActions {
  return {
    type: constants.LOADING
  };
};