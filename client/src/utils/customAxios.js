import axios from 'axios';


// axios 기본 설정
const instance = axios.create();

instance.defaults.baseURL = process.env.REACT_APP_API_URL;
instance.defaults.withCredentials = true;
// instance.defaults.headers.common['Content-Type'] = 'application/json';

export default instance;