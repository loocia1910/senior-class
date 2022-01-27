import axios from 'axios';


// axios 기본 설정
const instance = axios.create();

instance.defaults.baseURL = process.env.REACT_APP_API_URL;
instance.defaults.withCredentials = true;
// instance.defaults.headers.common['Content-Type'] = 'application/json';

// interceptors를 이용하여
// then 이나 catch에 핸들링되기 이전에 실행되어야 할 것을 실행
// instance.interceptors.request.use((config) => {
//     // 로딩 호출 
//     return config;
// }, (error) => {
//     // 실패 시 로딩 창 종료 
//     return Promise.reject(error);
// });

// instance.interceptors.response.use((response) => {
//     // 응답 성공 시 로딩 창 종료
//     return response;
// }, (error) => {
//     // 응답 실패 시 로딩 창 종료
//     return Promise.reject(error);
// })

export default instance;