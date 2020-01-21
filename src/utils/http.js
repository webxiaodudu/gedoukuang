import axios from "axios";
let baseURL = 'http://localhost:8000/';
const http = axios.create({
  // 在config文件夹下dev.evn.js和prod.env.js里分别配置开发和生产环境对应的路径前缀
  baseURL: baseURL,
  timeout: 20000, // request timeout
  withCredentials: true // 默认为false,true为携带cookie
});

http.CancelToken = axios.CancelToken; //挂载CancelToken用于取消请求

http.interceptors.request.use(
  config => {
    // let Authorization = getToken();
    // if (Authorization) {
    //   config.headers.Authorization = Authorization;
    // }

    // 设置中文编码
    config.headers["Content-Type"] = "application/json;charset=UTF-8";
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
// 返回拦截器
http.interceptors.response.use(
  response => {
   
    // if (response.data.status == 16) {
    //   // 若是16则说明token有问题，返回登录页并清除cookie
    //   removeCookies();
    //   let protocol = window.location.protocol;
    //   let host = window.location.host + "";
    //   let hrefUrl = protocol + "//" + host;
    //   window.location.href = hrefUrl;
    //   return Promise.reject(response);
    // }
    // return response;
  },
  error => {
    console.log("error", error.response);
    // // 若错误代码是531，则是token过期，重新跳转到登录页面
    // if (
    //   error &&
    //   error.response &&
    //   error.response.data &&
    //   error.response.data.status
    // ) {
    //   if (error.response.data.status == 531) {
    //     removeCookies();
    //     setPorStatus("1001");
    //     let protocol = window.location.protocol;
    //     let host = window.location.host + "";
    //     let hrefUrl = protocol + "//" + host;
    //     window.location.href = hrefUrl;
    //   }
    // } 
    return Promise.reject(error);
  }
);

export default http;
