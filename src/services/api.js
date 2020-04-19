import axios from 'axios';

const api = axios.create({
    baseURL: 'https://helpe-to-people.herokuapp.com'
});

export default api;