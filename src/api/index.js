import axios from "axios";

let axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  headers: { Authorization: localStorage.getItem('token') }
});

export default axiosInstance;