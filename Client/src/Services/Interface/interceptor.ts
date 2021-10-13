import axios from 'axios';
import { BASE_URL } from '../../Data/baseurl';
import ignoretokenpaths from '../../Data/ignoretokenpaths';
import { ProcessQueDto, TokenDto } from '../dto/interface.ques.dto';
import jwtDecode from 'jwt-decode';

let isRefreshing = false;
let failedQueue: ProcessQueDto[] | any[] = [];

const processQueue = (error: unknown, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

axios.interceptors.request.use(async (config) => {
  const token = localStorage.getItem('x-token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axios.interceptors.response.use(undefined, (err) => {
  const onrequest = err.config;

  const token = localStorage.getItem('x-token');
  if (!err.response?.config?.url?.includes(ignoretokenpaths) && !token) {
    return Promise.reject(err);
  }
  if (
    (err?.response?.config?.url === BASE_URL + 'refresh_token' &&
      err?.response?.status === 401) ||
    !token
  ) {
    localStorage.removeItem('x-token');
    localStorage.removeItem('qid');
  }
  const refreshToken = localStorage.getItem('qid');
  let exp = null;
  if (token) {
    const expery = jwtDecode<TokenDto>(token);
    if (expery) {
      exp = expery.exp;
    }
  }
  if (
    token &&
    refreshToken &&
    exp &&
    exp < Date.now() / 1000 &&
    !onrequest._retry
  ) {
    if (isRefreshing) {
      return new Promise(function (resolve, reject) {
        failedQueue.push({ resolve, reject });
      })
        .then((tokens) => {
          onrequest.headers['Authorization'] = 'Bearer ' + tokens;
          return axios(onrequest);
        })
        .catch((error) => {
          return Promise.reject(error);
        });
    }
    onrequest._retry = true;
    isRefreshing = true;

    return new Promise((resolve, reject) => {
      const setRefUrl = BASE_URL + '/refresh_token';
      axios
        .post(setRefUrl, {
          refresh_token: refreshToken
        })
        .then(({ data: { access_token, refresh_token } }) => {
          axios.defaults.headers.common.Authorization =
            'Bearer ' + access_token;
          localStorage.setItem('x-token', access_token);
          localStorage.setItem('qid', refresh_token);
          processQueue(null, access_token);
          resolve(axios(onrequest));
        })
        .catch((error) => {
          localStorage.removeItem('x-token');
          localStorage.removeItem('qid');
          processQueue(error, null);
          reject(error);
        })
        .then(() => {
          isRefreshing = false;
        });
    });
  }
  return Promise.reject(err);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  del: axios.delete
};
