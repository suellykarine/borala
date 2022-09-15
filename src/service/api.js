import axios from "axios";

const api = axios.create({
    baseURL: "https://bora-la-api.herokuapp.com/api",
});

export default api;