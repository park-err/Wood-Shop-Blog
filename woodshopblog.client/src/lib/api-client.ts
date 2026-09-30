import Axios from 'axios';
import axiosRetry from 'axios-retry';

axiosRetry(Axios, { retries: 3 });
export const apiClient = Axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
