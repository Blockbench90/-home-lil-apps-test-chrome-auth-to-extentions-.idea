import axios from "axios";
import {WinStorage} from "./AuthSrorage";

axios.interceptors.request.use((config) => {
    config.baseURL ="http://localhost:4000/dev/"
    const token = window.localStorage.getItem("_token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
});

axios.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response.status === 400) {
        const message: any = Object.values(error.response.data)[0];
        WinStorage.setErrorMessage(message);
        alert(message)
    }
    if (error.response.status === 401) {
        WinStorage.removeToken();
    }
    if (error.response.status === 403) {
        WinStorage.setErrorMessage(error.response.data.error.message);
        console.log("error 403:", error.response.data.error.message);
    }
    if (error.response.status === 404) {
        console.log("404 Server not found!");
    }
    return error;
});

export default axios;
