import axios from 'axios';

const api = axios.create({
  // baseURL: process.env.VITE_BFF_BASE_URL,
  baseURL: 'ec2-18-116-52-5.us-east-2.compute.amazonaws.com:80',
});

export default api;
