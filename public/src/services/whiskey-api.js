import store from './store.js';

const URL = '/api';

const token = store.getToken();

function fetchWithError(url, options) {
    if(token) {
        options = options || {};
        options.headers = options.headers || {};
        options.headers.Authorization = token;
    }

    return fetch(url, options)
        .then(response => {
            if(response.ok) {
                return response.json();
            }
            else {
                return response.json().then(json => {
                    throw json.error;
                });
            }
        });
}

export function getWhiskeys() {  
    const url = `${URL}/whiskeys`;
    return fetchWithError(url);
}

export function signUp(user) {
    const url = `${URL}/auth/signup`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(user)        
    });
}

export function signIn(credentials) {
    const url = `${URL}/auth/signin`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials)        
    });
}

export function getFlavors() {  
    const url = `${URL}/flavors`;
    return fetchWithError(url);
}
export function getFavorites() {
    const url = `${URL}/me/favorites`;
    return fetchWithError(url);
}
export function makeFavorite(whiskey) {
    const url = `${URL}/me/favorites`;
    return fetchWithError(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(whiskey)        
    });  
}
export function removeFavorite(whiskeyID) {
    const url = `${URL}/me/favorites/${whiskeyID}`;
    return fetchWithError(url, {
        method: 'DELETE',
    });    
}