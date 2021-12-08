// import axios from "axios"; //导入axios
// import { ElNotification } from 'element-plus';
import axios from "axios";


// 创建axios实例
const instance = axios.create({
  // baseURL: "http://127.0.0.1:8000",
  // baseURL: "http://104.168.211.39:82",
  // baseURL: "https://usds.link",
  baseURL: "https://ropeasy.com/",
  // baseURL: "https://127.0.0.1:82",
  // baseURL: "http://110.42.250.122:83",
  timeout: 10000,
  headers:{
    "Content-Type":"application/json"
}
});

// 请求拦截
// 所有请求先走这个
instance.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(err);
  }
);
// 响应拦截
// 所有响应先走这个
instance.interceptors.response.use(
  function(response) {
    return response;
  },
  function(err) {
    errorinfo();
    return Promise.reject(err);
  }
);

// 导出get函数，在外面使用
export function get(url, data) {
  return instance.get(url, data);
}

// 导出psot函数，在外面使用
export function post(url, data) {
  return instance.post(url, data);
}