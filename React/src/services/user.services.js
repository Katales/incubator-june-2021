
const url = 'https://jsonplaceholder.typicode.com/users';

// export function getUser(id) {
//     return fetch(url + `/${id}`).then(response => response.json());
// }

export function getUsers() {
    return fetch(url).then(response => response.json())
}

