import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createRootReducer } from '../views/App/store/reducer';
import promiseMiddleware from './middlewares/promiseMiddleware';

export const history = createBrowserHistory();

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(routerMiddleware(history), promiseMiddleware, ReduxThunk);
  } else {
    return applyMiddleware(routerMiddleware(history), promiseMiddleware, ReduxThunk, createLogger());
  }
};

export const store = createStore(
  createRootReducer(history),
  getMiddleware()
);
