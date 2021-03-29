const env = process.env.REACT_APP_ENV;

export const API_URL =
  env === 'production'
    ? // prod
      'https://api.dev.1fit.app/api'
    : env === 'development'
    ? // dev
      'https://api.dev.1fit.app/api'
    : // local
      'https://api.dev.1fit.app/api';
