import axios from 'axios';

const BASE_URL = "https://orchestra-and-maestro.herokuapp.com/api/";

export default axios.create({
    baseURL: BASE_URL,
    responseType: "json"
});