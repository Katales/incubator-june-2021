
const url = 'https://jsonplaceholder.typicode.com/posts';


// export function getPost(id) {
//     return fetch(url + `/${id}`).then(post => post.json());
// }

export function getPosts() {
    return fetch(url).then( posts => posts.json());
}
