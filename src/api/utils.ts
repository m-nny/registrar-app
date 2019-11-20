import axios from 'axios';
import config from '../configs';

export const request = axios.create({
    baseURL: config.api.url,
    timeout: 10000,
});
