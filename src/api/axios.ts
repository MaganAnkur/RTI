import Axios from 'axios';
import qs from 'qs';

const API_KEY = 'Add your API key here';

export const axios = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
  },
  paramsSerializer: params => {
    return qs.stringify(params, {encode: false, arrayFormat: 'repeat'});
  },
});
