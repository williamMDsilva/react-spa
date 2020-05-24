import axios from 'axios';
const BASE_URL = "";

export default {
    Auth(email, password) {
        return axios.post(`${BASE_URL}login`, { email, password });        
    }
}