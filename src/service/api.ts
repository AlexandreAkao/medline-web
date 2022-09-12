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
    if (error.response?.status === 401) {
      axios
        .post<IRefreshToken>(
          'https://securetoken.googleapis.com/v1/token',
          {
            grant_type: 'refresh_token',
            refresh_token: localStorage.getItem('refresh_token') ?? '',
          },
          {
            params: {
              key: 'AIzaSyDYolHTkT0zuI3X1MNup36eSi2gZ3INa2g',
            },
          },
        )
        .then(data => {
          const { access_token: accessToken } = data.data;

          localStorage.setItem('token', accessToken);
        });
    } else if (error.response?.status !== 404)
      if (error.response && error.response.status >= 500)
        toast.error(error.message, { autoClose: 3000, theme: 'colored' });
    return Promise.reject(error);
  },
);

export default api;
