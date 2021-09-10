import axios from "axios";

const instance = axios.create({
    //baseURL: "http://localhost:8001",
    baseURL: "https://cocky-babbage-dcf35e.netlify.app/",
    //baseURL: "https://tinder-swm-api.herokuapp.com/",
});

export default instance;