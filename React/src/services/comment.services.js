
const url = "https://jsonplaceholder.typicode.com/comments";

// export function getComment (id) {
//     return fetch(url + `/${id}`).then(comment => comment.json() );
// }

export function getComments () {
    return fetch(url).then(comments => comments.json());
}