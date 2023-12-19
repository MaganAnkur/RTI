import Axios from 'axios';
import qs from 'qs';

const API_KEY = '8ee0fe1fba333c335fdf789d59feaf33';

export const axios = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
  },
  paramsSerializer: params => {
    return qs.stringify(params, {encode: false, arrayFormat: 'repeat'});
  },
});
