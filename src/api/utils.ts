import axios from 'axios';
import config from '../configs';

const request = axios.create({
    baseURL: config.api.url,
    timeout: 10000,
});
export default request;
