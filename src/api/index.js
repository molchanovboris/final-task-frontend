//axiosInstance

import axios from "axios";


// import { getToken } from './functions';

let axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: { Authorization: localStorage.getItem('token') }
});

// let axiosInstance = axios.create({
//   baseURL: 'http://localhost:5000',
// });

// axiosInstance.interceptors.request.use(
//   config => {
//     const token = localStorage.getItem('token');
//     config.headers.authorization = `Bearer ${token}`;
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   },
// );



export default axiosInstance;