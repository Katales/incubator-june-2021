
const siteUrl = 'https://jsonplaceholder.typicode.com/';

export function getPosts () {
    return fetch(siteUrl + 'posts').then(resp => resp.json());
}

export function getCmnts () {
    return fetch(siteUrl + 'comments').then(resp => resp.json());
}