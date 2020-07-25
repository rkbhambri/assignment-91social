// importing axios for network request
import axios from 'axios';
import { axiosBaseUrl } from '../config';

// Created Axios instance to use it in whole application
var instance = axios.create({
    baseURL: axiosBaseUrl,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default instance;


