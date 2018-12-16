import { message } from 'antd';
import { Middleware } from 'redux';

function isPromise (v: any) {
  return v && typeof v.then === 'function';
}

const promiseMiddleware: Middleware = store => next => async action => {
  if (isPromise(action.payload)) {
    const res = await action.payload;
    
    if (res && res.status === 200 && res.data && res.data.resCode === '200') {
      action.payload = res.data;
    } else {
      action.error = true;
      const resMsg = res && res.data && res.data.resMsg;
      message.error(resMsg);
      action.payload = resMsg;
    }
    store.dispatch(action);

    return;
  }

  next(action);
};

export default promiseMiddleware;
