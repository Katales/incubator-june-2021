
const siteUrl = 'https://jsonplaceholder.typicode.com/';

export function getUsers() {
    return fetch(siteUrl + 'users').then(resp => resp.json());
}

export function getPostsByUser(id) {
    return fetch(siteUrl + `users/${id}/posts`).then(resp => resp.json());
}

export function getCmntsByPost(id) {
    return fetch(siteUrl + `posts/${id}/comments`).then(resp => resp.json());
}

