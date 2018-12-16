import axios from 'axios';

const instance = axios.create({
  // axios config
});

/*
 * Request Interceptor
 * */
instance.interceptors.request.use(config => {
  return config;
}, error => {
  return Promise.reject(error);
});


/*
 * Response Interceptor
 *
 **/
instance.interceptors.response.use(response => {
  return response;
}, error => {
  return Promise.reject(error);
});

export default {
  GET: (url: string, params: Object = {}) => {
    return instance.get(url, { params });
  },
  POST: (url: string, payload: Object = {}, config: Object = {}) => {
    return instance.post(url, { data: payload, ...config });
  }
};