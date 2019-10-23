import axios from "axios";
console.log(localStorage.getItem('token'));
let axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
});


axiosInstance.interceptors.request.use(function(config) {
  const token = localStorage.getItem('token')
    console.log('token', token)
  if ( token != null ) {
    config.headers.Authorization = token;
  }

  return config;
}, function(err) {
  return Promise.reject(err);
});



export default axiosInstance;