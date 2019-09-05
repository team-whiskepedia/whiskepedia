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

export function getWhiskeys(options) {  
    const searchParams = new URLSearchParams();
    searchParams.set('search', options.search || '');
    searchParams.set('flavors', options.flavors || '');
    searchParams.set('sort', options.sort || '');
    const url = `${URL}/whiskeys?${searchParams.toString()}`;
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
