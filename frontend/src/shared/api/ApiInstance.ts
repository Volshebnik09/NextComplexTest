import axios from "axios";

export const ApiInstance = axios.create({
    baseURL: 'http://o-complex.com:1337/',
    headers: {
        "Content-Type": "application/json"
    }
})