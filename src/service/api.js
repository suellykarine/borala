import axios from "axios";

const api = axios.create({
    baseURL: "https://capstone-m3-borala.herokuapp.com",
});

export default api;