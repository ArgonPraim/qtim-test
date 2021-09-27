import axios from 'axios';
import { BASE_API } from '../../common/constants/api';

export const api = axios.create({
  baseURL: `${BASE_API}`,
  headers: {
    'Content-type': 'application/json'
  },
});

api.interceptors.response.use((res) => res.data);
