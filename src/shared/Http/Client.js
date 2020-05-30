import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_PATH;

export default axios.create({
    baseURL: BASE_URL,
    responseType: "json"
});