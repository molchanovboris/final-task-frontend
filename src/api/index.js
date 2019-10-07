//axiosInstance

import axios from "axios";

let axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});

axiosInstance.interceptors.request.use(const token = cookie.get(__TOKEN_KEY__););



export default axiosInstance;