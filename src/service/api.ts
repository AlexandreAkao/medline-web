import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

import { getToken } from 'utils/authentication';

const api = axios.create({
  baseURL: (import.meta.env.VITE_BFF_BASE_URL as string) ?? '',
});

api.interceptors.request.use(
  config => {
    const authorization = getToken() ? { Authorization: `Bearer ${getToken()}` } : null;
    return {
      ...config,
      headers: {
        ...authorization,
      },
    };
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    toast.error(error.message, { autoClose: 3000, theme: 'colored' });
    return Promise.reject(error);
  },
);

export default api;
