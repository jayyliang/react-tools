import axios from 'axios';

const http = axios.create({
    // baseURL: 'https://scnuradio-association.cn',
    // headers: {
    //     "content-type": 'application/x-www-form-urlencoded',
    // },
    timeout: 10000,
    withCredentials: true
});

// // 请求拦截
// http.interceptors.request.use(config => {
//     const method = config.method.toLowerCase()
//     // 加入请求时间戳
//     if (method === 'post' || method === 'put') {} else if (method === 'get') {
//         if (!config.params) config.params = {}
//         config.params.requestTime = Date.now()
//     }
//     return config;
// }, error => {
//     return Promise.reject(error)
// })

// // 返回拦截
// http.interceptors.response.use(response => {
//     // 对接口返回做统一处理, 这里要跟后台约定好接口异常返回的数据格式
//     // if(response.data.status_code) {
//     //     return Promise.reject(response.data.message);
//     // }
//     return Promise.resolve(response.data);
// }, error => {
//     return Promise.reject(error);
// })

export default http