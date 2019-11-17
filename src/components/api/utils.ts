import axios from 'axios';

export const request = axios.create({
    baseURL: 'https://registrar-reborn-api.herokuapp.com',
    timeout: 5000,
});