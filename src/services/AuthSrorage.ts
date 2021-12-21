class AuthStorage {

    setToken(token: string) {
        if (token) {
            window.localStorage.setItem("_token", token);
        }
    }

    getToken() {
        return window.localStorage.getItem("_token");
    }

    removeToken() {
        window.localStorage.removeItem("_token");
    }

    setErrorMessage(message: string) {
        if (message) {
            window.localStorage.setItem("_m", message);
        }
    }

    getErrorMessage() {
        return window.localStorage.getItem("_m");
    }
}

export const WinStorage = new AuthStorage();
