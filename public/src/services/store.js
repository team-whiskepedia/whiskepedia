
const TOKEN_KEY = 'token';
const USER_NAME = 'user';

export default {
    getToken() {
        return localStorage.getItem(TOKEN_KEY);
    },
    getUser() {
        return localStorage.getItem(USER_NAME);
    },
    setToken(token) {
        return localStorage.setItem(TOKEN_KEY, token);
    },
    setUser(user){
        return localStorage.setItem(USER_NAME, user);
    },
    hasToken() {
        return this.getToken() !== null;
    },
    removeToken() {
        localStorage.removeItem(TOKEN_KEY);
    },
    removeUser() {
        localStorage.removeItem(USER_NAME);
    }
};