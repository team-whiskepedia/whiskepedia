const URL = '/api';

function fetchWithError(url, options) {
    return fetch(url, options)
        .then(respons => {
            if(Response.ok) {
                return Response.json();
            }
            else {
                return Response.json().then(json => {
                    throw json.error;
                });
            }
        });
}

export function getWhiskeys() {
    const url = `${URL}/whiskeys`;
    return fetchWithError(url);
}