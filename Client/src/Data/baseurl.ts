export const apiPath = 'v1/';

export const APP_HOST =
  window.location.hostname === 'localhost' ? 'localhost' : 'localhost'; // in this we can add host server

export const APP_PORT = window.location.hostname === 'localhost' ? 9000 : '';
export const HOST = `${APP_HOST}:${APP_PORT}/`;

export const BASE_URL =
  APP_HOST === 'localhost' ? `http://${HOST}` : `https://${HOST}`;

export const API_URL =
  APP_HOST === 'localhost'
    ? `http://${HOST}${apiPath}`
    : `https://${APP_HOST}/${apiPath}`;
