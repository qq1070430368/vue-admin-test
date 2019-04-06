import axios from 'axios'

const httpApi = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  timeout: 50000 // 请求超时时间
})
// 模拟存入token
localStorage.setItem('TOKEN', new Date().getDay());
httpApi.interceptors.request.use(
  config => {
     if(localStorage) {
       config.headers['token'] = localStorage.getItem('TOKEN');
     }
     return config;
  },
  error => new Promise.reject(error)
);

httpApi.interceptors.response.use(
  response => {
    console.log(response)
    return response
  }
)

export default httpApi;
