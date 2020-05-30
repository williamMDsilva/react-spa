import axios from 'axios';
const BASE_URL = process.env.REACT_APP_API_PATH;

export function Auth(email, password) {
    return axios.post(`${BASE_URL}login`, { email, password });
}